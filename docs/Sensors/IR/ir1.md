# Simple Activities

## decodes IR signals and prints commands

```
  #define IR     4           // IR remote receiver pin 

// Remote key codes (adjust based on your remote)

#define KEY2         0x18  // Key:2 (Forward)
#define KEY8         0x52  // Key:8 (Backward)
#define KEY4         0x08  // Key:4 (Left)
#define KEY6         0x5A  // Key:6 (Right)
#define KEY5         0x1C  // Key:5 (Stop)
#define Repeat       0xFF  // Key hold repeat code

#include <Adafruit_NeoPixel.h>
#define PIN 7
Adafruit_NeoPixel RGB = Adafruit_NeoPixel(4, PIN, NEO_GRB + NEO_KHZ800);

unsigned long lasttime = 0;
unsigned char results;
byte flag = 0;
int Speed = 180;  // Default Speed (0-255)

char IR_decode(unsigned char *code);


void translateIR();


void setup() {
  Serial.begin(115200);
  pinMode(IR, INPUT);
  Serial.println("IR Remote Control Robot - Ready!");
}

void loop() {
  if (IR_decode(&results)) {
    flag = 1;
    lasttime = millis();  
    translateIR();
  } else {
    if (flag == 1 && (millis() - lasttime > 150)) {
      flag = 0;
      Serial.println("Stopping (no signal)");
    }
  }
}

// Decodes IR signals
char IR_decode(unsigned char *code) {
  char value = 0; // Track the values (1 or 0)

  unsigned int count = 0; // Variable used to prevent infinite loop 

  unsigned char i, index = 0, cnt = 0, data[4] = {0, 0, 0, 0}; // 4 byte IR code is stored (32 bits = 4 Bytes Using NEC Protocol)

// When a Signal is Detected IR Reciever Pulls 'LOW' value

  if (digitalRead(IR) == LOW) {
    
    // A IR Signal Always Starts with long LOW Pulse (9ms)
    count = 0;
    while (digitalRead(IR) == LOW && count++ < 200) {
      delayMicroseconds(60);
    }

    // Also IR Signal Always Have 4.5ms HIGH Pulse after 9ms Short Pulse
    count = 0;
    while (digitalRead(IR) == HIGH && count++ < 80) {
      delayMicroseconds(60);
    }

    // Decoding All The 32 Bits one by one
    for (i = 0; i < 32; i++) {
      count = 0;
      while (digitalRead(IR) == LOW && count++ < 15) { // Always The First Short LOW Pulse is Ignored
        delayMicroseconds(60);
      }
      count = 0;
      while (digitalRead(IR) == HIGH && count++ < 40) { // Check Wether Its Long HIGH Pulse or Short HIGH Pule
        delayMicroseconds(60);
      }
      if (count > 20) { // If count > 20 , Its a Long HIGH Pulse . So Putting 1 In correct position of Memory Using BITWISE Operator (<<).
        data[index] |= (1 << cnt);
      }
      if (cnt == 7) { // We Have 8 Bits In a byte. Only Moves To Next Byte when all 8 Bits are stores .
        cnt = 0;
        index++;
      } else {
        cnt++;
      }
    }

    // Validate checksum
    //  If data[0] = 0x00, then data[1] = 0xFF → 0x00 + 0xFF = 0xFF
    //  If data[2] = 0x18, then data[3] = 0xE7 → 0x18 + 0xE7 = 0xFF
    // If the sum is 0xFF (No Transmission error) Giving value = 1
    
    if (data[0] + data[1] == 0xFF && data[2] + data[3] == 0xFF) {  
      *code = data[2];
      value = 1;
    }
    // When you hold a button, the remote doesn’t resend the full command. Instead, it sends a shortcut: 0xFFFFFFFF (all bytes = 0xFF).
    // So Checking all 4 bytes are Repeating (0xFF)
    else if (data[0] == 0xFF && data[1] == 0xFF && data[2] == 0xFF && data[3] == 0xFF) {
      *code = Repeat;
      value = 1;
    }
  }
  return value;
}

// Maps IR codes to actions
void translateIR() {
  
  switch (results) {
    case KEY2: 
      
      Serial.println("Moving FORWARD");
      
      break;
    case KEY8: 
     
      Serial.println("Moving BACKWARD");
      break;
    case KEY4: 
      
      Serial.println("Turning LEFT");
      break;
    case KEY6: 
      
      Serial.println("Turning RIGHT");
      break;
    case KEY5: 
      
      Serial.println("STOPPED");
      break;
    default:
      Serial.println("Unknown IR code");  
      
  }
}

```
## Output

<ul>
<li>This code enables wireless control of the AlphaBot V2 using an infrared (IR) remote. The robot responds to button presses by printing commands to the Serial Monitor (at 115200 baud). Here's what happens when you run it.

</li>
</ul>


## Exercise 🤖

<ul>
<li>Try to code Yourself and Print the Value When the button is pressed</li>

</ul>

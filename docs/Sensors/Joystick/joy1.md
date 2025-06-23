# Simple Activities

## Printing The Current Direction Of Joystick in serial Monitor.

```
#include <Wire.h>
#define Addr 0x20  // I2C address of PCF8574

byte value;

// Joystick Direction Hex Values:
//   0xFE (11111110) - Up
//   0xFD (11111101) - Right
//   0xFB (11111011) - Left
//   0xF7 (11110111) - Down
//   0xEF (11101111) - Center press
//   0xFF (11111111) - Not Pressed

void setup() {
  Serial.begin(115200);
  Serial.println("Joystick Test - AlphaBot V2");
  Wire.begin();
}

void loop() {
  // Read joystick state
  PCF8574Write(0x1F | PCF8574Read());  // Mask to read first 5 bits
  value = PCF8574Read() | 0xE0;        // Isolate joystick bits (0-4)

  if (value != 0xFF) {  // If a direction is pressed
    switch (value) {
      case 0xFE: Serial.println("UP"); break;
      case 0xFD: Serial.println("RIGHT"); break;
      case 0xFB: Serial.println("LEFT"); break;
      case 0xF7: Serial.println("DOWN"); break;
      case 0xEF: Serial.println("CENTER"); break;
      default: Serial.println("UNKNOWN");  // Error handling
    }

    // Wait until joystick is released
    while (value != 0xFF) {
      PCF8574Write(0x1F | PCF8574Read());
      value = PCF8574Read() | 0xE0;
      delay(10);
    }
  }
}

// Write a byte to PCF8574
void PCF8574Write(byte data) {
  Wire.beginTransmission(Addr);
  Wire.write(data);
  Wire.endTransmission();
}

// Read a byte from PCF8574
byte PCF8574Read() {
  int data = -1;
  Wire.requestFrom(Addr, 1);
  if (Wire.available()) {
    data = Wire.read();
  }
  return data;
}

```
## Output

<ul>
<li>Tilt/press the joystick, and the corresponding direction will print: </li>
    <ul>
        <li>UP (if pushed forward)</li>
        <li>DOWN (if pulled backward)</li>
        <li>LEFT (if pushed left)</li>
        <li>RIGHT (if pushed right)</li>
        <li>CENTER (if pressed down)</li>
    </ul>

</ul>




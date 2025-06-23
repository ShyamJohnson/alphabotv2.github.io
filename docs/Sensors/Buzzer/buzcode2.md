# Simple Activities

## Musical tone sequence using the AlphaBot V2's buzzer, controlled via the PCF8574 I/O expander.


```
#include <Wire.h>
// PCF8574 Address
#define Addr 0x20

// Buzzer control macros
#define beep_on  PCF8574Write(0xDF & PCF8574Read())
#define beep_off PCF8574Write(0x20 | PCF8574Read())

void PCF8574Write(byte data) {
  Wire.beginTransmission(Addr);
  Wire.write(data);
  Wire.endTransmission(); 
}

byte PCF8574Read() {
  int data = -1;
  Wire.requestFrom(Addr, 1);
  if(Wire.available()) {
    data = Wire.read();
  }
  return data;
}

// Frequencies to play (in Hz)
int tones[] = {100, 200, 300, 400, 500, 400, 300, 200}; // C4 to C5 scale
int duration = 200; // Duration for each tone in milliseconds

void playTone(int frequency) {
  if (frequency == 0) {
    beep_off;
    delay(duration);
    return;
  }
  
  unsigned long halfPeriod = 500000L / frequency; // in microseconds
  unsigned long startTime = millis();
  
  while (millis() - startTime < duration) {
    beep_on;
    delayMicroseconds(halfPeriod);
    beep_off;
    delayMicroseconds(halfPeriod);
  }
}

void setup() {
  Wire.begin();
}

void loop() {
  // Play ascending tones
  for (int i = 0; i < sizeof(tones)/sizeof(tones[0]); i++) {
    playTone(tones[i]);
  }
  
  // Play descending tones
  for (int i = sizeof(tones)/sizeof(tones[0]) - 1; i >= 0; i--) {
    playTone(tones[i]);
  }
  
  // Add a pause between loops
  playTone(0); // This will just delay
}

```
## Output

<ul>
<li>Plays tones in this order: 100Hz → 200Hz → 300Hz → 400Hz → 500Hz . Each tone lasts 200 milliseconds (0.2 seconds) . Produces a rising pitch effect. </li>
<li>Plays tones in reverse: 500Hz → 400Hz → 300Hz → 200Hz → 100Hz . Each tone still lasts 200ms . Produces a falling pitch effect (like a musical scale going down)</li>
</ul>



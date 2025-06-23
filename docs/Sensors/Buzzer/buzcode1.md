# Simple Activities

## The buzzer is turned ON/OFF by manipulating a specific bit in the PCF8574's output register.


```
#include <Wire.h>
#define Addr  0x20
byte value;

#define beep_on  PCF8574Write(0xDF & PCF8574Read()) // Turning On the Beep Sound when Using Joystick
#define beep_off PCF8574Write(0x20 | PCF8574Read()) // Turning off Beep sound when Joystick Not In use
void PCF8574Write(byte data) // Send Data Bytes 
{
  Wire.beginTransmission(Addr);
  Wire.write(data);
  Wire.endTransmission(); 
}

byte PCF8574Read() // Requesting 1 Byte From PCF8574
{
  int data = -1;
  Wire.requestFrom(Addr, 1);
  if(Wire.available()) {
    data = Wire.read();
  }
  return data;
}

void setup() {
  Serial.begin(11500);
  Wire.begin();

}

void loop() {
  beep_on;
  delay(1000);
  beep_off;
  delay(1000);

}

```
## Output

<ul>
<li>The buzzer will produce an audible beep for 1 second, then stay silent for 1 second, repeating indefinitely. </li>
</ul>


## Exercise 🤖

<ul>
<li>Try to make a Simple Melody Using Buzzer in the Alphabot</li>

</ul>
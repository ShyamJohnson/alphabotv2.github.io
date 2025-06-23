# Simple Activities

## Pattern 1: Sequential LED Activation (Forward & Turn Off)


```
#include <Adafruit_NeoPixel.h>
#define PIN 7


Adafruit_NeoPixel RGB = Adafruit_NeoPixel(4, PIN, NEO_GRB + NEO_KHZ800);
// Adafruit_NeoPixel RGB = Adafruit_NeoPixel(Number Of LEDs, PIN, Colour Order (GRB) + Communication Frequency (800 KHz));


void setup() {
  RGB.begin();
}

void Pattern1(){
  RGB.setPixelColor(0,RGB.Color(50,0,0)); // Set Color of rgb led (RGB no,RGB.Color(R,G,B))
  RGB.show();// RGB Light Blows
  delay(250);
  RGB.setPixelColor(1,RGB.Color(0,50,0));
  RGB.show();
  delay(250);
  RGB.setPixelColor(2,RGB.Color(0,0,50));
  RGB.show();
  delay(250);
  RGB.setPixelColor(3,RGB.Color(50,50,50));
  RGB.show();
  delay(250);
  RGB.setPixelColor(0,RGB.Color(0,0,0));// Turn off the lights
  RGB.show();
  delay(250);
  RGB.setPixelColor(1,RGB.Color(0,0,0));
  RGB.show();
  delay(250);
  RGB.setPixelColor(2,RGB.Color(0,0,0));
  RGB.show();
  delay(250);
  RGB.setPixelColor(3,RGB.Color(0,0,0));
  RGB.show();
}

void loop() {

  Pattern1();
  
  delay(500);
  

}
  



```
## Output

<ul>
<li>A "forward march" of colors (Red → Green → Blue → White), followed by LEDs turning off in the same order. </li>
</ul>


## Exercise 🤖

<ul>
<li>Try to make Different patterns in RGB LEDs (say turning on one after another and turning off similarly.)</li>

</ul>
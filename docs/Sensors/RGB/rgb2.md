# Simple Activities

## Pattern 2: Paired LED Activation (Alternate Pairs)

```
#include <Adafruit_NeoPixel.h>
#define PIN 7


Adafruit_NeoPixel RGB = Adafruit_NeoPixel(4, PIN, NEO_GRB + NEO_KHZ800);
// Adafruit_NeoPixel RGB = Adafruit_NeoPixel(Number Of LEDs, PIN, Colour Order (GRB) + Communication Frequency (800 KHz));


void setup() {
  RGB.begin();
}

void Pattern2(){
  RGB.setPixelColor(1,RGB.Color(50,0,0)); // Set Color of rgb led (RGB no,RGB.Color(R,G,B))
  RGB.show();// RGB Light Blows
  RGB.setPixelColor(2,RGB.Color(0,50,0));
  RGB.show();
  delay(250);
  RGB.setPixelColor(0,RGB.Color(0,0,50));
  RGB.show();
  RGB.setPixelColor(3,RGB.Color(50,50,50));
  RGB.show();
  delay(250);
  RGB.setPixelColor(1,RGB.Color(0,0,0)); // Set Color of rgb led (RGB no,RGB.Color(R,G,B))
  RGB.show();// RGB Light Blows
  RGB.setPixelColor(2,RGB.Color(0,0,0));
  RGB.show();
  delay(250);
  RGB.setPixelColor(0,RGB.Color(0,0,0));
  RGB.show();
  RGB.setPixelColor(3,RGB.Color(0,0,0));
  RGB.show();
  delay(250);
}

void loop() {

  Pattern2();
  delay(500);
  

}
  



```
## Output

<ul>
<li>Two pairs of LEDs light up in an alternating fashion (1+2 → 0+3). </li>
</ul>


## Exercise 🤖

<ul>
<li>Try to make Different patterns in RGB LEDs (say turning on one after another and turning off similarly.</li>

</ul>
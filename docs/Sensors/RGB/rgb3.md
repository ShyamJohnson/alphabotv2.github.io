# Simple Activities


<ul>
<li>To turn the RGB LED (4) on and off </li>
</ul>

## Pattern 3: Full Forward & Reverse Sequence


```
#include <Adafruit_NeoPixel.h>
#define PIN 7


Adafruit_NeoPixel RGB = Adafruit_NeoPixel(4, PIN, NEO_GRB + NEO_KHZ800);
// Adafruit_NeoPixel RGB = Adafruit_NeoPixel(Number Of LEDs, PIN, Colour Order (GRB) + Communication Frequency (800 KHz));


void setup() {
  RGB.begin();
}

void Pattern3(){
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
  delay(250);
  RGB.setPixelColor(3,RGB.Color(50,0,0)); // Set Color of rgb led (RGB no,RGB.Color(R,G,B))
  RGB.show();// RGB Light Blows
  delay(250);
  RGB.setPixelColor(2,RGB.Color(0,50,0));
  RGB.show();
  delay(250);
  RGB.setPixelColor(1,RGB.Color(0,0,50));
  RGB.show();
  delay(250);
  RGB.setPixelColor(0,RGB.Color(50,50,50));
  RGB.show();
  delay(250);
  RGB.setPixelColor(3,RGB.Color(0,0,0));// Turn off the lights
  RGB.show();
  delay(250);
  RGB.setPixelColor(2,RGB.Color(0,0,0));
  RGB.show();
  delay(250);
  RGB.setPixelColor(1,RGB.Color(0,0,0));
  RGB.show();
  delay(250);
  RGB.setPixelColor(0,RGB.Color(0,0,0));
  RGB.show();


}

void loop() {

  Pattern3();
  delay(500);
  

}
  



```
## Output

<ul>
<li>A "back-and-forth" animation: 0→1→2→3 (ON) → 0→1→2→3 (OFF) → 3→2→1→0 (ON) → 3→2→1→0 (OFF). </li>
<li>Each step has a 250ms delay, creating a rhythmic wave effect.</li>
</ul>


## Exercise 🤖

> :bulb: **Tip:** You can also create your different and unique patterns.
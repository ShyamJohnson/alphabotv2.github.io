# Simple Activities


<ul>
<li>To turn the RGB LED (4) on and off</li>
</ul>

## Turning RGB LEDs On and Off 


```
#include <Adafruit_NeoPixel.h>
#define PIN 7


Adafruit_NeoPixel RGB = Adafruit_NeoPixel(4, PIN, NEO_GRB + NEO_KHZ800);
// Adafruit_NeoPixel RGB = Adafruit_NeoPixel(Number Of LEDs, PIN, Colour Order (GRB) + Communication Frequency (800 KHz));


void setup() {
  RGB.begin();
}

void LightsOn(){
  RGB.setPixelColor(0,RGB.Color(50,0,0)); // Set Color of rgb led (RGB no,RGB.Color(R,G,B))
  RGB.show();// RGB Light Blows
  
  RGB.setPixelColor(1,RGB.Color(0,50,0));
  RGB.show();
  
  RGB.setPixelColor(2,RGB.Color(0,0,50));
  RGB.show();
  
  RGB.setPixelColor(3,RGB.Color(50,50,50));
  RGB.show();
  
}

void LightsOff(){
  RGB.setPixelColor(0,RGB.Color(0,0,0));// Turn off the lights
  RGB.show();
  
  RGB.setPixelColor(1,RGB.Color(0,0,0));
  RGB.show();
  
  RGB.setPixelColor(2,RGB.Color(0,0,0));
  RGB.show();
  
  RGB.setPixelColor(3,RGB.Color(0,0,0));
  RGB.show();
  

}

void loop() {

  LightsOn();
  delay(1000);
  LightsOff();
  delay(1000);
  


}
```
## Output

<ul>
<li>RGB LEDs are turned On for 1 sec and turned Off for 1 sec , again continue the same. </li>
</ul>


## Exercise 🤖

<ul>
<li>Try to make Different patterns in RGB LEDs (say turning on one after another and turning off similarly.</li>

</ul>
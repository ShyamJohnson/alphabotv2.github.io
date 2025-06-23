# Simple Activities

## Printing a Triangle on the 0.96-inch OLED display (SSD1306, 128x64 pixels) using the AlphaBot2.

```
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define OLED_RESET 9
Adafruit_SSD1306 display(OLED_RESET);

void setup() {
  // Initialize OLED with I2C address 0x3C
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  
  // Display introductory text
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.setCursor(0,0);
  display.println("AlphaBot V2");
  display.println("Shapes Demo");
  display.display();
  delay(500);
}

void loop() {

  drawTriangle();
  delay(2000);}

void drawTriangle() {
  display.clearDisplay();
  
  // Draw triangle (x0,y0, x1,y1, x2,y2, color)
  display.drawTriangle(40, 20, 65, 10, 90, 20, WHITE);
  
  // Draw filled triangle
  display.fillTriangle(40, 20, 65, 10, 90, 20, WHITE);
  
  display.display();
}

```
## Output

<ul>
<li>A Small Triangle is displayed in OLED Display.</li>
</ul>


## Exercise 🤖

<ul>
<li>Try to Print a Simple Stickman in the OLED Display</li>

</ul>
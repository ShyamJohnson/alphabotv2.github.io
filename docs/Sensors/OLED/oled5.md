# Simple Activities

## Printing a Simple Stickman on the 0.96-inch OLED display (SSD1306, 128x64 pixels) using the AlphaBot2.

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
  // Cycle through different shapes
  Human();
  delay(2000);}

void Human(){
  display.clearDisplay();
  display.setTextSize(2);  
  // Draw circle (x, y, radius, color)
  display.drawCircle(60, 8, 4, WHITE);
  
//   Draw filled circle
  display.fillCircle(60, 8, 4, WHITE);
  display.setCursor(55.5,7);
  display.println("|");
  display.setCursor(53.5,9);
  display.println("/");
  display.setCursor(57.5,9);
  display.println("\\");
  display.setCursor(53,14);
  display.println("/");
  display.setCursor(57.5,14);
  display.println("\\");
  
  display.display();
  
}

```
## Output

<ul>
<li>A Simple Stickman is displayed in OLED Display.</li>
</ul>



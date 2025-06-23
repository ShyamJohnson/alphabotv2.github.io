# Simple Activities

## Printing a circle on the 0.96-inch OLED display (SSD1306, 128x64 pixels) using the AlphaBot2.

```
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#define OLED_RESET 9
Adafruit_SSD1306 display(OLED_RESET);  // For I2C communication

void setup() {
  // Initialize OLED with I2C address 0x3C
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  
  // Clear the display buffer
  display.clearDisplay();
  
  // Basic text display
  display.setTextSize(1.4);      // Text Size (Pixels)
  display.setTextColor(WHITE); // Draw white text
  display.setCursor(0,0);      // setCursor(Left - Right,Top - Bottom)
  display.println("Alphabot V2");
  display.println("Ready!");
  display.display(); // Displays The Text 
  delay(2000);
}

void loop() {
  display.clearDisplay();
  display.drawRect(0,0,120,30,WHITE); // drawRect (X-pos,Y-pos,Width,Height)
  display.fillRect(0,0,120,30,WHITE); // Same But Fills The Rectangle
  display.display();
  delay(5000);

}

```
## Output

<ul>
<li>A Small Rectangle is displayed in OLED Display.</li>
</ul>


## Exercise 🤖

<ul>
<li>Try to Print a Triangle and a Simple Stickman in the OLED Display</li>

</ul>
# RGB LEDs 

## Overview

<p>The AlphaBot V2 is a popular robotics development platform that includes RGB (Red-Green-Blue) LEDs for visual feedback, status indication, and debugging purposes. These LEDs can produce a wide range of colors by mixing different intensities of red, green, and blue light.</p>

##


<center>
<img src="/img/rgb.jpg" width="500" height="700">
</center>

## Key Features

<ul>
<li>Integrated RGB LEDs: Typically includes one or more RGB LEDs.</li>
<li>PWM (Pulse Width Modulation) Control: Allows precise color mixing by varying brightness levels.</li>
<li>Programmable: Can be controlled via a microcontroller (e.g., Arduino, Raspberry Pi).</li>
<li>Common Anode or Cathode Configuration: Depending on the model, the RGB LED may share a common power or ground connection.</li>
</ul>


## Working

<ul>
    <li><strong>Color Control</strong>
        <ul>
            <li>An RGB LED contains three separate LEDs (Red, Green, Blue) in a single package.</li>
            <li>By adjusting the brightness of each LED (using PWM), various colors can be produced.</li>
            <li>Example
                <ol>
                    <li>Red (100%) + Green (100%) + Blue (0%) = Yellow</li>
                    <li>Red (100%) + Green (0%) + Blue (100%) = Magenta</li>
                </ol>
            </li>
        </ul>
    </li>
    <li><strong>Control Method</strong>
        <ul>
            <li>The AlphaBot V2's RGB LED is usually connected to PWM-capable GPIO pins on the microcontroller.</li>
            <li>A current-limiting resistor is used for each color channel to prevent damage.</li>
        </ul>
    </li>
    <li><strong>Microcontroller Interfacing</strong>
        <ul>
            <li>If using Arduino, the analogWrite() function controls brightness (0-255).</li>
        </ul>
    </li>
    
</ul>

## Colors (Using PWM)

| Colors       | RED          | GREEN         | BLUE          |
| ------------ | -----------  |-------------- |---------------|        
| Red          | 255          |0              |0              |
| Green        | 0            |255            |0              |
| Blue         | 0            |0              |255            |
| Yellow       | 255          |255            |0              |
| Magenta      | 255          |0              |255            |
| Cyan         | 0            |255            |255            |
| White        | 255          |255            |255            |
| Blank        | 0            |0              |0              |

##

>:memo: **Note:** Brightness of the RGB LED can be increased or decreased by changing the value of PWM (0 - 255).
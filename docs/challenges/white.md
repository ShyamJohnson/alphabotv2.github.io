# Task For White Line Sensors, Motor wheels, OLED, RGB LEDs

## Activities Followed

<ul>
<li>Fetch the Readings from White line Sensor</li>
<li>Motion Control </li>
<li>Display Elements in OLED display</li>
<li>Change Color In RGB LEDs </li>
</ul>

## Task 

### Edge Detection Alphabot
###


## Functions To Do

<ol>
    <li><strong>Sensor & Movement Logic</strong>
        <ul>
            <li>Reads 5 IR sensors to detect a white line on a dark surface (lower values = brighter surface).   </li>
            <li>If both outer sensors (0 & 4) see the line (lowest values): Moves straight (Forward()).</li>
            <li>If the right sensor (4) detects the line more than the left (0): Turns left (Left()) to recenter.</li>
            <li>If the left sensor (0) detects the line more than the right (4): Turns right (Right()) to recenter.</li>
            <li>Else, stops (Stop()).</li>
        </ul>
    </li>
    <li><strong>Visual Feedback</strong>
        <ul>
            <li>OLED Display shows robot status: | | → Straight path, *** on left/right → Turning direction.</li>
        </ul>
    </li>
    <li><strong>Motor Control</strong>
        <ul>
            <li>Differential steering (slower inner wheel for smooth turns).</li>
        </ul>
    </li>
    
    
</ol>



## Solution 

<a href="https://github.com/deepaavudiappan/AlphabotV2/tree/00155f95efc2b72ecd84d1d14afa7b96079c1fd0/Alphabot%20V2%20-%20Ar/Activities/whitelinesensor/whitelinesensor" target="_blank">White_line_tracking</a>


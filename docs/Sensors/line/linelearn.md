# White Line Sensors

## Overview

<p>White Line Sensors in AlphaBot V2 detect contrasting surfaces (typically a white line on a dark surface or vice versa) to enable line-following capabilities.
</p>

##

<center>
<img src="/img/white.jpg.jpeg" width="500" height="700">
</center>

## Key Feature

<ul>    
    <li><strong>Sensor Arrangement</strong>
        <ul>
            <li>Typically 5 sensors in a line across the front</li>
        </ul>
    </li>
    <li><strong>Line Following Logic</strong>
        <ul>
            <li>Stay centered on a line</li>
            <li>Detect turns or intersections</li>
            <li>Correct its position if drifting off course</li>
        </ul>
    </li>
    <li><strong>Typical Values</strong>
        <ul>
            <li>lesser than 800 for white surfaces (Low reflection)</li>
            <li>Greater than 800 for white surfaces (high reflection)</li>
        </ul>
    </li>
    
    
</ul>


## Working

<ul>
    <li><strong>Each sensor contains an IR LED and phototransistor
</strong>
    </li>
    <li><strong>The IR LED emits infrared light</strong>
    </li>
    <li><strong>The phototransistor detects reflected light
</strong>  
    </li>    
    <li><strong>On dark surfaces: More light is absorbed → less reflection → Lesser sensor value</strong>    
    </li>    
    <li><strong>On light surfaces: More light is reflected → Higher sensor value</strong>
    </li>    
    <li><strong>Hardware Setup</strong>
        <ul>
            <li>Clock (pin 13) - Synchronizes data transfer</li>
            <li>Addr (pin 12) - Address selection</li>
            <li>DO (pin 11) - Data output (with internal pull-up)</li>
            <li>CS (pin 10) - Chip select (active low)</li>
        </ul>
    </li>
</ul>
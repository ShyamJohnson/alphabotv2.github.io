# IR Receiver and Remote Control in AlphaBot V2

## Overview

<p>The AlphaBot V2 robot kit includes an infrared (IR) remote control system that allows you to wirelessly command your robot.This IR system provides a simple, low-cost wireless control method for your AlphaBot V2 robot. The decoding happens in software, allowing flexibility to work with different remote controls by adjusting the button codes.
</p>

## 

<center>
<img src="/img/IRn.jpg" width="300" height="300">
<img src="/img/remote.jpg" width="300" height="300">
</center>



## Key Feature

<ul>
    <li><strong>IR Receiver Module</strong>
        <ul>
            <li>Typically connected to pin 4 on the AlphaBot V2</li>
            <li>A small 3-pin component (VCC, GND, Signal)</li>
            <li>Detects modulated infrared signals at 38kHz</li>
            <li>Outputs a digital signal to the microcontroller</li>
        </ul>
    </li>
    <li><strong>IR Remote Control</strong>
        <ul>
            <li>Uses infrared LEDs to transmit commands</li>
            <li>Each button sends a unique code</li>
            <li>Works on the NEC protocol (common standard)</li>
        </ul>
    </li>
    
</ul>


## Working

<ul>
    <li><strong>Signal Transmission (When Button Is Pressed)</strong>
        <ul>
            <li>The remote's IR LED emits a modulated infrared signal ,the signal contains a specific code for that button</li>
            <li>The signal is modulated at 38kHz to avoid interference from ambient light</li>
        </ul>
    </li>
    <li><strong>Signal Reception (The IR receiver on the AlphaBot)</strong>
        <ul>
            <li>Detects the 38kHz modulated signal, demodulates it to extract the digital code</li>
            <li>Sends the decoded signal to the Arduino</li>
        </ul>
    </li>
    <li><strong>Signal Decoding (NEC Protocol)</strong>
        <ul>
            <li>32-bit transmission (4 bytes)</li>
            <li>Starts with a 9ms leading pulse burst</li>
            <li>Followed by a 4.5ms space</li>
            <li>Then the address and command bytes</li>
            <li>Uses pulse-distance encoding</li>
        </ul>     
    </li>    
    <li><strong>Remote Control Functions</strong>
        <ul>
            <li>KEY2 (0x18): Move Forward</li>
            <li>KEY8 (0x52): Move Backward</li>
            <li>KEY4 (0x08): Turn Left</li>
            <li>KEY6 (0x5A): Turn Right</li>
            <li>KEY5 (0x1C): Stop</li>
        </ul>     
    </li>    
    <li><strong>Practical Considerations</strong>
        <ul>
            <li>Range: Typically works within 5-10 meters depending on lighting conditions</li>
            <li>Obstructions: Requires line-of-sight between remote and receiver</li>
            <li>Button Codes: You may need to adjust the hex codes if using a different remote</li>
            <li>Interference: Sunlight and other IR sources can cause interference</li>
        </ul>     
    </li>    
</ul>
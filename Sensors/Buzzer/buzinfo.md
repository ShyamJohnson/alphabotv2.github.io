# Buzzer

## Overview

<p>The AlphaBot V2 includes a passive buzzer, which is a simple audio output device that can generate tones, beeps, and melodies when controlled by a microcontroller (like Arduino or Raspberry Pi).

</p>

<center>
<img src="/img/zumbador.png" width="500" height="700">
</center>

## Key Feature

<ul>
    <li><strong>Passive Buzzer (Requires External Signal)</strong>
        <ul>
            <li>Unlike an active buzzer (which has an internal oscillator and produces sound with just a DC voltage), a passive buzzer needs a PWM (Pulse Width Modulation) signal to generate different tones.</li>
            <li>This allows for variable frequency control, enabling musical notes and custom sound effects.
            Connected to a Digital/PWM</li>
        </ul>
    </li>
    <li><strong>Connected to a Digital/PWM Pin</strong>
        <ul>
            <li>Typically wired to a PWM-capable pin.</li>
        </ul>
    </li>
    <li><strong>Common Uses in Robotics</strong>
        <ul>
            <li>Alerts & Notifications (e.g., obstacle detection, low battery).</li>
            <li>Simple Melodies (e.g., startup sound, error beeps).</li>
            <li>User Feedback (e.g., button press confirmation).</li>
        </ul>
    </li>
    
</ul>


## Working

<ul>
    <li><strong>PCF8574 I/O Expander</strong>
        <ul>
            <li>The PCF8574 is an 8-bit I/O expander that communicates via I²C (Arduino’s Wire library).</li>
        </ul>
    </li>
    <li><strong>Buzzer Control Logic</strong>
        <ul>
            <li>The buzzer is controlled by bit manipulation of the PCF8574's output register.</li>
            <li>beep_on → Sets a specific bit (0xDF mask) to activate the buzzer.</li>
            <li>beep_off → Clears the bit (0x20 mask) to deactivate the buzzer.</li>
        </ul>
    </li>
    <li><strong>PCF8574Write(byte data)</strong>
        <ul>
            <li>Sends a byte (data) to the PCF8574 to update its output pins.</li>
        </ul>     
    </li>
    <li><strong>PCF8574Read()</strong>
        <ul>
            <li>Reads the current state of the PCF8574's input/output pins. Returns a byte representing the pin states.</li>
        </ul>     
    </li>
    <li><strong>beep_on = PCF8574Write(0xDF & PCF8574Read())</strong>
        <ul>
            <li>Masks the current state with 0xDF (binary 11011111), clearing the buzzer-control bit.</li>
        </ul>     
    </li>
    <li><strong>beep_off = PCF8574Write(0x20 | PCF8574Read())</strong>
        <ul>
            <li>Masks the current state with 0x20 (binary 00100000), setting the buzzer-control bit.</li>
        </ul>     
    </li>
    
</ul>


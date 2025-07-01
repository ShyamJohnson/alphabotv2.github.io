import{_ as n,c as a,o as p,ae as e}from"./chunks/framework.BtEkjhVd.js";const h=JSON.parse('{"title":"Simple Activities","description":"","frontmatter":{},"headers":[],"relativePath":"Sensors/Joystick/joy1.md","filePath":"Sensors/Joystick/joy1.md"}'),i={name:"Sensors/Joystick/joy1.md"};function l(t,s,r,c,o,d){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="simple-activities" tabindex="-1">Simple Activities <a class="header-anchor" href="#simple-activities" aria-label="Permalink to &quot;Simple Activities&quot;">​</a></h1><h2 id="printing-the-current-direction-of-joystick-in-serial-monitor" tabindex="-1">Printing The Current Direction Of Joystick in serial Monitor. <a class="header-anchor" href="#printing-the-current-direction-of-joystick-in-serial-monitor" aria-label="Permalink to &quot;Printing The Current Direction Of Joystick in serial Monitor.&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;Wire.h&gt;</span></span>
<span class="line"><span>#define Addr 0x20</span><span>  // I2C address of PCF8574</span></span>
<span class="line"><span></span></span>
<span class="line"><span>byte value;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Joystick Direction Hex Values:</span></span>
<span class="line"><span>//   0xFE (11111110) - Up</span></span>
<span class="line"><span>//   0xFD (11111101) - Right</span></span>
<span class="line"><span>//   0xFB (11111011) - Left</span></span>
<span class="line"><span>//   0xF7 (11110111) - Down</span></span>
<span class="line"><span>//   0xEF (11101111) - Center press</span></span>
<span class="line"><span>//   0xFF (11111111) - Not Pressed</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  Serial.begin(115200);</span></span>
<span class="line"><span>  Serial.println(&quot;Joystick Test - AlphaBot V2&quot;);</span></span>
<span class="line"><span>  Wire.begin();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  // Read joystick state</span></span>
<span class="line"><span>  PCF8574Write(0x1F | PCF8574Read());  // Mask to read first 5 bits</span></span>
<span class="line"><span>  value = PCF8574Read() | 0xE0;        // Isolate joystick bits (0-4)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (value != 0xFF) {  // If a direction is pressed</span></span>
<span class="line"><span>    switch (value) {</span></span>
<span class="line"><span>      case 0xFE: Serial.println(&quot;UP&quot;); break;</span></span>
<span class="line"><span>      case 0xFD: Serial.println(&quot;RIGHT&quot;); break;</span></span>
<span class="line"><span>      case 0xFB: Serial.println(&quot;LEFT&quot;); break;</span></span>
<span class="line"><span>      case 0xF7: Serial.println(&quot;DOWN&quot;); break;</span></span>
<span class="line"><span>      case 0xEF: Serial.println(&quot;CENTER&quot;); break;</span></span>
<span class="line"><span>      default: Serial.println(&quot;UNKNOWN&quot;);  // Error handling</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Wait until joystick is released</span></span>
<span class="line"><span>    while (value != 0xFF) {</span></span>
<span class="line"><span>      PCF8574Write(0x1F | PCF8574Read());</span></span>
<span class="line"><span>      value = PCF8574Read() | 0xE0;</span></span>
<span class="line"><span>      delay(10);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Write a byte to PCF8574</span></span>
<span class="line"><span>void PCF8574Write(byte data) {</span></span>
<span class="line"><span>  Wire.beginTransmission(Addr);</span></span>
<span class="line"><span>  Wire.write(data);</span></span>
<span class="line"><span>  Wire.endTransmission();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Read a byte from PCF8574</span></span>
<span class="line"><span>byte PCF8574Read() {</span></span>
<span class="line"><span>  int data = -1;</span></span>
<span class="line"><span>  Wire.requestFrom(Addr, 1);</span></span>
<span class="line"><span>  if (Wire.available()) {</span></span>
<span class="line"><span>    data = Wire.read();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return data;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2><ul><li>Tilt/press the joystick, and the corresponding direction will print: </li><ul><li>UP (if pushed forward)</li><li>DOWN (if pulled backward)</li><li>LEFT (if pushed left)</li><li>RIGHT (if pushed right)</li><li>CENTER (if pressed down)</li></ul></ul>`,5)]))}const F=n(i,[["render",l]]);export{h as __pageData,F as default};

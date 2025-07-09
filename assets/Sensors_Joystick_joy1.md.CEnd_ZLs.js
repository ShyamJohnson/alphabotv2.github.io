import{_ as a}from"./chunks/videosh.BUczNqhx.js";import{_ as n,c as p,o as e,ae as i}from"./chunks/framework.Dq8kYo8j.js";const m=JSON.parse('{"title":"Simple Activities - Joystick direction","description":"","frontmatter":{},"headers":[],"relativePath":"Sensors/Joystick/joy1.md","filePath":"Sensors/Joystick/joy1.md"}'),l={name:"Sensors/Joystick/joy1.md"};function t(o,s,r,c,d,u){return e(),p("div",null,s[0]||(s[0]=[i(`<h1 id="simple-activities-joystick-direction" tabindex="-1">Simple Activities - Joystick direction <a class="header-anchor" href="#simple-activities-joystick-direction" aria-label="Permalink to &quot;Simple Activities - Joystick direction&quot;">​</a></h1><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-label="Permalink to &quot;Problem Statement&quot;">​</a></h2><h4>Write a code for Alphabot ,So that when the Joystick is pressed, the direction has to be print in the Serial Monitor : </h4><ul><li>UP (if pushed forward)</li><li>DOWN (if pulled backward)</li><li>LEFT (if pushed left)</li><li>RIGHT (if pushed right)</li><li>CENTER (if pressed down)</li></ul><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;Wire.h&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><div class="video-container"><video controls width="75%"><source src="`+a+'" type="video/mp4"> Your browser doesn&#39;t support HTML5 video. </video></div>',9)]))}const F=n(l,[["render",t]]);export{m as __pageData,F as default};

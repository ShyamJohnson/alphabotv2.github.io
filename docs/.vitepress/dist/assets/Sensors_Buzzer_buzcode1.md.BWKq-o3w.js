import{_ as s,c as a,o as e,ae as p}from"./chunks/framework.BtEkjhVd.js";const h=JSON.parse('{"title":"Simple Activities","description":"","frontmatter":{},"headers":[],"relativePath":"Sensors/Buzzer/buzcode1.md","filePath":"Sensors/Buzzer/buzcode1.md"}'),i={name:"Sensors/Buzzer/buzcode1.md"};function l(t,n,r,c,o,d){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="simple-activities" tabindex="-1">Simple Activities <a class="header-anchor" href="#simple-activities" aria-label="Permalink to &quot;Simple Activities&quot;">​</a></h1><h2 id="the-buzzer-is-turned-on-off-by-manipulating-a-specific-bit-in-the-pcf8574-s-output-register" tabindex="-1">The buzzer is turned ON/OFF by manipulating a specific bit in the PCF8574&#39;s output register. <a class="header-anchor" href="#the-buzzer-is-turned-on-off-by-manipulating-a-specific-bit-in-the-pcf8574-s-output-register" aria-label="Permalink to &quot;The buzzer is turned ON/OFF by manipulating a specific bit in the PCF8574&#39;s output register.&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;Wire.h&gt;</span></span>
<span class="line"><span>#define Addr  0x20</span></span>
<span class="line"><span>byte value;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define beep_on  PCF8574Write(0xDF &amp; PCF8574Read())</span><span> // Turning On the Beep Sound when Using Joystick</span></span>
<span class="line"><span>#define beep_off PCF8574Write(0x20 | PCF8574Read())</span><span> // Turning off Beep sound when Joystick Not In use</span></span>
<span class="line"><span>void PCF8574Write(byte data) // Send Data Bytes </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  Wire.beginTransmission(Addr);</span></span>
<span class="line"><span>  Wire.write(data);</span></span>
<span class="line"><span>  Wire.endTransmission(); </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>byte PCF8574Read() // Requesting 1 Byte From PCF8574</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int data = -1;</span></span>
<span class="line"><span>  Wire.requestFrom(Addr, 1);</span></span>
<span class="line"><span>  if(Wire.available()) {</span></span>
<span class="line"><span>    data = Wire.read();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return data;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  Serial.begin(11500);</span></span>
<span class="line"><span>  Wire.begin();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  beep_on;</span></span>
<span class="line"><span>  delay(1000);</span></span>
<span class="line"><span>  beep_off;</span></span>
<span class="line"><span>  delay(1000);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2><ul><li>The buzzer will produce an audible beep for 1 second, then stay silent for 1 second, repeating indefinitely. </li></ul><h2 id="exercise-🤖" tabindex="-1">Exercise 🤖 <a class="header-anchor" href="#exercise-🤖" aria-label="Permalink to &quot;Exercise 🤖&quot;">​</a></h2><ul><li>Try to make a Simple Melody Using Buzzer in the Alphabot</li></ul>`,7)]))}const b=s(i,[["render",l]]);export{h as __pageData,b as default};

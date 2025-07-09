import{_ as n}from"./chunks/videosh.BUczNqhx.js";import{_ as s,c as e,o as p,ae as i}from"./chunks/framework.Dq8kYo8j.js";const m=JSON.parse('{"title":"Simple Activities - Beep Sound","description":"","frontmatter":{},"headers":[],"relativePath":"Sensors/Buzzer/buzcode1.md","filePath":"Sensors/Buzzer/buzcode1.md"}'),l={name:"Sensors/Buzzer/buzcode1.md"};function t(o,a,r,c,d,u){return p(),e("div",null,a[0]||(a[0]=[i(`<h1 id="simple-activities-beep-sound" tabindex="-1">Simple Activities - Beep Sound <a class="header-anchor" href="#simple-activities-beep-sound" aria-label="Permalink to &quot;Simple Activities - Beep Sound&quot;">​</a></h1><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-label="Permalink to &quot;Problem Statement&quot;">​</a></h2><ul><li>Write a code to Alphabot where The buzzer has to produce an audible beep for 1 second, then stay silent for 1 second, repeating indefinitely.</li></ul><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;Wire.h&gt;</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><div class="video-container"><video controls width="75%"><source src="`+n+'" type="video/mp4"> Your browser doesn&#39;t support HTML5 video. </video></div><h2 id="exercise-🤖" tabindex="-1">Exercise 🤖 <a class="header-anchor" href="#exercise-🤖" aria-label="Permalink to &quot;Exercise 🤖&quot;">​</a></h2><ul><li>Try to make a Simple Melody Using Buzzer in the Alphabot</li></ul>',10)]))}const f=s(l,[["render",t]]);export{m as __pageData,f as default};

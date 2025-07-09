import{_ as n,c as a,o as p,ae as e}from"./chunks/framework.Dq8kYo8j.js";const h=JSON.parse('{"title":"Simple Activities - Musical Tones","description":"","frontmatter":{},"headers":[],"relativePath":"Sensors/Buzzer/buzcode2.md","filePath":"Sensors/Buzzer/buzcode2.md"}'),l={name:"Sensors/Buzzer/buzcode2.md"};function i(t,s,c,o,r,d){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="simple-activities-musical-tones" tabindex="-1">Simple Activities - Musical Tones <a class="header-anchor" href="#simple-activities-musical-tones" aria-label="Permalink to &quot;Simple Activities - Musical Tones&quot;">​</a></h1><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-label="Permalink to &quot;Problem Statement&quot;">​</a></h2><h4>Write a code to Alphabot where The buzzer has to produce : </h4><ul><li> Tones in this order: 100Hz → 200Hz → 300Hz → 400Hz → 500Hz . Each tone lasts 200 milliseconds (0.2 seconds) . Produces a rising pitch effect. </li><li>And Produce tones in reverse: 500Hz → 400Hz → 300Hz → 200Hz → 100Hz . Each tone still lasts 200ms . Produces a falling pitch effect (like a musical scale going down)</li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;Wire.h&gt;</span></span>
<span class="line"><span>// PCF8574 Address</span></span>
<span class="line"><span>#define Addr 0x20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Buzzer control macros</span></span>
<span class="line"><span>#define beep_on  PCF8574Write(0xDF &amp; PCF8574Read())</span></span>
<span class="line"><span>#define beep_off PCF8574Write(0x20 | PCF8574Read())</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void PCF8574Write(byte data) {</span></span>
<span class="line"><span>  Wire.beginTransmission(Addr);</span></span>
<span class="line"><span>  Wire.write(data);</span></span>
<span class="line"><span>  Wire.endTransmission(); </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>byte PCF8574Read() {</span></span>
<span class="line"><span>  int data = -1;</span></span>
<span class="line"><span>  Wire.requestFrom(Addr, 1);</span></span>
<span class="line"><span>  if(Wire.available()) {</span></span>
<span class="line"><span>    data = Wire.read();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return data;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Frequencies to play (in Hz)</span></span>
<span class="line"><span>int tones[] = {100, 200, 300, 400, 500, 400, 300, 200}; // C4 to C5 scale</span></span>
<span class="line"><span>int duration = 200; // Duration for each tone in milliseconds</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void playTone(int frequency) {</span></span>
<span class="line"><span>  if (frequency == 0) {</span></span>
<span class="line"><span>    beep_off;</span></span>
<span class="line"><span>    delay(duration);</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  unsigned long halfPeriod = 500000L / frequency; // in microseconds</span></span>
<span class="line"><span>  unsigned long startTime = millis();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  while (millis() - startTime &lt; duration) {</span></span>
<span class="line"><span>    beep_on;</span></span>
<span class="line"><span>    delayMicroseconds(halfPeriod);</span></span>
<span class="line"><span>    beep_off;</span></span>
<span class="line"><span>    delayMicroseconds(halfPeriod);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  Wire.begin();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  // Play ascending tones</span></span>
<span class="line"><span>  for (int i = 0; i &lt; sizeof(tones)/sizeof(tones[0]); i++) {</span></span>
<span class="line"><span>    playTone(tones[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // Play descending tones</span></span>
<span class="line"><span>  for (int i = sizeof(tones)/sizeof(tones[0]) - 1; i &gt;= 0; i--) {</span></span>
<span class="line"><span>    playTone(tones[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // Add a pause between loops</span></span>
<span class="line"><span>  playTone(0); // This will just delay</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2>`,8)]))}const m=n(l,[["render",i]]);export{h as __pageData,m as default};

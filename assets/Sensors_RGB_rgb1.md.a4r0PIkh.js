import{_ as a,c as n,o as e,ae as p}from"./chunks/framework.Dq8kYo8j.js";const u=JSON.parse('{"title":"Simple Activities - Sequential LED Activation","description":"","frontmatter":{},"headers":[],"relativePath":"Sensors/RGB/rgb1.md","filePath":"Sensors/RGB/rgb1.md"}'),l={name:"Sensors/RGB/rgb1.md"};function i(o,s,t,r,c,d){return e(),n("div",null,s[0]||(s[0]=[p(`<h1 id="simple-activities-sequential-led-activation" tabindex="-1">Simple Activities - Sequential LED Activation <a class="header-anchor" href="#simple-activities-sequential-led-activation" aria-label="Permalink to &quot;Simple Activities - Sequential LED Activation&quot;">​</a></h1><h2 id="problem-statement" tabindex="-1">Problem Statement <a class="header-anchor" href="#problem-statement" aria-label="Permalink to &quot;Problem Statement&quot;">​</a></h2><ul><li>Write a code to Alphabot where LED has to Blink like a &quot;forward march&quot; of colors (Red → Green → Blue → White), followed by LEDs turning off in the same order.</li></ul><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;Adafruit_NeoPixel.h&gt;</span></span>
<span class="line"><span>#define PIN 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Adafruit_NeoPixel RGB = Adafruit_NeoPixel(4, PIN, NEO_GRB + NEO_KHZ800);</span></span>
<span class="line"><span>// Adafruit_NeoPixel RGB = Adafruit_NeoPixel(Number Of LEDs, PIN, Colour Order (GRB) + Communication Frequency (800 KHz));</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  RGB.begin();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void Pattern1(){</span></span>
<span class="line"><span>  RGB.setPixelColor(0,RGB.Color(50,0,0)); // Set Color of rgb led (RGB no,RGB.Color(R,G,B))</span></span>
<span class="line"><span>  RGB.show();// RGB Light Blows</span></span>
<span class="line"><span>  delay(250);</span></span>
<span class="line"><span>  RGB.setPixelColor(1,RGB.Color(0,50,0));</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>  delay(250);</span></span>
<span class="line"><span>  RGB.setPixelColor(2,RGB.Color(0,0,50));</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>  delay(250);</span></span>
<span class="line"><span>  RGB.setPixelColor(3,RGB.Color(50,50,50));</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>  delay(250);</span></span>
<span class="line"><span>  RGB.setPixelColor(0,RGB.Color(0,0,0));// Turn off the lights</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>  delay(250);</span></span>
<span class="line"><span>  RGB.setPixelColor(1,RGB.Color(0,0,0));</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>  delay(250);</span></span>
<span class="line"><span>  RGB.setPixelColor(2,RGB.Color(0,0,0));</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>  delay(250);</span></span>
<span class="line"><span>  RGB.setPixelColor(3,RGB.Color(0,0,0));</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Pattern1();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  delay(500);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="exercise-🤖" tabindex="-1">Exercise 🤖 <a class="header-anchor" href="#exercise-🤖" aria-label="Permalink to &quot;Exercise 🤖&quot;">​</a></h2><ul><li>Try to make Different patterns in RGB LEDs (say turning on one after another and turning off similarly.)</li></ul>`,7)]))}const B=a(l,[["render",i]]);export{u as __pageData,B as default};

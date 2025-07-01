import{_ as a,c as n,o as p,ae as e}from"./chunks/framework.BtEkjhVd.js";const u=JSON.parse('{"title":"Simple Activities","description":"","frontmatter":{},"headers":[],"relativePath":"Sensors/RGB/rgb2.md","filePath":"Sensors/RGB/rgb2.md"}'),l={name:"Sensors/RGB/rgb2.md"};function i(t,s,o,r,c,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h1 id="simple-activities" tabindex="-1">Simple Activities <a class="header-anchor" href="#simple-activities" aria-label="Permalink to &quot;Simple Activities&quot;">​</a></h1><h2 id="pattern-2-paired-led-activation-alternate-pairs" tabindex="-1">Pattern 2: Paired LED Activation (Alternate Pairs) <a class="header-anchor" href="#pattern-2-paired-led-activation-alternate-pairs" aria-label="Permalink to &quot;Pattern 2: Paired LED Activation (Alternate Pairs)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;Adafruit_NeoPixel.h&gt;</span></span>
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
<span class="line"><span>void Pattern2(){</span></span>
<span class="line"><span>  RGB.setPixelColor(1,RGB.Color(50,0,0)); // Set Color of rgb led (RGB no,RGB.Color(R,G,B))</span></span>
<span class="line"><span>  RGB.show();// RGB Light Blows</span></span>
<span class="line"><span>  RGB.setPixelColor(2,RGB.Color(0,50,0));</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>  delay(250);</span></span>
<span class="line"><span>  RGB.setPixelColor(0,RGB.Color(0,0,50));</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>  RGB.setPixelColor(3,RGB.Color(50,50,50));</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>  delay(250);</span></span>
<span class="line"><span>  RGB.setPixelColor(1,RGB.Color(0,0,0)); // Set Color of rgb led (RGB no,RGB.Color(R,G,B))</span></span>
<span class="line"><span>  RGB.show();// RGB Light Blows</span></span>
<span class="line"><span>  RGB.setPixelColor(2,RGB.Color(0,0,0));</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>  delay(250);</span></span>
<span class="line"><span>  RGB.setPixelColor(0,RGB.Color(0,0,0));</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>  RGB.setPixelColor(3,RGB.Color(0,0,0));</span></span>
<span class="line"><span>  RGB.show();</span></span>
<span class="line"><span>  delay(250);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Pattern2();</span></span>
<span class="line"><span>  delay(500);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2><ul><li>Two pairs of LEDs light up in an alternating fashion (1+2 → 0+3). </li></ul><h2 id="exercise-🤖" tabindex="-1">Exercise 🤖 <a class="header-anchor" href="#exercise-🤖" aria-label="Permalink to &quot;Exercise 🤖&quot;">​</a></h2><ul><li>Try to make Different patterns in RGB LEDs (say turning on one after another and turning off similarly.</li></ul>`,7)]))}const h=a(l,[["render",i]]);export{u as __pageData,h as default};

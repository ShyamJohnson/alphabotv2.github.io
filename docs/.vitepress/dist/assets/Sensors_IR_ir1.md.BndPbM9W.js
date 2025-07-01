import{_ as s,c as a,o as p,ae as e}from"./chunks/framework.BtEkjhVd.js";const h=JSON.parse('{"title":"Simple Activities","description":"","frontmatter":{},"headers":[],"relativePath":"Sensors/IR/ir1.md","filePath":"Sensors/IR/ir1.md"}'),l={name:"Sensors/IR/ir1.md"};function i(t,n,c,o,r,d){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="simple-activities" tabindex="-1">Simple Activities <a class="header-anchor" href="#simple-activities" aria-label="Permalink to &quot;Simple Activities&quot;">​</a></h1><h2 id="decodes-ir-signals-and-prints-commands" tabindex="-1">decodes IR signals and prints commands <a class="header-anchor" href="#decodes-ir-signals-and-prints-commands" aria-label="Permalink to &quot;decodes IR signals and prints commands&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  #define IR     4</span><span>           // IR remote receiver pin </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Remote key codes (adjust based on your remote)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define KEY2         0x18</span><span>  // Key:2 (Forward)</span></span>
<span class="line"><span>#define KEY8         0x52</span><span>  // Key:8 (Backward)</span></span>
<span class="line"><span>#define KEY4         0x08</span><span>  // Key:4 (Left)</span></span>
<span class="line"><span>#define KEY6         0x5A</span><span>  // Key:6 (Right)</span></span>
<span class="line"><span>#define KEY5         0x1C</span><span>  // Key:5 (Stop)</span></span>
<span class="line"><span>#define Repeat       0xFF</span><span>  // Key hold repeat code</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &lt;Adafruit_NeoPixel.h&gt;</span></span>
<span class="line"><span>#define PIN 7</span></span>
<span class="line"><span>Adafruit_NeoPixel RGB = Adafruit_NeoPixel(4, PIN, NEO_GRB + NEO_KHZ800);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unsigned long lasttime = 0;</span></span>
<span class="line"><span>unsigned char results;</span></span>
<span class="line"><span>byte flag = 0;</span></span>
<span class="line"><span>int Speed = 180;  // Default Speed (0-255)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>char IR_decode(unsigned char *code);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>void translateIR();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  Serial.begin(115200);</span></span>
<span class="line"><span>  pinMode(IR, INPUT);</span></span>
<span class="line"><span>  Serial.println(&quot;IR Remote Control Robot - Ready!&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  if (IR_decode(&amp;results)) {</span></span>
<span class="line"><span>    flag = 1;</span></span>
<span class="line"><span>    lasttime = millis();  </span></span>
<span class="line"><span>    translateIR();</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    if (flag == 1 &amp;&amp; (millis() - lasttime &gt; 150)) {</span></span>
<span class="line"><span>      flag = 0;</span></span>
<span class="line"><span>      Serial.println(&quot;Stopping (no signal)&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Decodes IR signals</span></span>
<span class="line"><span>char IR_decode(unsigned char *code) {</span></span>
<span class="line"><span>  char value = 0; // Track the values (1 or 0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  unsigned int count = 0; // Variable used to prevent infinite loop </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  unsigned char i, index = 0, cnt = 0, data[4] = {0, 0, 0, 0}; // 4 byte IR code is stored (32 bits = 4 Bytes Using NEC Protocol)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// When a Signal is Detected IR Reciever Pulls &#39;LOW&#39; value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (digitalRead(IR) == LOW) {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // A IR Signal Always Starts with long LOW Pulse (9ms)</span></span>
<span class="line"><span>    count = 0;</span></span>
<span class="line"><span>    while (digitalRead(IR) == LOW &amp;&amp; count++ &lt; 200) {</span></span>
<span class="line"><span>      delayMicroseconds(60);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Also IR Signal Always Have 4.5ms HIGH Pulse after 9ms Short Pulse</span></span>
<span class="line"><span>    count = 0;</span></span>
<span class="line"><span>    while (digitalRead(IR) == HIGH &amp;&amp; count++ &lt; 80) {</span></span>
<span class="line"><span>      delayMicroseconds(60);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Decoding All The 32 Bits one by one</span></span>
<span class="line"><span>    for (i = 0; i &lt; 32; i++) {</span></span>
<span class="line"><span>      count = 0;</span></span>
<span class="line"><span>      while (digitalRead(IR) == LOW &amp;&amp; count++ &lt; 15) { // Always The First Short LOW Pulse is Ignored</span></span>
<span class="line"><span>        delayMicroseconds(60);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      count = 0;</span></span>
<span class="line"><span>      while (digitalRead(IR) == HIGH &amp;&amp; count++ &lt; 40) { // Check Wether Its Long HIGH Pulse or Short HIGH Pule</span></span>
<span class="line"><span>        delayMicroseconds(60);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (count &gt; 20) { // If count &gt; 20 , Its a Long HIGH Pulse . So Putting 1 In correct position of Memory Using BITWISE Operator (&lt;&lt;).</span></span>
<span class="line"><span>        data[index] |= (1 &lt;&lt; cnt);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (cnt == 7) { // We Have 8 Bits In a byte. Only Moves To Next Byte when all 8 Bits are stores .</span></span>
<span class="line"><span>        cnt = 0;</span></span>
<span class="line"><span>        index++;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        cnt++;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Validate checksum</span></span>
<span class="line"><span>    //  If data[0] = 0x00, then data[1] = 0xFF → 0x00 + 0xFF = 0xFF</span></span>
<span class="line"><span>    //  If data[2] = 0x18, then data[3] = 0xE7 → 0x18 + 0xE7 = 0xFF</span></span>
<span class="line"><span>    // If the sum is 0xFF (No Transmission error) Giving value = 1</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    if (data[0] + data[1] == 0xFF &amp;&amp; data[2] + data[3] == 0xFF) {  </span></span>
<span class="line"><span>      *code = data[2];</span></span>
<span class="line"><span>      value = 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // When you hold a button, the remote doesn’t resend the full command. Instead, it sends a shortcut: 0xFFFFFFFF (all bytes = 0xFF).</span></span>
<span class="line"><span>    // So Checking all 4 bytes are Repeating (0xFF)</span></span>
<span class="line"><span>    else if (data[0] == 0xFF &amp;&amp; data[1] == 0xFF &amp;&amp; data[2] == 0xFF &amp;&amp; data[3] == 0xFF) {</span></span>
<span class="line"><span>      *code = Repeat;</span></span>
<span class="line"><span>      value = 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return value;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Maps IR codes to actions</span></span>
<span class="line"><span>void translateIR() {</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  switch (results) {</span></span>
<span class="line"><span>    case KEY2: </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      Serial.println(&quot;Moving FORWARD&quot;);</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case KEY8: </span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>      Serial.println(&quot;Moving BACKWARD&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case KEY4: </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      Serial.println(&quot;Turning LEFT&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case KEY6: </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      Serial.println(&quot;Turning RIGHT&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case KEY5: </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      Serial.println(&quot;STOPPED&quot;);</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    default:</span></span>
<span class="line"><span>      Serial.println(&quot;Unknown IR code&quot;);  </span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="output" tabindex="-1">Output <a class="header-anchor" href="#output" aria-label="Permalink to &quot;Output&quot;">​</a></h2><ul><li>This code enables wireless control of the AlphaBot V2 using an infrared (IR) remote. The robot responds to button presses by printing commands to the Serial Monitor (at 115200 baud). Here&#39;s what happens when you run it. </li></ul><h2 id="exercise-🤖" tabindex="-1">Exercise 🤖 <a class="header-anchor" href="#exercise-🤖" aria-label="Permalink to &quot;Exercise 🤖&quot;">​</a></h2><ul><li>Try to code Yourself and Print the Value When the button is pressed</li></ul>`,7)]))}const m=s(l,[["render",i]]);export{h as __pageData,m as default};

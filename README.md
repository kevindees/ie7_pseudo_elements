# IE7 Pseudo Elements

Created by [Kevin Dees](http://kevindees.cc)

Using
======

To get things rolling:

- Include jQuery.
- Add "iea" or "ieb" as a new selector after pseudo-element in your CSS rule.
- Then add the script to the bottom of your site before the &lt;/body&gt; tag.

Example
======

<pre>
.more:before, ieb { ... }
.more:after, iea { ... }
</pre>


Notes
======

- The less CSS rules you make the faster the script runs. 
- You can't use a -> : char outside of the :after or :before for now
- You can't stack pseudo-elements yet
- This is for IE7 only! So, use conditional comments.
- Content property doesn't work yet

Example Site
======

<pre>
&lt;!DOCTYPE HTML&gt;
&lt;html lang="en-US"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;My Site&lt;/title&gt;
&lt;style type="text/css"&gt;
.more p:before, ieb { content: ''; background: #f00; width: 10px; height: 10px; display: block; }
.more p:after, iea { content: ''; background: #ccc; width: 15px; height: 15px; display: block;}
&lt;/style&gt;
&lt;script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.3/jquery.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&nbsp;
&lt;div&gt;
&lt;p&gt;test&lt;/p&gt;
&lt;/div&gt;
&nbsp;
&lt;!--[if IE 7]&gt;
&lt;script type="text/javascript"&gt;
(function() {
function set_after(rule, style) {
$(rule).parent().append($(document.createElement('ieae')).css(style));
}
&nbsp;
function set_before(rule, style) {
$(rule).parent().prepend($(document.createElement('iebe')).css(style));
}
var css = document.styleSheets;
for(var i = 0, j = css.length; i &lt; j; i++) {
var rules = css[i].rules;
for(var x = 0, y = rules.length; x &lt; y; x++) {
if(rules[x].selectorText.indexOf("ieb") == 0) {
var before = x;
var str = rules[--before].selectorText;
// next line needs love
str = /(.+):/.exec(str)[1];
set_before(str, rules[x].style);
}
else if(rules[x].selectorText.indexOf("iea") == 0) {
var before = x;
var str = rules[--before].selectorText;
// next line needs love
str = /(.+):/.exec(str)[1];
set_after(str, rules[x].style);
}
}
}
})();
&lt;/script&gt;
&lt;![endif]--&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
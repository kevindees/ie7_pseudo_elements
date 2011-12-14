# IE7 Pseudo Elements

Created by [Kevin Dees](http://kevindees.cc)

Becuase IE7 is going to be around for some time. This script was made to give us just a little pseudo-element support until IE7 goes away.

If you feel you can help with this project hit me up here or on twitter as @kevindees. Enjoy!

Using
======
- Add "> iea" or "> ieb" as a new selector after pseudo-element in your CSS rule.
- iea is for selectors ending in :after or ::after
- ieb is for selectors ending in :before or ::before
- Then add the script to the bottom of your site before the &lt;/body&gt; tag.

Example
======

<pre>
.more:before, .more > ieb { ... }
.more:after, .more > iea { ... }
</pre>


Notes
======

Basic
===
- The less CSS rules you make the faster the script runs
- This is for IE7 only! IE6 is not worth the pain.
- Requires jQuery 1.6+

Cons
===
- You can't stack pseudo-elements yet

Pros
===
- Content property (is supported)
- You can use :after and :before for basic enhancement
- You can use CSS Castcading for specificity (selector specificity should work now)

Example Site
======

<pre>
&lt;!DOCTYPE HTML&gt;
&lt;html lang="en-US"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;My Site&lt;/title&gt;
&lt;style type="text/css"&gt;
.more p:before, .more p > ieb, .more p:after, .more p > iea { content: 'me'; background: #f00; width: 10px; height: 10px; display: block; }
.more p:after, .more p > iea { content: 'you'; background: #ccc; width: 15px; height: 15px; display: block;}
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
// the script goes here
&lt;/script&gt;
&lt;![endif]--&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
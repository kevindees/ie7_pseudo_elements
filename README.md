# IE7 Pseudo Elements

Created by [Kevin Dees](http://kevindees.cc)

Using
======
- Add "iea" or "ieb" as a new selector after pseudo-element in your CSS rule.
- iea is for selectors ending in :after
- ieb is for selectors ending in :before
- Then add the script to the bottom of your site before the &lt;/body&gt; tag.

Example
======

<pre>
.more:before, ieb { ... }
.more:after, iea { ... }
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
- You can't use a -> : char outside of the :after or :before in target selector yet
- You can use selectors like :hover yet
- You can't stack pseudo-elements yet

Pros
===
- Content property (is supported)
- You can use :after and :before for basic enhancement
- You can use multiple pseudo-element on the same element with castcade (selector specificity not supported yet)

Example Site
======

<pre>
&lt;!DOCTYPE HTML&gt;
&lt;html lang="en-US"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;My Site&lt;/title&gt;
&lt;style type="text/css"&gt;
.more p:before, ieb, .more p:after, iea { content: 'me'; background: #f00; width: 10px; height: 10px; display: block; }
.more p:after, iea { content: 'you'; background: #ccc; width: 15px; height: 15px; display: block;}
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
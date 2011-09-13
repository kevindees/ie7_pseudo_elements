(function() {
	function set_after(rule, style, content) {
		var ieae = $(document.createElement('ieae')).css(style).append( document.createTextNode(content) );
		$(rule).parent().append(ieae);
	}

	function set_before(rule, style, content) {
		var iebe = $(document.createElement('iebe')).css(style).append( document.createTextNode(content) );
		$(rule).parent().prepend(iebe);
	}
	
	var css = document.styleSheets;
	for(var i = 0, j = css.length; i < j; i++) {
		var rules = css[i].rules;
		for(var x = 0, y = rules.length; x < y; x++) {
			if(rules[x].selectorText.indexOf("ieb") == 0) {
				var before = x;
				var str = rules[--before].selectorText;
				// next line needs love
				str = /(.+):/.exec(str)[1];
				var content = rules[x].style.content;
				content = content.substring(0, content.length-1).substring(1);
				set_before(str, rules[x].style, content);
			}
			else if(rules[x].selectorText.indexOf("iea") == 0) {
				var before = x;
				var str = rules[--before].selectorText;
				// next line needs love
				str = /(.+):/.exec(str)[1];
				var content = rules[x].style.content;
				content = content.substring(0, content.length-1).substring(1);
				set_after(str, rules[x].style, content);
			}
		}
	}
})();
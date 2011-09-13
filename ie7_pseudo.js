(function() {
	function set_after(rule, style) {
		$(rule).parent().append($(document.createElement('ieae')).css(style));
	}

	function set_before(rule, style) {
		$(rule).parent().prepend($(document.createElement('iebe')).css(style));
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
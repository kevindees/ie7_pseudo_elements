(function() {
	function set_element(rule, style, content, iee) {
		if($(rule).hasClass(iee)) {
			if(content) {
				if(iee == 'ieb') {
					$(rule).prev(iee+'e').css(style).html(content); }
				else {
					$(rule).next(iee+'e').css(style).html(content);
				}
			}
			else {
				if(iee == 'ieb') {
					$(rule).prev(iee+'e').css(style); }
				else {
					$(rule).next(iee+'e').css(style);
				}
			}
		}
		else {
			$(rule).addClass(iee);
			var ieeNew = $(document.createElement(iee+'e')).css(style).append( document.createTextNode(content) );
			if(iee == 'ieb') {
				$(rule).before(ieeNew); }
			else {
				$(rule).after(ieeNew);
			}
		}
	}
	
	var css = document.styleSheets;
	for(var i = 0, j = css.length; i < j; i++) {
		var rules = css[i].rules;
		for(var x = 0, y = rules.length; x < y; x++) {
			if(rules[x].selectorText.indexOf("ieb") == 0) {
				var before = x;
				var ruleStr = rules[--before].selectorText;
				// next line needs love
				ruleStr = /(.+):/.exec(ruleStr)[1];
				var content = rules[x].style.content;
				content = content.substring(0, content.length-1).substring(1);
				set_element(ruleStr, rules[x].style, content, 'ieb');
			}
			else if(rules[x].selectorText.indexOf("iea") == 0) {
				var before = x;
				var ruleStr = rules[--before].selectorText;
				// next line needs love
				ruleStr = /(.+):/.exec(ruleStr)[1];
				var content = rules[x].style.content;
				content = content.substring(0, content.length-1).substring(1);
				set_element(ruleStr, rules[x].style, content, 'iea');
			}
		}
	}
})();
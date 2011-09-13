(function() {
	function set_after(rule, style, content) {
		if($(rule).hasClass('iea')) {
			var parent = $(rule).parent();
			$(parent).find('ieae').css(style);
		}
		else {
			$(rule).addClass('iea');
			var ieae = $(document.createElement('ieae')).css(style).append( document.createTextNode(content) );
			$(rule).after(ieae);	
		}
	}

	function set_before(rule, style, content) {
		if($(rule).hasClass('ieb')) {
			var parent = $(rule).parent();
			$(parent).find('iebe').css(style);
		}
		else {
			$(rule).addClass('ieb');
			var iebe = $(document.createElement('iebe')).css(style).append( document.createTextNode(content) );
			$(rule).before(iebe);		
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
				set_before(ruleStr, rules[x].style, content);
			}
			else if(rules[x].selectorText.indexOf("iea") == 0) {
				var before = x;
				var ruleStr = rules[--before].selectorText;
				// next line needs love
				ruleStr = /(.+):/.exec(ruleStr)[1];
				var content = rules[x].style.content;
				content = content.substring(0, content.length-1).substring(1);
				set_after(ruleStr, rules[x].style, content);
			}
		}
	}
})();
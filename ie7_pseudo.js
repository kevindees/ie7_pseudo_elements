(function() {
	function set_after(rule) {
		$(rule).parent().append(document.createElement('iea'));
	}

	function set_before(rule) {
		$(rule).parent().prepend(document.createElement('ieb'));
	}
	
	var css = document.styleSheets;
	for(var i = 0, j = css.length; i < j; i++) {
		var rules = css[i].rules;
		// alert('in style ' + i);
		for(var x = 0, y = rules.length; x < y; x++) {
			// alert('in rule ' + rules[x]);
			if(rules[x].selectorText.indexOf("ieb") == 0) {
				var before = x;
				var str = rules[--before].selectorText;
				str = /(.+):/.exec(str)[1];
				// alert(str);
				//alert(rules[x].style);
				set_before(str);
			}
			else if(rules[x].selectorText.indexOf("iea") == 0) {
				var before = x;
				var str = rules[--before].selectorText;
				str = /(.+):/.exec(str)[1];
				// alert(str);
				//alert(rules[x].style);
				set_after(str);
			}
		}
	}
})();
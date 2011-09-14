(function() {

	function set_element(rule, style, content, newRelID, iee) {
		if($(rule).hasClass(iee)) {
			var parent = $(rule).parent();
			if(content) {
				$(parent).find(iee+'e').css(style).html(content);
			}
			else {
				$(parent).find(iee+'e').css(style);
			}
		}
		else {
			var bob = $(rule).length;
			for(q =0; q < bob; q++) {
				$($(rule)[q]).addClass(iee + ' ' + newRelID + q);
			}
			var ieeNew = $(document.createElement(iee+'e')).css(style).append( document.createTextNode(content) );
			if(iee == 'ieb') {
				$(rule).before(ieeNew); }
			else {
				$(rule).after(ieeNew);
			}		
		}
	}

	function find_relIDs(ruleClasses) {
		var ruleStr = / *((\.)ieid-[0-9])/.exec(ruleClasses);
		alert(ruleStr)
		return ruleStr;
	}
	
	var css = document.styleSheets;
	var relID = 0;
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
				var newRelID = 'ieid-' + relID++;
				set_element(ruleStr, rules[x].style, content, newRelID, 'ieb');
			}
			else if(rules[x].selectorText.indexOf("iea") == 0) {
				var before = x;
				var ruleStr = rules[--before].selectorText;
				// next line needs love
				ruleStr = /(.+):/.exec(ruleStr)[1];
				var content = rules[x].style.content;
				content = content.substring(0, content.length-1).substring(1);
				var newRelID = 'ieid-' + relID++;
				set_element(ruleStr, rules[x].style, content, newRelID, 'iea');
			}
		}
	}
})();
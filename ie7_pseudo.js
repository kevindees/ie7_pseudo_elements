(function() {
    function set_element(rule, style, content, iee) {
        if($(rule).hasClass(iee)) {
            if(content) {
                var oldStyle = $(rule + ' > ' + iee + 'e').attr('style');
                $(rule + ' > ' + iee + 'e').css(style).html(content);
                var newStyle = $(rule + ' > ' + iee + 'e').attr('style');
                $(rule + ' > ' + iee + 'e').attr('style', oldStyle + ';' + newStyle )
            }
            else {
                var oldStyle = $(rule + ' > ' + iee + 'e').attr('style');
                $(rule + ' > ' + iee + 'e').css(style);
                var newStyle = $(rule + ' > ' + iee + 'e').attr('style');
                $(rule + ' > ' + iee + 'e').attr('style', oldStyle + ';' + newStyle )
            }
        }
        else {
            $(rule).addClass(iee);
            var ieeNew = $(document.createElement(iee+'e')).css(style).append( document.createTextNode(content) );
            if(iee == 'ieb') {
                $(rule).prepend(ieeNew); }
            else {
                $(rule).append(ieeNew); }
        }
    }
    
    function trim_content(content) {
        if(content == "\"\"" || content == "\'\'" || content == null) {
        content = ''; } else {
        content = content.substring(0, content.length-1).substring(1); }
        return content;
    }
    
    var css = document.styleSheets;
    for(var i = 0, j = css.length; i < j; i++) {
        var rules = css[i].rules;
        for(var x = 0, y = rules.length; x < y; x++) {
            if(rules[x].selectorText.indexOf("ieb") == 0) {
                var before = x;
                var ruleStr = rules[--before].selectorText;
                ruleStr = /(.+):un/.exec(ruleStr)[1];
                var content = rules[x].style.content;
                content = trim_content(content);
                set_element(ruleStr, rules[x].style, content, 'ieb');
            }
            else if(rules[x].selectorText.indexOf("iea") == 0) {
                var before = x;
                var ruleStr = rules[--before].selectorText;
                ruleStr = /(.+):un/.exec(ruleStr)[1];
                var content = rules[x].style.content;
                content = trim_content(content);
                set_element(ruleStr, rules[x].style, content, 'iea');
            }
        }
    }
})();
/*
Created by Kevin Dees
License http://creativecommons.org/licenses/by/3.0/
*/

(function() {
    function set_element(rule, content, iee) {
        if($(rule).hasClass(iee)) {
            if(content) {
                $(rule + ' > ' + iee).html(content);
            }
        }
        else {
            $(rule).addClass(iee);
            if(iee == 'ieb') {
                $(rule).each(function(index) {
                    $(this).prepend($(document.createElement(iee)).append( content ));
                });
            }
            else {
              $(rule).each(function(index) {
                    $(this).append($(document.createElement(iee)).append( content ));
                });
            }
        }
    }

    function make_content(content) {
        if(content == "\"\"" || content == "\'\'" || content == null) {
            content = ''; }
        else if(content.indexOf('url') == 0) {
            content = "<img src='"+content.replace(/url\(/g, '').replace(/\)/, '')+"' />";
        }
        else {
            content = content.substring(0, content.length-1).substring(1);
            document.createTextNode(content);
        }
        return content;
    }

    var css = document.styleSheets;
    for(var i = 0, j = css.length; i < j; i++) {
        var rules = css[i].rules;
        for(var x = 0, y = rules.length; x < y; x++) {
            var selector = rules[x].selectorText;
            if(selector.indexOf("> ieb") > 0 || selector.indexOf("> iea") > 0) {
                var regex = /\>\s?ie[ab]/g;
                var ruleStr = selector.replace(regex, '').replace(/\:[a-z]*/g, '');
                var content = rules[x].style.content;
                content = make_content(content);
                if(selector.indexOf("> ieb") > 0) { var iee = "ieb" }
                else { var iee = 'iea'}
                set_element(ruleStr, content, iee);
            }
        }
    }
})();
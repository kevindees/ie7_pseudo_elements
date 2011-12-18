(function() {
<<<<<<< .merge_file_QoR3Cw
        function set_element(rule, style, content, iee) {
        if($(rule).hasClass(iee)) {
            if(content) {
                if(iee == 'ieb') {
                    $(rule + ' > ' + iee + 'e').css(style).html(content); }
                else {
                    $(rule + ' > ' + iee + 'e').css(style).html(content); }
            }
            else {
                if(iee == 'ieb') {
                    $(rule + ' > ' + iee + 'e').css(style); }
                else {
                    $(rule + ' > ' + iee + 'e').css(style); }
=======
    function set_element(rule, content, iee) {
        if($(rule).hasClass(iee)) {
            if(content) {
                $(rule + ' > ' + iee).html(content);
>>>>>>> .merge_file_EvewPx
            }
        }
        else {
            $(rule).addClass(iee);
<<<<<<< .merge_file_QoR3Cw
            var ieeNew = $(document.createElement(iee+'e')).css(style).append( document.createTextNode(content) );
            if(iee == 'ieb') {
                $(rule).prepend(ieeNew); }
            else {
                $(rule).append(ieeNew); }
        }
    }
    
=======
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
    
>>>>>>> .merge_file_EvewPx
    var css = document.styleSheets;
    for(var i = 0, j = css.length; i < j; i++) {
        var rules = css[i].rules;
        for(var x = 0, y = rules.length; x < y; x++) {
<<<<<<< .merge_file_QoR3Cw
            if(rules[x].selectorText.indexOf("ieb") == 0) {
                var before = x;
                var ruleStr = rules[--before].selectorText;
                ruleStr = /(.+):un/.exec(ruleStr)[1];
                var content = rules[x].style.content;
                content = content.substring(0, content.length-1).substring(1);
                set_element(ruleStr, rules[x].style, content, 'ieb');
            }
            else if(rules[x].selectorText.indexOf("iea") == 0) {
                var before = x;
                var ruleStr = rules[--before].selectorText;
                ruleStr = /(.+):un/.exec(ruleStr)[1];
                var content = rules[x].style.content;
                content = content.substring(0, content.length-1).substring(1);
                set_element(ruleStr, rules[x].style, content, 'iea');
=======
            var selector = rules[x].selectorText;
            if(selector.indexOf("> ieb") > 0 || selector.indexOf("> iea") > 0) {
                var regex = /\>\s?ie[ab]/g;
                var ruleStr = selector.replace(regex, '').replace(/\:[a-z]*/g, '');
                var content = rules[x].style.content;
                content = make_content(content);
                if(selector.indexOf("> ieb") > 0) { var iee = "ieb" }
                else { var iee = 'iea'}
                set_element(ruleStr, content, iee);
>>>>>>> .merge_file_EvewPx
            }
        }
    }
})();
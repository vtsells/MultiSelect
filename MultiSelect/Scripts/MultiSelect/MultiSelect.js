(function ($) {
    $.fn.MultiSelect = function (options) {
        var opts = BuildOptions(options);
        $(this).each(function () {
            if (!opts.debug) {
                $(this).hide();
            }
            var list = $.fn.MultiSelect.BuildList(this,opts);
            $(this).after(list);
            $(".keepopen",list).on('click', function (e) {
                e.stopPropagation();
            });
        })
        return this;
    };

    $.fn.MultiSelect.defaults = {
        buttonClass:"btn btn-default",
        iconClass: "glyphicon glyphicon-filter",
        dropdownHeight: "200px",
        debug:false
    }
    $.fn.MultiSelect.ToggleCheck = function (checkbox) {

    }
    $.fn.MultiSelect.BuildList = function (select,options) {
        var s = select;
        var items = $("option", select);
        var div = $("<div class='btn-group'></div>");
        var btn = $("<button type='button' class='dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></button>");
        btn.addClass(options.buttonClass);
        var icon = $("<i></i>");
        icon.addClass(options.iconClass);
        btn.append(icon);
        icon = $("<i></i>");
        icon.addClass("caret");
        btn.append(icon);
        div.append(btn);
        var ul = $("<ul class='dropdown-menu keepopen'></ul>");
        div.append(ul);
        ul.css({ "height": options.dropdownHeight, "overflow": "auto" });
        var i = $(select).index();
        var li = $("<li></li>");
        var input = $("<input type='checkbox' id='" + i + "-select-all' />");
        li.append(input);
        var label = $("<label for='" + i + "-select-all'>Select All</label>");
        li.append(label);
        ul.append(li);
        input.data("isSelected", false);
        input.on("click", function () {
            var selected = $(this).data("isSelected");
            if (options.debug) console.log("selected: " + selected);
            $("input", ul).not(this).each(function () {
                
                if (selected) {
                    $(this).data("deselect")(this);
                } else {
                    $(this).data("select")(this);
                }
            });
            $(this).data("isSelected", !selected);
        })
        items.each(function () {
            var li = $("<li></li>");
            ul.append(li);
            var j = li.index() - 1;
            var input = $("<input type='checkbox' id='" + i + "_" + j + $(this).html() + "' />");
            li.append(input);
            var label = $("<label for='" + i + "_" + j + $(this).html() + "'>" + $(this).html() + "</label>");
            li.append(label);
            input.data("isSelected",false);
            input.data("select", function (input) {
                if (options.debug) console.log("I was selected");
                $(items[j]).prop("selected", true);
                $(input).data("isSelected", true);
                $(input).prop("checked", true);
            });
            input.data("deselect", function (input) {
                if (options.debug) console.log("I was deselected");
                $(items[j]).prop("selected", false);
                $(input).data("isSelected", false);
                $(input).prop("checked", false);
            });
            input.on("click", function () {
                var selected = $(this).data("isSelected");
                if (selected) {
                    $(this).data("deselect")(this);
                } else {
                    $(this).data("select")(this);
                }
            })
            
        });
        return div;
    }
    function Init(form, options) {

        var opts = BuildOptions(options);
    }
    function BuildOptions(options) {
        var opts = $.fn.MultiSelect.defaults;
        if (options) {
            opts = $.extend({}, $.fn.MultiSelect.defaults, options);
            //if (options.buttons) {
            //    opts.buttons = $.extend({}, $.fn.Wizard.defaults.buttons, options.buttons)
            //    opts.buttons.classes = $.extend({}, $.fn.Wizard.defaults.buttons.classes, options.buttons.classes);
            //}
        }
        return opts;
    }
}(jQuery));

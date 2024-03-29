var searchListLi = $(".search-list li")
  , searchList = $(".search-list")
  , searchSm = $(".search-sm")
  , searchBoxSm = $(".search-input-sm .search-box-sm")
  , searchListSm = $(".search-list-sm");
$(function() {
    "use strict";
    if ($(".header-search-input").focus(function() {
        $(this).parent("div").addClass("header-search-wrapper-focus")
    }).blur(function() {
        $(this).parent("div").removeClass("header-search-wrapper-focus")
    }),
    $(".search-button").click(function(e) {
        searchSm.is(":hidden") ? (searchSm.show(),
        searchBoxSm.focus()) : (searchSm.hide(),
        searchBoxSm.val(""))
    }),
    $(".search-input-sm").on("click", function() {
        searchBoxSm.focus()
    }),
    $(".search-sm-close").click(function(e) {
        searchSm.hide(),
        searchBoxSm.val("")
    }),
    0 < $(".search-list").length)
        var e = new PerfectScrollbar(".search-list",{
            wheelSpeed: 2,
            wheelPropagation: !1,
            minScrollbarLength: 20
        });
    if (0 < searchListSm.length)
        var s = new PerfectScrollbar(".search-list-sm",{
            wheelSpeed: 2,
            wheelPropagation: !1,
            minScrollbarLength: 20
        });
    var a = $(".header-search-wrapper .header-search-input,.search-input-sm .search-box-sm").data("search");
    $(".search-sm-close").on("click", function() {
        searchBoxSm.val(""),
        searchBoxSm.blur(),
        searchListLi.remove(),
        searchList.addClass("display-none"),
        contentOverlay.hasClass("show") && contentOverlay.removeClass("show")
    }),
    contentOverlay.on("click", function() {
        searchListLi.remove(),
        contentOverlay.removeClass("show"),
        searchSm.hide(),
        searchBoxSm.val(""),
        searchList.addClass("display-none"),
        $(".search-input-sm .search-box-sm, .header-search-input").val("")
    }),
    $(".header-search-wrapper .header-search-input, .search-input-sm .search-box-sm").on("keyup", function(e) {
        contentOverlay.addClass("show"),
        searchList.removeClass("display-none");
        var s = $(this);
        if (38 !== e.keyCode && 40 !== e.keyCode && 13 !== e.keyCode) {
            27 == e.keyCode && (contentOverlay.removeClass("show"),
            s.val(""),
            s.blur());
            var t = $(this).val().toLowerCase();
            if ($("ul.search-list li").remove(),
            "" != t) {
                var i = ""
                  , c = ""
                  , l = ""
                  , n = 0;
                $.getJSON("../../../app-assets/data/" + a + ".json", function(e) {
                    for (var s = 0; s < e.listItems.length; s++)
                        (0 == e.listItems[s].name.toLowerCase().indexOf(t) && n < 4 || 0 != e.listItems[s].name.toLowerCase().indexOf(t) && -1 < e.listItems[s].name.toLowerCase().indexOf(t) && n < 4) && (i += '<li class="auto-suggestion ' + (0 === n ? "current_item" : "") + '"><a class="collection-item" href=' + e.listItems[s].url + '><div class="display-flex"><div class="display-flex align-item-center flex-grow-1"><span class="material-icons" data-icon="' + e.listItems[s].icon + '">' + e.listItems[s].icon + '</span><div class="member-info display-flex flex-column"><span class="black-text">' + e.listItems[s].name + '</span><small class="grey-text">' + e.listItems[s].category + "</small></div></div></div></a></li>",
                        n++);
                    "" == i && "" == c && (c = $("#search-not-found").html());
                    var a = $("#page-search-title").html()
                      , r = $("#default-search-main").html();
                    l = a.concat(i, c, r),
                    $("ul.search-list").html(l)
                })
            } else
                contentOverlay.hasClass("show") && (contentOverlay.removeClass("show"),
                searchList.addClass("display-none"))
        }
        $(".header-search-wrapper .current_item").length && (searchList.scrollTop(0),
        searchList.scrollTop($(".search-list .current_item:first").offset().top - searchList.height())),
        $(".search-input-sm .current_item").length && (searchListSm.scrollTop(0),
        searchListSm.scrollTop($(".search-list-sm .current_item:first").offset().top - searchListSm.height()))
    }),
    $("#navbarForm").on("submit", function(e) {
        e.preventDefault()
    }),
    $(window).on("keydown", function(e) {
        var s, a, r = $(".search-list li.current_item");
        if (40 === e.keyCode ? (s = r.next(),
        r.removeClass("current_item"),
        r = s.addClass("current_item")) : 38 === e.keyCode && (a = r.prev(),
        r.removeClass("current_item"),
        r = a.addClass("current_item")),
        13 === e.keyCode && 0 < $(".search-list li.current_item").length) {
            var t = $("li.current_item a");
            window.location = $("li.current_item a").attr("href"),
            $(t).trigger("click")
        }
    }),
    searchList.mouseenter(function() {
        0 < $(".search-list").length && e.update(),
        0 < searchListSm.length && s.update()
    }),
    $(document).on("mouseenter", ".search-list li", function(e) {
        $(this).siblings().removeClass("current_item"),
        $(this).addClass("current_item")
    }),
    $(document).on("click", ".search-list li", function(e) {
        e.stopPropagation()
    })
}),
$(window).on("resize", function() {
    $(window).width() < 992 && ($(".header-search-input").val(""),
    $(".header-search-input").closest(".search-list li").remove()),
    993 < $(window).width() && (searchSm.hide(),
    searchBoxSm.val(""),
    $(".search-input-sm .search-box-sm").val(""))
});

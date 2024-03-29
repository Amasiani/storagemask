var menuBgDefault = !1;
$(document).ready(function() {
    $(".theme-cutomizer").sidenav({
        edge: "right"
    });
    new PerfectScrollbar(".theme-cutomizer",{
        suppressScrollX: !0
    });
    function r(e) {
        e ? ($(".menu-dark-checkbox").prop("checked", !0),
        $(".sidenav-main").removeClass("sidenav-light").addClass("sidenav-dark")) : ($(".menu-dark-checkbox").prop("checked", !1),
        $(".sidenav-main").addClass("sidenav-light").removeClass("sidenav-dark"))
    }
    function a(e) {
        e ? ($(".sidenav-main").removeClass("nav-lock"),
        $(".navbar-main.nav-collapsible").removeClass("sideNav-lock").addClass("nav-expanded"),
        $(".navbar-toggler i").html("radio_button_unchecked"),
        $("#main").addClass("main-full"),
        $(".sidenav-main.nav-collapsible, .navbar .brand-sidebar").trigger("mouseleave")) : ($(".sidenav-main").addClass("nav-lock").removeClass("nav-collapsed"),
        $(".navbar-main.nav-collapsible").addClass("sideNav-lock").removeClass("nav-collapsed"),
        $(".navbar-toggler i").html("radio_button_checked"),
        $("#main").removeClass("main-full"),
        $(".sidenav-main.nav-collapsible, .navbar .brand-sidebar").trigger("mouseenter"))
    }
    function o(e) {
        d(".navbar-main"),
        e ? ($(".navbar-dark-checkbox").prop("checked", !0),
        $(".navbar-main").removeClass("navbar-light").addClass("navbar-dark")) : ($(".navbar-dark-checkbox").prop("checked", !1),
        $(".navbar-main").addClass("navbar-light").removeClass("navbar-dark"))
    }
    function n(e) {
        e ? ($(".footer-dark-checkbox").prop("checked", !0),
        $(".page-footer").removeClass("footer-light").addClass("footer-dark")) : ($(".footer-dark-checkbox").prop("checked", !1),
        $(".page-footer").addClass("footer-light").removeClass("footer-dark"))
    }
    function d(e) {
        $(e).removeClass("gradient-45deg-indigo-blue gradient-45deg-purple-deep-orange gradient-45deg-light-blue-cyan gradient-45deg-purple-amber gradient-45deg-purple-deep-purple gradient-45deg-deep-orange-orange gradient-45deg-green-teal gradient-45deg-indigo-light-blue gradient-45deg-red-pink red purple pink deep-purple cyan teal light-blue amber darken-3 brown darken-2 gradient-45deg-indigo-purple gradient-45deg-deep-purple-blue")
    }
    $("body").hasClass("vertical-modern-menu") || $("body").hasClass("vertical-menu-nav-dark") ? $(".menu-bg-color").hide() : $("body").hasClass("vertical-gradient-menu") || $("body").hasClass("vertical-dark-menu") ? ($(".menu-color").hide(),
    menuBgDefault = !0) : $("body").hasClass("horizontal-menu") && $(".menu-options").hide(),
    $(".menu-color-option, .menu-bg-color-option").click(function(e) {
        $(".menu-color .menu-color-option, .menu-bg-color .menu-bg-color-option").removeClass("selected"),
        $(this).addClass("selected");
        var a, n, o = $(this).attr("data-color");
        menuBgDefault ? (r(!0),
        n = o,
        d(".sidenav-main"),
        $(".sidenav-main").addClass(n + " sidenav-gradient")) : (a = o,
        d(".sidenav-main .sidenav li a.active"),
        $(".sidenav-main .sidenav li a.active").css({
            background: "none",
            "box-shadow": "none"
        }),
        $(".sidenav-main .sidenav li a.active").addClass(a + " gradient-shadow"))
    }),
    $(".menu-dark-checkbox").click(function(e) {
        $(".menu-dark-checkbox").prop("checked") ? r(!0) : r(!1)
    }),
    $(".menu-selection-radio").click(function(e) {
        var a, n = $(this).val();
        a = n,
        $(".sidenav-main").removeClass("sidenav-active-square sidenav-active-rounded").addClass(a)
    }),
    $(".menu-collapsed-checkbox").click(function(e) {
        $(".menu-collapsed-checkbox").prop("checked") ? a(!0) : a(!1)
    }),
    $(".navbar-color-option").click(function(e) {
        $(".navbar-color .navbar-color-option").removeClass("selected"),
        $(this).addClass("selected");
        var a, n = $(this).attr("data-color");
        o(!0),
        a = n,
        d(".navbar-main"),
        $(".navbar-main").addClass(a),
        $("body").hasClass("vertical-modern-menu") && (d(".content-wrapper-before"),
        $(".content-wrapper-before").addClass(a))
    }),
    $(".navbar-dark-checkbox").click(function(e) {
        $(".navbar-dark-checkbox").prop("checked") ? o(!0) : o(!1)
    }),
    $(".navbar-fixed-checkbox").click(function(e) {
        $(".navbar-fixed-checkbox").prop("checked") ? $("#header .navbar").addClass("navbar-fixed") : $("#header .navbar").removeClass("navbar-fixed")
    }),
    $(".footer-dark-checkbox").click(function(e) {
        d(".page-footer"),
        $(".footer-dark-checkbox").prop("checked") ? n(!0) : n(!1)
    }),
    $(".footer-fixed-checkbox").click(function(e) {
        $(".footer-fixed-checkbox").prop("checked") ? $(".page-footer").addClass("footer-fixed").removeClass("footer-static") : $(".page-footer").removeClass("footer-fixed").addClass("footer-static")
    }),
    0 < $("html[data-textdirection='rtl']").length && $(".theme-cutomizer").sidenav({
        edge: "left"
    })
});

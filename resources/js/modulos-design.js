(function(){var t;t=!1,document.addEventListener("DOMContentLoaded",function(){try{document.createEvent("TouchEvent"),document.documentElement.className+=" touch",t=!0}catch(t){t,document.documentElement.className+=" no-touch"}return window.hasTouch=function(){return t}}),document.addEventListener("DOMContentLoaded",function(){var t;if(t=window.location.hash,$(".tab").css("display","none"),window.activeTab=function(n){var e;return t=n,$(".background .image").addClass("tab-active"),$(".front").addClass("tab-active"),e=function(){var t;return $(n).css("display","flex"),$(".front").css("display","none"),t=function(){return $(n).addClass("active")},setTimeout(t,0)},setTimeout(e,400)},window.closeTab=function(){var n;return window.location.hash="",$(".background .image").removeClass("tab-active"),$(t).removeClass("active"),n=function(){var n;return $(".front").css("display","flex"),$(t).css("display","none"),n=function(){return $(".front").removeClass("tab-active")},setTimeout(n,0)},setTimeout(n,400)},$(t).length)return activeTab(t)}),$(window).on("load",function(){var t;return t=function(){return $(".start").removeClass("start")},setTimeout(t,0)})}).call(this);
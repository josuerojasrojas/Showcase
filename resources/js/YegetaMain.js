(function(){var e;e=!1,document.addEventListener("DOMContentLoaded",function(){try{document.createEvent("TouchEvent"),document.documentElement.className+=" touch",e=!0}catch(e){e,document.documentElement.className+=" no-touch"}return window.hasTouch=function(){return e}}),document.addEventListener("DOMContentLoaded",function(){var e;return e=!0,window.footerReposition=function(){var t;if(t=$(".footer"),$("body").height()+t.outerHeight()+t.height()>$(window).outerHeight()){if(e)return t.addClass("content-footer"),e=!1}else if(!e)return t.removeClass("content-footer"),e=!0},$(window).resize(footerReposition)}),$(window).on("load",function(){return footerReposition()}),document.addEventListener("DOMContentLoaded",function(){return window.navbarShow=function(){var e;return(e=$(".default-nav")).hasClass("active")?e.removeClass("active"):e.addClass("active")}})}).call(this);
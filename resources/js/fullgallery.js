(function(){var e;e=!1,document.addEventListener("DOMContentLoaded",function(){try{document.createEvent("TouchEvent"),document.documentElement.className+=" touch",e=!0}catch(e){e,document.documentElement.className+=" no-touch"}return window.hasTouch=function(){return e}}),document.addEventListener("DOMContentLoaded",function(){var e;return e="",window.selectImage=function(t){var n;return $(".selected-image").removeClass("active"),n=function(){return $(".selected-image img").attr("src",t),$(".selected-image").addClass("active")},e=setTimeout(n,500)}})}).call(this);
!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=null;t.addEventListener("click",(function(n){(o=setInterval((function(){console.log(o),document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))&&(t.disabled=!0,e.disabled=!1)})),e.addEventListener("click",(function(n){clearInterval(o),t.disabled=!1,e.disabled=!0,e.style.backgroundColor=""}))}();
//# sourceMappingURL=01-color-switcher.c5fb97a4.js.map
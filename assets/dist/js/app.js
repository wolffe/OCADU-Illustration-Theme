$(function(){"use strict";var e={init:function(){this._fastClick(),this._ocadLoader(),this._ocadHeadroom(),this._ocadPanelSelectButtons(),this._ocadEmojiCanvas(),this._ocadHomeLoader(),this._ocadPanelsClose(),this._ocadGalleryNav(),this._ocadUIbinding()},settings:{loader:$(".loader"),masonryContainer:"#pack-content",masonryContainerHome:"#illustrators",homeTitle:$(".title"),header:$(".heading-inner"),nextItem:$(".nav-next a"),prevItem:$(".nav-previous a"),logo:$(".logo"),searchField:$(".search-field"),imageModal:$("#image-modal"),searchContainer:$(".search-container"),imageModalTip:$(".image-modal-tip")},_fastClick:function(){FastClick.attach(document.body)},_ocadLoader:function(t){t===!1?e.settings.loader.velocity("fadeOut","fast"):e.settings.loader.velocity("fadeIn","fast")},_ocadMasonry:function(e){var t=document.querySelector(e),a=new Masonry(t,{itemSelector:".gallery-item",transitionDuration:"0",percentPosition:!0});a.layout()},_ocadCascade:function(e,t){for(var a=document.querySelectorAll(e),o=function(e){$(e).addClass("loaded")},n=0,i=a.length;i>n;n++)$(a[n]).delay(t*n).velocity({opacity:1,scale:1},{complete:o})},_ocadSearch:function(){var t=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("title"),queryTokenizer:Bloodhound.tokenizers.whitespace,remote:{url:"/wp-json/posts?type=illustrator&filter[posts_per_page]=100&filter[s]=%QUERY",wildcard:"%QUERY"}});t.initialize(),e.settings.searchField.typeahead({hint:!1},{name:"illustratorName",displayKey:"title",source:t,limit:10}).on("typeahead:select",function(e,t){window.location.href=t.link})},_ocadHeadroom:function(t){void 0===t?(t=e.settings.header,e.settings.header.mouseover(function(){$(this).removeClass("sticky-unpinned")})):t=$(t),t.headroom({tolerance:{up:10,down:5},classes:{initial:"sticky",pinned:"sticky-pinned",unpinned:"sticky-unpinned",top:"sticky-top",notTop:"sticky-not-top"}})},_ocadPanelSelect:function(t){var a=$(t).data("panel");$(t).hasClass("reverse")?($(t).removeClass("reverse"),e._ocadPanelsClose()):($(".panel").removeClass("visible"),$(".header-item").addClass("inactive").removeClass("reverse"),e.settings.logo.addClass("invert"),$(t).addClass("reverse").removeClass("inactive"),$("."+a).addClass("visible").attr("aria-hidden",!1).focus(),"year-select"===a&&$(".year-item").each(function(e){var t=$(this);t.delay(100*e).velocity({opacity:1,display:"flex"},{complete:function(){t.addClass("loaded")}})}))},_ocadPanelSelectButtons:function(){e._ocadSearch(),$(".header-item").on("click",function(){e._ocadPanelSelect(this)})},_ocadShuffle:function(e){for(var t=function(){for(var t=[],a=e.length;a--;)t[t.length]=e[a];return t}(),a=function(){for(var e=t.length,a=[];e--;){var o=Math.floor(Math.random()*t.length),n=t[o].cloneNode(!0);t.splice(o,1),a[a.length]=n}return a}(),o=e.length;o--;)e[o].parentNode.insertBefore(a[o],e[o].nextSibling),e[o].parentNode.removeChild(e[o])},_ocadHomeLoader:function(){$("body").hasClass("home")&&($(".title-primary").fitText(1.05),$(".title-secondary").fitText(2.25,{minFontSize:"13px"}),e._ocadShuffle(document.querySelectorAll(".gallery-item")),e.settings.homeTitle.velocity({opacity:1,scale:1,display:"flex"},"slow",function(){$(this).addClass("loaded").removeAttr("style"),e._ocadHeadroom(".title")})),$(e.settings.masonryContainerHome).hasClass("illustrators-grid")&&$(e.settings.masonryContainerHome).imagesLoaded().done(function(){e._ocadMasonry(e.settings.masonryContainerHome),e._ocadCascade(".illustrator",100)})},_ocadEmojiCanvas:function(){if($("body").hasClass("error404"))for(var e=function(){var e=$(window).height()-50,t=$(window).width()-50,a=Math.floor(Math.random()*e)/e*100,o=Math.floor(Math.random()*t)/t*100;return[a,o]},t=document.querySelectorAll(".emoji"),a=0,o=t.length;o>a;a++){var n=Math.round(1*Math.random());n=n>0?"big":"normal";var i=e();$(t[a]).addClass(n).css({top:i[0]+"%",left:i[1]+"%"})}},_ocadPanelsClose:function(){$(".header-item").removeClass("reverse inactive"),e.settings.imageModal.velocity("fadeOut",{duration:180}),e.settings.logo.removeClass("invert"),$(e.settings.masonryContainer).velocity({scale:1,blur:0,opacity:1},"fast"),$(".panel").hasClass("visible")&&($(".panel").removeClass("visible").attr("aria-hidden",!0).blur(),$(".year-item").velocity({opacity:0,display:"flex"},"fast").removeClass("loaded"))},_ocadPanelsCloseSelective:function(t){!$(t.target).closest("#full-image").length&&e.settings.imageModal.is(":visible")&&(e.settings.imageModal.velocity("fadeOut",{duration:180}),$(e.settings.masonryContainer).velocity({scale:1,blur:0,opacity:1},"fast"),$(".illustrator-nav-single, .illustrator-meta-wrapper").removeClass("inactive")),!$(t.target).closest(".panel, .header-item").length&&$(".panel").hasClass("visible")&&e._ocadPanelsClose()},_ocadGalleryNav:function(){function t(t){e._ocadLoader(!0),"reverse"===t?--i:++i,i===n.length&&(i=0),-1===i&&(i=n.length-1),o=n[i],$("#full-image").velocity({opacity:0},{duration:"fast",complete:function(){var t=new Image;t.src=o,t.onload=function(){e._ocadLoader(!1),$("#full-image").attr("src",this.src).velocity({opacity:1},"fast")}}})}var a,o,n=[],i=0,s=document.querySelectorAll(".gallery-icon-anchor");$("body").hasClass("single")&&($(".illustrator-meta-wrapper-inner").velocity("fadeIn"),$(e.settings.masonryContainer).imagesLoaded().done(function(){e._ocadMasonry(e.settings.masonryContainer),e._ocadCascade(".gallery-item",100);for(var t=0,a=s.length;a>t;t++){$(s[t]).data("index",t);var o=$(s[t]).attr("href");n.push(o)}}));var l=function(e){$(".image-modal-container").html(function(){var t=new Image;return t.alt="Full illustration",t.className="image-modal-full-image",t.id="full-image",t.src=e,t})};$(e.settings.masonryContainer).on("click",".gallery-icon-anchor",function(t){t.preventDefault(),e._ocadLoader(!0),a=$(this).attr("href"),i=$(this).data("index"),l(a),$("#full-image").imagesLoaded().done(function(){e._ocadLoader(!1),e._ocadCursor(),e.settings.imageModal.velocity("fadeIn",{duration:180,begin:function(){$(e.settings.masonryContainer).velocity({scale:.99,blur:2,opacity:.25},"fast"),$(".illustrator-nav-single, .illustrator-meta-wrapper").addClass("inactive")},complete:function(){$("#full-image").velocity({opacity:1},"fast")}})})}),$(".image-modal-container").on("click","img",function(){t()}),$(document).keydown(function(a){e.settings.imageModal.is(":visible")&&(39===a.keyCode&&t(),37===a.keyCode&&t("reverse"))})},_ocadCursor:function(){$(".image-modal-container").mouseover(function(t){$(t.target).closest("#full-image").length||e.settings.imageModalTip.html("Close")}).mousemove(function(t){$(t.target).closest("#full-image").length||e.settings.imageModalTip.css("top",t.clientY+5+"px").css("left",t.clientX+5+"px")}).mouseout(function(){e.settings.imageModalTip.html("")})},_ocadUIbinding:function(){$(".close-panel").on("click",e._ocadPanelsClose),$(document).on("click",e._ocadPanelsCloseSelective).keydown(function(t){27===t.keyCode&&e._ocadPanelsClose(),e.settings.imageModal.is(":visible")||(37===t.keyCode&&e.settings.prevItem.length?window.location=e.settings.prevItem.attr("href"):39===t.keyCode&&e.settings.nextItem.length&&(window.location=e.settings.nextItem.attr("href")))})}};$(window).load(function(){e._ocadLoader(!1)}),e.init()});
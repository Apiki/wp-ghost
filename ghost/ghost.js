!function(a){function b(a,b){return b=b||{},a?(b.cssProperty=b.cssProperty||"font-family",d(a,b)):(b.debug&&f([a," is not an HTML element"]),{})}function c(a){return b(this[0],a)}function d(b,c){var d,g={};if(d=c.pseudoEl?a.getComputedStyle(b,c.pseudoEl).getPropertyValue(c.cssProperty):a.getComputedStyle(b).getPropertyValue(c.cssProperty),null===d)return c.debug&&f(["CSS value for ",b," with params ",c," is empty"]),g;d=e(d);try{g=JSON.parse(d)}catch(a){c.debug&&f(["Cannot parse JSON from ",b," with params ",c])}return g}function e(a){return a=a.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g,"")}function f(b){a.console&&console.error&&console.error(b)}var g=!1;"function"==typeof a.jQuery&&($.fn.sassToJs=c,$.fn.sassToJsOriginal=b,g=!0),"function"==typeof a.angular&&(angular.element.prototype.sassToJs=c,angular.element.prototype.sassToJsOriginal=b,g=!0),"function"==typeof define&&define.amd&&(define(function(){return b}),g=!0),"undefined"!=typeof module&&module.exports&&(module.exports=b,g=!0),g||(a.sassToJs=b)}(window),MONKEY.ComponentWrapper("DataJson",function(a,b,c){a.fn.init=function(){this.render()},a.fn.render=function(){var a=this.$el.sassToJs({pseudoEl:":before",cssProperty:"content"});this.$el.html(MONKEY.Templates[this.template](a))}}),MONKEY.ComponentWrapper("GridInfo",function(a,b,c){a.fn.init=function(){this.innerHeight=null,this.top=null,this.addEventListener()},a.fn.addEventListener=function(){MONKEY.vars.win.on("load",this._onLoad.bind(this))},a.fn._onLoad=function(){this.innerHeight=this.$el.innerHeight(),this.top=this.$el.offset().top,this.elements.gridContainer.width(this.$el.width()),MONKEY.vars.win.on("scroll",this._onScroll.bind(this))},a.fn._onScroll=function(){return MONKEY.vars.win.scrollTop()>=this.top?(this.$el.height(this.innerHeight),void this.$el.addClass("grid-fixed")):void this.$el.removeClass("grid-fixed")}}),MONKEY.ComponentWrapper("Icons",function(a,b,c){a.fn.init=function(){this.message=c(".gh-message-wrap"),this.addEventListener()},a.fn.render=function(a){this.$el.html(MONKEY.Templates.icons(a))},a.fn.addEventListener=function(){c.getJSON("../assets/fonts/selection.json",this.render.bind(this)),this.addEvent("click","info")},a.fn.setName=function(a){c(".gh-message").text(a.attr("class"))},a.fn._onClickInfo=function(a){var b=c(a.target);return b.hasClass("active")?(b.removeClass("active"),void this.message.removeClass("active")):(c(".gh-icons i").removeClass("active"),this.setName(b),this.message.addClass("active"),void b.addClass("active"))}}),MONKEY.ComponentWrapper("Messages",function(a,b,c){a.fn.init=function(){this.createElements()},a.fn.createElements=function(){this.$el.append('<div class="gh-message">')}}),jQuery(function(a){riot.mount("*")});
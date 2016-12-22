riot.tag2("colors",'<h2 class="gh-title"> COLORS </h2><div class="gh-color-list"><div class="gh-color" each="{variations, color in colors}"><div class="gh-label">{color}</div><ul><li each="{value, name in variations}"><div class="gh-color-background" riot-style="background: {value}"></div><div class="gh-color-info"><div class="gh-color-hex">{value}</div><div class="gh-color-name">{name}</div></div></li></ul></div></div>',"","",function(a){this.on("mount",function(){this.initData()}),this.initData=function(){this.colors=$(this.root).sassToJs({pseudoEl:":before",cssProperty:"content"}),this.update()}.bind(this)}),riot.tag2("fonts",'<h2 class="gh-title"> FONTS </h2><div class="gh-fonts-list"><div class="gh-font" each="{variations, font in fonts}"><strong>{font}</strong><div class="gh-font-info {\'gh-\' + value}" each="{value, name in variations}"><strong>{name}</strong><span>{value}</span></div></div></div>',"","",function(a){this.on("mount",function(){this.initData()}),this.initData=function(){this.fonts=$(this.root).sassToJs({pseudoEl:":before",cssProperty:"content"}),this.update()}.bind(this)}),riot.tag2("icons",'<ul><li each="{icon in icons}" onclick="{showInfo}"><i class="{prefix + icon.properties.name} {active: icon.active}" data-name="{prefix + icon.properties.name}"></i></li></ul><div class="gh-message-wrap {active: message.active}"><div class="gh-message">{message.name}</div></div>',"","",function(a){var b=this;this.message={},this.showInfo=function(a){return a.item.icon.active?(a.item.icon.active=!1,void(this.message.active=!1)):(this.inactiveItems(),a.item.icon.active=!0,this.message.active=!0,void(this.message.name=this.prefix+a.item.icon.properties.name))}.bind(this),this.inactiveItems=function(){this.icons.forEach(function(a){a.active=!1})}.bind(this),this.on("mount",function(){this.initData()}),this.initData=function(){$.getJSON("assets/fonts/selection.json",function(a){b.icons=a.icons,b.prefix=a.preferences.fontPref.prefix,b.update()})}.bind(this)}),jQuery(function(a){a(".gh-components").masonry({gutter:".gh-gutter",itemSelector:".gh-box",percentPosition:!0})}),jQuery(function(a){riot.mount("*")});
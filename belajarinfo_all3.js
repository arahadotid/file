var x=document.querySelectorAll(".lazyloading"),i;for(i=0;i<x.length;i++)x[i].innerHTML=x[i].innerHTML.replace("<!--","").replace("-->","");

$(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$('#back-to-top').hide().click(function() {
    $('html, body').animate({scrollTop:0}, 1000);
    return false;
});

!function(n){n.fn.dropdowns=function(e){e=n.extend({toggleWidth:768},e);var t=document.body.clientWidth,i=function(){t<e.toggleWidth?(n(".toggleMenu").css("display","inline-block"),n(".toggleMenu").hasClass("active")?n(".nav").show():n(".nav").hide(),n(".nav li").unbind("mouseenter mouseleave"),n(".nav li a.parent").unbind("click").bind("click",function(e){e.preventDefault(),n(this).parent("li").toggleClass("hover")})):t>=e.toggleWidth&&(n(".toggleMenu").css("display","none"),n(".nav").show(),n(".nav li").removeClass("hover"),n(".nav li a").unbind("click"),n(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){n(this).toggleClass("hover")}))};return this.each(function(){n(".toggleMenu").click(function(e){e.preventDefault(),n(this).toggleClass("active"),n(this).next(".nav").toggle(),i()}),i(),n(".nav li a").each(function(){n(this).next().length>0&&n(this).addClass("parent")}),n(window).bind("resize orientationchange",function(){t=document.body.clientWidth,i()})})}}(jQuery);
$(".dropdowns").dropdowns();

!function(a){"use strict";var b=function(b,c){var d=this;d.element=b,d.$element=a(b),d.tabs=d.$element.children(),d.options=a.extend({},a.fn.mtabs.defaults,c),d.current_tab=0,d.init()};b.prototype={init:function(){var a=this;a.tabs.length&&(a.build(),a.buildTabMenu())},build:function(){var b=this,c=b.options,d=c.tab_text_el,e=c.container_class;b.tab_names=[],b.$wrapper=b.$element.wrapInner('<div class="'+e+'" />').find("."+e),b.tabs.wrapAll('<div class="'+c.tabs_container_class+'" />'),b.tabs.each(function(c,e){var f,g=a(e),h=d;f=g.find(h).filter(":first").hide().text(),b.tab_names.push(f)}),a.isFunction(c.onReady)&&c.onReady.call(b.element)},buildTabMenu:function(){for(var b,c=this,d=c.options,e=d.tabsmenu_el,f=c.tab_names,g="<"+e+' class="'+d.tabsmenu_class+'">',h=0,i=f.length,j=function(){var a=arguments;return d.tmpl.tabsmenu_tab.replace(/\{[0-9]\}/g,function(b){var c=Number(b.replace(/\D/g,""));return a[c]||""})};i>h;h++)g+=j(h+1,f[h]);g+="</"+e+">",c.$tabs_menu=a(g).prependTo(c.$wrapper),b=c.$tabs_menu.find(":first")[0].nodeName.toLowerCase(),c.$tabs_menu.on("click",b,function(b){var d=a(this),e=d.index();c.show(e),b.preventDefault()}).find(":first").trigger("click")},show:function(b){var c=this,d=c.options,e=d.active_tab_class;c.tabs.hide().filter(":eq("+b+")").show(),c.$tabs_menu.children().removeClass(e).filter(":eq("+b+")").addClass(e),a.isFunction(d.onTabSelect)&&b!==c.current_tab&&d.onTabSelect.call(c.element,b),c.current_tab=b},destroy:function(){var a=this,b=a.options.tab_text_el;a.$tabs_menu.remove(),a.tabs.unwrap().unwrap(),a.tabs.removeAttr("style"),a.tabs.children(b+":first").removeAttr("style"),a.$element.removeData("mtabs")}},a.fn.mtabs=function(c,d){return this.each(function(){var e,f=a(this),g=f.data("mtabs");e="object"==typeof c&&c,g||f.data("mtabs",g=new b(this,e)),"string"==typeof c&&g[c](d)})},a.fn.mtabs.defaults={container_class:"tabs",tabs_container_class:"tabs-content",active_tab_class:"active-tab",tab_text_el:"h1, h2, h3, h4, h5, h6",tabsmenu_class:"tabs-menu",tabsmenu_el:"ul",tmpl:{tabsmenu_tab:'<li class="tab-{0}"><span>{1}</span></li>'},onTabSelect:null}}(window.jQuery,window,document);

(function(a,c,d){a.fn.tinyNav=function(e){var b=a.extend({active:"selected",header:"",label:""},e);return this.each(function(){d++;var e=a(this),h="tinynav"+d,k=".l_"+h,g=a("<select/>").attr("id",h).addClass("tinynav "+h);if(e.is("ul,ol")){""!==b.header&&g.append(a("<option/>").text(b.header));var f="";e.addClass("l_"+h).find("a").each(function(){f+='<option value="'+a(this).attr("href")+'">';var b;for(b=0;b<a(this).parents("ul, ol").length-1;b++)f+="- ";f+=a(this).text()+"</option>"});g.append(f);b.header||
g.find(":eq("+a(k+" li").index(a(k+" li."+b.active))+")").attr("selected",!0);g.change(function(){c.location.href=a(this).val()});a(k).after(g);b.label&&g.before(a("<label/>").attr("for",h).addClass("tinynav_label "+h+"_label").append(b.label))}})}})(jQuery,this,0);

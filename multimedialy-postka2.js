/* recent post */
function recentPosts(e){if(document.getElementById("recent-posts")){for(var t,s,r=e.feed.entry,n="",a=document.getElementById("recent-posts"),l=0;l<numPosts;l++){for(var c=0;c<numPosts;c++)if("alternate"==r[l].link[c].rel){s=r[l].link[c].href;break}"media$thumbnail"in r[l]?u=r[l].media$thumbnail.url.replace(/.*?:\/\//g,"https://").replace(/\/s[0-9]+\-c/g,"/s100"):u="https://4.bp.blogspot.com/-8kN5uucyxDI/XD6vAIw18dI/AAAAAAAA7kU/uTwzqq0EbvgGyzRaNuLpjzARZIKOWbVoACLcBGAs/s100/no-thumbnail.jpg";var t=r[l].title.$t;n+='<li class="recent-posts clear"><div class="recent-thumb"><img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="'+u+'" title="'+t+'" alt="'+t+'" width="16" class="lazyload" height="9" loading="lazy"></div><div class="title_post"><a href="'+s+'" title="'+t+'" target="_blank">'+t+"</a></div></li>"}a.innerHTML=n}}var rcp=document.createElement("script");rcp.src=homePage+"/feeds/posts/summary?alt=json-in-script&orderby=published&max-results="+numPosts+"&callback=recentPosts",document.getElementsByTagName("head")[0].appendChild(rcp);

/* lazyload.js */
!function(e,t){var a=t(e,e.document);e.lazySizes=a,"object"==typeof module&&module.exports&&(module.exports=a)}("undefined"!=typeof window?window:{},function(e,t){"use strict";var a,n;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};n=e.lazySizesConfig||e.lazysizesConfig||{};for(t in a)t in n||(n[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:n,noSupport:!0};var i=t.documentElement,o=e.Date,s=e.HTMLPictureElement,l="addEventListener",r="getAttribute",c=e[l],d=e.setTimeout,m=e.requestAnimationFrame||d,u=e.requestIdleCallback,f=/^picture$/i,p=["load","error","lazyincluded","_lazyloaded"],h={},g=Array.prototype.forEach,y=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[r]("class")||"")&&h[t]},v=function(e,t){y(e,t)||e.setAttribute("class",(e[r]("class")||"").trim()+" "+t)},b=function(e,t){var a;(a=y(e,t))&&e.setAttribute("class",(e[r]("class")||"").replace(a," "))},z=function(e,t,a){var n=a?l:"removeEventListener";a&&z(e,t),p.forEach(function(a){e[n](a,t)})},A=function(e,n,i,o,s){var l=t.createEvent("Event");return i||(i={}),i.instance=a,l.initEvent(n,!o,!s),l.detail=i,e.dispatchEvent(l),l},C=function(t,a){var i;!s&&(i=e.picturefill||n.pf)?(a&&a.src&&!t[r]("srcset")&&t.setAttribute("srcset",a.src),i({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,a){for(a=a||e.offsetWidth;a<n.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},k=function(){var e,a,n=[],i=[],o=n,s=function(){var t=o;for(o=n.length?i:n,e=!0,a=!1;t.length;)t.shift()();e=!1},l=function(n,i){e&&!i?n.apply(this,arguments):(o.push(n),a||(a=!0,(t.hidden?d:m)(s)))};return l._lsFlush=s,l}(),N=function(e,t){return t?function(){k(e)}:function(){var t=this,a=arguments;k(function(){e.apply(t,a)})}},T=function(e){var t,a=0,i=n.throttleDelay,s=n.ricTimeout,l=function(){t=!1,a=o.now(),e()},r=u&&s>49?function(){u(l,{timeout:s}),s!==n.ricTimeout&&(s=n.ricTimeout)}:N(function(){d(l)},!0);return function(e){var n;(e=!0===e)&&(s=33),t||(t=!0,n=i-(o.now()-a),0>n&&(n=0),e||9>n?r():d(r,n))}},x=function(e){var t,a,n=99,i=function(){t=null,e()},s=function(){var e=o.now()-a;n>e?d(s,n-e):(u||i)(i)};return function(){a=o.now(),t||(t=d(s,n))}},_=function(){var s,m,u,p,h,w,_,S,L,M,I,P,R=/^img$/i,F=/^iframe$/i,$="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),W=0,H=0,O=0,D=-1,j=function(e){O--,(!e||0>O||!e.target)&&(O=0)},Q=function(e){return null==P&&(P="hidden"==E(t.body,"visibility")),P||"hidden"!=E(e.parentNode,"visibility")&&"hidden"!=E(e,"visibility")},U=function(e,a){var n,o=e,s=Q(e);for(S-=a,I+=a,L-=a,M+=a;s&&(o=o.offsetParent)&&o!=t.body&&o!=i;)(s=(E(o,"opacity")||1)>0)&&"visible"!=E(o,"overflow")&&(n=o.getBoundingClientRect(),s=M>n.left&&L<n.right&&I>n.top-1&&S<n.bottom+1);return s},q=function(){var e,o,l,c,d,u,f,h,g,y,v,b,z=a.elements;if((p=n.loadMode)&&8>O&&(e=z.length)){for(o=0,D++;e>o;o++)if(z[o]&&!z[o]._lazyRace)if(!$||a.prematureUnveil&&a.prematureUnveil(z[o]))ee(z[o]);else if((h=z[o][r]("data-expand"))&&(u=1*h)||(u=H),y||(y=!n.expand||n.expand<1?i.clientHeight>500&&i.clientWidth>500?500:370:n.expand,a._defEx=y,v=y*n.expFactor,b=n.hFac,P=null,v>H&&1>O&&D>2&&p>2&&!t.hidden?(H=v,D=0):H=p>1&&D>1&&6>O?y:W),g!==u&&(w=innerWidth+u*b,_=innerHeight+u,f=-1*u,g=u),l=z[o].getBoundingClientRect(),(I=l.bottom)>=f&&(S=l.top)<=_&&(M=l.right)>=f*b&&(L=l.left)<=w&&(I||M||L||S)&&(n.loadHidden||Q(z[o]))&&(m&&3>O&&!h&&(3>p||4>D)||U(z[o],u))){if(ee(z[o]),d=!0,O>9)break}else!d&&m&&!c&&4>O&&4>D&&p>2&&(s[0]||n.preloadAfterLoad)&&(s[0]||!h&&(I||M||L||S||"auto"!=z[o][r](n.sizesAttr)))&&(c=s[0]||z[o]);c&&!d&&ee(c)}},V=T(q),G=function(e){var t=e.target;return t._lazyCache?void delete t._lazyCache:(j(e),v(t,n.loadedClass),b(t,n.loadingClass),z(t,X),A(t,"lazyloaded"),void 0)},K=N(G),X=function(e){K({target:e.target})},J=function(e,t){try{e.contentWindow.location.replace(t)}catch(a){e.src=t}},Y=function(e){var t,a=e[r](n.srcsetAttr);(t=n.customMedia[e[r]("data-media")||e[r]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},Z=N(function(e,t,a,i,o){var s,l,c,m,p,h;(p=A(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(a?v(e,n.autosizesClass):e.setAttribute("sizes",i)),l=e[r](n.srcsetAttr),s=e[r](n.srcAttr).replace(/.*?:\/\//g,"https://cdn.statically.io/img/"),o&&(c=e.parentNode,m=c&&f.test(c.nodeName||"")),h=t.firesLoad||"src"in e&&(l||s||m),p={target:e},v(e,n.loadingClass),h&&(clearTimeout(u),u=d(j,2500),z(e,X,!0)),m&&g.call(c.getElementsByTagName("source"),Y),l?e.setAttribute("srcset",l):s&&!m&&(F.test(e.nodeName)?J(e,s):e.src=s),o&&(l||m)&&C(e,{src:s})),e._lazyRace&&delete e._lazyRace,b(e,n.lazyClass),k(function(){var t=e.complete&&e.naturalWidth>1;h&&!t||(t&&v(e,"ls-is-cached"),G(p),e._lazyCache=!0,d(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&O--},!0)}),ee=function(e){if(!e._lazyRace){var t,a=R.test(e.nodeName),i=a&&(e[r](n.sizesAttr)||e[r]("sizes")),o="auto"==i;(!o&&m||!a||!e[r]("src")&&!e.srcset||e.complete||y(e,n.errorClass)||!y(e,n.lazyClass))&&(t=A(e,"lazyunveilread").detail,o&&B.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,O++,Z(e,t,o,i,a))}},te=x(function(){n.loadMode=3,V()}),ae=function(){3==n.loadMode&&(n.loadMode=2),te()},ne=function(){if(!m){if(o.now()-h<999)return void d(ne,999);m=!0,n.loadMode=3,V(),c("scroll",ae,!0)}};return{_:function(){h=o.now(),a.elements=t.getElementsByClassName(n.lazyClass),s=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),c("scroll",V,!0),c("resize",V,!0),e.MutationObserver?new MutationObserver(V).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[l]("DOMNodeInserted",V,!0),i[l]("DOMAttrModified",V,!0),setInterval(V,999)),c("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[l](e,V,!0)}),/d$|^c/.test(t.readyState)?ne():(c("load",ne),t[l]("DOMContentLoaded",V),d(ne,2e4)),a.elements.length?(q(),k._lsFlush()):V()},checkElems:V,unveil:ee,_aLSL:ae}}(),B=function(){var e,a=N(function(e,t,a,n){var i,o,s;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),f.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),o=0,s=i.length;s>o;o++)i[o].setAttribute("sizes",n);a.detail.dataAttr||C(e,a.detail)}),i=function(e,t,n){var i,o=e.parentNode;o&&(n=w(e,o,n),i=A(e,"lazybeforesizes",{width:n,dataAttr:!!t}),i.defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&a(e,o,i,n))},o=function(){var t,a=e.length;if(a)for(t=0;a>t;t++)i(e[t])},s=x(o);return{_:function(){e=t.getElementsByClassName(n.autosizesClass),c("resize",s)},checkElems:s,updateElem:i}}(),S=function(){!S.i&&t.getElementsByClassName&&(S.i=!0,B._(),_._())};return d(function(){n.init&&S()}),a={cfg:n,autoSizer:B,loader:_,init:S,uP:C,aC:v,rC:b,hC:y,fire:A,gW:w,rAF:k}});

/* lightbox */
function wrap(t, e, r) {
  for (var i = document.querySelectorAll(e), o = 0; o < i.length; o++) {
    var a = t + i[o].outerHTML + r;
    i[o].outerHTML = a
  }
}
wrap("<div class='zoomclick'>", ".post-body img", "</div>");
var container = document.getElementsByClassName("zoomclick");
for (var i = 0; i < container.length; i++) {
  //For each element in the container array, add an onclick event.
  container[i].onclick = function(event) {
    this.classList.toggle('active');
    var element = document.body;
    element.classList.toggle('flow');
  }
}

/* newer & older link by title */
if (/.+\.html(\?m=1)?$/.test(location.href)) {
  var olderLink = document.getElementById('Blog1_blog-pager-older-link');
  if (olderLink) {
    getPageTitle(olderLink, setOlderPageTitle);
    function setOlderPageTitle(data){
      setPageTitle(data, olderLink, '', '')
    };
  }
  var newerLink = document.getElementById('Blog1_blog-pager-newer-link');
  if (newerLink) {
    getPageTitle(newerLink, setNewerPageTitle);
    function setNewerPageTitle(data){
      setPageTitle(data, newerLink, '', '')
    };
  }
  // set the page title from feed data
  function setPageTitle(data, pageLink, prefix, suffix) {
    if (data.feed.entry) {
      if (data.feed.entry.length > 0) {
        var title = data.feed.entry[0].title.$t;
      }
    }
    if (title) {
      pageLink.innerHTML = prefix + title + suffix;
    }
  }
  // get entry data from the feed
  function getPageTitle(pageLink, callback) {
      var pathname = pageLink.getAttribute('href').replace(location.protocol + '//' + location.hostname, '');
      var script = document.createElement('script');
      script.src = '/feeds/posts/summary?alt=json-in-script&max-results=1&redirect=false&path='+pathname+'&callback='+callback.name+'';
      document.body.appendChild(script);
  }
}

/* disqus */
function loadDisqus(){var e=document.getElementById("disqus-loader");e.style.display="none";var e=document.getElementById("disqus-showhide");e.style.display="block";!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//"+disqus_shortname+".disqus.com/blogger_item.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}();}

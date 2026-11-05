/* CLRX multilingual navigation — globe language link at bottom of mobile drawer */
(function(){
  "use strict";
  const script=document.currentScript;
  const root=script.getAttribute("data-root")||"./";
  const english=document.documentElement.lang.toLowerCase().startsWith("en");
  const base=new URL(root,window.location.href).pathname;
  const route=window.location.pathname.slice(base.length).replace(/^\/+|index\.html$/g,"");
  const normalized=route.startsWith("en/")?route.slice(3):route;
  const languageHref=root+(english?"":"en/")+normalized;
  const prefix=root+(english?"en/":"");
  const nav=[["ABOUT US","about/"],["TECHNOLOGY","technology/"],["PRODUCTS","products/"],["SCIENCE","science/"],["CONTACT","contact/"]];
  const items=()=>nav.map(([name,path])=>'<a href="'+prefix+path+'"'+(normalized===path||normalized.startsWith(path)&&path==="products/"?' aria-current="page"':'')+'>'+name+'</a>').join("");
  const langLabel=english?"한국어":"English";
  const aria=english?"Switch to Korean":"Switch to English";
  const globe='<svg class="globe-icon" viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 4 5.6 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.6-4-9s1.4-6.4 4-9Z"/></svg>';
  const node=document.getElementById("shared-header");
  if(!node)return;
  node.outerHTML='<header class="site-header" id="header">'+
   '<div class="header-inner">'+
   '<a class="header-logo" href="'+prefix+'" aria-label="CLRX home"><img src="'+root+'assets/clrx-logo.svg" alt="CLRX"></a>'+
   '<nav class="desktop-nav" aria-label="Main navigation">'+items()+'</nav>'+
   '<div class="header-side"><a class="lang globe-lang" href="'+languageHref+'" aria-label="'+aria+'">'+globe+'<span>'+(english?"KR":"EN")+'</span></a></div>'+
   '<button class="menu-toggle" id="menuToggle" aria-label="'+(english?"Open menu":"메뉴 열기")+'" aria-expanded="false" aria-controls="mobileNav">☰</button>'+
   '</div><nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">'+
   items()+'<div class="mobile-language"><a class="mobile-language-link" href="'+languageHref+'" aria-label="'+aria+'">'+globe+'<span>'+langLabel+'</span><span class="mobile-language-arrow" aria-hidden="true">↗</span></a></div>'+
   '</nav></header>';
})();

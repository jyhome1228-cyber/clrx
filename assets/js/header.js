/* Unified multilingual CLRX navigation */
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
  const items=()=>nav.map(([name,path])=>'<a href="'+prefix+path+'"'+(normalized===path||normalized.startsWith(path) && path==="products/"?' aria-current="page"':'')+'>'+name+'</a>').join("");
  const node=document.getElementById("shared-header");
  if(!node)return;
  node.outerHTML='<header class="site-header" id="header">'+
   '<div class="header-inner">'+
   '<a class="header-logo" href="'+prefix+'" aria-label="CLRX home"><img src="'+root+'assets/clrx-logo.svg" alt="CLRX"></a>'+
   '<nav class="desktop-nav" aria-label="Main navigation">'+items()+'</nav>'+
   '<div class="header-side"><a class="lang" href="'+languageHref+'" aria-label="'+(english?"한국어 사이트로 이동":"Switch to English")+'">'+(english?"KR":"EN")+'</a></div>'+
   '<button class="menu-toggle" id="menuToggle" aria-label="'+(english?"Open menu":"메뉴 열기")+'" aria-expanded="false" aria-controls="mobileNav">☰</button>'+
   '</div><nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">'+items()+'</nav></header>';
})();

/* CLRX shared header. A single source controls navigation on all pages. */
(function () {
  "use strict";
  const script = document.currentScript;
  const root = script.getAttribute("data-root") || "./";
  const nav = [
    ["ABOUT US", "about/"],
    ["TECHNOLOGY", "technology/"],
    ["PRODUCTS", "products/"],
    ["SCIENCE", "science/"],
    ["CONTACT", "contact/"]
  ];
  const items = (mobile) => nav.map(([label, path]) =>
    '<a href="' + root + path + '"' +
    (location.pathname.replace(/index\\.html$/, "").includes("/" + path) ? ' aria-current="page"' : "") +
    '>' + label + '</a>'
  ).join("");
  const el = document.getElementById("shared-header");
  if (!el) return;
  el.outerHTML = '<header class="site-header" id="header">' +
    '<div class="header-inner">' +
      '<a class="header-logo" href="' + root + '" aria-label="CLRX 홈"><img src="' + root + 'assets/clrx-logo.svg" alt="CLRX"></a>' +
      '<nav class="desktop-nav" aria-label="주 메뉴">' + items(false) + '</nav>' +
      '<div class="header-side"><span class="lang" title="영문 페이지 준비 중" aria-label="English, coming soon">EN</span></div>' +
      '<button class="menu-toggle" id="menuToggle" aria-label="메뉴 열기" aria-expanded="false" aria-controls="mobileNav">☰</button>' +
    '</div>' +
    '<nav class="mobile-nav" id="mobileNav" aria-label="모바일 메뉴">' + items(true) + '</nav>' +
  '</header>';
})();

/* CLRX global motion - progressively enhanced / accessible */
(function(){
"use strict";
const reduce=window.matchMedia("(prefers-reduced-motion: reduce)");
const root=document.querySelector("main");
if(!root||reduce.matches||!("IntersectionObserver" in window))return;
/* No per-element markup changes are required. */
const selectors=[
".hero-content",".tech-hero-inner",".sci-hero-content",".product-hero .container",
".subhero .container",".contact-aside",".contact-form-panel",
".home-split>div",".home-split>figure",
".story-split>div",".story-split>figure",".story-split>img",
".tech-split>.tech-copy",".tech-split>figure",
".sci-split>.sci-copy",".sci-split>figure",
".section-head",".page-title",".p-lead",
".product-card",".p-card",".p-future",".page-card",
".care-card",".science-item",".protocol-step",
".about-principles>article",".tech-flow-line>div",".sci-process>div",
".p-lines>div",".contact-types>div",".contact-field",".contact-consent",
".product-detail>div",".p-split>.p-body",".p-split>.p-visual"
];
const nodes=Array.from(new Set(Array.from(root.querySelectorAll(selectors.join(",")))));
const targets=nodes.filter(node=>!nodes.some(parent=>parent!==node&&parent.contains(node)));
if(!targets.length)return;
const observer=new IntersectionObserver(entries=>{
  for(const entry of entries){
    if(!entry.isIntersecting)continue;
    entry.target.classList.add("clrx-visible");
    observer.unobserve(entry.target);
  }
},{threshold:.1,rootMargin:"0px 0px -28px 0px"});
targets.forEach((node,index)=>{
  node.classList.add("clrx-reveal");
  node.style.setProperty("--clrx-motion-delay",String((index%3)*75)+"ms");
  if(node.getBoundingClientRect().top<window.innerHeight*.94)node.classList.add("clrx-visible");
  else observer.observe(node);
});
document.documentElement.classList.add("clrx-motion-ready");
const header=document.getElementById("header");
if(header){
  const update=()=>header.classList.toggle("scrolled",window.scrollY>24);
  update();
  window.addEventListener("scroll",update,{passive:true});
}
/* If preferences change while open, never leave content visually hidden. */
const onChange=()=>{if(reduce.matches){observer.disconnect();targets.forEach(node=>node.classList.add("clrx-visible"));document.documentElement.classList.remove("clrx-motion-ready");}};
if(reduce.addEventListener)reduce.addEventListener("change",onChange);
})();
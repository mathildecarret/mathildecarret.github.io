/* =========================================================
   LIENS YOUTUBE / VIMEO — REMPLACE LES URL CI-DESSOUS
   ========================================================= */
const VIDEO_LINKS={
  npi:"",            // NPI Productions
  burger:"",         // The Burger Place
  videos:"",         // Videos
  fiveYearsLater:"", // Five Years Later
  university:""      // Projets universitaires
};

const translations={
 fr:{home:"Home",projects:"Projects",about:"About me"},
 en:{home:"Home",projects:"Projects",about:"About me"},
 es:{home:"Inicio",projects:"Proyectos",about:"Sobre mí"}
};
function initMenu(){const b=document.querySelector(".menu"),l=document.querySelector(".links");if(!b)return;b.onclick=()=>l.classList.toggle("open")}
function initReveal(){const els=document.querySelectorAll(".reveal");if(!("IntersectionObserver"in window)){els.forEach(e=>e.classList.add("show"));return}const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");o.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>o.observe(e))}
function initVideos(){document.querySelectorAll("[data-video]").forEach(a=>{const k=a.dataset.video;a.href=VIDEO_LINKS[k]||"#";if(!VIDEO_LINKS[k])a.onclick=e=>{e.preventDefault();alert("Ajoute le lien YouTube/Vimeo dans script.js → VIDEO_LINKS."+k)}})}
document.addEventListener("DOMContentLoaded",()=>{initMenu();initReveal();initVideos()});
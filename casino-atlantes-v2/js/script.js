
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if(menuToggle){
  menuToggle.addEventListener("click",()=>{
    nav.classList.toggle("open");
    menuToggle.textContent = nav.classList.contains("open") ? "×" : "☰";
  });
}
document.querySelectorAll(".nav a").forEach(a=>{
  a.addEventListener("click",()=>nav?.classList.remove("open"));
});
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add("visible"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const top = document.createElement("a");
top.className="top-link"; top.href="#top"; top.textContent="↑"; top.setAttribute("aria-label","Retour en haut");
document.body.appendChild(top);
window.addEventListener("scroll",()=>{
  top.classList.toggle("show",window.scrollY>650);
});
document.querySelectorAll("a[href^='#']").forEach(a=>{
  a.addEventListener("click",e=>{
    const id=a.getAttribute("href");
    if(id.length>1 && document.querySelector(id)){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:"smooth"});
    }
  });
});

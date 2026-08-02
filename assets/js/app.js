/* ==========================================
   LEATHERCRAFTHUB V1
========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     Sticky Header
  ========================== */

  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  });

  /* ==========================
     Smooth Scroll
  ========================== */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

      const target = document.querySelector(this.getAttribute("href"));

      if(target){

        e.preventDefault();

        target.scrollIntoView({

          behavior:"smooth"

        });

      }

    });

  });

  /* ==========================
     Scroll Animation
  ========================== */

  const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

      if(entry.isIntersecting){

        entry.target.classList.add("show");

      }

    });

  },{

    threshold:.15

  });

  document.querySelectorAll(

".category-card,.product-card,.guide-card,.hero-card"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

  });

});

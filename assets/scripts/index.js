// The Intro sliders use GSAP Library
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// Intro Sliders and Home Page Content

tl.to(".welcome-text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".nav-home", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".home-name", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".home-text", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
tl.fromTo(".dc-hero", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=0.75");
tl.fromTo(" .home-list", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=0.5");
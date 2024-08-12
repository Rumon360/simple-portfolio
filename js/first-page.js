export default function FirstPageAnimation() {
  var tl = gsap.timeline();
  tl.from("#header", {
    y: "-20",
    opacity: 0,
    ease: "power2.out",
    duration: 0.8,
  });
  tl.to(".bound *", { y: 0, ease: "power2.out", duration: 1, stagger: 0.2 });
  tl.from("#hero-footer", {
    y: -10,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    delay: -0.2,
  });
}

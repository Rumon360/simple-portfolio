export default function TabsAnimation() {
  document.querySelectorAll(".tab").forEach((elm) => {
    const img = elm.querySelector("img");

    elm.addEventListener("mouseleave", () => {
      gsap.to(img, {
        opacity: 0,
        ease: "power3.out",
        duration: 0.2,
      });
    });
    elm.addEventListener("mouseenter", (event) => {
      const { clientX, clientY } = event;
      const tabRect = elm.getBoundingClientRect();
      const top = clientY - tabRect.top;
      const left = clientX - tabRect.left;
      gsap.set(img, { top: top, left: left });
      gsap.to(img, {
        opacity: 1,
        ease: "power3.out",
        duration: 0.2,
      });
    });
    elm.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const tabRect = elm.getBoundingClientRect();
      const top = clientY - tabRect.top;
      const left = clientX - tabRect.left;
      const rotate = gsap.utils.clamp(
        -20,
        20,
        ((clientX - tabRect.left) / tabRect.width) * 40 - 20
      );
      gsap.to(img, {
        top: top,
        left: left,
        rotate: rotate,
        ease: "power3.out",
        duration: 0.5,
      });
    });
  });
}

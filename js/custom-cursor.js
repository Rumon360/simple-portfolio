const cursor = document.querySelector("#cursor");

export default function CustomCursor() {
  const updateCursorSize = () => {
    const { width, height } = cursor.getBoundingClientRect();
    cursor.dataset.width = width;
    cursor.dataset.height = height;
  };

  updateCursorSize();
  window.addEventListener("resize", updateCursorSize);

  let timeout;
  let previousValue = { x: 0, y: 0 };

  const handleMouseMove = ({ clientX, clientY }) => {
    clearTimeout(timeout);

    const cursorWidth = parseFloat(cursor.dataset.width);
    const cursorHeight = parseFloat(cursor.dataset.height);

    const xDiff = clientX - previousValue.x;
    const yDiff = clientY - previousValue.y;
    previousValue = { x: clientX, y: clientY };

    const xScale = gsap.utils.clamp(0.8, 1.2, xDiff);
    const yScale = gsap.utils.clamp(0.8, 1.2, yDiff);

    timeout = setTimeout(() => {
      gsap.to(cursor, {
        duration: 0.5,
        left: clientX - cursorWidth / 2,
        top: clientY - cursorHeight / 2,
        scaleX: 1,
        scaleY: 1,
        ease: "power2.out",
      });
    }, 100);

    gsap.to(cursor, {
      duration: 0.5,
      left: clientX - cursorWidth / 2,
      top: clientY - cursorHeight / 2,
      scaleX: xScale,
      scaleY: yScale,
      ease: "power2.out",
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("resize", updateCursorSize);
    clearTimeout(timeout);
  };
}

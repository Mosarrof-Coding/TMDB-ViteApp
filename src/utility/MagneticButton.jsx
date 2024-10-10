import { useRef, useEffect } from "react";

const MagneticButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Set translation based on mouse position relative to button center
      button.style.transform = `translate(${x * 0.1}px, ${y * 0.6}px)`;
    };

    const handleMouseLeave = () => {
      const button = buttonRef.current;
      button.style.transform = "translate(0, 0)"; // Reset position on mouse leave
    };

    const button = buttonRef.current;
    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="py-2 px-1 mt-2 lg:mt-4 transition-all duration-100 group"
    >
      <span className="px-3 py-1 lg:py-1.5 bg-[#fff] shadow text-black font-bold rounded-full group-hover:shadow-lg transition-all duration-100 text-xs sm:text-sm lg:text-base">
        My Profile
      </span>
    </button>
  );
};

export default MagneticButton;

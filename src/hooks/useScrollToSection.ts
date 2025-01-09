export function useScrollToSection() {
  const scrollToSection = (id: string) => {
    const targetSection = document.getElementById(id);
    if (!targetSection) return;

    const headerHeight = 96; // 6rem = 96px
    const targetPosition = targetSection.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return { scrollToSection };
} 
// Entrance choreography for static content. One observer for the whole page,
// unobserved after first reveal so nothing keeps running behind the scroll.
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
const items = document.querySelectorAll<HTMLElement>(".reveal");

if (reduce.matches) {
  items.forEach((el) => el.classList.add("is-in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );
  items.forEach((el) => io.observe(el));
}

export {};

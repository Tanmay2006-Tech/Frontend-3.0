export const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);
export const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const animateValue = (
  element: HTMLElement,
  startValue: number,
  endValue: number,
  duration: number = 1000
) => {
  const startTime = performance.now();
  
  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    const current = startValue + (endValue - startValue) * eased;
    
    element.textContent = Math.floor(current).toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  
  requestAnimationFrame(animate);
};

export const observeIntersection = (
  element: Element,
  callback: (isVisible: boolean) => void,
  threshold = 0.3
) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      callback(entry.isIntersecting);
    },
    { threshold }
  );
  
  observer.observe(element);
  return observer;
};

export const getScrollProgress = (element: Element): number => {
  const rect = element.getBoundingClientRect();
  const elementTop = rect.top;
  const elementBottom = rect.bottom;
  const viewportHeight = window.innerHeight;
  
  if (elementBottom < 0 || elementTop > viewportHeight) return 0;
  
  const elementHeight = rect.height;
  const scrolled = viewportHeight - elementTop;
  return Math.min(scrolled / (viewportHeight + elementHeight), 1);
};

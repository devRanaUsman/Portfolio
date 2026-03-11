import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section-animate');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Trigger skill bars animation
          if (entry.target.closest('#skills')) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => bar.classList.add('animate'));
          }
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);
};

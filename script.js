document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running'; // inicia animação
          observer.unobserve(entry.target); // para de observar para não repetir
        }
      });
    },
    { threshold: 0.1 } // quando 10% do elemento estiver visível
  );

  elementos.forEach((el, index) => {
    el.style.animationPlayState = 'paused'; // pausa no início
    el.style.animationDelay = `${index * 0.2}s`; // delay gradual
    observer.observe(el); // começa a observar
  });
});

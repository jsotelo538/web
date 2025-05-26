 
  var typed = new Typed('#element', {
    strings: ['desarrollador web','freelancer','creativo'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
  });

   const toggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const navLinks = navbar.querySelectorAll('a'); // Todos los enlaces del menú

  // Abrir/cerrar menú con botón
  toggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
    toggle.textContent = navbar.classList.contains('show') ? '✖' : '☰';
  });

  // Cerrar menú al hacer clic en cualquier enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('show');
      toggle.textContent = '☰';
    });
  });


 const scrollContainer = document.getElementById("scrollContainer");
  const leftBtn = document.querySelector(".scroll-left");
  const rightBtn = document.querySelector(".scroll-right");

  // Scroll con botones
  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 300;
  });
  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 300;
  });

  // Scroll con mouse (drag horizontal)
  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 1.5; // Velocidad del drag
    scrollContainer.scrollLeft = scrollLeft - walk;
  });

    const topBtn = document.querySelector(".top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });
  

    document.querySelectorAll('.btn-plan').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      alert('Gracias por elegir un plan. Te contactaremos pronto.');
    });
  });


  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectRows = document.querySelectorAll('.portfolio-content .row');

  function resetDisplay() {
    projectRows.forEach(row => row.style.display = 'none');
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Activar botón
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      resetDisplay();

      if (filter === 'all') {
        let shown = 0;
        projectRows.forEach(row => {
          if (shown < 3) {
            row.style.display = 'block';
            shown++;
          }
        });
      } else {
        projectRows.forEach(row => {
          if (row.classList.contains(filter)) {
            row.style.display = 'block';
          }
        });
      }
    });
  });

  // Mostrar solo los primeros 3 al cargar
  window.addEventListener('DOMContentLoaded', () => {
    resetDisplay();
    let shown = 0;
    projectRows.forEach(row => {
      if (shown < 3) {
        row.style.display = 'block';
        shown++;
      }
    });
  });


   document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
    });
  });
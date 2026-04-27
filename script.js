const projects = {
  "crescent-moon": {
    tag: "Space Architecture",
    title: "Dual Person Spacecraft: Crescent Moon",
    image: "crescent-moon.png",
    summary:
      "A spacecraft architecture concept for analog service near-Earth objects, developed through a Space Architecture Studio.",
    context:
      "This project sits at the intersection of spacecraft design, mission architecture, habitability, and human-centered aerospace engineering. It communicates the ability to think beyond components and toward integrated systems.",
    bullets: [
      "Near-Earth object mission concept",
      "Dual-person spacecraft architecture",
      "Habitability and spatial planning",
      "Mission-level systems thinking",
      "Strong fit for aerospace and space systems portfolios"
    ]
  },

  "quantum-oscillator": {
    tag: "Computational Physics",
    title: "The Isotropic 3D Quantum Oscillator as a Molecular Model",
    image: "quantum-oscillator.png",
    summary:
      "A Mathematica-based computational analysis modeling three-dimensional quantum atoms for group 6 hexafluorides.",
    context:
      "This project demonstrates mathematical modeling, physics abstraction, and computational reasoning — the kind of analytical foundation valuable in aerospace, materials, and simulation-heavy engineering roles.",
    bullets: [
      "3D quantum oscillator model",
      "Molecular modeling abstraction",
      "Mathematica computational workflow",
      "Physics-based simulation",
      "Connection between theory and engineering computation"
    ]
  },

  ares: {
    tag: "NASA RASC-AL",
    title: "Ares Mission: Martian Habitat",
    image: "ares.png",
    summary:
      "A Columbia Space Initiative project focused on designing a self-sufficient Martian habitat.",
    context:
      "This project showcases direct space systems interest, especially long-duration mission design, autonomous habitat planning, and engineering for extreme environments.",
    bullets: [
      "Mars surface architecture",
      "Self-sufficient habitat concept",
      "NASA competition framework",
      "Columbia Space Initiative collaboration",
      "Human spaceflight systems thinking"
    ]
  },

  dawnism: {
    tag: "Systems Research",
    title: "Dawnism",
    image: "dawnism.png",
    summary:
      "An interdisciplinary research project addressing climate change, global politics, healthcare, infrastructure, and societal systems.",
    context:
      "This is a broad systems-thinking project. It positions engineering not only as technical design, but as a tool for societal-scale intervention.",
    bullets: [
      "Climate and infrastructure systems",
      "Global-scale problem framing",
      "Healthcare and social structure analysis",
      "Long-form independent research",
      "Humanitarian engineering perspective"
    ]
  },

  titan: {
    tag: "NASA Blue Skies",
    title: "TITAN Project",
    image: "titan.png",
    summary:
      "A Columbia Space Initiative aeronautical concept aimed at tackling agriculture problems with flight vehicles.",
    context:
      "TITAN connects aerospace design with food systems and environmental resilience. It is a strong example of applying aerospace tools outside traditional aerospace markets.",
    bullets: [
      "Aeronautical vehicle concept",
      "Agriculture-focused mission need",
      "NASA Blue Skies competition",
      "Columbia Space Initiative project",
      "Aerospace for terrestrial impact"
    ]
  },

  "argon-plasma": {
    tag: "Plasma Physics",
    title: "Manipulation of Argon Plasma Under Controlled Environments",
    image: "argon-plasma.png",
    summary:
      "A senior physics seminar project involving argon plasma analysis and plasma element identification.",
    context:
      "This project gives the portfolio a strong experimental physics anchor and links naturally to propulsion, plasma diagnostics, high-energy systems, and advanced aerospace technologies.",
    bullets: [
      "Argon plasma behavior",
      "Controlled-environment experimentation",
      "Spectral or element identification",
      "Experimental physics workflow",
      "Relevant to propulsion and high-energy aerospace systems"
    ]
  }
};


/* Reveal animations */
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => observer.observe(el));


/* Populate project pages */
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id && projects[id]) {
  const project = projects[id];

  document.title = `${project.title} | Jose Osa`;

  const tag = document.getElementById("projectTag");
  const title = document.getElementById("projectTitle");
  const summary = document.getElementById("projectSummary");
  const context = document.getElementById("projectContext");
  const list = document.getElementById("projectBullets");
  const image = document.getElementById("projectImage");

  if (tag) tag.textContent = project.tag;
  if (title) title.textContent = project.title;
  if (summary) summary.textContent = project.summary;
  if (context) context.textContent = project.context;

  if (image) {
    image.src = project.image;
    image.alt = project.title;
  }

  if (list) {
    list.innerHTML = "";
    project.bullets.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }
}


/* Project click transition animations */
const transitionLayer = document.getElementById("pageTransition");

if (transitionLayer) {
  document.querySelectorAll(".image-card").forEach(card => {
    card.addEventListener("click", event => {
      event.preventDefault();

      const target = card.getAttribute("href");
      const transitionType = card.dataset.transition || "orbit";

      transitionLayer.className = `page-transition active ${transitionType}`;

      setTimeout(() => {
        window.location.href = target;
      }, 850);
    });
  });
}


/* Animated star background */
const canvas = document.getElementById("stars");

if (canvas) {
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18
    }));
  }

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      star.x += star.vx;
      star.y += star.vy;

      if (star.x < 0) star.x = canvas.width;
      if (star.x > canvas.width) star.x = 0;
      if (star.y < 0) star.y = canvas.height;
      if (star.y > canvas.height) star.y = 0;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.75)";
      ctx.fill();
    });

    requestAnimationFrame(animateStars);
  }

  resizeCanvas();
  animateStars();

  window.addEventListener("resize", resizeCanvas);
}

const projects = {
  "crescent-moon": {
    tag: "Space Architecture",
    title: "Dual Person Spacecraft: Crescent Moon",
    image: "crescent-moon.png",
    summary:
      "A two-person rotating spacecraft concept for servicing near-Earth object infrastructure.",
    overview:
      "Crescent Moon imagines a near-future space infrastructure network between Earth, the Moon, Mars, and near-Earth objects. The project asks how astronauts can remain physically involved in servicing, updating, and repairing automated infrastructure across deep-space locations.",
    challenge:
      "The mission requires a two-person crew to operate for 14–18 months while traveling to NEO infrastructure. The design must support long-duration habitation, artificial gravity, consumables routing, mass balance, and direct human interaction with external machinery.",
    solution:
      "The spacecraft uses a rotating configuration to provide centrifugal artificial gravity during cruise, then reorients for linear acceleration and deceleration. Internally, the design distributes storage, maintains unobstructed circulation, and includes a zero-g operations room with arm-like controls for servicing external systems.",
    bullets: [
      "Centrifugal artificial gravity during cruise",
      "2-person crew for 14–18 month NEO servicing missions",
      "Modular habitat architecture",
      "Distributed storage for mass balance",
      "Consumables ducts, pipes, and vents routed through the habitat",
      "Zero-g arm room for direct interaction with NEO machinery",
      "Psychological enrichment through sleeping, dining, kitchen, and exercise spaces"
    ],
    impact:
      "This project is a strong aerospace systems design piece because it combines spacecraft architecture, human factors, artificial gravity, mission operations, and NEO servicing into one integrated concept.",
    recommendedVisualTitle: "Recommended image to add",
    recommendedVisual:
      "Use either the general perspective render, the front/side views, or the cross-sectional habitat and consumables map from the Crescent Moon PDF. The cross-section would work especially well as an interactive annotated figure."
  },

  "quantum-oscillator": {
    tag: "Computational Physics",
    title: "The Isotropic 3D Quantum Oscillator as a Molecular Model",
    image: "quantum-oscillator.png",
    summary:
      "A physics paper using the 3D quantum harmonic oscillator as a simplified molecular model for group 6 hexafluorides.",
    overview:
      "This project reviews the solution to the three-dimensional isotropic quantum oscillator and applies it as a molecular model for highly symmetric group 6 hexafluorides. The goal is to explore whether oscillator states can reproduce molecular configurations without directly solving the full many-electron, multi-nuclear Schrödinger equation.",
    challenge:
      "A complete quantum-mechanical treatment of complex molecules is mathematically and computationally difficult. The challenge is to identify a tractable model that captures symmetry, radial structure, and bond-length behavior in a physically meaningful way.",
    solution:
      "The work separates the Schrödinger equation in spherical coordinates, focuses on the radial function, and compares oscillator-derived configurations with known XF₆ bond lengths. The model shows consistency with particular angular momentum states under low-temperature assumptions.",
    bullets: [
      "Time-independent Schrödinger equation",
      "Spherical-coordinate separation of variables",
      "Radial oscillator solution",
      "Laguerre equation structure",
      "Molecular symmetry and Oh configurations",
      "Group 6 hexafluoride bond-length comparison",
      "Physics-based model simplification"
    ],
    impact:
      "This page should communicate your analytical depth: quantum mechanics, mathematical physics, modeling, and scientific writing. It is less of a hardware project and more of a rigorous theory/computation project.",
    recommendedVisualTitle: "Recommended visual to generate",
    recommendedVisual:
      "Use a custom orbital-style animation: a glowing central molecular core with rotating spherical harmonic rings. This will look better on the portfolio than screenshots of equations alone."
  },

  ares: {
    tag: "NASA RASC-AL",
    title: "ARES: Autonomous Red-Planet Experimental Shelter",
    image: "ares.png",
    summary:
      "A Mars precursor mission demonstrating deployable habitat construction, robotic assembly, and ISRU support systems.",
    overview:
      "ARES is a human-Mars precursor campaign concept designed to validate infrastructure needed for sustained habitation on Mars. The mission demonstrates a deployable pressurized dome, a 3D-printed regolith-based interior structure, oxygen generation, water extraction, robotic assembly, and nuclear power.",
    challenge:
      "A future Martian habitat must reduce resupply dependence, shield crews from harsh surface conditions, manage power and thermal loads, and use local resources. The project also needs a staged mission timeline that reduces risk before humans arrive.",
    solution:
      "ARES uses a 2035 prospecting phase to identify a safe landing site, followed by a 2037 main launch delivering SPEAR assembly rovers, the AERODOME deployable structure, the CABIN 3D-printed interior, MOXIE oxygen generation, Aqua Factorem water extraction, and Kilopower reactors.",
    bullets: [
      "2035 orbital prospecting phase",
      "2037 main launch and autonomous deployment",
      "SPEAR robotic assembly rovers",
      "AERODOME deployable pressurized dome",
      "CABIN regolith-based 3D-printed interior",
      "MOXIE oxygen generation",
      "Aqua Factorem water extraction",
      "Kilopower nuclear power system"
    ],
    impact:
      "ARES is one of the strongest aerospace portfolio projects because it combines mission architecture, Mars surface systems, robotics, ISRU, power, and habitat design into a credible precursor mission.",
    recommendedVisualTitle: "Recommended image to add",
    recommendedVisual:
      "Use the CONOPS figure from page 5 of the PDF or the quad chart near the beginning. The CONOPS figure would be excellent as a horizontal interactive mission timeline."
  },

  dawnism: {
    tag: "Systems Research",
    title: "Dawnism",
    image: "dawnism.png",
    summary:
      "A long-form systems proposal connecting climate, governance, economics, education, healthcare, and global coordination.",
    overview:
      "Dawnism is an interdisciplinary systems project that frames climate change, inequality, corruption, healthcare, education, and international instability as connected symptoms of a larger civilizational design problem.",
    challenge:
      "The central challenge is not a single engineering mechanism, but a complex global system: how to coordinate institutions, resources, rights, education, economics, and environmental action at planetary scale.",
    solution:
      "The project proposes a third-option social and political framework focused on the Free World, human rights, international cooperation, environmental awareness, equality, democratic decision-making, anti-corruption systems, and a UN 2.0 concept.",
    bullets: [
      "Climate and pollution systems analysis",
      "Human rights and international cooperation",
      "Education reform",
      "Healthcare access",
      "Anti-corruption institutions",
      "Platform-based democratic governance",
      "UN 2.0 concept",
      "Large-scale humanitarian systems thinking"
    ],
    impact:
      "This project should be framed as systems thinking and humanitarian engineering. It shows your ability to decompose extremely large problems, propose institutional architectures, and connect technical futures with human outcomes.",
    recommendedVisualTitle: "Recommended visual to generate",
    recommendedVisual:
      "Use a generated sunrise-over-Earth or networked-globe visual. The PDF states that it does not own the images inside it, so replacing them with original visuals is safer and cleaner."
  },

  titan: {
    tag: "NASA Blue Skies",
    title: "TITAN: Terrain Imaging for Targeted Application of Nanofertilizers",
    image: "titan.png",
    summary:
      "An autonomous aerial system combining crop-health mapping and targeted nanofertilizer deployment.",
    overview:
      "TITAN is a NASA Blue Skies concept proposing an autonomous two-drone system for sustainable agriculture. One drone maps crop health, while a second drone deploys nanofertilizers precisely where needed.",
    challenge:
      "Traditional fertilizer use is environmentally damaging, inefficient, and difficult for farmers to optimize manually at large scale. The proposal targets runoff, greenhouse gas emissions, high cost, and adoption barriers for modern precision agriculture.",
    solution:
      "The system combines AURAS, a high-speed mapping drone, with CLOUD, a nanofertilizer-deploying hexacopter. Together, they identify crop needs and apply fertilizer selectively, aiming to reduce fertilizer use by more than 80%.",
    bullets: [
      "AURAS high-speed mapping drone",
      "CLOUD nanofertilizer deployment hexacopter",
      "Multispectral crop-health mapping",
      "Precision fertilizer application",
      "Autonomous operation for lower adoption barriers",
      "Reduced runoff and fertilizer volume",
      "Projected full implementation by 2035"
    ],
    impact:
      "TITAN connects aerospace vehicle design with agriculture, climate, and materials science. It is a strong example of using aerial systems and nanotechnology for environmental resilience.",
    recommendedVisualTitle: "Recommended image to add",
    recommendedVisual:
      "Use the cover-page drone sketches or the quad chart from the PDF. Later, we can animate a drone flying across the project page and releasing glowing nanofertilizer particles."
  },

  "argon-plasma": {
    tag: "Plasma Physics",
    title: "Manipulation of Argon Plasma Under Controlled Environments",
    image: "argon-plasma.png",
    summary:
      "Experimental plasma physics research using controlled pressure, voltage, electrode spacing, and Langmuir probe measurements.",
    overview:
      "This project investigates controlled argon plasma formation and the measurement methods needed to characterize plasma striations. The experiment studies how voltage, pressure, volume, current, and electrode spacing influence observed plasma behavior.",
    challenge:
      "Plasma is difficult to control and diagnose because its behavior depends on coupled electrical, pressure, geometric, and particle-interaction effects. The challenge was to produce measurable striations and connect the measurements to established plasma theory.",
    solution:
      "The experiment used a low-pressure argon system with a glass tube, anode, cathode, DC power supply, pressure gauge, pump, valve, and Langmuir probe. The collected data was compared with Child-Langmuir behavior, ideal gas expectations, Paschen’s law, and current-pressure trends.",
    bullets: [
      "Low-pressure argon plasma generation",
      "Vacuum system and enclosed glass tube",
      "Mobile anode and cathode geometry",
      "High-voltage DC power supply",
      "Langmuir probe diagnostics",
      "Electron density and electron temperature estimation",
      "Child-Langmuir and Paschen law validation",
      "Fusion-energy motivation through tokamak relevance"
    ],
    impact:
      "This project gives the portfolio an experimental physics anchor and connects naturally to plasma diagnostics, fusion energy, high-voltage systems, and aerospace plasma applications such as electric propulsion.",
    recommendedVisualTitle: "Recommended image to add",
    recommendedVisual:
      "Use the full poster or crop the experimental setup diagram. A later version could include an animated purple-blue plasma tube with glowing striations."
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

  const fields = {
    projectTag: project.tag,
    projectTitle: project.title,
    projectSummary: project.summary,
    overviewTitle: project.title,
    projectOverview: project.overview,
    projectChallenge: project.challenge,
    projectSolution: project.solution,
    projectImpact: project.impact,
    recommendedVisualTitle: project.recommendedVisualTitle,
    recommendedVisual: project.recommendedVisual
  };

  Object.keys(fields).forEach(elementId => {
    const element = document.getElementById(elementId);
    if (element) element.textContent = fields[elementId];
  });

  const image = document.getElementById("projectImage");
  if (image) {
    image.src = project.image;
    image.alt = project.title;
  }

  const list = document.getElementById("projectBullets");
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

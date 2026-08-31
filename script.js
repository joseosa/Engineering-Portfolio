/* ═══════════════════════════════════════════════
   PROJECT DATA
═══════════════════════════════════════════════ */
const projects = {
  "crescent-moon": {
    tag: "Space Architecture",
    title: "Dual Person Spacecraft: Crescent Moon",
    image: "crescent-moon.png",
    diagram: "crescent-arm-at-neo.png",
    visualType: "image",
    summary: "A two-person deep-space spacecraft concept for servicing NEO infrastructure, featuring centrifugal artificial gravity, a zero-g arm room for direct physical interaction with external machinery, and modular cylindrical habitat design. Columbia University Space Architecture.",
    overview: "Crescent Moon is set in a near-future solar system where automated infrastructure — mining equipment, communication relays, research facilities, energy nodes — has been deployed across NEOs, Lagrangian points, and Martian orbit. The project asks a specific architectural question: how do two astronauts remain physically capable of servicing and repairing this infrastructure during 14–18 month deep-space missions? The answer is a rotating spacecraft that generates centrifugal artificial gravity during cruise, reorients 90° for linear thrust phases, and carries a dedicated zero-gravity Arm Room from which the crew directly manipulates NEO-surface machinery.",
    challenge: "Long-duration deep-space habitation imposes simultaneous, often competing constraints: the rotating habitat must generate meaningful centrifugal gravity while maintaining structural mass balance along the rotation axis; consumables ducts, pipes, and vents must loop through every module without obstructing circulation; the pressurized cylinder must be long enough to minimize the gravity gradient across an upright human body; and the crew of two must be able to operate, sleep, exercise, and work in close quarters for over a year without psychological degradation. The Arm Room presents an additional challenge — it must function at zero-g when the rest of the spacecraft is rotating, requiring it to operate outside the rotating envelope during NEO approach.",
    solution: "The spacecraft follows a three-phase propulsion sequence: linear acceleration in a nose-forward orientation, rotation of the main body 90° to align the spin axis with the velocity vector during cruise (generating centrifugal gravity at the habitable modules), then reverse rotation and deceleration for NEO approach. Internally, each cylindrical module follows a shared architecture: a clear central Circulation Space, bilateral Utility Backpanes routing consumables along the module length, an Equipment Keep-In Zone flanking the circulation path, and distributed Consumables Storage along the floor — all visible in the cross-section renders. The central hub module measures 18.98 m across and connects all arms. The Arm Room (57.04 m total, 15.48 m wide at its widest) operates at zero-g and provides direct line of sight to NEO machinery through a forward window, with swappable left/right tool arm sets.",
    bullets: [
      "Three-phase mission profile: linear acceleration → centrifugal cruise → deceleration",
      "90° reorientation maneuver to align spin axis with velocity vector",
      "Centrifugal artificial gravity — rotation axis through central hub",
      "2-person crew · 14–18 month NEO servicing missions",
      "Modular cylindrical habitat — Circulation Space, Utility Backpanes, Equipment Keep-In Zone",
      "Consumables distributed along module floors for mass balance",
      "Arm Room (57.04 m × 15.48 m) — zero-g, swappable tool sets, NEO line of sight",
      "Psychological enrichment: individual sleeping quarters, kitchen/dining, exercise variety",
      "Columbia University · Space Architecture · Different Systems Diploma"
    ],
    impact: "Crescent Moon synthesizes spacecraft dynamics, human factors engineering, long-duration habitation, and deep-space mission operations into a single internally consistent design. Every architectural decision — module length, storage distribution, arm room geometry, circulation layout — is traceable to a physical or operational constraint. It is a space architecture project that demonstrates systems-level reasoning: that constraints do not sit in isolation, but propagate across the design, and the architect's job is to resolve them simultaneously.",
    visualTitle: "Arm Room deploying at a near-Earth object",
    visualText: "The Arm Room extends toward a NEO with automated infrastructure on its surface. Operating at zero-g outside the rotating habitat envelope, it gives the two-person crew direct physical reach to the machinery they are servicing — the core human-infrastructure interface the entire spacecraft was designed around.",
    galleryHeader: {
      eyebrow: "Design Documentation",
      title: "Crescent Moon Image Library",
      intro: "Browse mission context renders, full spacecraft views, the Arm Room module, and interior cross-sections."
    },
    gallery: [
      {
        material: "Mission", abbr: "MSN", color: "#7ec8e3",
        images: [
          { src: "crescent-mission-context.png", title: "Mission context — Earth, Moon, Mars, and near-Earth objects: the infrastructure network Crescent Moon is designed to service" },
          { src: "crescent-arm-at-neo.png",       title: "Arm Room at a NEO — the zero-g servicing interface extending toward automated surface infrastructure" }
        ]
      },
      {
        material: "Spacecraft", abbr: "DPS", color: "#e8843a",
        images: [
          { src: "crescent-spacecraft-topdown.png",  title: "Top-down view — full DPS spacecraft in cruise configuration with rotating habitat arms" },
          { src: "crescent-hub-topdown-dims.png",    title: "Central hub — top-down with 18.98 m span dimension; module connection points visible" },
          { src: "crescent-arm-dims.png",            title: "Arm Room — dimensioned front view: 57.04 m total length, 15.48 m wide at tool cluster" }
        ]
      },
      {
        material: "Arm Room", abbr: "ARM", color: "#c0c0c0",
        images: [
          { src: "crescent-arm-isometric.png", title: "Arm Room — isometric view showing the multi-tube structural fan, swappable tool arms, and rotation circle" },
          { src: "crescent-arm-front.png",     title: "Arm Room — front view showing tool cluster at base and attachment hub at top" }
        ]
      },
      {
        material: "Module", abbr: "MOD", color: "#8fbc8f",
        images: [
          { src: "crescent-module-cross-section.png",  title: "Module cross-section — Circulation Space (center), Utility Backpanes, Equipment Keep-In Zone, Consumables Storage (floor); human figure for scale" },
          { src: "crescent-module-exterior-cut.png",   title: "Module exterior cut — cylindrical hull opened to reveal internal space layout and consumables ring" },
          { src: "crescent-interior-render.png",       title: "Interior render — close-up of module interior showing massing of rooms, furniture zones, and window to space" },
          { src: "crescent-interior-entrance.png",     title: "Interior entrance perspective — from inside the habitat looking toward the tunnel connection between modules" }
        ]
      }
    ]
  },

  "quantum-oscillator": {
    tag: "Computational Physics",
    title: "The Isotropic 3D Quantum Oscillator as a Molecular Model",
    image: "quantum-oscillator.png",
    visualType: "image",
    diagram: "qosc-figure1-probability-density.png",
    summary: "Published physics paper deriving the 3D isotropic quantum oscillator analytically and validating it as a molecular model for group 6 hexafluorides — WF₆, MoF₆, CrF₆ — by matching radial distribution peaks to measured bond lengths. Co-authored with Dr. Douglas A. Barlow, Sewanee.",
    overview: "This paper derives and applies the three-dimensional isotropic quantum harmonic oscillator as a molecular model for group 6 hexafluorides (CrF₆, MoF₆, WF₆) — highly symmetric molecules with Oh octahedral geometry. Beginning from the time-independent Schrödinger equation, the radial component is separated in spherical coordinates and shown to satisfy the associated Laguerre equation, yielding energy eigenvalues E = ℏω(2n + l + 3/2) and wavefunctions indexed by principal quantum number n and angular momentum l. The objective is to determine whether a single oscillator state can reproduce known X-F bond lengths without a full many-electron treatment.",
    challenge: "Full quantum-mechanical treatment of multi-electron transition metal fluoride molecules — accounting for electron correlation, spin-orbit coupling, and crystal field splitting — is computationally and analytically intractable without numerical methods. The challenge is to show that a simpler, analytically soluble model captures the essential structural feature: the characteristic X-F bond length arising from the radial probability distribution of the outer electrons. Selecting the correct oscillator state and thermal regime requires physical justification, not just curve-fitting.",
    solution: "The Schrödinger equation is separated in spherical coordinates; the radial equation transforms into the associated Laguerre equation with solutions yielding a discrete shell structure. The paper evaluates the radial distribution function D(r) and probability density |Ψ|² for oscillator states up to Ψ₃₂₀ and compares the distribution peak against measured bond lengths — WF₆ at 1.832 Å, with MoF₆ and CrF₆ at comparable values. Best agreement is found under the Ψ₃₂₀ state at millikelvin effective temperatures, where thermal averaging sharpens the radial distribution, and the model peak coincides with the measured W-F bond length to within experimental precision.",
    bullets: [
      "Time-independent Schrödinger equation — spherical coordinate separation",
      "Radial equation reduction to the associated Laguerre equation",
      "Energy eigenvalues E = ℏω(2n + l + 3/2) — discrete shell structure",
      "Probability density |Ψ|² and radial distribution D(r) — Figures 1 & 2",
      "Oh octahedral symmetry — group 6 hexafluorides CrF₆, MoF₆, WF₆",
      "WF₆ bond length match at 1.832 Å under Ψ₃₂₀ state at T ≈ 11.5 mK",
      "Co-authored with Dr. Douglas A. Barlow — Sewanee: The University of the South"
    ],
    impact: "The paper demonstrates that an analytically tractable model — the 3D isotropic oscillator — can reproduce the structural geometry of complex symmetric transition metal molecules to within experimental bond-length precision, without ab initio computation. This approach is foundational to understanding how simplified quantum models serve as physically meaningful bridges between exact theory and experimental measurement — a mode of reasoning central to computational chemistry, materials physics, and quantum modeling.",
    visualTitle: "Ψ₃₂₀ probability density — W-F bond length match",
    visualText: "Figure 1 shows the Ψ₃₂₀ probability density of the 3D oscillator alongside the group 6 hexafluoride octahedral geometry. Figure 2 plots the radial distribution function D(r) for WF₆, with the peak at 1.832 Å matching the known W-F bond length at an effective temperature of ~11.5 mK.",
    download: { label: "Download Paper (PDF)", href: "quantum-oscillator-paper.pdf" },
    galleryHeader: {
      eyebrow: "Published Paper",
      title: "Figures & Results",
      intro: "Paper cover and key figures: probability density and radial distribution function for the 3D oscillator model."
    },
    gallery: [
      {
        material: "Paper", abbr: "PDF", color: "#7ec8e3",
        images: [
          { src: "qosc-paper-cover.png",                title: "The Isotropic 3D Quantum Oscillator as a Molecular Model — Jose Osa & Douglas A. Barlow, Sewanee" },
          { src: "qosc-figure1-probability-density.png", title: "Figure 1 — Ψ³²⁰ probability density of the 3D oscillator; right: group 6 hexafluoride ball-and-stick model overlaid" },
          { src: "qosc-figure2-radial-distribution.png", title: "Figure 2 — Radial distribution function D for WF₆; peak at 1.832 Å matches known W-F bond length at T ≈ 11.5 mK" }
        ]
      }
    ]
  },

  ares: {
    tag: "NASA RASC-AL",
    title: "ARES: Autonomous Red-Planet Experimental Shelter",
    image: "ares.png",
    diagram: "ares-diagram.png",
    visualType: "image",
    summary: "A Mars precursor mission demonstrating deployable habitat construction, robotic assembly, and ISRU support systems.",
    overview: "ARES is a human-Mars precursor campaign concept designed to validate infrastructure needed for sustained habitation on Mars. The mission demonstrates a deployable pressurized dome, 3D-printed regolith interior, oxygen generation, water extraction, robotic assembly, and nuclear power.",
    challenge: "Sustained human presence on Mars demands near-complete independence from Earth resupply: the mass penalties of propellant and consumables make frequent logistics flights economically and operationally unviable. Mars's thin CO₂ atmosphere (~0.6% of Earth's surface pressure), average surface temperature of −60°C, and unshielded radiation environment impose strict simultaneous requirements on pressurized structure, thermal management, power, radiation shielding, and crew consumables. Each of these subsystems — oxygen generation, water extraction, nuclear power, robotic assembly, pressurized habitat — must be validated autonomously before a crewed landing is attempted.",
    solution: "A 2035 orbital prospecting phase characterizes candidate landing sites for subsurface water-ice and terrain stability, identifying the 2037 landing target before committing the main payload. The primary Starship launch delivers: the AERODOME bistable auxetic deployable dome, the CABIN regolith 3D-printing system, SPEAR robotic assembly rovers, MOXIE-derived oxygen generation, Aqua Factorem water extractor, and two 40-kW Kilopower nuclear reactors. SPEAR rovers autonomously deploy and pressurize the AERODOME after landing; the CABIN printer then constructs the internal habitat from in-situ regolith — eliminating the need to transport pre-fabricated interior mass from Earth.",
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
    impact: "ARES is a full-stack Mars mission architecture — integrating orbital prospecting, entry-descent-landing, autonomous robotic deployment, ISRU-based consumables, nuclear power, and habitat design into a single internally consistent concept. Developed for NASA's RASC-AL 2025 competition at Columbia University, the project demonstrates the systems-level reasoning required to turn a planetary exploration goal into a phased, risk-managed mission campaign.",
    visualTitle: "Mars mission architecture — six-phase ConOps",
    visualText: "The ARES concept of operations runs from Phase 0 (orbital prospecting, 2035) through Phases 1–5: launch, transit, EDL, autonomous surface deployment, ISRU activation, and habitat demonstration. Each phase feeds directly into the next, with robotic precursors reducing risk before any crew commitment.",
    galleryHeader: {
      eyebrow: "Mission Documentation",
      title: "ARES Image Library",
      intro: "Browse renders, engineering diagrams, mission timeline, and identity assets from the ARES Mars precursor mission."
    },
    gallery: [
      {
        material: "Visualizations", abbr: "VIZ", color: "#e8843a",
        images: [
          { src: "ares-isometric-render.jpg",         title: "AERODOME on Mars — full isometric with astronauts and rover" },
          { src: "ares-crosssection-render.jpg",      title: "Cross-section — AERODOME dome, 3D-printed CABIN interior, green roof" },
          { src: "ares-aerodome-exterior-closeup.jpg",title: "AERODOME exterior surface detail with rover at airlock" },
          { src: "ares-interior-render.jpg",          title: "CABIN interior render — common area with terraced planting beds" },
          { src: "ares-entrance-render.jpg",          title: "Habitat entrance tunnel — Lumion render" },
          { src: "ares-aerodome-topdown-closed.jpg",  title: "AERODOME top-down — deployed configuration" },
          { src: "ares-aerodome-topdown-open.jpg",    title: "AERODOME top-down — unfolding sequence" }
        ]
      },
      {
        material: "Engineering", abbr: "ENG", color: "#7ec8e3",
        images: [
          { src: "ares-payload-diagram.png",   title: "Starship payload bay — subsystem layout (COPV, Kilopower, AERODOME, MOXIE, RASSOR, SPEARs, Aqua Factorem, 3D Printer)" },
          { src: "ares-dome-cad.png",          title: "Bistable auxetic dome — CAD render" },
          { src: "ares-auxetic-prototype.jpg", title: "Physical auxetic dome prototype under compression" },
          { src: "ares-habitat-floorplan.png", title: "CABIN interior floor plan — kitchen, bunks, labs, bathroom, common area, airlocks, planting beds" },
          { src: "ares-systems-diagram.jpg",   title: "Systems architecture — power, communication, and physical flow between all subsystems" }
        ]
      },
      {
        material: "Mission", abbr: "MSN", color: "#8fbc8f",
        images: [
          { src: "ares-conops.png",          title: "Concept of Operations — Phases 0–5 with images (2035–EOM)" },
          { src: "ares-mission-gantt.png",   title: "Mission timeline Gantt chart — phases and milestones (2035–2038)" },
          { src: "ares-power-timeline.png",  title: "Power timeline — subsystem draw vs. 80 kW Kilopower capacity (0–140 days)" },
          { src: "ares-risk-matrix.png",     title: "Risk matrix — likelihood vs. consequences for 12 identified risks" }
        ]
      },
      {
        material: "Identity", abbr: "ID", color: "#c0c0c0",
        images: [
          { src: "ares-overview-poster.png", title: "ARES project overview poster — NASA RASC-AL 2025, Columbia University" },
          { src: "ares-mission-patch.png",   title: "ARES mission patch — Columbia University RASC-AL 2025" }
        ]
      }
    ]
  },

  "laser-matter": {
    tag: "Thin Film Physics",
    title: "Nucleation Growth Stage Characterization of Ultra-Thin Metal Films via Laser Shocking and AFM Imaging",
    image: "laser-matter.png",
    visualType: "image",
    diagram: "Ni_#1_#4_6-29mJ.jpg",
    summary: "A mechanistic framework for laser-induced nucleation and growth in Ni, Al, and Cu ultra-thin films — connecting small-scale physics to aerospace materials reliability. Dr. James Im Research Group, Columbia University.",
    overview: "This project investigates laser-induced nucleation and growth phenomena in ultra-thin metallic films of Ni, Al, and Cu using controlled pulsed laser exposure and high-resolution atomic force microscopy (AFM). Ultra-thin films provide a simplified, high-observability platform for isolating nucleation kinetics under extreme thermal gradients. By quantifying island density, grain morphology, and surface evolution as a function of laser parameters, we develop a physics-based model describing nucleation rate and growth dynamics under rapid thermal cycling.",
    challenge: "Nucleation under rapid laser-driven thermal cycling involves competing timescales — from photon absorption and electron-phonon coupling through melt initiation and solidification. The challenge was to capture and quantify distinct nucleation stage transitions (pre-melting → lateral growth → fully melted and nucleated) across three material systems and a range of fluence conditions, while developing an experimental pipeline sensitive enough to reveal microstructure at the nanometer scale.",
    solution: "Each sample underwent an eight-stage pipeline: ultrasonic cleaning, masked pulsed-laser irradiation at varying mJ intensities, preliminary AFM imaging, chemical-mechanical polishing to 20 nm, selective etching to reveal microstructure, re-irradiation at lower energy to accentuate grain boundaries, and final full-characterization AFM imaging. This allowed island density, grain morphology, and nucleation stage to be mapped as functions of laser fluence for all three materials.",
    bullets: [
      "Ni, Al, Cu ultra-thin film samples across a range of laser fluences",
      "Controlled pulsed laser irradiation (varying mJ intensities)",
      "High-resolution AFM topography at each nucleation stage",
      "Chemical-mechanical polishing (CMP) to 20 nm planarization",
      "Selective etching and re-irradiation for grain boundary accentuation",
      "Island density and grain morphology quantification",
      "Physics-based nucleation rate and growth dynamics model",
      "Dr. James Im Research Group, Columbia University"
    ],
    impact: "The resulting framework connects thin-film microstructural evolution to aerospace-critical applications: single-crystal Ni superalloys and laser repair for turbine blades, Al alloys for fuselages and cryogenic tanks, and Cu films for satellite electronics and electromigration resistance. This work builds a deliberate bridge between materials science fundamentals and the design of structural and electronic materials in extreme environments.",
    visualTitle: "Laser shocking and AFM topography",
    visualText: "AFM topography maps across Ni, Al, and Cu samples reveal nucleation stage transitions as a function of laser fluence — from pre-melting through lateral growth to fully melted and renucleated grains.",
    galleryHeader: {
      eyebrow: "AFM Microscopy",
      title: "Material Image Library",
      intro: "Select a material to browse AFM topography images captured across laser fluence conditions."
    },
    gallery: [
      {
        material: "Aluminum", abbr: "Al", color: "#7ec8e3",
        images: [
          { src: "Al_#1_#2_7-82mJ.jpg",            title: "Sample #1 #2 · 7.82 mJ" },
          { src: "Al_#1_#2_7-82mJ_4-49mJ.jpg",     title: "Sample #1 #2 · 7.82 mJ + 4.49 mJ" },
          { src: "Al_#1_#2_Edge_7-82mJ.jpg",        title: "Sample #1 #2 Edge · 7.82 mJ" },
          { src: "Al_#1_#2_Rescan_7-82mJ.jpg",      title: "Sample #1 #2 Rescan · 7.82 mJ" }
        ]
      },
      {
        material: "Chromium", abbr: "Cr", color: "#c0c0c0",
        images: [
          { src: "Cr_#1_#6_3-61mJ_Edge.jpg",        title: "Sample #1 #6 · 3.61 mJ (Edge)" },
          { src: "Cr_#1_#8_1-98mJ.jpg",             title: "Sample #1 #8 · 1.98 mJ" },
          { src: "Cr_#1_#8_1-98mJ_Edge.jpg",        title: "Sample #1 #8 · 1.98 mJ (Edge)" }
        ]
      },
      {
        material: "Copper", abbr: "Cu", color: "#e8843a",
        images: [
          { src: "Cu_#4_#1_3-90mJ_Etch_2water-1acid_3s_1-35mJ.jpg", title: "Sample #4 #1 · 3.90 mJ, Etched (2:1 water:acid, 3s) · 1.35 mJ" },
          { src: "Cu_#6_#1_4-19mJ.jpg",             title: "Sample #6 #1 · 4.19 mJ" },
          { src: "Cu_#6_#1_4-19mJ_1-34mJ.jpg",      title: "Sample #6 #1 · 4.19 mJ + 1.34 mJ" },
          { src: "Cu_#7_#1_4-11mJ_1-44mJ.jpg",      title: "Sample #7 #1 · 4.11 mJ + 1.44 mJ" }
        ]
      },
      {
        material: "Nickel", abbr: "Ni", color: "#8fbc8f",
        images: [
          { src: "Ni_#1_#10_1-34mJ_Edge.jpg",       title: "Sample #1 #10 · 1.34 mJ (Edge)" },
          { src: "Ni_#1_#4_6-29mJ.jpg",             title: "Sample #1 #4 · 6.29 mJ" },
          { src: "Ni_#1_#4_6-29mJ_Edge.jpg",        title: "Sample #1 #4 · 6.29 mJ (Edge)" },
          { src: "Ni_#1_#5_5-27mJ.jpg",             title: "Sample #1 #5 · 5.27 mJ" },
          { src: "Ni_#1_#5_5-27mJ_Edge.jpg",        title: "Sample #1 #5 · 5.27 mJ (Edge)" },
          { src: "Ni_#1_#8_2-80mJ.jpg",             title: "Sample #1 #8 · 2.80 mJ" },
          { src: "Ni_#1_#8_2-80mJ_Edge.jpg",        title: "Sample #1 #8 · 2.80 mJ (Edge)" },
          { src: "Ni_#1_#9_2-15mJ.jpg",             title: "Sample #1 #9 · 2.15 mJ" },
          { src: "Ni_#1_#9_2-15mJ_Edge.jpg",        title: "Sample #1 #9 · 2.15 mJ (Edge)" },
          { src: "Ni_#1_6-52mJ.0_00000.jpg",        title: "Sample #1 · 6.52 mJ (Frame 0)" },
          { src: "Ni_#6_3-61mJ.0_00000.jpg",        title: "Sample #6 · 3.61 mJ (Frame 0)" }
        ]
      }
    ]
  },

  titan: {
    tag: "NASA Blue Skies",
    title: "TITAN: Terrain Imaging for Targeted Application of Nanofertilizers",
    image: "titan.png",
    diagram: "titan-diagram.png",
    visualType: "titan",
    summary: "A two-drone precision agriculture system combining autonomous multispectral mapping and ML-driven targeted nanofertilizer deployment — submitted to NASA's Blue Skies competition, Columbia University.",
    overview: "TITAN proposes a closed-loop two-drone precision agriculture system designed to replace broadcast fertilization with targeted, data-driven application. AURAS — an autonomous GPS-navigated mapping platform with multispectral imaging and LiDAR — conducts high-speed field surveys and feeds raw imagery through a two-stage ML pipeline. CLOUD, a hexacopter equipped with electrostatic atomization nozzles, then deploys iron-chelated nanofertilizer precisely along dynamically generated routes derived from AURAS's health maps. The system is fully autonomous and self-coordinating between platforms.",
    challenge: "Conventional fertilization applies nutrients uniformly across entire fields without accounting for spatial variability in crop health — generating fertilizer runoff into watersheds, N₂O greenhouse gas emissions from soil over-saturation, and unnecessary input costs at scale. Precision agriculture solutions already exist but carry high adoption barriers: specialized equipment, operational complexity, and the need for agronomic expertise. A viable system must integrate real-time aerial sensing, ML-based health classification, and targeted application in a form that does not require specialized operator knowledge.",
    solution: "AURAS mapping flights feed raw multispectral imagery through a YOLO/R-CNN bounding box classifier that isolates suspect field regions, followed by a Vision Transformer (ViT) per-pixel crop health classifier that produces spatially resolved deficiency maps. CLOUD receives these maps as application routes and deploys iron-chelated nanofertilizer through electrostatic nozzles — the electrostatic charge bonds nutrient particles directly to leaf surfaces, improving uptake efficiency and eliminating overspray drift. The integrated system targets more than 80% reduction in total fertilizer volume compared to broadcast application, with a development roadmap from nanofertilizer research (2025) through prototyping and field trials to full integration by 2035.",
    bullets: [
      "AURAS — autonomous mapping drone with GPS nav, multispectral imaging, and LiDAR",
      "CLOUD — hexacopter with electrostatic atomization nozzles for nanofertilizer deployment",
      "Two-stage ML pipeline: YOLO/R-CNN region detection + ViT per-pixel health classification",
      "Iron-chelated nanofertilizer with electrostatic leaf-surface bonding",
      "Closed-loop operation: AURAS health maps directly drive CLOUD application routes",
      "Projected >80% reduction in fertilizer volume vs. broadcast application",
      "NASA Blue Skies competition — Columbia University",
      "Development roadmap: 2025 research → 2028 prototyping → 2035 full integration"
    ],
    impact: "TITAN applies aerospace-grade autonomous systems — drone navigation, multi-vehicle coordination, machine learning pipelines, and precision actuator control — to a concrete environmental problem. The project demonstrates how aerospace engineering capabilities transfer directly to agriculture and climate resilience, and reflects the cross-domain systems thinking needed for next-generation autonomous platforms.",
    visualTitle: "AURAS and CLOUD — autonomous two-drone system",
    visualText: "AURAS conducts autonomous mapping passes; CLOUD follows the resulting health maps with electrostatic nanofertilizer nozzles targeting only the areas that need treatment. The ML pipeline and closed-loop coordination between platforms are the system's core innovation.",
    galleryHeader: {
      eyebrow: "Project Documentation",
      title: "TITAN Image Library",
      intro: "Browse drone concept sketches, the ML pipeline diagram, and the development roadmap."
    },
    gallery: [
      {
        material: "System Design", abbr: "SYS", color: "#8fbc8f",
        images: [
          { src: "titan-overview-poster.png",    title: "TITAN project overview — NASA Blue Skies, Columbia University" },
          { src: "titan-auras-drone-sketch.jpg", title: "AURAS — autonomous mapping drone with GPS navigation and LiDAR" },
          { src: "titan-cloud-drone-sketch.jpg", title: "CLOUD — nanofertilizer deployment hexacopter with electrostatic nozzles" }
        ]
      },
      {
        material: "Technology", abbr: "TECH", color: "#7ec8e3",
        images: [
          { src: "titan-ml-pipeline.png",      title: "ML pipeline — YOLO/R-CNN bounding box classifier + ViT per-pixel crop health classifier" },
          { src: "titan-roadmap-timeline.png", title: "Development roadmap — Nanofertilizer Research → Prototyping → Field Trials → Integration (2025–2035)" }
        ]
      }
    ]
  },

  "argon-plasma": {
    tag: "Plasma Physics",
    title: "Manipulation of Argon Plasma Under Controlled Environments",
    image: "argon-plasma.png",
    diagram: "plasma-discharge-photo.jpg",
    visualType: "image",
    summary: "Argon glow discharge experiment measuring striation formation, Langmuir probe I-V characteristics, and plasma response to pressure, voltage, and electrode geometry at 30–90 mTorr.",
    overview: "This experiment produces and diagnostically characterizes argon glow discharges in the pressure range of 30–90 mTorr using a sealed borosilicate glass tube with a mobile anode and cathode assembly. The central phenomenon is Townsend breakdown and the formation of stable plasma striations — banded luminous regions arising from ionization oscillations along the discharge column — whose spatial extent responds systematically to pressure and electrode separation. Measuring current-voltage characteristics, current-pressure curves, and electrode-distance dependencies connects the observable discharge structure to the underlying transport physics.",
    challenge: "Plasma occupies a regime where classical electrical, fluid, and kinetic descriptions must be reconciled simultaneously: ionization, recombination, and particle transport interact across length scales from the Debye sheath to the tube diameter. The primary diagnostic challenge is extracting electron density and temperature from Langmuir probe I-V curves — the probe perturbs the plasma locally, and distinguishing the electron retardation and saturation regimes requires careful interpretation. Reproducing Paschen's law breakdown behavior and Child-Langmuir sheath current from bench measurements demanded precise, independent control of pressure, geometry, and voltage.",
    solution: "The setup used a sealed glass tube, mobile electrode assembly, high-voltage DC supply (to 1350 V), turbo-molecular vacuum pump, and precision pressure gauge. Experiments independently swept voltage (at fixed geometry and pressure), pressure (at fixed 1350 V and 45.5 cm separation), and anode-cathode distance (at constant voltage). A cylindrical Langmuir probe inserted at mid-tube generated I-V curves from which the electron retardation slope gave temperature and the saturation plateau gave density. Striation total length was tracked as a function of pressure to map the stability boundary of the banded discharge.",
    bullets: [
      "Borosilicate glass tube discharge chamber — 30–90 mTorr argon",
      "High-voltage DC power supply up to 1350 V",
      "Mobile anode-cathode geometry — electrode spacing as an independent variable",
      "Turbo-molecular vacuum pump and precision pressure gauge",
      "Cylindrical Langmuir probe — electron retardation and saturation regime analysis",
      "Electron temperature and density extraction from ln(I) vs V curves",
      "Paschen's law breakdown voltage and Child-Langmuir sheath current validation",
      "Plasma striation mapping vs. pressure at constant electrode separation"
    ],
    impact: "The experiment demonstrates experimental plasma physics from first principles: vacuum system operation, controlled discharge production, Langmuir probe diagnostics, and quantitative validation against Paschen and Child-Langmuir theory. The physics is directly continuous with fusion-energy confinement — the Debye sheath and ionization processes characterized here govern tokamak edge behavior — and with aerospace electric propulsion, where Hall-effect thrusters and RF ion engines operate on the same argon plasma physics at similar pressure regimes.",
    visualTitle: "Argon glow discharge — Langmuir probe diagnostics",
    visualText: "The purple-to-pink discharge column glowing between the electrodes is the direct signature of Townsend ionization in the argon gas. A Langmuir probe at mid-tube characterizes the electron distribution while striation bands trace the standing ionization wave along the column.",
    galleryHeader: {
      eyebrow: "Experimental Data",
      title: "Plasma Experiment Gallery",
      intro: "Discharge photo and measured data: I-V characteristics, current vs. pressure, current vs. distance, and striation mapping."
    },
    gallery: [
      {
        material: "Experiment", abbr: "EXP", color: "#c060c0",
        images: [
          { src: "plasma-discharge-photo.jpg",      title: "Argon plasma discharge — tube glowing purple to pink, Langmuir probe inserted at center" }
        ]
      },
      {
        material: "Data", abbr: "DATA", color: "#7ec8e3",
        images: [
          { src: "plasma-current-vs-voltage.png",    title: "Current vs voltage — I-V characteristic at 44.5 cm electrode distance, ~84 mTorr" },
          { src: "plasma-langmuir-iv-curve.png",     title: "Langmuir probe ln(I) vs V — electron retardation and saturation regimes at 44.5 cm, ~84 mTorr" },
          { src: "plasma-current-vs-pressure.png",   title: "Current vs pressure — at 45.5 cm electrode distance, 1350 V" },
          { src: "plasma-current-vs-distance.png",   title: "Current vs anode-cathode distance — at 1350 V constant voltage" },
          { src: "plasma-striation-vs-pressure.png", title: "Striation total distance vs pressure — at 45.5 cm electrode distance, 1350 V" }
        ]
      }
    ]
  }
};

/* ═══════════════════════════════════════════════
   RESEARCH DATA
═══════════════════════════════════════════════ */
const research = {
  mantle: {
    tag: "Computational Mineral Physics · Columbia",
    title: "Lower Mantle Mineral Properties — MINERALS Database",
    image: "mantle.png",
    visualType: "mantle-prop-viz",
    period: "Summer 2025",
    supervisor: "Dr. Renata M. Wentzcovitch",
    lab: "Wentzcovitch Group (MineralsCloud)",
    labUrl: "https://mineralscloud.github.io/",
    summary: "Research assistant in Dr. Wentzcovitch's group at Columbia LDEO — fitting Mie-Grüneisen-Debye thermodynamic models to QHA first-principles data for three lower mantle mineral phases (Al-bearing perovskite, post-perovskite, and ferropericlase) using the BurnMan Python toolkit, validating three published EoS parameter sets at 20–140 GPa to populate the MINERALS project database.",
    overview: "The MINERALS project (Gordon & Betty Moore Foundation) is building a comprehensive thermodynamic properties database for the mineral constituents of Earth's lower mantle — the region between 660 and 2890 km depth (23.5–136 GPa, 1600–4000 K). The lower mantle is dominated by three phases: (Mg,Al,Fe)(Si,Al)O₃ bridgmanite or perovskite (Pv), the most abundant mineral in Earth; its high-pressure polymorph (Mg,Al)SiO₃ post-perovskite (Ppv), stable in the D″ layer at ~125 GPa; and (Mg,Fe)O ferropericlase (fp). Seismologists image the mantle through tomography — detecting variations in compressional and shear wave speeds — but converting those wave speeds to temperature and composition requires accurate P-T-dependent thermodynamic tables for each mineral. The group uses Quasi-Harmonic Approximation (QHA) density-functional calculations as high-fidelity ground truth, then fits Birch-Murnaghan finite-strain + Mie-Grüneisen-Debye (BM+MGD) equation-of-state models to those results using BurnMan, an open-source mineral physics toolkit. My work focused on running these fits, benchmarking three published EoS parameter sets, and generating the property plots for database submission.",
    role: "Working under Dr. Renata M. Wentzcovitch (2025 Bridgman Award recipient), I ran BurnMan Python scripts to fit MDG models to QHA thermodynamic data for three mineral compositions: Al-bearing perovskite (Mg₁₋ₓAlₓ)(Si₁₋ₓAlₓ)O₃ at x=0.125, Al-bearing post-perovskite at the same Al content, and high-spin ferropericlase (Mg₁₋ₓFeₓ)O at x=0.1875. For each mineral I benchmarked three EoS parameter sets from the literature — MBR+07 (Matas et al. 2007), SLB05 (Stixrude & Lithgow-Bertelloni 2005), and SLB24 (Stixrude & Lithgow-Bertelloni 2024) — by comparing fitted model curves against QHA data at three pressure benchmarks (20, 80, 140 GPa). I produced property plots for all phases and presented the comparison results, finding that SLB24 most consistently reproduces QHA data across the full temperature range.",
    methods: "BurnMan (open-source Python toolkit) implements the Birch-Murnaghan finite-strain EoS with a Mie-Grüneisen-Debye thermal correction. QHA first-principles data — computed by the group from density-functional theory phonon calculations — served as the target dataset (plotted as dots). I fit each of the three MDG models to this QHA data and compared them at 20 GPa, 80 GPa, and 140 GPa. Properties extracted: molar volume V, Gibbs free energy G, isothermal bulk modulus KT, adiabatic bulk modulus KS, thermal expansivity α, heat capacity at constant pressure Cp, and Grüneisen parameter γ. The SLB24 model uses G(P,T) as the fitting target (versus V(P,T) for SLB05), which accounts for its improved accuracy across all properties.",
    bullets: [
      "BurnMan Python toolkit — Birch-Murnaghan + Mie-Grüneisen-Debye EoS",
      "QHA first-principles data as ground truth; three MDG parameter sets benchmarked",
      "SLB24, SLB05, MBR+07 — SLB24 best reproduces QHA across all properties",
      "(Mg,Al)SiO₃ perovskite (Pv) · post-perovskite (Ppv) · (Mg,Fe)O ferropericlase (fp)",
      "Properties: V, G, KT, KS, α, Cp, γ — at 20, 80, 140 GPa benchmark pressures",
      "MINERALS Project — Gordon & Betty Moore Foundation · Columbia LDEO",
      "Dr. Renata M. Wentzcovitch (2025 Bridgman Award) · Summer 2025"
    ],
    impact: "Seismic tomography images the mantle through wave-speed anomalies, but interpreting those anomalies in terms of temperature, composition, or the presence of subducted slabs requires accurate mineral thermodynamic tables. The MINERALS database provides exactly those tables. By benchmarking EoS parameter sets against QHA data — and establishing that SLB24 most accurately reproduces first-principles thermodynamics for all three dominant lower mantle phases — this work directly informs which model inputs global tomography codes should use. Dr. Wentzcovitch's group pioneered quasi-harmonic high-temperature mineral calculations; contributing to the database that operationalizes this work for the broader geophysics community is a direct extension of that decades-long program.",
    visualTitle: "QHA data vs. fitted MDG model — thermal expansivity",
    visualText: "Each colored curve shows thermal expansivity α plotted against temperature at a fixed lower-mantle pressure (20 GPa → blue, 80 GPa → green, 140 GPa → orange). The dots are QHA first-principles results; the lines are the fitted Mie-Grüneisen-Debye model. The animated sequence shows how the MDG model is first fit to QHA data and then compared across the SLB24, SLB05, and MBR+07 parameter sets — SLB24 tracks the QHA dots most closely at all three pressures.",
    galleryHeader: {
      eyebrow: "Computed Results",
      title: "Thermodynamic Property Gallery",
      intro: "Property plots generated for three lower mantle mineral phases — perovskite (Pv), post-perovskite (Ppv), and ferropericlase (fp) — showing QHA data against fitted MDG models at 20, 80, and 140 GPa."
    },
    gallery: [
      {
        label: "Perovskite (Pv)",
        images: [
          { src: "mantle-pv-0.png", title: "Molar volume V(P,T) — Al-bearing MgSiO₃ perovskite", caption: "V vs. T at three pressures. Dots: QHA data; solid = BurnMan model. Open circles with dotted lines mark conditions along the mantle geotherm, showing where the simulation crosses Earth's actual P-T path." }
        ]
      },
      {
        label: "Post-Perovskite (Ppv)",
        images: [
          { src: "mantle-ppv-0.png", title: "Gibbs free energy ΔG(T) — Al-bearing MgSiO₃ post-perovskite", caption: "ΔG vs. T at three pressures (blue=20 GPa, orange=80 GPa, green=140 GPa). Post-perovskite is stable in the D\" layer at the base of the mantle (~125 GPa); its free energy curve determines the Pv-Ppv phase boundary." }
        ]
      },
      {
        label: "Ferropericlase (fp)",
        images: [
          { src: "mantle-fp-0.png", title: "Thermal expansivity α(T) — high-spin ferropericlase (Mg,Fe)O", caption: "α vs. T for HS ferropericlase at 10, 80, 140 GPa. Dots: QHA; solid = fitted SLB24-QHA model; dashed = published SLB24 parameters. Open circles mark geotherm conditions. At 10 GPa, α rises steeply — this drops sharply across the spin crossover at higher pressures." }
        ]
      },
      {
        label: "Model Comparison",
        images: [
          { src: "mantle-db-0.png", title: "Thermal expansivity α — MgSiO₃ Pv: three models vs QHA", caption: "4-panel comparison at 20, 80, 140 GPa. Each panel overlays a different MGD fit (MBR+07, SLB05, SLB24). Bottom-right panel compares all three against QHA — SLB24 (solid) tracks the dots most closely at all pressures." },
          { src: "mantle-db-4.png", title: "Adiabatic bulk modulus KS — three models vs QHA", caption: "KS vs. T for MgSiO₃ perovskite at three pressures. All three models reproduce the strong positive pressure dependence (higher pressure = stiffer mineral), with SLB24 showing the smallest systematic offset from QHA at high temperature." },
          { src: "mantle-db-10.png", title: "Gibbs free energy G — three models vs QHA", caption: "G(P,T) for MgSiO₃ perovskite. The bottom-right panel normalizes to 0 at 300 K to highlight curvature differences — SLB24's G(P,T) fitting target gives it an advantage here over the V(P,T)-fit SLB05." }
        ]
      }
    ]
  },

  nanofab: {
    tag: "Nanofabrication · Biomedical Engineering · Columbia",
    title: "2PP Lithography for Inner-Ear Medical Device Fabrication",
    image: "nanofab.png",
    visualType: "nanoscale-viz",
    period: "Spring & Fall 2025",
    supervisor: "Dr. Jeffrey W. Kysar",
    lab: "Kysar Small Scale Mechanics Laboratory",
    labUrl: "https://kysarlab.me.columbia.edu/research-projects/microneedles-inner-ear",
    summary: "Research assistant in Dr. Jeffrey Kysar's Small Scale Mechanics Lab at Columbia — fabricating IP-S photoresist micro-columns via two-photon polymerization on a Nanoscribe Photonic Professional GT+ and building a process–property map linking print parameters to nanoindentation-measured stiffness, supporting gold-coated metallic microneedle development for cochlear drug delivery.",
    overview: "The Kysar Lab develops ultra-sharp gold-coated copper microneedles capable of safely perforating the round window membrane (RWM) — the only soft-tissue portal from the middle ear to the fluid-filled cochlea — without breaching bone. These microneedles are fabricated via a hybrid process called two-photon templated electrodeposition (2PTE): a polymer mold is printed by two-photon polymerization (2PP) lithography at sub-micron voxel resolution, copper is electrodeposited into the mold, and the template is dissolved away, leaving a fully metallic needle 430μm tall with a 100μm shaft tapering to a 1.5μm tip radius. A nickel seed layer and gold immersion coating complete the device. My contribution focused on the 2PP printing stage — specifically on understanding which fabrication parameters govern print fidelity and the resulting mechanical properties of the photopolymer columns that form the mold.",
    role: "Working under Dr. Jeffrey W. Kysar and PhD student Daniela R. Hammer, I fabricated 100μm-diameter, 100μm-tall cylindrical columns in IP-S photoresist on polished silicon wafers using the Nanoscribe Photonic Professional GT+ at Columbia's ASRC facility in Manhattan. I systematically varied contour spacing, hatching distance, slicing distance, and shell scan speed across arrays of samples, inspected each array under a Keyence VHX 5000 digital microscope, and performed nanoindentation tests (four indents per sample) to measure load–displacement response. I co-authored the final research report documenting the parameter window that avoids overexposure bubble defects while maintaining structural integrity.",
    methods: "Print parameters were varied in a designed factorial sweep: contour/hatching distance (0.25–1μm), slicing distance (0.5–1.25μm), and shell scan speed (25,000–150,000μm/s), with laser power fixed at 100% for the body and 40% for the base. Columns were developed for 25 min in SU-8 developer (PGMEA) followed by two 10-min IPA rinse baths. Optical inspection used the Keyence VHX 5000 at 200× magnification to detect bubble-induced opacity defects. Nanoindentation was performed with a Berkovich tip; four tests per column yielded load–displacement curves from which hardness and reduced modulus were extracted. Key finding: slicing distance must exceed hatching distance to prevent overexposure — an acceptable process window of contour 0.5–0.75μm, slicing 0.75–1μm, and scan speed 75,000–100,000μm/s was identified.",
    bullets: [
      "Nanoscribe Photonic Professional GT+ — IP-S photoresist on polished silicon wafer",
      "Two-photon polymerization (2PP) at sub-micron voxel resolution",
      "Parameter sweep: contour/hatch spacing, slicing distance, shell scan speed",
      "Development: 25 min PGMEA + 2× 10 min IPA; inspection: Keyence VHX 5000",
      "Nanoindentation — Berkovich tip, 4 tests/sample, load–displacement mapping",
      "Key result: slicing > hatching distance required to suppress bubble defects",
      "Supports 2PTE gold-coated microneedles for cochlear round window drug delivery",
      "Daniela R. Hammer · Dr. Jeffrey W. Kysar · Columbia ASRC · Spring & Fall 2025"
    ],
    impact: "Perforating the round window membrane with ultra-sharp microneedles offers a minimally invasive route to deliver therapeutics directly into the cochlea — a potential breakthrough for treating sensorineural hearing loss, Ménière's disease, and ototoxicity. My work on the 2PP parameter window directly feeds the mold quality that determines needle tip sharpness and mechanical reliability. The process–property relationships I documented — particularly the slicing-to-hatching distance constraint — reduce defect rates in the most critical fabrication step of the 2PTE process, and the nanoindentation dataset links print conditions to quantitative stiffness outcomes for rational mold design.",
    visualTitle: "Two-photon templated electrodeposition",
    visualText: "A 2PP-printed IP-S polymer mold defines the needle geometry at sub-micron resolution. Copper is then galvanostatically electrodeposited into the mold using an Ag/AgCl reference electrode; after deposition, the template is dissolved in Technistrip NF-52, leaving a free-standing copper microneedle coated with electroless nickel and immersion gold. The finished needle — 430μm tall, 1.5μm tip radius — fits into a standard 24-gauge hypodermic for RWM perforation.",
    download: [
      { label: "Research Report — Osa, Hammer, Kysar (2025)", href: "nanofab-report-osa.pdf" },
      { label: "Published Paper — Aksit et al. (2020)", href: "nanofab-paper-aksit2020.pdf" }
    ],
    galleryHeader: {
      eyebrow: "Experimental Results",
      title: "Fabrication & Characterization Gallery",
      intro: "Keyence microscope images of printed micro-column arrays across parameter conditions, and nanoindentation load–displacement curves for solid and scaffold column geometries."
    },
    gallery: [
      {
        label: "Printed Columns",
        images: [
          { src: "nanofab-fig-p5-0.png", title: "Side-view — 3 IP-S columns on silicon wafer", caption: "100μm-diameter columns printed at acceptable parameters, viewed at 200× magnification. Columns reflect cleanly off the polished silicon surface." }
        ]
      },
      {
        label: "Parameter Sweep",
        images: [
          { src: "nanofab-fig-p6-0.png", title: "Bubble defects — hatching ≥ slicing distance", caption: "Array printed with slicing distance equal to or smaller than hatching distance. Overexposure produces internal bubble voids visible as bright scattering in the column bodies." },
          { src: "nanofab-fig-p6-1.png", title: "Transitional parameter regime", caption: "Intermediate parameter set — bubble severity reduced but not eliminated. The middle rows show partial defects; top rows printed at higher scan speed show cleaner geometry." },
          { src: "nanofab-fig-p6-2.png", title: "Acceptable window — slicing > hatching distance", caption: "Columns printed within the identified process window (contour 0.5–0.75μm, slicing 0.75–1μm, scan speed 75,000–100,000μm/s). Structures are optically clear with no bubble defects." }
        ]
      },
      {
        label: "After Indentation",
        images: [
          { src: "nanofab-fig-p7-0.png", title: "Top-down view — residual indentation marks", caption: "Top-down view of columns after nanoindentation testing. Circular residual impressions from the Berkovich tip are visible at the column centers, confirming contact and enabling modulus extraction." }
        ]
      },
      {
        label: "Mechanical Data",
        images: [
          { src: "nanofab-fig-p3-0.png", title: "Load–displacement — solid columns (C007)", caption: "Four nanoindentation tests on a solid column sample (C007). Load reaches ~530mN at ~3.2μm displacement; high repeatability across tests confirms structural uniformity." },
          { src: "nanofab-fig-p3-1.png", title: "Load–displacement — scaffold columns (C015)", caption: "Four tests on a scaffold-geometry column (C015). Lower peak load (~460mN) and greater displacement reflect the reduced material density of the lattice-infill print mode." }
        ]
      }
    ]
  },

  dolagon: {
    tag: "Autonomy · Industry · dolaGon",
    title: "Self-Driving Off-Road Vehicles — dolaGon",
    image: "dolagon.webp",
    visualType: "dolagon-system-viz",
    period: "Fall 2022",
    supervisor: "Seth Neubardt",
    lab: "dolaGon",
    labUrl: "https://www.dolagon.com/",
    summary: "Research assistant at dolaGon — an early-stage Colorado startup building autonomous conversion kits for off-road utility terrain vehicles, targeting ski resorts, farms, and ranches. Contributed to emergency recall physics and served as Terrain Testing Coordinator for field validation across unstructured winter environments.",
    overview: "dolaGon converts stock Polaris Ranger UTVs into autonomous platforms using a DBW (drive-by-wire) kit developed in partnership with Sygnal Auto. The system teaches a route once via manual drive, then repeats it fully autonomously — using camera vision and LiDAR for hazard detection, stopping and alerting the operator whenever an obstacle is encountered. Electronics are IP67+ rated for mud, snow, and extreme outdoor conditions. The flagship use case: autonomously shuttling skiers uphill so the vehicle descends on its own while riders ski down, creating a continuous lift loop without infrastructure.",
    role: "I worked across two parallel tracks. On the physics solution side, I contributed to emergency recall systems — the mechanisms by which the autonomous UTV is safely halted or returned under edge-case conditions including sensor failure, communication loss, and unexpected terrain. As Terrain Testing Coordinator, I independently sourced, contacted, and arranged field test sites across different terrain types, coordinating logistics for outdoor sessions across multiple vehicle iterations.",
    methods: "Emergency recall analysis involved modeling braking distances, stopping forces, and vehicle response times across terrain gradients and surface conditions (snow, gravel, mud), building physics models to bound worst-case recall scenarios. Terrain test coordination required writing criteria specifications for terrain type, slope gradient, and surface hardness; identifying and contacting candidate sites; negotiating access; and managing scheduling and logistics for test sessions with the engineering team.",
    bullets: [
      "DBW conversion kit — Polaris Ranger UTV, IP67+ electronics, Sygnal Auto partnership",
      "Teach-and-repeat autonomy — manual route recording, then full autonomous replay",
      "Camera vision + LiDAR hazard detection with operator alert system",
      "Physics solution for emergency recall: braking distance & response-time modeling",
      "Terrain Testing Coordinator — site sourcing, access negotiation, session logistics",
      "Field validation across ski slopes, farm tracks, and extreme winter conditions",
      "Pilot Vehicle Program — enclosed backcountry off-road environments"
    ],
    impact: "dolaGon placed me inside real autonomous vehicle development at the earliest stage — physics-level safety analysis to field logistics for testing on snow. The dual engineering-and-coordination role reflects what early-stage autonomy actually demands, and working on a teach-and-repeat off-road autonomy system in 2022 directly shaped my understanding of perception-constrained navigation outside the lab.",
    visualTitle: "Teach-and-Repeat Autonomy Pipeline",
    visualText: "dolaGon's two-phase system: an operator manually drives the route once to record it, then the vehicle replays the path fully autonomously. Camera vision and LiDAR monitor for obstacles in real time — if a hazard appears, the vehicle halts and alerts the operator before continuing. The DBW kit handles throttle, braking, and steering entirely by wire, with IP67+ ruggedized electronics for operation in snow and mud.",
    galleryHeader: {
      eyebrow: "Field & Platform",
      title: "dolaGon in Action",
      intro: "The autonomous UTV platform across real-world environments — ski terrain, ranch operations, and extreme winter field testing — alongside the DBW kit electronics that make it work."
    },
    gallery: [
      {
        label: "Ski Terrain",
        images: [
          { src: "dolagon-snow-trail.jpg", title: "Aerial — autonomous UTV with skiers on mountain slope", caption: "Drone shot of the dolaGon Polaris Ranger running a recorded ski route autonomously while two skiers follow. Colorado backcountry, winter field test." }
        ]
      },
      {
        label: "Field Testing",
        images: [
          { src: "dolagon-utv-field.jpg", title: "UTV in blizzard conditions — sensor suite on roof", caption: "Can-Am Defender test vehicle with the autonomy sensor stack (camera + LiDAR) mounted on the roof cage, during extreme winter field validation." },
          { src: "dolagon-action.jpg", title: "Ranch use case — dolaGon UTV at hay bale operation", caption: "dolaGon UTV at a Colorado ranch during field testing, demonstrating the barn-to-pasture cargo transport use case." }
        ]
      },
      {
        label: "The System",
        images: [
          { src: "dolagon-utv-snow2.jpg", title: "DBW kit electronics — compute and harness assembly", caption: "The dolaGon autonomous compute module and wiring harness installed in the vehicle cabin. OEM-grade connectors and IP67+ rated housings for all-weather operation." },
          { src: "dolagon-utv-closeup.jpg", title: "dolaGon Autonomous control interface — cockpit view", caption: "Interior shot of the dolaGon control unit embedded in the UTV dashboard, showing the branded autonomy module and driver interface." }
        ]
      }
    ]
  }
};

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initPageTransitionIn();
  initStarBackground();
  initAtomCanvas();
  initScrollReveal();
  initMagneticCards();
  initProjectCardTransitions();
  initBackTransition();
  populateProjectPage();
  populateResearchPage();
});

/* ═══════════════════════════════════════════════
   PAGE TRANSITION — IN (overlay fades out on load)
═══════════════════════════════════════════════ */
function initPageTransitionIn() {
  const overlay = document.getElementById("pageOverlay");
  if (!overlay) return;

  // Short delay so the browser paints before we start fading
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove("page-loading");
      // Trigger hero animations
      setTimeout(() => document.body.classList.add("page-ready"), 80);
    });
  });
}

/* ═══════════════════════════════════════════════
   STAR BACKGROUND
═══════════════════════════════════════════════ */
function initStarBackground() {
  const canvas = document.getElementById("stars");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.15,
      vx: (Math.random() - 0.5) * 0.09,
      vy: (Math.random() - 0.5) * 0.09,
      a: Math.random() * 0.55 + 0.2
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.x = (s.x + s.vx + canvas.width) % canvas.width;
      s.y = (s.y + s.vy + canvas.height) % canvas.height;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

/* ═══════════════════════════════════════════════
   ATOM ↔ EARTH CANVAS — hero visual
   Morphs: nucleus→Earth, electrons→satellites
═══════════════════════════════════════════════ */
function initAtomCanvas() {
  const canvas = document.getElementById("atomCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const DPR = window.devicePixelRatio || 1;

  function resize() {
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width = w * DPR;
    canvas.height = h * DPR;
    ctx.scale(DPR, DPR);
  }

  resize();
  window.addEventListener("resize", resize);

  const W = () => canvas.offsetWidth;
  const H = () => canvas.offsetHeight;

  // ── Orbital rings (same for atom + satellites) ──
  const rings = [
    { a: 185, b: 66,  tilt: 10,  speed: 0.42, phase: 0 },
    { a: 172, b: 58,  tilt: 62,  speed: 0.31, phase: 1.2 },
    { a: 158, b: 54,  tilt: -52, speed: 0.26, phase: 2.4 },
  ];

  const orbiters = rings.map((r, i) => ({
    ring: i,
    angle: (i * Math.PI * 2) / 3,
    trail: []
  }));

  // ── Morph state machine ──
  // morphT: 0 = atom, 1 = earth
  let morphT = 0;
  let phase = "atom-hold"; // atom-hold → to-earth → earth-hold → to-atom
  let phaseTimer = 0;
  const HOLD = 3.8;   // seconds to hold each state
  const MORPH = 2.6;  // seconds for the crossfade

  function ease(t) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }
  function lerp(a, b, t) { return a + (b - a) * t; }

  // Escaped particles (atom mode only)
  let escaped = [];
  let lastEscape = 0;
  let t = 0;

  // ── Helper: orbit position ──
  function orbPos(ring, angle, cx, cy) {
    const r = rings[ring];
    const tr = (r.tilt * Math.PI) / 180;
    const x0 = r.a * Math.cos(angle);
    const y0 = r.b * Math.sin(angle);
    return {
      x: cx + x0 * Math.cos(tr) - y0 * Math.sin(tr),
      y: cy + x0 * Math.sin(tr) + y0 * Math.cos(tr)
    };
  }

  // ── Draw nucleus glow (atom state) ──
  function drawNucleus(cx, cy, alpha) {
    if (alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = alpha;

    const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 54);
    grd.addColorStop(0,    "rgba(255,255,255,1)");
    grd.addColorStop(0.22, "rgba(0,196,255,0.85)");
    grd.addColorStop(0.55, "rgba(139,92,246,0.45)");
    grd.addColorStop(1,    "rgba(139,92,246,0)");
    ctx.beginPath();
    ctx.arc(cx, cy, 54, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, cy, 11, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.shadowBlur = 30;
    ctx.shadowColor = "#00c4ff";
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.restore();
  }

  // ── Draw Earth (earth state) ──
  function drawEarth(cx, cy, radius, alpha) {
    if (alpha <= 0 || radius <= 0) return;
    ctx.save();
    ctx.globalAlpha = alpha;

    // Clip to sphere
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.save();
    ctx.clip();

    // Ocean gradient
    const ocean = ctx.createRadialGradient(
      cx - radius * 0.3, cy - radius * 0.3, 0,
      cx, cy, radius
    );
    ocean.addColorStop(0,   "#5ecfff");
    ocean.addColorStop(0.4, "#1565c0");
    ocean.addColorStop(1,   "#0a2260");
    ctx.fillStyle = ocean;
    ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);

    // Slow continent rotation
    ctx.translate(cx, cy);
    ctx.rotate(t * 0.035);
    ctx.translate(-cx, -cy);

    // Continents
    ctx.fillStyle = "#2e6b28";
    // North America
    ctx.beginPath();
    ctx.ellipse(cx - radius*0.27, cy - radius*0.18, radius*0.21, radius*0.27, -0.28, 0, Math.PI*2);
    ctx.fill();
    // South America
    ctx.beginPath();
    ctx.ellipse(cx - radius*0.16, cy + radius*0.28, radius*0.12, radius*0.22, 0.12, 0, Math.PI*2);
    ctx.fill();
    // Europe / Africa
    ctx.beginPath();
    ctx.ellipse(cx + radius*0.15, cy - radius*0.04, radius*0.10, radius*0.37, 0.04, 0, Math.PI*2);
    ctx.fill();
    // Asia
    ctx.beginPath();
    ctx.ellipse(cx + radius*0.32, cy - radius*0.20, radius*0.22, radius*0.17, -0.18, 0, Math.PI*2);
    ctx.fill();
    // Australia
    ctx.beginPath();
    ctx.ellipse(cx + radius*0.31, cy + radius*0.30, radius*0.10, radius*0.09, 0.28, 0, Math.PI*2);
    ctx.fill();

    // Ice caps
    ctx.fillStyle = "rgba(230,245,255,0.88)";
    ctx.beginPath();
    ctx.ellipse(cx, cy - radius*0.82, radius*0.31, radius*0.17, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(cx, cy + radius*0.82, radius*0.27, radius*0.14, 0, 0, Math.PI*2);
    ctx.fill();

    // Cloud wisps (slowly drift)
    ctx.fillStyle = "rgba(255,255,255,0.20)";
    for (let i = 0; i < 6; i++) {
      const wx = cx + Math.cos(i * 1.25 + t * 0.009) * radius * 0.38;
      const wy = cy + Math.sin(i * 0.88 + t * 0.007) * radius * 0.34;
      ctx.beginPath();
      ctx.ellipse(wx, wy, radius * 0.13, radius * 0.05, i * 0.55, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore(); // remove clip + rotation

    // Atmosphere halo (outside sphere)
    ctx.save();
    ctx.globalAlpha = alpha * 0.55;
    const atmo = ctx.createRadialGradient(cx, cy, radius * 0.88, cx, cy, radius * 1.38);
    atmo.addColorStop(0, "rgba(80,190,255,0.50)");
    atmo.addColorStop(0.5, "rgba(40,120,255,0.18)");
    atmo.addColorStop(1, "rgba(20,80,200,0)");
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 1.38, 0, Math.PI * 2);
    ctx.fillStyle = atmo;
    ctx.fill();
    ctx.restore();

    ctx.restore();
  }

  // ── Draw electron dot with trail ──
  function drawElectron(pos, trail, alpha) {
    if (alpha <= 0) return;
    // Trail
    trail.forEach((p, i) => {
      const a = (i / trail.length) * 0.32 * alpha;
      const s = (i / trail.length) * 5;
      ctx.beginPath();
      ctx.arc(p.x, p.y, s, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,196,255,${a})`;
      ctx.fill();
    });
    // Dot
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 5.5, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.shadowBlur = 18;
    ctx.shadowColor = "#00c4ff";
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.restore();
  }

  // ── Draw satellite with solar panels ──
  function drawSatellite(pos, angle, alpha) {
    if (alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(pos.x, pos.y);
    ctx.rotate(angle + Math.PI / 2);

    // Body
    ctx.shadowBlur = 14;
    ctx.shadowColor = "#7ecfff";
    ctx.fillStyle = "#c8dff0";
    ctx.fillRect(-4.5, -3, 9, 6);

    // Solar panels
    ctx.fillStyle = "#1a5fa8";
    ctx.fillRect(-15, -2.5, 8.5, 5);
    ctx.fillRect(6.5, -2.5, 8.5, 5);

    // Panel shimmer lines
    ctx.fillStyle = "rgba(120,210,255,0.55)";
    for (let i = 0; i < 3; i++) {
      ctx.fillRect(-14 + i * 2.8, -2, 1.2, 4);
      ctx.fillRect(7.5 + i * 2.8, -2, 1.2, 4);
    }

    // Antenna dish
    ctx.fillStyle = "#e0eeff";
    ctx.beginPath();
    ctx.arc(0, -5, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#c8dff0";
    ctx.fillRect(-0.6, -5, 1.2, 4);

    ctx.shadowBlur = 0;
    ctx.restore();
  }

  // ── Draw orbital ring (lerps atom→satellite look) ──
  function drawRing(ring, cx, cy) {
    const r = rings[ring];
    const tiltRad = (r.tilt * Math.PI) / 180;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(tiltRad);

    ctx.beginPath();
    ctx.ellipse(0, 0, r.a, r.b, 0, 0, Math.PI * 2);

    // Atom: cyan-violet gradient. Earth: pale blue dashed look
    const atomAlpha = lerp(0.48, 0.22, morphT);
    const rC = Math.round(lerp(0, 160, morphT));
    const gC = Math.round(lerp(196, 210, morphT));
    const bC = 255;
    ctx.strokeStyle = `rgba(${rC},${gC},${bC},${atomAlpha})`;
    ctx.lineWidth = lerp(1.3, 0.9, morphT);

    if (morphT > 0.5) {
      // Dashed orbital path in Earth mode
      ctx.setLineDash([8, 10]);
      ctx.lineDashOffset = t * 18;
    } else {
      ctx.setLineDash([]);
    }

    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  // ═══ MAIN DRAW LOOP ═══
  let lastTs = null;
  function draw(ts) {
    try {
      if (lastTs === null) lastTs = ts;
      const dt = Math.min((ts - lastTs) / 1000, 0.05); // real seconds, capped at 50ms
      lastTs = ts;
      t += dt;
      phaseTimer += dt;

      // ── Morph state machine (endless atom → earth → atom → …) ──
      if (phase === "atom-hold") {
        morphT = 0;
        if (phaseTimer > HOLD) { phase = "to-earth"; phaseTimer = 0; }
      } else if (phase === "to-earth") {
        morphT = ease(Math.min(phaseTimer / MORPH, 1));
        if (phaseTimer > MORPH) { phase = "earth-hold"; phaseTimer = 0; morphT = 1; }
      } else if (phase === "earth-hold") {
        morphT = 1;
        if (phaseTimer > HOLD) { phase = "to-atom"; phaseTimer = 0; }
      } else if (phase === "to-atom") {
        morphT = 1 - ease(Math.min(phaseTimer / MORPH, 1));
        if (phaseTimer > MORPH) { phase = "atom-hold"; phaseTimer = 0; morphT = 0; }
      } else {
        // Fallback: reset to known state
        phase = "atom-hold"; phaseTimer = 0; morphT = 0;
      }

      ctx.clearRect(0, 0, W(), H());

      const cx = W() / 2;
      const cy = H() / 2;

      // ── Orbital rings ──
      rings.forEach((_, i) => drawRing(i, cx, cy));

      // ── Nucleus ↔ Earth (crossfade) ──
      const earthR = lerp(8, 52, morphT);
      drawNucleus(cx, cy, 1 - morphT);
      drawEarth(cx, cy, earthR, morphT);

      // ── Orbiters: electrons ↔ satellites ──
      orbiters.forEach(e => {
        const r = rings[e.ring];
        e.angle += r.speed * dt;
        const pos = orbPos(e.ring, e.angle, cx, cy);
        const tangent = e.angle + Math.PI / 2;

        if (morphT < 0.85) {
          e.trail.push({ x: pos.x, y: pos.y });
          if (e.trail.length > 14) e.trail.shift();
        } else {
          e.trail = [];
        }

        drawElectron(pos, e.trail, 1 - morphT);
        drawSatellite(pos, tangent, morphT);
      });

      // ── Escaped particles (atom mode only) ──
      if (morphT < 0.45) {
        const escA = 1 - morphT / 0.45;
        if (t - lastEscape > 2.9 && escaped.length < 5) {
          lastEscape = t;
          const ri = Math.floor(Math.random() * rings.length);
          const ra = Math.random() * Math.PI * 2;
          const src = orbPos(ri, ra, cx, cy);
          const ang = Math.atan2(src.y - cy, src.x - cx);
          escaped.push({
            x: src.x, y: src.y,
            vx: Math.cos(ang) * (0.4 + Math.random() * 0.3),
            vy: Math.sin(ang) * (0.4 + Math.random() * 0.3),
            life: 1, decay: 0.003 + Math.random() * 0.003,
            r: 2.5 + Math.random() * 2
          });
        }
        escaped = escaped.filter(p => p.life > 0);
        escaped.forEach(p => {
          p.x += p.vx; p.y += p.vy; p.life -= p.decay;
          if (p.life <= 0) return;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0, p.r * p.life), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139,92,246,${p.life * 0.7 * escA})`;
          ctx.shadowBlur = 10; ctx.shadowColor = "#8b5cf6";
          ctx.fill(); ctx.shadowBlur = 0;
        });
      }
    } catch (e) {
      // swallow errors so the RAF loop never dies
    }
    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

/* ═══════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════ */
function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".sr, .sr-card").forEach((el, i) => {
    // Stagger cards in the same parent
    if (el.classList.contains("sr-card")) {
      const siblings = el.parentElement.querySelectorAll(".sr-card");
      siblings.forEach((sib, idx) => {
        sib.style.setProperty("--cd", `${idx * 0.09}s`);
      });
    }
    io.observe(el);
  });
}

/* ═══════════════════════════════════════════════
   MAGNETIC HOVER ON PROJECT CARDS
═══════════════════════════════════════════════ */
function initMagneticCards() {
  document.querySelectorAll(".bcard").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * 100;
      const my = ((e.clientY - rect.top) / rect.height) * 100;

      // Mouse-follow gradient
      card.style.setProperty("--mx", `${mx}%`);
      card.style.setProperty("--my", `${my}%`);

      // Subtle 3D tilt
      const dx = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const dy = (e.clientY - rect.top - rect.height / 2) / rect.height;
      card.style.transform = `perspective(900px) rotateY(${dx * 6}deg) rotateX(${-dy * 5}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/* ═══════════════════════════════════════════════
   PROJECT CARD → PROJECT PAGE TRANSITION (canvas)
═══════════════════════════════════════════════ */
function initProjectCardTransitions() {
  document.querySelectorAll(".bcard[href], .rcard[href]").forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      runProjectTransition(
        card.dataset.transition || "orbit",
        card.getAttribute("href")
      );
    });
  });
}

function runProjectTransition(type, href) {
  const old = document.getElementById("transCanvas");
  if (old) old.remove();

  const DPR = window.devicePixelRatio || 1;
  const W = window.innerWidth;
  const H = window.innerHeight;

  const cv = document.createElement("canvas");
  cv.id = "transCanvas";
  cv.width  = W * DPR;
  cv.height = H * DPR;
  cv.style.cssText = `position:fixed;inset:0;width:${W}px;height:${H}px;z-index:9999;pointer-events:all;`;
  document.body.appendChild(cv);

  const ctx = cv.getContext("2d");
  ctx.scale(DPR, DPR);

  const DURATION = 740;
  let start = null;
  let navigated = false;

  function eio(t) { return t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t; }
  function lrp(a, b, t) { return a + (b - a) * t; }

  function frame(ts) {
    if (!start) start = ts;
    const t = Math.min((ts - start) / DURATION, 1);
    const e = eio(t);
    ctx.clearRect(0, 0, W, H);

    switch (type) {
      case "orbit":  drawMoonTransition(ctx, t, e, W, H);  break;
      case "mars":   drawMarsTransition(ctx, t, e, W, H);  break;
      case "atom":   drawAtomScrTransition(ctx, t, e, W, H); break;
      case "drone":  drawDroneTransition(ctx, t, e, W, H); break;
      case "plasma":    drawPlasmaTransition(ctx, t, e, W, H);    break;
      case "laser":     drawLaserTransition(ctx, t, e, W, H);     break;
      case "mantle":    drawMantleTransition(ctx, t, e, W, H);    break;
      case "nanoscale": drawNanoscaleTransition(ctx, t, e, W, H); break;
      case "terrain":   drawTerrainTransition(ctx, t, e, W, H);   break;
      default:          drawMoonTransition(ctx, t, e, W, H);
    }

    if (t >= 0.82 && !navigated) {
      navigated = true;
      window.location.href = href;
    }
    if (t < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

// ── Crescent Moon ──────────────────────────────────────
function drawMoonTransition(ctx, t, e, W, H) {
  const cx = W / 2, cy = H / 2;
  const maxR = Math.hypot(cx, cy) * 1.3;

  // Deep space wipe
  const wipeR = e * maxR;
  const bgGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(wipeR, 1));
  bgGrd.addColorStop(0,   "#01020e");
  bgGrd.addColorStop(0.7, "#010310");
  bgGrd.addColorStop(1,   "#000508");
  ctx.beginPath();
  ctx.arc(cx, cy, Math.max(wipeR, 0.1), 0, Math.PI * 2);
  ctx.fillStyle = bgGrd;
  ctx.fill();

  // Stars inside wipe
  const sA = Math.min(t * 5, 1) * Math.max(0, 1 - Math.max(0, (t - 0.55) / 0.45));
  if (sA > 0.01) {
    for (let i = 0; i < 55; i++) {
      const sx = (i * 137.508) % W, sy = (i * 97.631) % H;
      if (Math.hypot(sx - cx, sy - cy) < wipeR) {
        ctx.beginPath();
        ctx.arc(sx, sy, (i % 3) * 0.45 + 0.35, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${sA * 0.55})`;
        ctx.fill();
      }
    }
  }

  // Moon
  const mP = Math.max(0, Math.min(1, (t - 0.12) / 0.78));
  if (mP > 0) {
    const mR = mP * Math.min(W, H) * 0.27;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, mR, 0, Math.PI * 2);
    ctx.clip();
    const mGrd = ctx.createRadialGradient(cx - mR*0.25, cy - mR*0.2, 0, cx, cy, mR);
    mGrd.addColorStop(0, "#f0ead8");
    mGrd.addColorStop(0.55, "#c8bfa8");
    mGrd.addColorStop(1, "#8a7f6e");
    ctx.fillStyle = mGrd;
    ctx.fillRect(cx - mR, cy - mR, mR * 2, mR * 2);
    [[0.22, -0.32, 0.11], [-0.36, 0.21, 0.08], [0.09, 0.41, 0.07], [-0.16, -0.18, 0.09]].forEach(([dx, dy, cr]) => {
      ctx.beginPath();
      ctx.arc(cx + dx*mR, cy + dy*mR, cr*mR, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(100,90,75,0.45)";
      ctx.fill();
    });
    ctx.restore();
    // Crescent shadow (dark side)
    ctx.beginPath();
    ctx.arc(cx + mR * 0.45, cy - mR * 0.08, mR * 0.82, 0, Math.PI * 2);
    ctx.fillStyle = "#01020e";
    ctx.fill();
    // Glow
    const glGrd = ctx.createRadialGradient(cx, cy, mR * 0.7, cx, cy, mR * 1.7);
    glGrd.addColorStop(0, `rgba(235,220,185,${mP * 0.24})`);
    glGrd.addColorStop(1, "rgba(200,190,160,0)");
    ctx.beginPath(); ctx.arc(cx, cy, mR * 1.7, 0, Math.PI * 2);
    ctx.fillStyle = glGrd; ctx.fill();
  }
}

// ── Mars ───────────────────────────────────────────────
function drawMarsTransition(ctx, t, e, W, H) {
  const cx = W / 2, cy = H / 2;
  const maxR = Math.hypot(cx, cy) * 1.4;

  ctx.fillStyle = `rgba(10,1,0,${e})`;
  ctx.fillRect(0, 0, W, H);

  const mR = e * maxR;
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, Math.max(mR, 1), 0, Math.PI * 2);
  ctx.clip();
  const mGrd = ctx.createRadialGradient(cx - mR*0.22, cy - mR*0.25, 0, cx, cy, mR);
  mGrd.addColorStop(0, "#ff9a6c"); mGrd.addColorStop(0.18, "#e05830");
  mGrd.addColorStop(0.5, "#c23010"); mGrd.addColorStop(0.82, "#8a1a04"); mGrd.addColorStop(1, "#4e0900");
  ctx.fillStyle = mGrd;
  ctx.fillRect(cx - mR, cy - mR, mR * 2, mR * 2);
  // Dark surface patches
  ctx.fillStyle = "rgba(40,8,0,0.55)";
  ctx.beginPath(); ctx.ellipse(cx + mR*0.10, cy - mR*0.15, mR*0.35, mR*0.20, -0.3, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx - mR*0.22, cy + mR*0.28, mR*0.28, mR*0.18, 0.4, 0, Math.PI*2);  ctx.fill();
  // Polar cap
  ctx.fillStyle = "rgba(255,235,215,0.55)";
  ctx.beginPath(); ctx.ellipse(cx + mR*0.02, cy - mR*0.84, mR*0.22, mR*0.10, 0, 0, Math.PI*2); ctx.fill();
  ctx.restore();
  // Atmosphere halo
  if (mR > 40) {
    const aGrd = ctx.createRadialGradient(cx, cy, mR*0.85, cx, cy, mR*1.3);
    aGrd.addColorStop(0, `rgba(210,100,50,${Math.min(e*0.35,0.35)})`);
    aGrd.addColorStop(1, "rgba(200,70,20,0)");
    ctx.beginPath(); ctx.arc(cx, cy, mR*1.3, 0, Math.PI*2);
    ctx.fillStyle = aGrd; ctx.fill();
  }
}

// ── Quantum / Atom rings ───────────────────────────────
function drawAtomScrTransition(ctx, t, e, W, H) {
  const cx = W / 2, cy = H / 2;
  const maxR = Math.hypot(cx, cy) * 1.4;

  ctx.fillStyle = `rgba(7,2,26,${e})`;
  ctx.fillRect(0, 0, W, H);

  for (let i = 0; i < 5; i++) {
    const rp = Math.max(0, Math.min(1, (t - i*0.07) / 0.65));
    if (rp <= 0) continue;
    const R = rp * maxR * (0.35 + i*0.17);
    const alpha = rp * (1 - rp*0.55) * 0.65;
    ctx.beginPath();
    ctx.ellipse(cx, cy, R, R*0.38, i*36*Math.PI/180 + t*2.2, 0, Math.PI*2);
    ctx.strokeStyle = i%2===0 ? `rgba(0,196,255,${alpha})` : `rgba(139,92,246,${alpha})`;
    ctx.lineWidth = 1.8;
    ctx.stroke();
  }

  // Nucleus flash
  const np = Math.min(e*3.5, 1) * Math.max(0, 1 - Math.max(0, (e-0.65)/0.35));
  if (np > 0) {
    const nR = e * 90;
    const nGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, nR);
    nGrd.addColorStop(0, `rgba(255,255,255,${np})`);
    nGrd.addColorStop(0.3, `rgba(0,196,255,${np*0.7})`);
    nGrd.addColorStop(1, "rgba(139,92,246,0)");
    ctx.beginPath(); ctx.arc(cx, cy, nR, 0, Math.PI*2);
    ctx.fillStyle = nGrd; ctx.fill();
  }
}

// ── Drone / TITAN ──────────────────────────────────────
function drawDroneTransition(ctx, t, e, W, H) {
  const cy = H / 2;

  ctx.fillStyle = `rgba(1,15,32,${e})`;
  ctx.fillRect(0, 0, W * Math.min(e*1.4, 1), H);

  const dX = -180 + e * (W + 350);
  const dY = cy + Math.sin(t * Math.PI * 3) * 22;
  const spin = t * 55;

  ctx.save();
  ctx.translate(dX, dY);

  // Arms + propeller disks
  [[-58,-28],[58,-28],[-58,28],[58,28]].forEach(([px, py]) => {
    ctx.save();
    ctx.translate(px, py);
    ctx.fillStyle = "rgba(150,200,230,0.7)";
    ctx.fillRect(px > 0 ? 0 : -9, -2, 9, 4);
    ctx.rotate(spin);
    ctx.beginPath();
    ctx.ellipse(0, 0, 26, 7, 0, 0, Math.PI*2);
    ctx.strokeStyle = "rgba(100,210,255,0.78)";
    ctx.lineWidth = 1.8;
    ctx.stroke();
    ctx.restore();
  });

  // Body
  ctx.shadowBlur = 18; ctx.shadowColor = "#00c4ff";
  ctx.fillStyle = "#d0e8f8";
  ctx.fillRect(-32, -11, 64, 22);
  ctx.fillStyle = "rgba(0,196,255,0.25)";
  ctx.fillRect(-28, -8, 56, 4);
  ctx.fillStyle = `rgba(0,196,255,${0.5 + 0.5*Math.sin(t*30)})`;
  ctx.fillRect(-30, 5, 60, 3);
  ctx.shadowBlur = 0;
  ctx.restore();

  // Light trail
  if (dX > 0) {
    const tGrd = ctx.createLinearGradient(Math.max(0, dX-250), 0, dX, 0);
    tGrd.addColorStop(0, "rgba(0,196,255,0)");
    tGrd.addColorStop(1, "rgba(0,196,255,0.12)");
    ctx.fillStyle = tGrd;
    ctx.fillRect(0, dY-5, Math.max(0, dX), 10);
  }
}

// ── Plasma burst ───────────────────────────────────────
function drawPlasmaTransition(ctx, t, e, W, H) {
  const cx = W / 2, cy = H / 2;
  const maxR = Math.hypot(cx, cy) * 1.4;

  ctx.fillStyle = `rgba(8,1,20,${e})`;
  ctx.fillRect(0, 0, W, H);

  for (let i = 0; i < 3; i++) {
    const bp = Math.max(0, Math.min(1, (t - i*0.1) / 0.72));
    if (bp <= 0) continue;
    const R = bp * maxR * (0.48 + i*0.28);
    const alpha = bp * (1 - bp*0.62) * (0.55 - i*0.1);
    const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(R, 1));
    if (i === 0) {
      grd.addColorStop(0, `rgba(255,255,255,${alpha})`);
      grd.addColorStop(0.2, `rgba(192,132,252,${alpha})`);
      grd.addColorStop(0.65, `rgba(139,92,246,${alpha*0.45})`);
      grd.addColorStop(1, "rgba(139,92,246,0)");
    } else {
      grd.addColorStop(0, `rgba(0,196,255,${alpha})`);
      grd.addColorStop(0.45, `rgba(139,92,246,${alpha*0.45})`);
      grd.addColorStop(1, "rgba(80,20,180,0)");
    }
    ctx.beginPath(); ctx.arc(cx, cy, Math.max(R, 1), 0, Math.PI*2);
    ctx.fillStyle = grd; ctx.fill();
  }

  // Striations
  for (let i = 0; i < 9; i++) {
    const angle = (i/9)*Math.PI*2 + t*1.8;
    const len = e * maxR * 1.15;
    const alpha = e * (1-e*0.25) * 0.28;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle)*len, cy + Math.sin(angle)*len);
    ctx.strokeStyle = i%2===0 ? `rgba(192,132,252,${alpha})` : `rgba(0,196,255,${alpha})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}

// ── Laser beam ─────────────────────────────────────────
function drawLaserTransition(ctx, t, e, W, H) {
  const cx = W / 2, cy = H / 2;
  const maxR = Math.hypot(cx, cy) * 1.4;

  ctx.fillStyle = `rgba(0,4,2,${e})`;
  ctx.fillRect(0, 0, W, H);

  // Diffraction rings expand from center
  for (let i = 0; i < 5; i++) {
    const rp = Math.max(0, Math.min(1, (t - i*0.06) / 0.65));
    if (rp <= 0) continue;
    const R = rp * maxR * (0.22 + i*0.18);
    const alpha = rp * (1 - rp*0.6) * (0.44 - i*0.06);
    ctx.beginPath();
    ctx.arc(cx, cy, Math.max(R, 1), 0, Math.PI*2);
    ctx.strokeStyle = `rgba(60,255,120,${alpha})`;
    ctx.lineWidth = 1.5 - i*0.2;
    ctx.stroke();
  }

  // Laser beam sweeps left → right
  const bP = Math.min(t * 2.2, 1);
  const bX = -80 + bP * (W + 80);
  if (bX > 0) {
    const bGrd = ctx.createLinearGradient(0, cy, bX, cy);
    bGrd.addColorStop(0, "rgba(40,255,80,0)");
    bGrd.addColorStop(0.5, "rgba(80,255,120,0.55)");
    bGrd.addColorStop(1, "rgba(220,255,220,0.92)");
    ctx.fillStyle = bGrd;
    ctx.fillRect(0, cy-2, bX, 4);
    // Glow
    const gGrd = ctx.createLinearGradient(0, cy-22, 0, cy+22);
    gGrd.addColorStop(0, "rgba(40,255,80,0)");
    gGrd.addColorStop(0.5, `rgba(40,255,80,${e*0.18})`);
    gGrd.addColorStop(1, "rgba(40,255,80,0)");
    ctx.fillStyle = gGrd;
    ctx.fillRect(0, cy-22, bX, 44);
    // Tip flash
    const tGrd = ctx.createRadialGradient(bX, cy, 0, bX, cy, 38);
    tGrd.addColorStop(0, `rgba(240,255,240,${e*0.9})`);
    tGrd.addColorStop(0.35, `rgba(60,255,120,${e*0.5})`);
    tGrd.addColorStop(1, "rgba(40,255,80,0)");
    ctx.beginPath(); ctx.arc(bX, cy, 38, 0, Math.PI*2);
    ctx.fillStyle = tGrd; ctx.fill();
  }

  // Ablation glow — material heating at center
  const aP = Math.max(0, (t - 0.3) / 0.7);
  if (aP > 0) {
    const aR = aP * 150;
    const aGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, aR);
    aGrd.addColorStop(0, `rgba(255,255,200,${aP*0.8})`);
    aGrd.addColorStop(0.2, `rgba(100,255,150,${aP*0.5})`);
    aGrd.addColorStop(0.55, `rgba(40,180,80,${aP*0.2})`);
    aGrd.addColorStop(1, "rgba(0,100,40,0)");
    ctx.beginPath(); ctx.arc(cx, cy, aR, 0, Math.PI*2);
    ctx.fillStyle = aGrd; ctx.fill();
  }
}

// ── Mantle / Earth layers ──────────────────────────────
function drawMantleTransition(ctx, t, e, W, H) {
  const cx = W / 2, cy = H / 2;
  const maxR = Math.hypot(cx, cy) * 1.4;

  ctx.fillStyle = `rgba(8,2,0,${e})`;
  ctx.fillRect(0, 0, W, H);

  // Concentric layer rings (outer mantle → core)
  const layers = [
    { c: [180,60,10],  delay: 0,    scale: 1.0  },
    { c: [220,110,20], delay: 0.08, scale: 0.86 },
    { c: [255,150,40], delay: 0.16, scale: 0.72 },
    { c: [200,80,0],   delay: 0.24, scale: 0.57 },
    { c: [140,25,0],   delay: 0.32, scale: 0.40 },
  ];

  layers.forEach(({ c, delay, scale }) => {
    const lp = Math.max(0, Math.min(1, (t - delay) / 0.7));
    if (lp <= 0) return;
    const R = lp * maxR * scale;
    if (R <= 0) return;
    const alpha = lp * (1 - lp * 0.25) * 0.65;
    const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(R, 1));
    grd.addColorStop(0,   `rgba(${c[0]},${c[1]},${c[2]},${alpha})`);
    grd.addColorStop(0.6, `rgba(${c[0]},${c[1]},${c[2]},${alpha * 0.4})`);
    grd.addColorStop(1,   `rgba(${c[0]},${c[1]},${c[2]},0)`);
    ctx.beginPath();
    ctx.arc(cx, cy, Math.max(R, 1), 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();
  });

  // Layer boundary rings
  for (let i = 0; i < 4; i++) {
    const rp = Math.max(0, Math.min(1, (t - i*0.1) / 0.62));
    if (rp <= 0) continue;
    const R = rp * maxR * (0.75 - i*0.14);
    if (R <= 0) continue;
    ctx.beginPath();
    ctx.arc(cx, cy, Math.max(R, 1), 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255,170,50,${rp * (1 - rp*0.5) * 0.45})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // Hot core glow
  const cP = Math.max(0, (t - 0.38) / 0.62);
  if (cP > 0) {
    const cR = cP * 130;
    const cGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, cR);
    cGrd.addColorStop(0,   `rgba(255,255,190,${cP * 0.9})`);
    cGrd.addColorStop(0.3, `rgba(255,130,20,${cP * 0.6})`);
    cGrd.addColorStop(1,   "rgba(200,40,0,0)");
    ctx.beginPath(); ctx.arc(cx, cy, cR, 0, Math.PI * 2);
    ctx.fillStyle = cGrd; ctx.fill();
  }
}

// ── Nanoscale / precision microscope ──────────────────
function drawNanoscaleTransition(ctx, t, e, W, H) {
  const cx = W / 2, cy = H / 2;
  const maxR = Math.hypot(cx, cy) * 1.4;

  ctx.fillStyle = `rgba(0,4,10,${e})`;
  ctx.fillRect(0, 0, W, H);

  // Grid lines
  const gA = Math.min(t * 3, 1) * 0.16 * e;
  if (gA > 0.01) {
    ctx.strokeStyle = `rgba(0,210,255,${gA})`;
    ctx.lineWidth = 0.7;
    const sp = 48;
    for (let x = cx % sp; x < W; x += sp) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
    for (let y = cy % sp; y < H; y += sp) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
  }

  // Expanding precision rings
  for (let i = 0; i < 6; i++) {
    const rp = Math.max(0, Math.min(1, (t - i*0.065) / 0.65));
    if (rp <= 0) continue;
    const R = rp * maxR * (0.18 + i*0.15);
    const alpha = rp * (1 - rp*0.55) * (0.55 - i*0.07);
    ctx.beginPath();
    ctx.arc(cx, cy, Math.max(R,1), 0, Math.PI*2);
    ctx.strokeStyle = i%2===0 ? `rgba(0,210,255,${alpha})` : `rgba(80,255,210,${alpha})`;
    ctx.lineWidth = i===0 ? 2 : 1.2;
    ctx.stroke();
  }

  // Crosshair + focus dot
  const xA = Math.min(e * 2.5, 1) * 0.85;
  if (xA > 0) {
    const xLen = e * Math.min(W, H) * 0.4;
    ctx.strokeStyle = `rgba(0,210,255,${xA * 0.65})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.moveTo(cx-xLen, cy); ctx.lineTo(cx+xLen, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, cy-xLen); ctx.lineTo(cx, cy+xLen); ctx.stroke();
    [-xLen*0.5,-xLen*0.25,xLen*0.25,xLen*0.5].forEach(o => {
      ctx.beginPath(); ctx.moveTo(cx+o, cy-6); ctx.lineTo(cx+o, cy+6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx-6, cy+o); ctx.lineTo(cx+6, cy+o); ctx.stroke();
    });
    const fGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 44);
    fGrd.addColorStop(0,   `rgba(255,255,255,${xA*0.9})`);
    fGrd.addColorStop(0.28,`rgba(0,210,255,${xA*0.6})`);
    fGrd.addColorStop(1,   "rgba(0,160,255,0)");
    ctx.beginPath(); ctx.arc(cx, cy, 44, 0, Math.PI*2);
    ctx.fillStyle = fGrd; ctx.fill();
  }
}

// ── Terrain / dolaGon ──────────────────────────────────
function drawTerrainTransition(ctx, t, e, W, H) {
  const cy = H / 2;

  // Night sky wipe from left
  const wipeW = e * 1.25 * W;
  const bgGrd = ctx.createLinearGradient(0, 0, Math.min(wipeW, W), 0);
  bgGrd.addColorStop(0, "rgba(2,4,14,1)");
  bgGrd.addColorStop(0.75, "rgba(4,8,22,1)");
  bgGrd.addColorStop(1, "rgba(4,8,22,0)");
  ctx.fillStyle = bgGrd;
  ctx.fillRect(0, 0, Math.min(wipeW, W), H);

  // Terrain ground line
  const tA = Math.min(e * 2, 1) * 0.45;
  if (tA > 0.01) {
    ctx.beginPath(); ctx.moveTo(0, cy + 90);
    for (let x = 0; x < W; x += 40)
      ctx.lineTo(x, cy + 90 + Math.sin(x*0.018 + t*1.5)*18);
    ctx.strokeStyle = `rgba(100,160,255,${tA*0.5})`; ctx.lineWidth = 1.5; ctx.stroke();
  }

  // UTV silhouette
  const uvX = -200 + e * (W * 0.5 + 200);
  const uvY = cy + 45;
  const vA = Math.min(e * 3, 1) * 0.9;
  if (vA > 0.01) {
    ctx.save(); ctx.translate(uvX, uvY); ctx.globalAlpha = vA;
    ctx.fillStyle = "#c0d0e8"; ctx.fillRect(-46, -32, 92, 30);
    ctx.fillStyle = "#d0e0f4"; ctx.fillRect(-34, -50, 58, 20);
    ctx.fillStyle = "#607090";
    ctx.beginPath(); ctx.arc(-30, 2, 14, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(30, 2, 14, 0, Math.PI*2); ctx.fill();
    ctx.globalAlpha = 1; ctx.restore();
  }

  // Headlight beams
  const bA = Math.min(e * 2, 1) * 0.35;
  if (bA > 0.01 && uvX > -100) {
    const bx = uvX + 48, by = uvY - 20;
    const b1 = ctx.createLinearGradient(bx, by, Math.min(bx+420, W), by-40);
    b1.addColorStop(0, `rgba(220,240,255,${bA*0.9})`); b1.addColorStop(1, "rgba(180,220,255,0)");
    ctx.beginPath(); ctx.moveTo(bx, by);
    ctx.lineTo(Math.min(bx+440, W), by-42); ctx.lineTo(Math.min(bx+440, W), by+4); ctx.closePath();
    ctx.fillStyle = b1; ctx.fill();
    const b2 = ctx.createLinearGradient(bx, by, Math.min(bx+300, W), by+38);
    b2.addColorStop(0, `rgba(220,240,255,${bA*0.65})`); b2.addColorStop(1, "rgba(180,220,255,0)");
    ctx.beginPath(); ctx.moveTo(bx, by);
    ctx.lineTo(Math.min(bx+320, W), by+40); ctx.lineTo(Math.min(bx+320, W), by+2); ctx.closePath();
    ctx.fillStyle = b2; ctx.fill();
  }

  // Snow particles
  const snA = Math.min(t * 3, 1) * Math.max(0, 1 - (t-0.5)/0.5) * 0.7;
  if (snA > 0.01) {
    for (let i = 0; i < 28; i++) {
      const sx = (i*97.31 + t*35) % W, sy = (i*53.7 + t*22) % H;
      ctx.beginPath(); ctx.arc(sx, sy, (i%3)*0.6+0.7, 0, Math.PI*2);
      ctx.fillStyle = `rgba(210,230,255,${snA*0.6})`; ctx.fill();
    }
  }
}

/* ═══════════════════════════════════════════════
   BACK TRANSITION (project → index)
═══════════════════════════════════════════════ */
function initBackTransition() {
  const btn   = document.querySelector(".back-transition");
  const layer = document.getElementById("backTransition");
  if (!btn || !layer) return;

  btn.addEventListener("click", e => {
    e.preventDefault();
    const href = btn.getAttribute("href");

    layer.classList.remove("active");
    void layer.offsetWidth; // force reflow
    layer.classList.add("active");

    setTimeout(() => { window.location.href = href; }, 1100);
  });
}

/* ═══════════════════════════════════════════════
   PROJECT PAGE POPULATION
═══════════════════════════════════════════════ */
function populateProjectPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id || !projects[id]) return;

  const p = projects[id];
  document.title = `${p.title} | Jose Osa`;

  const set = (elId, val) => {
    const el = document.getElementById(elId);
    if (el) el.textContent = val;
  };

  set("projectTag",      p.tag);
  set("projectTitle",    p.title);
  set("projectSummary",  p.summary);
  set("overviewTitle",   p.title);
  set("projectOverview", p.overview);
  set("projectChallenge",p.challenge);
  set("projectSolution", p.solution);
  set("projectImpact",   p.impact);
  set("visualTitle",     p.visualTitle);
  set("visualText",      p.visualText);

  const img = document.getElementById("projectImage");
  if (img) { img.src = p.image; img.alt = p.title; }

  const list = document.getElementById("projectBullets");
  if (list) {
    list.innerHTML = p.bullets.map(b => `<li>${b}</li>`).join("");
  }

  const stage = document.getElementById("visualStage");
  if (stage) stage.className = `visual-stage ${p.visualType || "image"}`;

  const diag = document.getElementById("diagramImage");
  if (diag) {
    if (p.diagram) { diag.src = encodeURIComponent(p.diagram); diag.style.display = "block"; }
    else diag.style.display = "none";
  }

  const gen = document.getElementById("generatedVisual");
  if (!gen) return;
  gen.innerHTML = "";

  if (p.visualType === "quantum") {
    gen.innerHTML = `
      <div class="quantum-visual">
        <div class="nucleus"></div>
        <div class="orbital orbital-one"></div>
        <div class="orbital orbital-two"></div>
        <div class="orbital orbital-three"></div>
        <div class="particle p1"></div>
        <div class="particle p2"></div>
        <div class="particle p3"></div>
      </div>`;
  }

  if (p.visualType === "laser") {
    gen.innerHTML = `
      <div class="laser-visual">
        <div class="laser-beam"></div>
        <div class="laser-spot"></div>
        <div class="laser-ring lr1"></div>
        <div class="laser-ring lr2"></div>
        <div class="laser-ring lr3"></div>
        <div class="laser-ring lr4"></div>
      </div>`;
  }

  if (p.visualType === "titan") {
    gen.innerHTML = `
      <div class="drone-overlay">
        <div class="mini-drone">
          <span></span><span></span><span></span><span></span>
        </div>
        <div class="fertilizer-drops">
          <i></i><i></i><i></i><i></i><i></i>
        </div>
      </div>`;
  }

  if (p.visualType === "plasma") {
    gen.innerHTML = `
      <div class="plasma-overlay">
        <div class="plasma-tube"></div>
        <div class="plasma-glow g1"></div>
        <div class="plasma-glow g2"></div>
        <div class="plasma-glow g3"></div>
      </div>`;
  }

  if (p.download) {
    const bar  = document.getElementById("projectDownload");
    const link = document.getElementById("projectDownloadLink");
    if (bar && link) {
      link.href = p.download.href;
      link.textContent = "⬇ " + p.download.label;
      bar.style.display = "";
    }
  }

  if (p.gallery && p.gallery.length) {
    initProjectGallery(p.gallery, p.galleryHeader);
  }
}

/* ═══════════════════════════════════════════════
   PROJECT GALLERY
═══════════════════════════════════════════════ */
function initProjectGallery(groups, header) {
  const wrap   = document.getElementById("projectGallery") || document.getElementById("researchGallery");
  const tabs   = document.getElementById("galleryTabs");
  const img    = document.getElementById("galleryImg");
  const matLbl = document.getElementById("galleryMaterial");
  const titLbl = document.getElementById("galleryTitle");
  const ctr    = document.getElementById("galleryCounter");
  const dots   = document.getElementById("galleryDots");
  const prev   = document.querySelector(".gallery-prev");
  const next   = document.querySelector(".gallery-next");
  if (!wrap) return;

  // Populate header if provided
  const eyebrow = document.getElementById("galleryEyebrow");
  const heading = document.getElementById("galleryHeading");
  const intro   = document.getElementById("galleryIntro");
  if (header) {
    if (eyebrow) eyebrow.textContent = header.eyebrow || "";
    if (heading) heading.textContent = header.title   || "";
    if (intro)   intro.textContent   = header.intro   || "";
  }

  wrap.style.display = "";

  let activeGroup = 0;
  let activeImg   = 0;

  function buildTabs() {
    tabs.innerHTML = "";
    groups.forEach((g, i) => {
      const btn = document.createElement("button");
      btn.className = "gallery-tab" + (i === activeGroup ? " active" : "");
      btn.textContent = g.material;
      btn.style.setProperty("--tab-color", g.color);
      btn.addEventListener("click", () => { activeGroup = i; activeImg = 0; render(); });
      tabs.appendChild(btn);
    });
  }

  function buildDots() {
    dots.innerHTML = "";
    const g = groups[activeGroup];
    g.images.forEach((_, i) => {
      const d = document.createElement("button");
      d.className = "gallery-dot" + (i === activeImg ? " active" : "");
      d.setAttribute("aria-label", `Image ${i + 1}`);
      d.addEventListener("click", () => { activeImg = i; render(); });
      dots.appendChild(d);
    });
  }

  function render() {
    const g = groups[activeGroup];
    const item = g.images[activeImg];
    img.src = encodeURIComponent(item.src);
    img.alt = `${g.material} — ${item.title}`;
    matLbl.textContent = g.material;
    matLbl.style.color = g.color;
    titLbl.textContent = item.title;
    ctr.textContent = `${activeImg + 1} / ${g.images.length}`;
    buildTabs();
    buildDots();
  }

  prev.addEventListener("click", () => {
    const len = groups[activeGroup].images.length;
    activeImg = (activeImg - 1 + len) % len;
    render();
  });

  next.addEventListener("click", () => {
    const len = groups[activeGroup].images.length;
    activeImg = (activeImg + 1) % len;
    render();
  });

  render();
}

/* ═══════════════════════════════════════════════
   RESEARCH PAGE POPULATION
═══════════════════════════════════════════════ */
function populateResearchPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id || !research[id]) return;

  const r = research[id];
  document.title = `${r.title} | Jose Osa`;

  const set = (elId, val) => {
    const el = document.getElementById(elId);
    if (el) el.textContent = val;
  };

  set("researchTag",      r.tag);
  set("researchTitle",    r.title);
  set("researchSummary",  r.summary);
  set("overviewTitle",    r.title);
  set("researchOverview", r.overview);
  set("researchRole",     r.role);
  set("researchMethods",  r.methods);
  set("researchImpact",   r.impact);
  set("visualTitle",      r.visualTitle);
  set("visualText",       r.visualText);

  const img = document.getElementById("researchImage");
  if (img) { img.src = r.image; img.alt = r.title; }

  const list = document.getElementById("researchBullets");
  if (list) list.innerHTML = r.bullets.map(b => `<li>${b}</li>`).join("");

  const stage = document.getElementById("visualStage");
  if (stage) stage.className = `visual-stage ${r.visualType || ""}`;

  const diag = document.getElementById("diagramImage");
  if (diag) diag.style.display = "none";

  // Lab link
  const linksEl = document.getElementById("researchLinks");
  if (linksEl && r.labUrl) {
    linksEl.innerHTML = `
      <a href="${r.labUrl}" target="_blank" rel="noopener" class="btn secondary" style="margin-top:1.5rem;display:inline-flex;">
        Visit ${r.lab} ↗
      </a>`;
  }

  // Download bar
  const dlBar = document.getElementById("researchDownload");
  if (dlBar && r.download && r.download.length) {
    dlBar.style.display = "";
    dlBar.innerHTML = r.download.map(d =>
      `<a href="${d.href}" download class="btn pill download-btn">⬇ ${d.label}</a>`
    ).join("");
  }

  // Gallery
  if (r.gallery && r.gallery.length) {
    const galleryEl = document.getElementById("researchGallery");
    if (galleryEl) galleryEl.style.display = "";
    initProjectGallery(r.gallery, r.galleryHeader);
  }

  const gen = document.getElementById("generatedVisual");
  if (!gen) return;
  gen.innerHTML = "";

  if (r.visualType === "mantle-viz" || r.visualType === "mantle-prop-viz") {
    gen.innerHTML = '<div class="mantle-prop-visual" id="mantlePropViz" style="width:100%;height:100%;position:relative;"></div>';

    (function() {
      var container = document.getElementById("mantlePropViz");
      if (!container) return;

      var svgNS = "http://www.w3.org/2000/svg";
      var W = 420, H = 300;
      var padL = 52, padR = 20, padT = 24, padB = 44;
      var plotW = W - padL - padR, plotH = H - padT - padB;

      // α(T) data representative of lower mantle perovskite at 3 pressures
      // (schematic curves matching actual QHA shape)
      var pressures = [
        { label: "20 GPa", color: "#4a9eff", yMax: 4.5e-5, yMid: 3.1e-5 },
        { label: "80 GPa", color: "#4dcc77", yMax: 1.85e-5, yMid: 1.6e-5 },
        { label: "140 GPa", color: "#ff9e40", yMax: 1.28e-5, yMid: 1.1e-5 }
      ];
      var TMin = 300, TMax = 4000;
      var yMin = 0, yMax = 5e-5;

      function tx(T) { return padL + (T - TMin) / (TMax - TMin) * plotW; }
      function ty(a) { return padT + plotH - (a - yMin) / (yMax - yMin) * plotH; }

      // Saturating curve shape: a0 + (aInf-a0)*(1 - exp(-T/tau))
      function alpha(T, a0, aInf, tau) {
        return a0 + (aInf - a0) * (1 - Math.exp(-T / tau));
      }

      var curves = [
        { a0: 0.5e-5, aInf: 4.5e-5, tau: 900, color: "#4a9eff", label: "20 GPa" },
        { a0: 1.0e-5, aInf: 1.9e-5, tau: 500, color: "#4dcc77", label: "80 GPa" },
        { a0: 0.7e-5, aInf: 1.3e-5, tau: 400, color: "#ff9e40", label: "140 GPa" }
      ];

      // Generate QHA dots (slightly scattered around the curve)
      var dotTs = [];
      for (var t = 400; t <= 4000; t += 200) dotTs.push(t);

      var svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.setAttribute("style", "width:100%;height:100%");
      container.appendChild(svg);

      // Background
      var bg = document.createElementNS(svgNS, "rect");
      bg.setAttribute("x", 0); bg.setAttribute("y", 0);
      bg.setAttribute("width", W); bg.setAttribute("height", H);
      bg.setAttribute("fill", "#050d18"); bg.setAttribute("rx", "8");
      svg.appendChild(bg);

      // Grid lines
      [1e-5, 2e-5, 3e-5, 4e-5].forEach(function(a) {
        var gy = ty(a);
        var gl = document.createElementNS(svgNS, "line");
        gl.setAttribute("x1", padL); gl.setAttribute("y1", gy);
        gl.setAttribute("x2", padL + plotW); gl.setAttribute("y2", gy);
        gl.setAttribute("stroke", "#1a2a3a"); gl.setAttribute("stroke-width", "1");
        svg.appendChild(gl);
        var gt = document.createElementNS(svgNS, "text");
        gt.setAttribute("x", padL - 4); gt.setAttribute("y", gy + 3);
        gt.setAttribute("text-anchor", "end"); gt.setAttribute("font-size", "7.5");
        gt.setAttribute("fill", "#445"); gt.setAttribute("font-family", "monospace");
        gt.textContent = (a * 1e5).toFixed(0);
        svg.appendChild(gt);
      });
      [1000, 2000, 3000, 4000].forEach(function(T) {
        var gx = tx(T);
        var gl = document.createElementNS(svgNS, "line");
        gl.setAttribute("x1", gx); gl.setAttribute("y1", padT);
        gl.setAttribute("x2", gx); gl.setAttribute("y2", padT + plotH);
        gl.setAttribute("stroke", "#1a2a3a"); gl.setAttribute("stroke-width", "1");
        svg.appendChild(gl);
        var gt = document.createElementNS(svgNS, "text");
        gt.setAttribute("x", gx); gt.setAttribute("y", padT + plotH + 12);
        gt.setAttribute("text-anchor", "middle"); gt.setAttribute("font-size", "7.5");
        gt.setAttribute("fill", "#556"); gt.setAttribute("font-family", "monospace");
        gt.textContent = T;
        svg.appendChild(gt);
      });

      // Axis labels
      var xLbl = document.createElementNS(svgNS, "text");
      xLbl.setAttribute("x", padL + plotW / 2); xLbl.setAttribute("y", H - 4);
      xLbl.setAttribute("text-anchor", "middle"); xLbl.setAttribute("font-size", "8.5");
      xLbl.setAttribute("fill", "#778"); xLbl.setAttribute("font-family", "monospace");
      xLbl.textContent = "Temperature (K)";
      svg.appendChild(xLbl);

      var yLbl = document.createElementNS(svgNS, "text");
      yLbl.setAttribute("transform", "rotate(-90 12 " + (padT + plotH / 2) + ")");
      yLbl.setAttribute("x", 12); yLbl.setAttribute("y", padT + plotH / 2);
      yLbl.setAttribute("text-anchor", "middle"); yLbl.setAttribute("font-size", "8");
      yLbl.setAttribute("fill", "#778"); yLbl.setAttribute("font-family", "monospace");
      yLbl.textContent = "α ×10⁻⁵ (1/K)";
      svg.appendChild(yLbl);

      // Title
      var title = document.createElementNS(svgNS, "text");
      title.setAttribute("x", padL + plotW / 2); title.setAttribute("y", padT - 8);
      title.setAttribute("text-anchor", "middle"); title.setAttribute("font-size", "8.5");
      title.setAttribute("fill", "#9ab"); title.setAttribute("font-family", "monospace");
      title.textContent = "Thermal Expansivity α(T) — MgSiO₃ Perovskite";
      svg.appendChild(title);

      // Axes
      var axX = document.createElementNS(svgNS, "line");
      axX.setAttribute("x1", padL); axX.setAttribute("y1", padT + plotH);
      axX.setAttribute("x2", padL + plotW); axX.setAttribute("y2", padT + plotH);
      axX.setAttribute("stroke", "#334"); axX.setAttribute("stroke-width", "1");
      svg.appendChild(axX);
      var axY = document.createElementNS(svgNS, "line");
      axY.setAttribute("x1", padL); axY.setAttribute("y1", padT);
      axY.setAttribute("x2", padL); axY.setAttribute("y2", padT + plotH);
      axY.setAttribute("stroke", "#334"); axY.setAttribute("stroke-width", "1");
      svg.appendChild(axY);

      // Create dot groups and path groups (hidden initially)
      var dotGroups = [], pathEls = [], labelEls = [];
      curves.forEach(function(c, ci) {
        var pg = document.createElementNS(svgNS, "g");
        svg.appendChild(pg);
        dotGroups.push({ g: pg, dots: [] });

        dotTs.forEach(function(T) {
          var a = alpha(T, c.a0, c.aInf, c.tau);
          var noise = (Math.random() - 0.5) * 0.04e-5;
          var dot = document.createElementNS(svgNS, "circle");
          dot.setAttribute("cx", tx(T)); dot.setAttribute("cy", ty(a + noise));
          dot.setAttribute("r", "3"); dot.setAttribute("fill", c.color);
          dot.setAttribute("opacity", "0");
          pg.appendChild(dot);
          dotGroups[ci].dots.push(dot);
        });

        // Fitted line (drawn after dots appear)
        var pts = [];
        for (var T2 = TMin; T2 <= TMax; T2 += 20) {
          pts.push(tx(T2) + "," + ty(alpha(T2, c.a0, c.aInf, c.tau)));
        }
        var path = document.createElementNS(svgNS, "polyline");
        path.setAttribute("points", pts.join(" "));
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", c.color);
        path.setAttribute("stroke-width", "1.8");
        path.setAttribute("opacity", "0");
        svg.appendChild(path);
        pathEls.push(path);

        // Pressure label at right end
        var lastT = 4000;
        var lblY = ty(alpha(lastT, c.a0, c.aInf, c.tau));
        var lbl = document.createElementNS(svgNS, "text");
        lbl.setAttribute("x", tx(lastT) + 4); lbl.setAttribute("y", lblY + 3);
        lbl.setAttribute("font-size", "8"); lbl.setAttribute("fill", c.color);
        lbl.setAttribute("font-family", "monospace"); lbl.setAttribute("opacity", "0");
        lbl.textContent = c.label;
        svg.appendChild(lbl);
        labelEls.push(lbl);
      });

      // Legend
      var legItems = [
        { symbol: "circle", label: "QHA data" },
        { symbol: "line", label: "fitted MDG model" }
      ];
      var lx = padL + 8, ly = padT + 8;
      var legDot = document.createElementNS(svgNS, "circle");
      legDot.setAttribute("cx", lx + 5); legDot.setAttribute("cy", ly + 4);
      legDot.setAttribute("r", "3"); legDot.setAttribute("fill", "#aaa");
      svg.appendChild(legDot);
      var legDotLbl = document.createElementNS(svgNS, "text");
      legDotLbl.setAttribute("x", lx + 12); legDotLbl.setAttribute("y", ly + 8);
      legDotLbl.setAttribute("font-size", "7.5"); legDotLbl.setAttribute("fill", "#778");
      legDotLbl.setAttribute("font-family", "monospace");
      legDotLbl.textContent = "QHA";
      svg.appendChild(legDotLbl);
      var legLine = document.createElementNS(svgNS, "line");
      legLine.setAttribute("x1", lx); legLine.setAttribute("y1", ly + 16);
      legLine.setAttribute("x2", lx + 10); legLine.setAttribute("y2", ly + 16);
      legLine.setAttribute("stroke", "#aaa"); legLine.setAttribute("stroke-width", "1.8");
      svg.appendChild(legLine);
      var legLineLbl = document.createElementNS(svgNS, "text");
      legLineLbl.setAttribute("x", lx + 12); legLineLbl.setAttribute("y", ly + 20);
      legLineLbl.setAttribute("font-size", "7.5"); legLineLbl.setAttribute("fill", "#778");
      legLineLbl.setAttribute("font-family", "monospace");
      legLineLbl.textContent = "SLB24 fit";
      svg.appendChild(legLineLbl);

      // Status label
      var status = document.createElementNS(svgNS, "text");
      status.setAttribute("x", padL + plotW); status.setAttribute("y", padT - 8);
      status.setAttribute("text-anchor", "end"); status.setAttribute("font-size", "8");
      status.setAttribute("fill", "#4a9eff"); status.setAttribute("font-family", "monospace");
      status.textContent = "";
      svg.appendChild(status);

      // Animation sequence
      var phases = [
        "plotting QHA data...",
        "plotting QHA data...",
        "plotting QHA data...",
        "fitting SLB24 model...",
        "fitting SLB24 model...",
        "fitting SLB24 model...",
        "model validated"
      ];
      var step = 0;

      function runAnim() {
        // Phase 1: reveal dots curve by curve
        if (step < 3) {
          var ci = step;
          status.textContent = phases[step];
          status.setAttribute("fill", curves[ci].color);
          var di = 0;
          function showDot() {
            if (di < dotGroups[ci].dots.length) {
              dotGroups[ci].dots[di].setAttribute("opacity", "0.85");
              di++;
              setTimeout(showDot, 30);
            } else {
              step++;
              setTimeout(runAnim, 300);
            }
          }
          showDot();
        } else if (step < 6) {
          // Phase 2: reveal fitted lines
          var ci = step - 3;
          status.textContent = phases[step];
          status.setAttribute("fill", curves[ci].color);
          pathEls[ci].setAttribute("opacity", "1");
          labelEls[ci].setAttribute("opacity", "1");
          step++;
          setTimeout(runAnim, 600);
        } else {
          // Done — pause then reset
          status.textContent = "model validated";
          status.setAttribute("fill", "#4dcc77");
          setTimeout(function() {
            // Reset
            dotGroups.forEach(function(dg) {
              dg.dots.forEach(function(d) { d.setAttribute("opacity", "0"); });
            });
            pathEls.forEach(function(p) { p.setAttribute("opacity", "0"); });
            labelEls.forEach(function(l) { l.setAttribute("opacity", "0"); });
            status.textContent = "";
            step = 0;
            setTimeout(runAnim, 600);
          }, 2200);
        }
      }
      setTimeout(runAnim, 500);
    })();
  }

  if (r.visualType === "nanoscale-viz") {
    gen.innerHTML = `
      <div class="tpp-diagram" id="tppDiagram">
        <svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;overflow:visible">
          <!-- Objective lens body -->
          <rect x="170" y="8" width="80" height="22" rx="4" fill="#1a2a3a" stroke="#4af" stroke-width="1.5"/>
          <text x="210" y="23" text-anchor="middle" font-size="9" fill="#7cf" font-family="monospace">Objective Lens</text>
          <!-- Laser beam converging to focal voxel -->
          <polygon id="tppBeam" points="175,30 245,30 222,108 198,108" fill="url(#beamGrad)" opacity="0.55"/>
          <defs>
            <linearGradient id="beamGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#4af" stop-opacity="0.1"/>
              <stop offset="100%" stop-color="#4af" stop-opacity="0.85"/>
            </linearGradient>
            <radialGradient id="voxelGlow">
              <stop offset="0%" stop-color="#4af" stop-opacity="1"/>
              <stop offset="100%" stop-color="#4af" stop-opacity="0"/>
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <!-- Substrate wafer -->
          <rect x="60" y="262" width="300" height="16" rx="3" fill="#223" stroke="#445" stroke-width="1"/>
          <text x="210" y="285" text-anchor="middle" font-size="8.5" fill="#778" font-family="monospace">Polished Silicon Wafer</text>
          <!-- Photoresist layer (IP-S) -->
          <rect x="80" y="210" width="260" height="52" rx="2" fill="#0a1a28" stroke="#2a4a6a" stroke-width="1" opacity="0.8"/>
          <text x="345" y="237" font-size="8" fill="#46a" font-family="monospace">IP-S</text>
          <text x="345" y="247" font-size="8" fill="#46a" font-family="monospace">resin</text>
          <!-- Voxel grid: 6 cols × 4 rows -->
          <g id="voxelGrid"></g>
          <!-- Focal spot indicator (animated) -->
          <circle id="focalSpot" cx="210" cy="108" r="5" fill="url(#voxelGlow)" filter="url(#glow)" opacity="0"/>
          <!-- Slicing distance annotation -->
          <line x1="310" y1="218" x2="310" y2="230" stroke="#f90" stroke-width="1" stroke-dasharray="3,2"/>
          <line x1="310" y1="230" x2="310" y2="242" stroke="#f90" stroke-width="1" stroke-dasharray="3,2"/>
          <line x1="305" y1="218" x2="315" y2="218" stroke="#f90" stroke-width="1"/>
          <line x1="305" y1="242" x2="315" y2="242" stroke="#f90" stroke-width="1"/>
          <text x="320" y="232" font-size="8.5" fill="#f90" font-family="monospace">slicing</text>
          <text x="320" y="242" font-size="8.5" fill="#f90" font-family="monospace">distance</text>
          <!-- Hatching distance annotation -->
          <line x1="108" y1="298" x2="136" y2="298" stroke="#0f9" stroke-width="1" stroke-dasharray="3,2"/>
          <line x1="108" y1="293" x2="108" y2="303" stroke="#0f9" stroke-width="1"/>
          <line x1="136" y1="293" x2="136" y2="303" stroke="#0f9" stroke-width="1"/>
          <text x="116" y="312" font-size="8.5" fill="#0f9" font-family="monospace">hatching distance</text>
          <!-- Phase label -->
          <text id="phaseLabel" x="210" y="305" text-anchor="middle" font-size="9" fill="#7cf" font-family="monospace" opacity="0.7"></text>
        </svg>
      </div>`;

    // Build voxel grid
    (function() {
      const COLS = 6, ROWS = 4;
      const x0 = 108, y0 = 218, dx = 28, dy = 14;
      const ns = "http://www.w3.org/2000/svg";
      const grid = document.getElementById("voxelGrid");
      const focal = document.getElementById("focalSpot");
      const beam  = document.getElementById("tppBeam");
      const phase = document.getElementById("phaseLabel");
      const voxels = [];
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const rect = document.createElementNS(ns, "rect");
          const cx = x0 + c * dx, cy = y0 + r * dy;
          rect.setAttribute("x", cx - 10); rect.setAttribute("y", cy - 5);
          rect.setAttribute("width", 20); rect.setAttribute("height", 10);
          rect.setAttribute("rx", 2);
          rect.setAttribute("fill", "#0a2030"); rect.setAttribute("stroke", "#1a3a5a");
          rect.setAttribute("stroke-width", "0.8"); rect.setAttribute("opacity", "0.4");
          grid.appendChild(rect);
          voxels.push({ el: rect, cx, cy, lit: false });
        }
      }
      // Animate: scan through voxels row by row
      let idx = 0;
      let paused = false;
      function lightNext() {
        if (idx < voxels.length) {
          const v = voxels[idx];
          v.el.setAttribute("fill", "#00aaff"); v.el.setAttribute("opacity", "0.9");
          v.el.setAttribute("stroke", "#4af"); v.lit = true;
          focal.setAttribute("cx", v.cx); focal.setAttribute("cy", v.cy);
          focal.setAttribute("opacity", "1");
          // Move beam tip
          beam.setAttribute("points", "175,30 245,30 " + (v.cx+12) + "," + v.cy + " " + (v.cx-12) + "," + v.cy);
          const row = Math.floor(idx / COLS), col = idx % COLS;
          phase.textContent = "layer " + (row+1) + "/" + ROWS + " · pos " + (col+1) + "/" + COLS;
          idx++;
          setTimeout(lightNext, 220);
        } else {
          // Pause then reset
          focal.setAttribute("opacity", "0");
          phase.textContent = "print complete — developing...";
          setTimeout(() => {
            voxels.forEach(v => {
              v.el.setAttribute("fill", "#0a2030"); v.el.setAttribute("opacity", "0.4");
              v.el.setAttribute("stroke", "#1a3a5a");
            });
            beam.setAttribute("points", "175,30 245,30 222,108 198,108");
            phase.textContent = "";
            idx = 0;
            setTimeout(lightNext, 800);
          }, 1800);
        }
      }
      setTimeout(lightNext, 600);
    })();
  }

  if (r.visualType === "dolagon-system-viz") {
    const svgId = "dolagonSVG_" + Date.now();
    gen.innerHTML = `<svg id="${svgId}" viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg"
        style="width:100%;max-width:480px;display:block;margin:auto;font-family:inherit">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0d1b2a"/>
          <stop offset="100%" stop-color="#1a2e42"/>
        </linearGradient>
        <linearGradient id="snowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c8dff0"/>
          <stop offset="100%" stop-color="#a0bdd4"/>
        </linearGradient>
        <marker id="arrowB" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0,7 3.5,0 7" fill="#4fc3f7"/>
        </marker>
        <marker id="arrowG" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <polygon points="0 0,7 3.5,0 7" fill="#69f0ae"/>
        </marker>
      </defs>

      <!-- Background -->
      <rect width="480" height="320" fill="url(#skyGrad)" rx="12"/>

      <!-- Snow slope -->
      <polygon points="0,220 480,170 480,320 0,320" fill="url(#snowGrad)" opacity="0.9"/>
      <!-- Slope surface line -->
      <line x1="0" y1="220" x2="480" y2="170" stroke="#fff" stroke-width="1.5" opacity="0.4"/>

      <!-- PHASE LABELS -->
      <!-- Left panel: TEACH -->
      <rect x="14" y="14" width="200" height="140" rx="8" fill="#ffffff" fill-opacity="0.06" stroke="#4fc3f7" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="114" y="36" text-anchor="middle" font-size="11" font-weight="700" fill="#4fc3f7" letter-spacing="2">PHASE 1 — TEACH</text>
      <text x="114" y="52" text-anchor="middle" font-size="9" fill="#90caf9">operator drives manually</text>

      <!-- Right panel: REPLAY -->
      <rect x="266" y="14" width="200" height="140" rx="8" fill="#ffffff" fill-opacity="0.06" stroke="#69f0ae" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="366" y="36" text-anchor="middle" font-size="11" font-weight="700" fill="#69f0ae" letter-spacing="2">PHASE 2 — REPLAY</text>
      <text x="366" y="52" text-anchor="middle" font-size="9" fill="#a5d6a7">vehicle drives autonomously</text>

      <!-- Teach path dots (left) -->
      <circle cx="40"  cy="110" r="3.5" fill="#4fc3f7" opacity="0.9"/>
      <circle cx="70"  cy="105" r="3.5" fill="#4fc3f7" opacity="0.9"/>
      <circle cx="100" cy="100" r="3.5" fill="#4fc3f7" opacity="0.9"/>
      <circle cx="130" cy="95"  r="3.5" fill="#4fc3f7" opacity="0.9"/>
      <circle cx="160" cy="92"  r="3.5" fill="#4fc3f7" opacity="0.9"/>
      <circle cx="190" cy="88"  r="3.5" fill="#4fc3f7" opacity="0.9"/>
      <polyline points="40,110 70,105 100,100 130,95 160,92 190,88" fill="none" stroke="#4fc3f7" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"/>

      <!-- Route store arrow -->
      <text x="240" y="95" text-anchor="middle" font-size="8" fill="#ccc">route</text>
      <text x="240" y="106" text-anchor="middle" font-size="8" fill="#ccc">stored</text>
      <line x1="215" y1="100" x2="258" y2="100" stroke="#aaa" stroke-width="1" marker-end="url(#arrowG)"/>

      <!-- Replay path (right) -->
      <polyline points="270,110 300,105 330,100 360,95 390,92 420,88" fill="none" stroke="#69f0ae" stroke-width="2" opacity="0.8"/>
      <circle cx="270" cy="110" r="3" fill="#69f0ae" opacity="0.6"/>
      <circle cx="300" cy="105" r="3" fill="#69f0ae" opacity="0.6"/>
      <circle cx="330" cy="100" r="3" fill="#69f0ae" opacity="0.6"/>
      <circle cx="360" cy="95"  r="3" fill="#69f0ae" opacity="0.6"/>
      <circle cx="390" cy="92"  r="3" fill="#69f0ae" opacity="0.6"/>
      <circle cx="420" cy="88"  r="3" fill="#69f0ae" opacity="0.6"/>

      <!-- Animated vehicle on replay path -->
      <g id="dolagonVehicle">
        <rect x="-20" y="-8" width="36" height="14" rx="3" fill="#e8f5e9" opacity="0.95"/>
        <rect x="-8" y="-14" width="20" height="8" rx="2" fill="#b2dfdb"/>
        <circle cx="-12" cy="7" r="5" fill="#37474f"/>
        <circle cx="12"  cy="7" r="5" fill="#37474f"/>
        <!-- LiDAR dome -->
        <ellipse cx="8" cy="-14" rx="5" ry="3" fill="#69f0ae" opacity="0.8"/>
      </g>

      <!-- LiDAR scan lines (animated) -->
      <g id="dolagonLidar" opacity="0">
        <line x1="0" y1="0" x2="-28" y2="-22" stroke="#69f0ae" stroke-width="0.8" opacity="0.5"/>
        <line x1="0" y1="0" x2="-20" y2="-28" stroke="#69f0ae" stroke-width="0.8" opacity="0.5"/>
        <line x1="0" y1="0" x2="0"   y2="-30" stroke="#69f0ae" stroke-width="0.8" opacity="0.5"/>
        <line x1="0" y1="0" x2="20"  y2="-28" stroke="#69f0ae" stroke-width="0.8" opacity="0.5"/>
        <line x1="0" y1="0" x2="28"  y2="-22" stroke="#69f0ae" stroke-width="0.8" opacity="0.5"/>
      </g>

      <!-- DBW kit label -->
      <rect x="170" y="168" width="140" height="50" rx="6" fill="#1c2f45" stroke="#4fc3f7" stroke-width="1"/>
      <text x="240" y="186" text-anchor="middle" font-size="9" font-weight="700" fill="#4fc3f7">DBW CONVERSION KIT</text>
      <text x="240" y="199" text-anchor="middle" font-size="8" fill="#90caf9">throttle · brake · steer by-wire</text>
      <text x="240" y="211" text-anchor="middle" font-size="8" fill="#90caf9">IP67+ · OEM-grade harness</text>

      <!-- Sensor icons -->
      <rect x="40" y="168" width="110" height="50" rx="6" fill="#1c2f45" stroke="#69f0ae" stroke-width="1"/>
      <text x="95" y="186" text-anchor="middle" font-size="9" font-weight="700" fill="#69f0ae">PERCEPTION</text>
      <text x="95" y="199" text-anchor="middle" font-size="8" fill="#a5d6a7">camera vision</text>
      <text x="95" y="211" text-anchor="middle" font-size="8" fill="#a5d6a7">LiDAR · hazard detection</text>

      <!-- Alert box -->
      <rect x="330" y="168" width="110" height="50" rx="6" fill="#1c2f45" stroke="#ffcc80" stroke-width="1"/>
      <text x="385" y="186" text-anchor="middle" font-size="9" font-weight="700" fill="#ffcc80">SAFETY</text>
      <text x="385" y="199" text-anchor="middle" font-size="8" fill="#ffe0b2">hazard → halt</text>
      <text x="385" y="211" text-anchor="middle" font-size="8" fill="#ffe0b2">operator alerted</text>

      <!-- Status text -->
      <text id="dolagonStatus" x="240" y="300" text-anchor="middle" font-size="9" fill="#ccc">recording route…</text>
    </svg>`;

    (function() {
      var pts = [{x:270,y:110},{x:300,y:105},{x:330,y:100},{x:360,y:95},{x:390,y:92},{x:420,y:88}];
      var vehicle = document.getElementById("dolagonVehicle");
      var lidar   = document.getElementById("dolagonLidar");
      var status  = document.getElementById("dolagonStatus");
      if (!vehicle) return;

      var step = 0;
      var phase = 0; // 0=teach pause, 1=replay moving
      var statusMsgs = [
        "recording route…",
        "route stored — beginning autonomous replay",
        "navigating autonomously…",
        "LiDAR scan — path clear",
        "navigating autonomously…",
        "route complete — restarting cycle"
      ];

      function lerp(a, b, t) { return a + (b - a) * t; }

      function setVehicle(x, y) {
        vehicle.setAttribute("transform", "translate(" + x + "," + y + ")");
        lidar.setAttribute("transform", "translate(" + x + "," + (y-14) + ")");
      }

      // Start hidden
      vehicle.setAttribute("transform", "translate(270,110)");
      vehicle.style.display = "none";
      lidar.style.display = "none";

      function runTeachPhase() {
        status.textContent = statusMsgs[0];
        vehicle.style.display = "none";
        lidar.style.display = "none";
        setTimeout(runReplayPhase, 1800);
      }

      function runReplayPhase() {
        status.textContent = statusMsgs[1];
        vehicle.style.display = "";
        lidar.style.display = "";
        setVehicle(pts[0].x, pts[0].y);
        step = 0;
        setTimeout(animateStep, 500);
      }

      function animateStep() {
        if (step >= pts.length - 1) {
          status.textContent = statusMsgs[5];
          setTimeout(runTeachPhase, 1500);
          return;
        }
        var from = pts[step], to = pts[step+1];
        var dur = 600, start = null;
        var msg = step === 2 ? statusMsgs[3] : statusMsgs[2];
        status.textContent = msg;
        lidar.style.opacity = step === 2 ? "1" : "0.6";

        function frame(ts) {
          if (!start) start = ts;
          var t = Math.min((ts - start) / dur, 1);
          setVehicle(lerp(from.x, to.x, t), lerp(from.y, to.y, t));
          if (t < 1) { requestAnimationFrame(frame); }
          else { step++; setTimeout(animateStep, 80); }
        }
        requestAnimationFrame(frame);
      }

      runTeachPhase();
    })();
  }
}

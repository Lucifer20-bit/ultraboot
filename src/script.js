/**
 * ULTRABOOT — PURE VANILLA JAVASCRIPT CONTROLLER
 * Authoritative, Minimalist, High-Performance Interactions
 */

// Portfolio & Project Data Store
const PORTFOLIO_PROJECTS = [
  {
    id: "proj-1",
    category: "ventures",
    title: "Quantum Kernel Compiler",
    tagline: "Venture Prototype #04",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    summary: "Sub-millisecond matrix decomposition engine engineered by Oxford PhD candidates, funded by Geneva Family Office Syndicate.",
    specs: {
      "Architectural Domain": "Heterogeneous High-Performance Computing",
      "Syndicate Allocation": "$2,400,000 Equity Sandbox",
      "Academic Fellowship": "Oxford Department of Materials & CS",
      "Latency Benchmark": "0.14ms Matrix Inversion",
      "Governance Audit": "Tier-1 Airgapped Enclave Certified"
    }
  },
  {
    id: "proj-2",
    category: "hpc",
    title: "Distributed NVLink Neural Mesh",
    tagline: "HPC Architecture #12",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    summary: "Zero-overhead distributed tensor orchestrator serving 512-H100 clusters for private sovereign models.",
    specs: {
      "Architectural Domain": "Autonomous GPU Swarm Orchestration",
      "Compute Density": "512 x NVIDIA H100 Hopper SXM5",
      "Patron Deployment": "Zurich Sovereign Wealth Client",
      "Throughput Gain": "2.84x Linear Scale Efficiency",
      "Verification Level": "SOC2 Type II + Formal TLA+ Proof"
    }
  },
  {
    id: "proj-3",
    category: "sandboxes",
    title: "Executive Sovereign Vault",
    tagline: "Private Sandbox #09",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    summary: "Air-gapped algorithmic wealth intelligence platform with on-premise execution nodes for single-family offices.",
    specs: {
      "Architectural Domain": "Zero-Knowledge Financial Cryptography",
      "Patron Base": "Top 50 European Multi-Family Offices",
      "Scholar Engineers": "Cambridge & ETH Zurich Alumni",
      "Security Perimeter": "Hardware Security Modules (HSM Level 4)",
      "Audit Protocol": "Continuous Formal Verification"
    }
  },
  {
    id: "proj-4",
    category: "labs",
    title: "Biomolecular Folding Acceleration",
    tagline: "Student Lab #03",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    summary: "Cryo-EM structural pipeline accelerating targeted macromolecular docking simulations by 18x.",
    specs: {
      "Architectural Domain": "Computational Biophysics & Structural Bio",
      "Grant Value": "$850,000 Zero-Equity Fellowship",
      "Lead Fellows": "Stanford Bio-X Postdoctoral Researchers",
      "Validation Cycle": "Wet-lab validated in 4 weeks",
      "Commercial Exit": "Pre-committed Serie A Term Sheet"
    }
  },
  {
    id: "proj-5",
    category: "ventures",
    title: "Autonomous Fleet Telemetry Kernel",
    tagline: "Venture Prototype #07",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    summary: "Real-time deterministic sensory arbitration kernel designed for next-generation orbital and drone arrays.",
    specs: {
      "Architectural Domain": "Hard Real-Time Embedded Systems (RTOS)",
      "Sponsor Syndicate": "London Aerospace Angel Syndicate",
      "Fellowship Institution": "Imperial College Aeronautics",
      "Memory Footprint": "< 4.2 MB Static Allocations",
      "Safety Integrity": "DO-178C Level A Target Compliant"
    }
  },
  {
    id: "proj-6",
    category: "sandboxes",
    title: "Arbitrage Execution Fabric",
    tagline: "Private Sandbox #18",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    summary: "FPGA-synthesized deterministic co-location routing matrix delivering ultra-low tail latency for bespoke private capital.",
    specs: {
      "Architectural Domain": "FPGA Microarchitecture & Hardware Routing",
      "Allocated Capital": "$5,000,000 Dedicated Liquidity Line",
      "Engineering Fellowship": "MIT CSAIL Accelerated Laboratory",
      "Mean Latency": "38 Nanoseconds Wire-to-Wire",
      "Deployment Model": "Private Colocation Equinix LD4 & NY4"
    }
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initHeroAudienceToggle();
  initSimulator();
  initGallery();
  initModal();
  initWhatsAppEngine();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. NAVBAR CONTROLLER
   -------------------------------------------------------------------------- */
function initNavbar() {
  const nav = document.getElementById("siteNav");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   2. HERO AUDIENCE TOGGLE
   -------------------------------------------------------------------------- */
function initHeroAudienceToggle() {
  const tabs = document.querySelectorAll(".audience-tab");
  const heroDescription = document.getElementById("heroDescription");
  const heroMetricValue = document.getElementById("heroMetricValue");
  const heroMetricLabel = document.getElementById("heroMetricLabel");

  if (!tabs.length || !heroDescription) return;

  const contentMap = {
    hnw: {
      desc: "Ultraboot operates bespoke compute enclaves and venture sandboxes for high-net-worth patrons and family offices seeking direct, unmediated access to proprietary software architectures created by top academic prodigies.",
      val: "$42.8M+",
      label: "Institutional Pipeline Allocated"
    },
    student: {
      desc: "Ultraboot grants elite student engineers, researchers, and doctoral fellows zero-equity compute clusters, dedicated legal structuring, and direct co-investment from sovereign private capital.",
      val: "100% Equity",
      label: "Retained by Scholar Founders"
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.dataset.audience || "hnw";
      const data = contentMap[target];
      if (data) {
        heroDescription.textContent = data.desc;
        if (heroMetricValue) heroMetricValue.textContent = data.val;
        if (heroMetricLabel) heroMetricLabel.textContent = data.label;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. DUAL-TRACK SIMULATOR
   -------------------------------------------------------------------------- */
function initSimulator() {
  const simBtns = document.querySelectorAll(".sim-btn");
  const rangeInput = document.getElementById("simAllocationRange");
  const rangeValDisplay = document.getElementById("simRangeValue");
  const yieldDisplay = document.getElementById("simYieldValue");
  const computeDisplay = document.getElementById("simComputeValue");
  const roleLabel = document.getElementById("simRoleLabel");

  let currentMode = "hnw"; // 'hnw' or 'student'

  const updateSimValues = () => {
    const rawVal = parseInt(rangeInput.value, 10);

    if (currentMode === "hnw") {
      rangeValDisplay.textContent = `$${rawVal.toLocaleString()}`;
      // HNW: Calculate allocated ventures and dedicated compute hours
      const venturesCount = Math.max(1, Math.round(rawVal / 250000));
      const gpuHours = Math.round(rawVal * 0.42).toLocaleString();
      yieldDisplay.textContent = `${venturesCount} Ventures`;
      computeDisplay.textContent = `${gpuHours} GPU-Hrs`;
    } else {
      // Student: rawVal is grant ask ($50k - $500k)
      const grantAsk = rawVal;
      rangeValDisplay.textContent = `$${grantAsk.toLocaleString()}`;
      const retainedEquity = "100%";
      const computeNodes = Math.max(2, Math.round(grantAsk / 35000));
      yieldDisplay.textContent = `${retainedEquity} Clean`;
      computeDisplay.textContent = `${computeNodes} H100 Nodes`;
    }
  };

  simBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      simBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMode = btn.dataset.mode;

      if (currentMode === "hnw") {
        roleLabel.textContent = "Syndicate Capital Allocation ($)";
        rangeInput.min = "100000";
        rangeInput.max = "5000000";
        rangeInput.step = "50000";
        rangeInput.value = "1000000";
      } else {
        roleLabel.textContent = "Requested Research Grant / Compute Need ($)";
        rangeInput.min = "25000";
        rangeInput.max = "500000";
        rangeInput.step = "25000";
        rangeInput.value = "150000";
      }
      updateSimValues();
    });
  });

  if (rangeInput) {
    rangeInput.addEventListener("input", updateSimValues);
    updateSimValues();
  }
}

/* --------------------------------------------------------------------------
   4. INTERACTIVE IMAGE GALLERY / PORTFOLIO GRID
   -------------------------------------------------------------------------- */
function initGallery() {
  const grid = document.getElementById("portfolioGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!grid) return;

  const renderCards = (filter = "all") => {
    grid.innerHTML = "";
    const filtered = filter === "all" 
      ? PORTFOLIO_PROJECTS 
      : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement("div");
      card.className = "portfolio-card";
      card.dataset.id = project.id;

      card.innerHTML = `
        <div class="portfolio-thumb-wrap">
          <img src="${project.image}" alt="${project.title}" loading="lazy" referrerpolicy="no-referrer">
        </div>
        <div class="portfolio-card-content">
          <div class="portfolio-meta">
            <span>${project.tagline}</span>
            <span class="dot">·</span>
            <span>Verified</span>
          </div>
          <h3 class="portfolio-title">${project.title}</h3>
          <p class="portfolio-summary">${project.summary}</p>
          <div class="portfolio-card-footer">
            <span>Inspect Blueprint</span>
            <span>→</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => openProjectModal(project.id));
      grid.appendChild(card);
    });
  };

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.filter || "all";
      renderCards(category);
    });
  });

  // Initial render
  renderCards("all");
}

/* --------------------------------------------------------------------------
   5. MODAL LIGHTBOX INSPECTOR
   -------------------------------------------------------------------------- */
let activeModalProject = null;

function openProjectModal(projectId) {
  const project = PORTFOLIO_PROJECTS.find(p => p.id === projectId);
  if (!project) return;
  activeModalProject = project;

  const modal = document.getElementById("portfolioModal");
  const img = document.getElementById("modalImage");
  const title = document.getElementById("modalTitle");
  const meta = document.getElementById("modalMeta");
  const desc = document.getElementById("modalDesc");
  const table = document.getElementById("modalSpecsTable");

  if (!modal) return;

  img.src = project.image;
  img.alt = project.title;
  title.textContent = project.title;
  meta.textContent = `${project.tagline} · Category: ${project.category.toUpperCase()}`;
  desc.textContent = project.summary;

  let tableHtml = "";
  for (const [key, value] of Object.entries(project.specs)) {
    tableHtml += `
      <tr>
        <th>${key}</th>
        <td>${value}</td>
      </tr>
    `;
  }
  table.innerHTML = tableHtml;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("portfolioModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
  activeModalProject = null;
}

function initModal() {
  const modal = document.getElementById("portfolioModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const modalWhatsappBtn = document.getElementById("modalWhatsappBtn");

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });

  if (modalWhatsappBtn) {
    modalWhatsappBtn.addEventListener("click", () => {
      if (!activeModalProject) return;
      const message = `Hello Ultraboot Team,\n\nI am inquiring regarding the "${activeModalProject.title}" (${activeModalProject.tagline}).\n\nI would like to review the full architectural documentation and syndicate allocation terms.\n\nThank you.`;
      const encoded = encodeURIComponent(message);
      const url = `https://wa.me/09157377827?text=${encoded}`;
      window.open(url, "_blank");
    });
  }
}

/* --------------------------------------------------------------------------
   6. INTERACTIVE WHATSAPP ACTION ENGINE & LIVE QUERY BUILDER
   -------------------------------------------------------------------------- */
function initWhatsAppEngine() {
  const nameInput = document.getElementById("waName");
  const roleSelect = document.getElementById("waRole");
  const focusSelect = document.getElementById("waFocus");
  const allocSelect = document.getElementById("waAllocation");
  const previewBox = document.getElementById("waLiveBubble");
  const masterCtaBtn = document.getElementById("masterWhatsappBtn");

  const buildMessage = () => {
    const name = (nameInput && nameInput.value.trim()) || "Prospective Partner";
    const role = (roleSelect && roleSelect.value) || "High-Net-Worth Client";
    const focus = (focusSelect && focusSelect.value) || "Proprietary HPC & Compute";
    const allocation = (allocSelect && allocSelect.value) || "$1,000,000 Syndicate Allocation";

    return (
      `Hello Ultraboot Leadership,\n\n` +
      `My name is ${name}.\n` +
      `Profile: ${role}\n` +
      `Primary Area of Focus: ${focus}\n` +
      `Target Allocation / Scope: ${allocation}\n\n` +
      `I am requesting a private briefing on Ultraboot's executive platform and upcoming syndication pipeline.`
    );
  };

  const updatePreview = () => {
    if (previewBox) {
      previewBox.textContent = buildMessage();
    }
  };

  [nameInput, roleSelect, focusSelect, allocSelect].forEach(elem => {
    if (elem) {
      elem.addEventListener("input", updatePreview);
      elem.addEventListener("change", updatePreview);
    }
  });

  // Master CTA Execution
  if (masterCtaBtn) {
    masterCtaBtn.addEventListener("click", () => {
      const msg = buildMessage();
      const encodedMsg = encodeURIComponent(msg);
      const targetUrl = `https://wa.me/09157377827?text=${encodedMsg}`;
      window.open(targetUrl, "_blank");
    });
  }

  // Initial preview update
  updatePreview();
}

/* --------------------------------------------------------------------------
   7. SMOOTH SCROLLING & TIER PRE-SELECTION
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  // Global buttons that trigger WhatsApp engine scrolling
  document.querySelectorAll("[data-scroll-to-cta]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById("inquirySection");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      // If tier data exists, pre-select it
      const tier = btn.dataset.tier;
      if (tier) {
        const roleSelect = document.getElementById("waRole");
        const allocSelect = document.getElementById("waAllocation");
        if (roleSelect && allocSelect) {
          if (tier === "fellowship") {
            roleSelect.value = "Student Scholar / Academic Founder";
            allocSelect.value = "Zero-Equity Fellowship ($150,000 Compute Grant)";
          } else if (tier === "syndicate") {
            roleSelect.value = "High-Net-Worth Client / Family Office";
            allocSelect.value = "$1,000,000 Syndicate Allocation";
          } else if (tier === "institutional") {
            roleSelect.value = "Endowment / University Lab";
            allocSelect.value = "$5,000,000+ Institutional Program";
          }
          // Trigger preview change
          roleSelect.dispatchEvent(new Event("change"));
        }
      }
    });
  });
}

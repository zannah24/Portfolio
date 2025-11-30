'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });





// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
      }
    }

    // Remove active class from all navigation links
    for (let k = 0; k < navigationLinks.length; k++) {
      if (k !== i) {
        navigationLinks[k].classList.remove("active");
      }
    }

  });
}



// theme toggle variables
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// function to set theme
const setTheme = function (theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    themeIcon.setAttribute("name", "sunny-outline");
  } else {
    themeIcon.setAttribute("name", "moon-outline");
  }
}

// check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem("theme") || "dark";
setTheme(currentTheme);

// theme toggle functionality
themeToggleBtn.addEventListener("click", function () {
  const currentTheme = document.body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});



// project detail page variables
const projectDetailPage = document.querySelector("[data-page='project-detail']");
const projectDetailImg = document.querySelector("[data-project-img]");
const projectDetailTitle = document.querySelector("[data-project-title]");
const projectDetailDescription = document.querySelector("[data-project-description]");
const backBtn = document.querySelector("[data-back-btn]");

// project data
const projectData = {
  "project-1": {
    title: "Evaluating the Consistency of Large Language Models as Simulated Stakeholders in Interactive Design",
    image: "./assets/images/project-1.png",
    description: `
      <h3>Project Description</h3>
      <p>This research project investigates whether Large Language Models (LLMs) can act as simulated stakeholders during iterative user interface evaluation. Traditional UI evaluation depends heavily on human experts, which makes the process slow, costly, and difficult to scale. Newer LLMs, including GPT 4o and Gemini 1.5 Pro, show strong abilities in understanding visual layouts, usability principles, and design heuristics. These capabilities raise an important question: can LLMs provide design feedback using the same evaluation patterns that human experts use?</p>

      <p>To study this, the project evaluated nine static UI mockups across three domains: Educator Dashboards, Patient Health Apps, and Productivity Tools. Each mockup was evaluated by human experts and by LLMs using the same rubric, which included seven to ten domain specific criteria rated on a five point Likert scale. The evaluations were compared using a dual metric framework:</p>

      <p><strong>Pattern Alignment (Cosine Similarity):</strong> Measures whether humans and LLMs prioritize evaluation criteria in similar ways.</p>

      <p><strong>Magnitude Agreement (Cohen's d):</strong> Measures whether the absolute scores given by humans and LLMs are similar.</p>

      <h3>Key Findings</h3>

      <h4>Exceptional Pattern Alignment:</h4>
      <p>LLMs closely matched the way human evaluators prioritized design features. Cosine similarity scores were greater than 0.96 for Human vs LLM comparisons, and greater than 0.98 for GPT 4o vs Gemini comparisons. This indicates a high level of consistency in evaluation patterns.</p>

      <h4>Systematic Magnitude Differences, also known as the Calibration Issue:</h4>
      <p>Although the patterns were similar, LLMs consistently used a different scoring range. Cohen's d values between humans and LLMs ranged from 0.9 to 1.1, which suggests large effect size differences. Only a small portion of designs showed minor score differences. This means that raw LLM scores cannot be used directly as substitutes for human scores without adjustment.</p>

      <h3>Significance</h3>
      <p>The results show that LLMs can successfully replicate the evaluation patterns used by human experts. They can identify strengths and weaknesses in designs in a way that is highly comparable to human reasoning. However, the absolute scores differ in predictable ways. This suggests that LLMs can support fast and low cost design evaluations once proper score calibration methods are developed.</p>

      <h3>Future Directions</h3>
      <ul>
        <li>Develop calibration models that convert LLM outputs into human equivalent scoring ranges.</li>
        <li>Extend the study to interactive prototypes instead of static screenshots.</li>
        <li>Analyze LLM feedback qualitatively to understand its usefulness for designers.</li>
        <li>Increase the number of LLM samples and track consistency over time.</li>
      </ul>
    `
  },
  "project-5": {
    title: "",
    image: "./assets/images/project-5.png",
    description: `
      <div style="margin-bottom: 20px;">
        <img src="./assets/images/project-5a.png" alt="TopDoc Additional View" style="width: 100%; border-radius: 8px; margin-bottom: 20px;">
      </div>

      <h3>About This Project</h3>
      <p>TopDoc represents my first venture into UI/UX design, marking the beginning of my journey in creating user-centered digital experiences. This healthcare-focused project allowed me to explore fundamental design principles while addressing the real-world challenge of connecting patients with medical professionals. Through this design, I learned to balance visual aesthetics with functionality, creating an interface that prioritizes both clarity and accessibility. The project taught me invaluable lessons about user flow, information hierarchy, and the importance of thoughtful design decisions in creating meaningful digital products.</p>
    `
  }
};

// function to open project detail page
const openProjectDetail = function (projectId) {
  const project = projectData[projectId];

  if (!project) {
    console.error("No project data found for ID:", projectId);
    return;
  }

  // Set project content
  projectDetailImg.src = project.image;
  projectDetailImg.alt = project.title;
  projectDetailTitle.textContent = project.title;
  projectDetailDescription.innerHTML = project.description;

  // Hide all other pages
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove("active");
  }

  // Show project detail page
  projectDetailPage.classList.add("active");
  window.scrollTo(0, 0);
};

// function to close project detail and return to portfolio
const closeProjectDetail = function () {
  // Hide project detail page
  projectDetailPage.classList.remove("active");

  // Show portfolio page
  const portfolioPage = document.querySelector("[data-page='portfolio']");
  portfolioPage.classList.add("active");

  // Update navigation to show portfolio as active
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].classList.remove("active");
    if (navigationLinks[i].innerHTML.toLowerCase() === "portfolio") {
      navigationLinks[i].classList.add("active");
    }
  }

  window.scrollTo(0, 0);
};

// add event listeners to project items
const projectLinks = document.querySelectorAll("[data-project-modal]");

for (let i = 0; i < projectLinks.length; i++) {
  projectLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    const projectId = this.getAttribute("data-project-id");
    openProjectDetail(projectId);
  });
}

// back button event listener
backBtn.addEventListener("click", closeProjectDetail);
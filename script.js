window.onload = function() {
  // === Welcome Particles ===
  particlesJS("particles-welcome", {
    particles: {
      number: { value: 80 },
      color: { value: ["#f7dc6f", "#a18cd1", "#fbc2eb"] },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 3 },
      move: { speed: 2 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: { repulse: { distance: 100 }, push: { quantity: 4 } }
    }
  });

  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: ["#f7dc6f", "#a18cd1", "#fbc2eb"] },
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: 3 },
      move: { speed: 1.5 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: { repulse: { distance: 100 }, push: { quantity: 4 } }
    }
  });

  const welcomeWindow = document.getElementById('welcome-window');
  const enterBtn = document.getElementById('enterBtn');
  const mainPortfolio = document.querySelector('.main-portfolio');

  enterBtn.addEventListener('click', () => {
    welcomeWindow.style.display = 'none';
    mainPortfolio.classList.remove('hidden');
    document.body.style.background = "radial-gradient(circle at top,#2b002f 0%,#100018 100%)";
    window.scrollTo(0, 0);
  });

  const backBtn = document.getElementById('backBtn');
  backBtn.addEventListener('click', () => {
    mainPortfolio.classList.add('hidden');
    welcomeWindow.style.display = 'flex';
    document.body.style.background = "radial-gradient(circle at top, #4b0082 0%, #2c003e 100%)";
    hideAllSections();
  });

  const buttons = {
    aboutBtn: document.getElementById('aboutBtn'),
    projectsBtn: document.getElementById('projectsBtn'),
    contactBtn: document.getElementById('contactBtn')
  };

  const sections = {
    aboutBtn: document.getElementById('aboutSection'),
    projectsBtn: document.getElementById('projectsSection'),
    contactBtn: document.getElementById('contactSection')
  };

  const colors = {
    aboutBtn: "radial-gradient(circle at top,#2b002f 0%,#100018 100%)",
    projectsBtn: "radial-gradient(circle at top,#0b0b1a 0%,#000006 100%)",
    contactBtn: "radial-gradient(circle at top,#3d0000 0%,#1a0000 100%)"
  };

  function hideAllSections() {
    Object.values(sections).forEach(sec => {
      sec.classList.remove('show');
      sec.innerHTML = '';
    });
  }

  function fillContent(id) {
    const sec = sections[id];
    if (!sec) return;

    if (id === 'aboutBtn') {
      sec.innerHTML = `<h2 class="fade-in-text">About Me</h2>
        <p class="fade-in-text about-main-content">
        Hi! I’m Nicole D. Dansalan, a passionate Computer Engineering student with a strong interest in software development, digital systems, and emerging technologies. I love exploring how technology can solve real-world problems and improve everyday life. I am detail-oriented, curious, and always eager to learn new skills that enhance both my technical and creative abilities. I am also a team player, able to collaborate effectively on projects, and I thrive in dynamic, problem-solving environments. My goal is to contribute to innovative solutions in technology while continuously growing as a professional in the field.
        </p>
        <h3 class="fade-in-text">Skills</h3>
        <div class="experience-btns fade-in-text">
          <span class="btn-experience">💻 Programming</span>
          <span class="btn-experience">🧩 Technical Problem Solving</span>
          <span class="btn-experience">🤝 Collaboration & Communication</span>
          <span class="btn-experience">🔄 Adaptability</span>
          <span class="btn-experience">🏗️ Project Execution</span>
          <span class="btn-experience">📝 Documentation</span>
          <span class="btn-experience">💡 Creative Thinking</span>
        </div>`;
    } else if (id === 'projectsBtn') {
      sec.innerHTML = `<h2 class="fade-in-text">Projects & Works</h2>
        <div class="projects-container fade-in-text">

          <h3 class="project-title">Calculator</h3>
          <div class="project-card">
            <img src="C:\\Users\\Nicole\\Pictures\\Screenshots\\Screenshot 2025-11-14 093139.png" alt="Calculator">
            <div class="project-desc">
              A simple and interactive JavaScript calculator.
              <a href="https://calc-iota-opal.vercel.app/" target="_blank" class="btn small-btn">Open</a>
            </div>
          </div>

          <h3 class="project-title">Login Form</h3>
          <div class="project-card">
            <img src="C:\\Users\\Nicole\\Downloads\\nikol\\image\\login.png" alt="Login Form">
            <div class="project-desc">
              Interactive login form with basic validation.
              <a href="https://loginn-pi.vercel.app/" target="_blank" class="btn small-btn">Open</a>
            </div>
          </div>

          <h3 class="project-title">To-Do List</h3>
          <div class="project-card">
            <img src="C:\\Users\\Nicole\\Downloads\\nikol\\image\\list.png" alt="To-Do List">
            <div class="project-desc">
              Simple task manager to organize daily activities.
              <a href="https://list-seven-iota.vercel.app/" target="_blank" class="btn small-btn">Open</a>
            </div>
          </div>

          <h3 class="project-title">Password Generator</h3>
          <div class="project-card">
            <img src="C:\\Users\\Nicole\\Pictures\\Screenshots\\Screenshot 2025-11-14 093402.png" alt="Password Generator">
            <div class="project-desc">
              Generates strong passwords with custom options.
              <a href="https://pass-gen-azure-nine.vercel.app/" target="_blank" class="btn small-btn">Open</a>
            </div>
          </div>

        </div>`;
    } else if (id === 'contactBtn') {
      sec.innerHTML = `<h2 class="fade-in-text">Contact Me 📬</h2>
        <div class="contact-btns fade-in-text">
          <a class="btn-contact" href="mailto:nicoledansalan7@gmail.com">✉ Email Me</a>
          <a class="btn-contact" href="tel:+639615099351">📞 Call Me</a>
          <a class="btn-contact" href="https://web.facebook.com/nicole.dela.cruz.dansalan.2025" target="_blank">🌐 Facebook</a>
        </div>`;
    }
  }

  Object.keys(buttons).forEach(id => {
    buttons[id].addEventListener('click', () => {
      hideAllSections();
      fillContent(id);
      sections[id].classList.add('show');
      document.body.style.background = colors[id];
    });
  });
};

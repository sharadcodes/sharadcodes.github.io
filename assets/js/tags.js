const colorSchemes = {
  // terminologies & concepts
  rest: { color: "rgba(255, 180, 100, 0.95)", bgColor: "rgba(248, 152, 32, 0.2)" },
  serverless: { color: "rgba(255, 180, 100, 0.95)", bgColor: "rgba(248, 152, 32, 0.2)" },
  static_site_generator: { color: "rgba(255, 180, 100, 0.95)", bgColor: "rgba(248, 152, 32, 0.2)" },
  web_components: { color: "rgba(255, 180, 100, 0.95)", bgColor: "rgba(248, 152, 32, 0.2)" },
  // languages
  html: { color: "rgba(255, 140, 100, 0.95)", bgColor: "rgba(241, 101, 41, 0.2)" },
  css: { color: "rgba(100, 160, 255, 0.95)", bgColor: "rgba(41, 101, 241, 0.2)" },
  javascript: { color: "rgba(255, 235, 100, 0.95)", bgColor: "rgba(247, 223, 30, 0.2)" },
  js: { color: "rgba(255, 235, 100, 0.95)", bgColor: "rgba(247, 223, 30, 0.2)" },
  python: { color: "rgba(255, 240, 150, 0.95)", bgColor: "rgba(255, 232, 115, 0.2)" },
  java: { color: "rgba(255, 180, 100, 0.95)", bgColor: "rgba(248, 152, 32, 0.2)" },
  cpp: { color: "rgba(100, 160, 220, 0.95)", bgColor: "rgba(0, 89, 156, 0.2)" },
  c: { color: "rgba(100, 160, 220, 0.95)", bgColor: "rgba(0, 89, 156, 0.2)" },
  dart: { color: "rgba(100, 160, 220, 0.95)", bgColor: "rgba(2, 124, 255, 0.2)" },
  php: { color: "rgba(180, 190, 230, 0.95)", bgColor: "rgba(137, 147, 190, 0.2)" },
  //   stacks
  mevn: { color: "rgba(100, 230, 210, 0.95)", bgColor: "rgba(0, 209, 178, 0.2)" },
  mern: { color: "rgba(100, 230, 210, 0.95)", bgColor: "rgba(0, 209, 178, 0.2)" },
  mean: { color: "rgba(100, 230, 210, 0.95)", bgColor: "rgba(0, 209, 178, 0.2)" },
  // web dev
  pwa: { color: "rgba(140, 210, 255, 0.95)", bgColor: "rgba(94, 190, 255, 0.2)" },
  react: { color: "rgba(100, 230, 255, 0.95)", bgColor: "rgba(0, 216, 255, 0.2)" },
  nodejs: { color: "rgba(100, 200, 100, 0.95)", bgColor: "rgba(2, 110, 0, 0.2)" },
  express: { color: "rgba(200, 200, 210, 0.95)", bgColor: "rgba(150, 150, 150, 0.15)" },
  django: { color: "rgba(100, 180, 140, 0.95)", bgColor: "rgba(12, 75, 51, 0.2)" },
  flask: { color: "rgba(200, 200, 210, 0.95)", bgColor: "rgba(150, 150, 150, 0.15)" },
  svelte: { color: "rgba(255, 130, 80, 0.95)", bgColor: "rgba(255, 62, 0, 0.2)" },
  web_extensions: { color: "rgba(160, 255, 100, 0.95)", bgColor: "rgba(124, 252, 0, 0.2)" },
  bootstrap: { color: "rgba(170, 140, 220, 0.95)", bgColor: "rgba(121, 82, 179, 0.2)" },
  bulma: { color: "rgba(100, 230, 210, 0.95)", bgColor: "rgba(0, 209, 178, 0.2)" },
  jquery: { color: "rgba(100, 160, 220, 0.95)", bgColor: "rgba(7, 105, 173, 0.2)" },
  particlesjs: { color: "rgba(180, 180, 190, 0.95)", bgColor: "rgba(150, 150, 150, 0.15)" },
  swiffy_slider: { color: "rgba(200, 200, 210, 0.95)", bgColor: "rgba(150, 150, 150, 0.15)" },
  wordpress: { color: "rgba(100, 170, 200, 0.95)", bgColor: "rgba(33, 117, 155, 0.2)" },
  jekyll: { color: "rgba(255, 100, 100, 0.95)", bgColor: "rgba(204, 0, 0, 0.2)" },
  // mobile dev
  flutter: { color: "rgba(100, 170, 255, 0.95)", bgColor: "rgba(2, 124, 255, 0.2)" },
  // pc frameworks
  electron: { color: "rgba(120, 180, 190, 0.95)", bgColor: "rgba(71, 132, 143, 0.2)" },
  swing: { color: "rgba(120, 180, 190, 0.95)", bgColor: "rgba(71, 132, 143, 0.2)" },
  //   automation frameworks
  selenium: { color: "rgba(120, 180, 190, 0.95)", bgColor: "rgba(71, 132, 143, 0.2)" },
  puppeteer: { color: "rgba(120, 180, 190, 0.95)", bgColor: "rgba(71, 132, 143, 0.2)" },
  // cloud
  aws: { color: "rgba(255, 180, 80, 0.95)", bgColor: "rgba(255, 153, 0, 0.2)" },
  amazon_web_services: { color: "rgba(255, 180, 80, 0.95)", bgColor: "rgba(255, 153, 0, 0.2)" },
  gcp: { color: "rgba(120, 170, 255, 0.95)", bgColor: "rgba(66, 133, 244, 0.2)" },
  google_cloud: { color: "rgba(120, 170, 255, 0.95)", bgColor: "rgba(66, 133, 244, 0.2)" },
  azure: { color: "rgba(100, 180, 240, 0.95)", bgColor: "rgba(0, 137, 214, 0.2)" },
  heroku: { color: "rgba(160, 120, 220, 0.95)", bgColor: "rgba(67, 0, 152, 0.2)" },
  render: { color: "rgba(255, 130, 130, 0.95)", bgColor: "rgba(242, 76, 78, 0.2)" },
  netlify: { color: "rgba(100, 220, 210, 0.95)", bgColor: "rgba(0, 199, 183, 0.2)" },
  vercel: { color: "rgba(200, 200, 210, 0.95)", bgColor: "rgba(150, 150, 150, 0.15)" },
  github_pages: { color: "rgba(120, 170, 230, 0.95)", bgColor: "rgba(64, 120, 192, 0.2)" },
  // tools & clis
  pypi: { color: "rgba(100, 160, 210, 0.95)", bgColor: "rgba(55, 117, 169, 0.2)" },
  git: { color: "rgba(255, 130, 100, 0.95)", bgColor: "rgba(243, 79, 41, 0.2)" },
  github: { color: "rgba(120, 170, 230, 0.95)", bgColor: "rgba(64, 120, 192, 0.2)" },
  // devops
  docker: { color: "rgba(100, 210, 255, 0.95)", bgColor: "rgba(13, 183, 237, 0.2)" },
  kubernetes: { color: "rgba(110, 160, 255, 0.95)", bgColor: "rgba(50, 108, 229, 0.2)" },
  github_actions: { color: "rgba(100, 170, 255, 0.95)", bgColor: "rgba(32, 136, 255, 0.2)" },
  // data science
  tensorflow: { color: "rgba(255, 160, 80, 0.95)", bgColor: "rgba(255, 111, 0, 0.2)" },
  pytorch: { color: "rgba(255, 130, 100, 0.95)", bgColor: "rgba(238, 76, 44, 0.2)" },
  scikit_learn: { color: "rgba(255, 180, 100, 0.95)", bgColor: "rgba(247, 147, 30, 0.2)" },
  keras: { color: "rgba(255, 100, 100, 0.95)", bgColor: "rgba(208, 0, 0, 0.2)" },
  pandas: { color: "rgba(140, 120, 200, 0.95)", bgColor: "rgba(21, 4, 88, 0.2)" },
  numpy: { color: "rgba(100, 160, 180, 0.95)", bgColor: "rgba(1, 50, 67, 0.2)" },
  nltk: { color: "rgba(120, 210, 180, 0.95)", bgColor: "rgba(75, 174, 140, 0.2)" },
  opencv: { color: "rgba(150, 130, 255, 0.95)", bgColor: "rgba(92, 62, 232, 0.2)" },
  textblob: { color: "rgba(255, 220, 80, 0.95)", bgColor: "rgba(255, 206, 0, 0.2)" },
  //   data visualization softwares
  tableau: { color: "rgba(255, 160, 100, 0.95)", bgColor: "rgba(233, 118, 39, 0.2)" },
  powerbi: { color: "rgba(255, 220, 100, 0.95)", bgColor: "rgba(242, 200, 17, 0.2)" },
  // databases
  mongodb: { color: "rgba(100, 210, 140, 0.95)", bgColor: "rgba(19, 170, 82, 0.2)" },
  firebase: { color: "rgba(255, 170, 80, 0.95)", bgColor: "rgba(245, 130, 11, 0.2)" },
  mysql: { color: "rgba(100, 170, 190, 0.95)", bgColor: "rgba(0, 117, 143, 0.2)" },
  postgresql: { color: "rgba(110, 160, 200, 0.95)", bgColor: "rgba(51, 103, 145, 0.2)" },
  sqlite: { color: "rgba(100, 160, 180, 0.95)", bgColor: "rgba(0, 59, 87, 0.2)" },
  indexeddb: { color: "rgba(100, 160, 180, 0.95)", bgColor: "rgba(0, 59, 87, 0.2)" },
  // os
  linux: { color: "rgba(255, 210, 80, 0.95)", bgColor: "rgba(241, 191, 0, 0.2)" },
  windows: { color: "rgba(100, 170, 240, 0.95)", bgColor: "rgba(0, 120, 214, 0.2)" },
  macos: { color: "rgba(200, 200, 210, 0.95)", bgColor: "rgba(150, 150, 150, 0.15)" },
  // rest apis
  github_rest_api: { color: "rgba(120, 170, 230, 0.95)", bgColor: "rgba(64, 120, 192, 0.2)" },
};

function generateTagColors() {
  const tags = document.querySelectorAll(".tag");
  tags.forEach((tag) => {
    let tagText = tag.innerText.toLowerCase();
    if (tagText.includes(" ")) {
      // replace spaces with empty string
      tagText = tagText.replace(/\s/g, "_");
    }
    const tagColor = colorSchemes[tagText];
    if (tagColor) {
      tag.style.color = tagColor.color;
      tag.style.backgroundColor = tagColor.bgColor;
    }
  });
}

generateTagColors();

// add .tags tp #tags

const tags = document.querySelectorAll(".tag");
const tagsContainer = document.querySelector("#tags");
tags.forEach((tag) => {
  //   only add tags if they are not already present
  if (!tagsContainer.innerHTML.includes(tag.innerHTML)) {
    tagsContainer.innerHTML += tag.outerHTML;
  }
});

// sort tags alphabetically in #tags

const tagsInTagsContainer = document.querySelectorAll("#tags .tag");
const tagsInTagsContainerArray = Array.from(tagsInTagsContainer);
tagsInTagsContainerArray.sort((a, b) => {
  if (a.innerText.toLowerCase() < b.innerText.toLowerCase()) {
    return -1;
  }
  if (a.innerText.toLowerCase() > b.innerText.toLowerCase()) {
    return 1;
  }
  return 0;
});

tagsContainer.innerHTML = "";
tagsInTagsContainerArray.forEach((tag) => {
  tagsContainer.innerHTML += tag.outerHTML;
});

generateTagColors();

// add ability to filter projects by tags

const tagsInTagsContainer2 = document.querySelectorAll("#tags .tag");
tagsInTagsContainer2.forEach((tag) => {
  tag.addEventListener("click", () => {
    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
      if (project.innerHTML.includes(tag.innerHTML)) {
        project.style.display = "flex";
      } else {
        project.style.display = "none";
      }
    });
    countProjects();
    toast(`Filtered by: ${tag.innerText}`, "success");
  });
});

// add a clear button to clear the filter

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    project.style.display = "flex";
  });
  countProjects();
  toast("Filter cleared", "success");
});

// utility function to count projects

function countProjects() {
  // only count projects that are visible
  const projects = document.querySelectorAll(
    ".project-list .project:not([style*='display: none'])"
  );
  const projectsCount = projects.length;
  const projectsCountText = document.querySelector("#projects-count");
  projectsCountText.innerText = `(${projectsCount})`;
}

countProjects();

// notifcation

function toast(message, type = "info") {
  const toast = document.createElement("div");
  switch (type) {
    case "success":
      toast.style.backgroundColor = "#4caf50";
      toast.style.color = "#fff";
      break;
    case "error":
      toast.style.backgroundColor = "#f44336";
      toast.style.color = "#fff";
      break;
    case "info":
      toast.style.backgroundColor = "#2196f3";
      toast.style.color = "#fff";
    default:
      break;
  }
  toast.classList.add("toast");
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    document.body.removeChild(toast);
  }, 1000);
}

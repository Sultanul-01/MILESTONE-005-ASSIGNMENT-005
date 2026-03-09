const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

let issues = [];
let currentIssue = null;

// LOGIN

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const user = username.value;
  const pass = password.value;

  if (user === "admin" && pass === "admin123") {
    loginPage.classList.add("hidden");
    dashboard.classList.remove("hidden");

    loadIssues();
  } else {
    alert("Invalid credentials");
  }
});

// LOAD ISSUES

async function loadIssues() {
  loader.classList.remove("hidden");

  const res = await fetch(API);
  const data = await res.json();

  issues = data.data;

  renderIssues(issues);

  issueCount.innerText = issues.length;

  loader.classList.add("hidden");
}
// RENDER CARDS

function renderIssues(data) {
  issuesContainer.innerHTML = "";

  data.forEach((issue) => {
    const border =
      issue.status === "open" ? "border-green-500" : "border-purple-500";
    const statusImg =
      issue.status === "open"
        ? "/assets/Open-Status.png"
        : "/assets/Closed-Status.png";

    issuesContainer.innerHTML += `
      <div onclick="openModal(${issue.id})" class="bg-white p-4 rounded shadow border-t-4 ${border} cursor-pointer">
        <div class="flex justify-between mb-2">
          <img src="${statusImg}" alt="${issue.status} status">
          <span class="text-xs px-2 py-1 rounded ${
            issue.priority === "high"
              ? "bg-red-100 text-red-600"
              : issue.priority === "medium"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-gray-200"
          }">
            ${issue.priority.toUpperCase()}
          </span>
        </div>
        <h3 class="font-semibold mb-1">${issue.title}</h3>
        <p class="text-gray-500 text-sm mb-3 line-clamp-2">${issue.description}</p>
        <div class="flex gap-2 mb-3">
  ${issue.labels
    .map((l) => {
      let classes =
        "text-xs px-2 py-1 rounded uppercase flex items-center gap-1";
      let icon = "";

      if (l.toLowerCase() === "bug") {
        classes += " bg-red-100 text-red-600";
        icon = `<i class="fa-solid fa-bug"></i>`;
      } else if (l.toLowerCase() === "enhancement") {
        classes += " bg-green-100 text-green-600";
        icon = `<i class="fa-solid fa-wand-magic-sparkles"></i>`;
      } else {
        classes += " bg-yellow-100 text-yellow-600";
        icon = `<i class="fa-solid fa-life-ring"></i>`;
      }

      return `<span class="${classes}">${icon} ${l}</span>`;
    })
    .join("")}
</div>
        <div class="text-xs text-gray-400 flex justify-between">
          <span>#${issue.id} by ${issue.author}</span>
          <span>${new Date(issue.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    `;
  });
}
// SEARCH

searchBtn.onclick = async () => {
  const q = searchInput.value;

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${q}`,
  );
  const data = await res.json();

  renderIssues(data.data);
};

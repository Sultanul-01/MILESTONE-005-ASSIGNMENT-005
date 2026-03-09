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
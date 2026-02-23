const projects = [
  { id: "INCIDENT 001", name: "Foundation Layout", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-001/" },
  { id: "INCIDENT 002", name: "Makar Sankranti Landing", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-002/" },
  { id: "INCIDENT 003", name: "Personal Portfolio", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-003/" },
  { id: "INCIDENT 004", name: "CSS Positioning", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-004/" },
  { id: "INCIDENT 005", name: "UI Recreation", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-005/" },
  { id: "INCIDENT 006", name: "Visual Landing", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-006/" },
  { id: "INCIDENT 007", name: "Responsive System", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-007/" },
  { id: "INCIDENT 008", name: "Themed Hero", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-008/" },
  { id: "INCIDENT 009", name: "SCSS Introduction", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-009/" },
  { id: "INCIDENT 010", name: "Full SCSS Page", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-010/" },
  { id: "INCIDENT 011", name: "Bootstrap Landing", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-011/" },
  { id: "INCIDENT 012", name: "Layout System", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-012/" },
  { id: "INCIDENT 013", name: "Dribbble UI", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-013/" },
  { id: "INCIDENT 014", name: "Gradient Card", link: "https://sumeet1954.github.io/Web-Development-Remastered/Frontend/the-surface/incident-014/" }
];

const grid = document.getElementById("projectGrid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <span>${project.id}</span>
    <h3>${project.name}</h3>
  `;
  card.onclick = () => window.open(project.link, "_blank");
  grid.appendChild(card);
});
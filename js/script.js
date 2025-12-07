// ====== Contact Form Validation ======
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all required fields before submitting.");
      event.preventDefault();
    } else {
      alert("✅ Thank you, " + name + "! Your message has been sent successfully.");
    }
  });
}

// ====== Dark Mode Toggle with localStorage ======
const toggleButton = document.getElementById("theme-toggle");

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

if (toggleButton) {
  toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

// ====== Advanced Feature: Dynamic Project Filter ======
const projectSearchInput = document.getElementById("project-search");
const projectsTable = document.getElementById("projects-table");

if (projectSearchInput && projectsTable) {
  const tableBody = projectsTable.getElementsByTagName("tbody")[0];
  const rows = tableBody.getElementsByTagName("tr");

  projectSearchInput.addEventListener("input", function () {
    const searchTerm = projectSearchInput.value.toLowerCase();

    // Loop through rows and hide those that don't match
    for (let i = 0; i < rows.length; i++) {
      const rowText = rows[i].textContent.toLowerCase();
      if (rowText.includes(searchTerm)) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  });
}

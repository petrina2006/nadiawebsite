// You can add JavaScript functionality here if needed
// For example, form validation or dynamic content loading
// Sample data for projects
const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1."
    },
    {
      title: "Project 2",
      description: "Description of Project 2."
    },
    // Add more projects as needed
  ];
  
  // Function to dynamically add projects to the project list
  function populateProjects() {
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
      const listItem = document.createElement('li');
      listItem.classList.add('project-item');
      listItem.innerHTML = `
        <div class="project-title">${project.title}</div>
        <div class="project-description">${project.description}</div>
      `;
      projectList.appendChild(listItem);
    });
  }
  
  // Call the function to populate projects when the page loads
  window.onload = populateProjects;
  document.addEventListener("DOMContentLoaded", function() {
    const projects = [
      {
        name: "Project 1",
        description: "Description of project 1.",
        image: "project1.jpg",
        link: "project1.html"
      },
      {
        name: "Project 2",
        description: "Description of project 2.",
        image: "project2.jpg",
        link: "project2.html"
      },
      {
        name: "Project 3",
        description: "Description of project 3.",
        image: "project3.jpg",
        link: "project3.html"
      }
    ];
  
    const projectList = document.getElementById("project-list");
  
    projects.forEach(project => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add("project");
  
      const projectImage = document.createElement("img");
      projectImage.src = project.image;
      projectDiv.appendChild(projectImage);
  
      const projectName = document.createElement("h3");
      projectName.textContent = project.name;
      projectDiv.appendChild(projectName);
  
      const projectDescription = document.createElement("p");
      projectDescription.textContent = project.description;
      projectDiv.appendChild(projectDescription);
  
      const projectLink = document.createElement("a");
      projectLink.textContent = "View Project";
      projectLink.href = project.link;
      projectDiv.appendChild(projectLink);
  
      projectList.appendChild(projectDiv);
    });
  });
  
// This is optional if you want to add any interactive functionality to the social links, like hover effects or animations.
// For direct linking, you don't need JavaScript.

// Example: Add a hover effect to social links
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transform = 'scale(1.2)';
  });

  link.addEventListener('mouseout', () => {
    link.style.transform = 'scale(1)';
  });
});
// You can add JavaScript functionality here if needed
document.getElementById("download-resume-btn").addEventListener("click", function() {
    // Replace this with the link to your resume file
    window.location.href = "path/to/your/resume.pdf";
  });
  
  document.getElementById("view-projects-btn").addEventListener("click", function() {
    // Replace this with the link to your projects page
    window.location.href = "projects.html";
  });
  
  document.getElementById("follow-social-btn").addEventListener("click", function() {
    // Replace this with the link to your social media profiles
    window.location.href = "https://your-social-media-profiles";
  });
  
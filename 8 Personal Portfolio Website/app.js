var app = angular.module('portfolioApp', []);

app.controller('PortfolioController', function($scope) {
    // About Section
    $scope.aboutText = "Hello! I'm a passionate developer, specializing in building full-stack web applications. I enjoy solving real-world problems with technology and continuously learning new skills.";

    // Skills Section
    $scope.skills = [
        { name: "HTML", image: "https://via.placeholder.com/100" },
        { name: "CSS", image: "https://via.placeholder.com/100" },
        { name: "JavaScript", image: "https://via.placeholder.com/100" },
        { name: "Angular", image: "https://via.placeholder.com/100" },
    ];

    // Projects Section
    $scope.projects = [
        { name: "Project One", description: "A web app for managing tasks.", skills: ["HTML", "CSS", "JavaScript"], image: "https://via.placeholder.com/200" },
        { name: "Project Two", description: "A personal blog built with Angular.", skills: ["Angular", "CSS"], image: "https://via.placeholder.com/200" },
        { name: "Project Three", description: "A REST API built with JS.", skills: ["JavaScript"], image: "https://via.placeholder.com/200" }
    ];

    // Filtered projects based on selected skill
    $scope.filteredProjects = $scope.projects;

    // View Project Details function
    $scope.viewProjectDetails = function(project) {
        alert("Viewing details for: " + project.name);
    };
});

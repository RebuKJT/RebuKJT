

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetContent = document.getElementById(targetId);
            const allContents = document.querySelectorAll('.content');
            allContents.forEach(content => content.classList.remove('show'));
            targetContent.classList.add('show');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const classButtons = document.querySelectorAll('.class-button');
    const classResources = document.querySelectorAll('.class-resources');

    classButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            // Close all class sections
            classResources.forEach(resource => {
                resource.style.display = 'none';
            });

            // Open the selected class section
            const targetClass = this.classList[1];
            const targetResources = document.getElementById(targetClass + '-resources');
            targetResources.style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Hide all class resources initially
    const classResources = document.querySelectorAll('.class-resources');
    classResources.forEach(function(resource) {
        resource.style.display = 'none';
    });

    // Show resources for the clicked class
    const classButtons = document.querySelectorAll('.class-button');
    classButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const targetClass = this.classList[1]; // Get the class of the clicked button
            const targetResources = document.getElementById(targetClass + '-resources'); // Get corresponding resources div

            // Hide all class resources
            classResources.forEach(function(resource) {
                resource.style.display = 'none';
            });

            // Show resources for the clicked class
            if (targetResources) {
                targetResources.style.display = 'block';
            }
        });
    });
});



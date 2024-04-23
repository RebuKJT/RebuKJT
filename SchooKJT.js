

function showGroups() {
    var groupA = document.getElementById('class6-a-group');
    var groupB = document.getElementById('class6-b-group');
    
    if (groupA.style.display === 'none') {
        groupA.style.display = 'block';
        groupB.style.display = 'block';
    } else {
        groupA.style.display = 'none';
        groupB.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const dailyGroupPointsLink = document.querySelector('a[href="#class6-computer-daily-group-points"]');
    dailyGroupPointsLink.addEventListener('click', function (event) {
        event.preventDefault();
        showGroups();
    });
});



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


document.addEventListener('click', function(event) {
    const tuitionDetails = document.getElementById('tuition-details');
    const target = event.target;

    // Check if the clicked element is not the tuition details section or a link inside it
    if (target !== tuitionDetails && !tuitionDetails.contains(target)) {
        tuitionDetails.style.display = 'none';
    }
});

function toggleTuitionDetails() {
    var tuitionDetails = document.getElementById("tuition-details");
    if (tuitionDetails.style.display === "none" || tuitionDetails.style.display === "") {
        tuitionDetails.style.display = "block";
    } else {
        tuitionDetails.style.display = "none";
    }
}


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

// Daily group points of class 4 

function showSections() {
    var secA = document.getElementById('class4-sec-a-daily-group-points');
    var secB = document.getElementById('class4-sec-b-daily-group-points');
    
    if (secA.style.display === 'none') {
        secA.style.display = 'block';
        secB.style.display = 'block';
    } else {
        secA.style.display = 'none';
        secB.style.display = 'none';
    }
}



            // Show resources of Class 6 _ 1st terminal

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

            // Hide the 1st Terminal section if it's not the computer class 6 section
            if (targetClass !== 'class6') {
                const computer1stTerminal = document.getElementById('class6-computer-1st-terminal');
                if (computer1stTerminal) {
                    computer1stTerminal.style.display = 'none';
                }
            }


            // Hide the 1st Terminal section if it's not the computer class 5 section

            if (targetClass !== 'class5') {
                const computer1stTerminalClass5 = document.getElementById('class5-computer-1st-terminal');
                if (computer1stTerminalClass5) {
                    computer1stTerminalClass5.style.display = 'none';
                }
            }


        });
    });
});


function showTerminal(id) {
    var terminal = document.getElementById(id);
    if (terminal.style.display === "none") {
        terminal.style.display = "block";
    } else {
        terminal.style.display = "none";
    }
}



    function revealContent() {
        var content = document.getElementById("personal-content");
        if (content.style.display === "none") {
            var password = prompt("Please enter the password:");
            // Replace "password123" with your desired password
            if (password === "KubsKavs") {
                content.style.display = "block";
            } else {
                alert("Incorrect password. Try again.");
            }
        }
    }


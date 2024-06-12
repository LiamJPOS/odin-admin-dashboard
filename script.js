let userData;
let currentUser = 0;
let announcementData;

fetch('/users.json')
    .then(response => response.json())
    .then(data => {
        userData = data;
        displayUserProjects();
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to manipulate the data
function displayUserProjects() {
    if (!userData) {
        console.error('Data has not been fetched yet.');
        return;
    }

    // const currentUserName = userData.users[currentUser].name;
    const currentUserName = document.getElementById("user-name");
    currentUserName.textContent = userData.users[currentUser].name; 

    const currentUserHandle = document.getElementById("user-handle")
    currentUserHandle.textContent = `${currentUserName.textContent} (@${userData.users[currentUser].handle})`

    // Create cards for each project
    const projectCardContainer = document.getElementById("project-card-container");
    for (const project of userData.users[currentUser].projects) {
        let card = document.createElement("div");
        card.setAttribute('class', 'projects--card primary');

        let cardSide = document.createElement("div");
        cardSide.setAttribute("class", "projects--card-side accent")
        card.appendChild(cardSide)

        let cardUpper = document.createElement("div");
        cardUpper.setAttribute("class", "projects--card-upper");
        
        let title = document.createElement("h3");
        title.setAttribute('class', 'projects--card-title');
        title.textContent = project.title;
        cardUpper.appendChild(title);
        
        let description = document.createElement("p");
        description.setAttribute('class', 'projects--card-description');
        description.textContent = project.description;
        cardUpper.appendChild(description);

        card.appendChild(cardUpper);

        let cardLower = document.createElement("div");
        cardLower.setAttribute('class', 'projects--card-lower');
        cardLower.textContent = "Icons";
        card.appendChild(cardLower);

        projectCardContainer.appendChild(card);
    }
}

fetch('/announcements.json')
    .then(response => response.json())
    .then(data => {
        announcementData = data;
        displayLastAnnouncements();
    })
    .catch(error => console.error('Error fetching data:', error));

function displayLastAnnouncements() {
    if (!announcementData) {
        console.error('Data has not been fetched yet.');
        return;
    }

    const announcementsContainer = document.getElementById("announcements-container");
    //grab last 3 announcements
    for (i = 0; i < 3; i++) {
        // console.log(announcementData.announcements.pop()) //Keep to test less than 3 announcements
        let currentAnnouncement = announcementData.announcements.pop();

        let announcementsLink = document.createElement("a");
        announcementsLink.setAttribute("class", "announcements--link"); //TODO set href in if statements
        announcementsLink.setAttribute("href", "#"); //TODO set href in if statements
        
        let announcementsSection = document.createElement("div");
        announcementsSection.setAttribute("class", "announcements--card-section");
        announcementsLink.appendChild(announcementsSection)

        if (currentAnnouncement !== undefined) {
            // Add empty div to announcementsContainer
            announcementsContainer.appendChild(announcementsLink)
            let announcementTitle = document.createElement("h3")
            announcementTitle.setAttribute("class", "announcements--title")
            announcementTitle.textContent = currentAnnouncement.title;

            let announcementBody = document.createElement("p");
            announcementBody.setAttribute("class", "announcements--body")
            announcementBody.textContent = currentAnnouncement.body;

            announcementsSection.appendChild(announcementTitle);
            announcementsSection.appendChild(announcementBody);

            announcementsContainer.appendChild(announcementsLink);

            let lineBreak = document.createElement("hr")
            lineBreak.setAttribute("class", "announcements--linebreak");
            announcementsContainer.appendChild(lineBreak)
        }
    }
    //Remove extra line break
    announcementsContainer.removeChild(announcementsContainer.lastElementChild)
    
}


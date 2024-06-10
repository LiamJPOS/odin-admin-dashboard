let userData;
let currentUser = 2

// Fetch JSON data once
fetch('/users.json')
    .then(response => response.json())
    .then(data => {
        userData = data;
        console.log('Data fetched and stored:', userData);

        // Call your function to manipulate the data after fetching
        manipulateData();
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to manipulate the data
function manipulateData() {
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

        let icons = document.createElement("div");
        icons.setAttribute('class', 'projects--card-icons');
        icons.textContent = "Icons";
        card.appendChild(icons);

        projectCardContainer.appendChild(card);
    }
    

    console.log(currentUserName)
    console.log(currentUserHandle)

}

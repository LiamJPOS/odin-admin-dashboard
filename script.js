let userData;
let currentUser = 0

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


    const currentUserHandle = userData.users[currentUser].handle;


    // Create cards for each project
    const projectCardContainer = document.getElementById("project-card-container");
    

    console.log(currentUserName)
    console.log(currentUserHandle)

}

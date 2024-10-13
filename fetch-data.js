// Define an asynchronous function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json(); // Convert the response to JSON

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element for the user list
        const userList = document.createElement('ul');

        // Loop through the users and create <li> for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text to the user's name
            userList.appendChild(listItem); // Append the <li> to the user list
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear existing content and display error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.'; // Error message
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);

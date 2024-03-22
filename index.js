
const currentUser = "John";

function getFirstInitial(name) {
    return name.charAt(0).toUpperCase();
}

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;
const shortGreeting = `Welcome, ${getFirstInitial(currentUser)}!`;

console.log(welcomeMessage);
console.log(excitedWelcomeMessage);
console.log(shortGreeting);

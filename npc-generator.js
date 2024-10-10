// Background script

// Arrays for NPC characteristics
const npcNames = ["Aelar", "Briala", "Drystan", "Elara", "Fenric", "Gwenn"];
const npcClasses = ["Fighter", "Rogue", "Wizard", "Cleric"];
const npcBackgrounds = ["Noble", "Commoner", "Outlander", "Sage"];
const npcPersonalities = ["Brave", "Cunning", "Wise", "Charismatic"];
const npcAppearances = ["Tall and slender", "Short and stout", "Athletic", "Rugged"];

// Function to generate a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a NPC object
function generateNPC() {
    return {
        name: getRandomElement(npcNames),
        class: getRandomElement(npcClasses),
        background: getRandomElement(npcBackgrounds),
        personality: getRandomElement(npcPersonalities),
        appearance: getRandomElement(npcAppearances),
    };
}

// Message listener for generating NPC
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "generateNPC") {
        const npc = generateNPC();
        sendResponse({ npc });
    }
});

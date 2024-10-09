// Arrays of NPC traits
const npcNames = ["Aelar", "Briala", "Calder", "Darvin", "Eryndor", "Fiera", "Gryff", "Harros"];
const npcClasses = ["Fighter", "Rogue", "Wizard", "Cleric", "Ranger", "Bard", "Paladin"];
const npcBackgrounds = ["Noble", "Peasant", "Merchant", "Soldier", "Scholar", "Outlaw"];
const npcPersonalities = ["Brave", "Shy", "Arrogant", "Cunning", "Loyal", "Greedy"];
const npcAppearances = ["Tall and slender", "Short and stout", "Scarred face", "Long flowing hair", "Piercing green eyes", "Wears a hooded cloak", "Wears ornate armor"];

// Function to generate a random NPC
function generateNPC() {
    const randomName = npcNames[Math.floor(Math.random() * npcNames.length)];
    const randomClass = npcClasses[Math.floor(Math.random() * npcClasses.length)];
    const randomBackground = npcBackgrounds[Math.floor(Math.random() * npcBackgrounds.length)];
    const randomPersonality = npcPersonalities[Math.floor(Math.random() * npcPersonalities.length)];
    const randomAppearance = npcAppearances[Math.floor(Math.random() * npcAppearances.length)];

    // Output NPC details in HTML
    document.getElementById("npc-name").textContent = randomName;
    document.getElementById("npc-class").textContent = randomClass;
    document.getElementById("npc-background").textContent = randomBackground;
    document.getElementById("npc-personality").textContent = randomPersonality;
    document.getElementById("npc-appearance").textContent = randomAppearance;
}

// Event listener for the Generate button
document.getElementById("generate-btn").addEventListener("click", generateNPC);

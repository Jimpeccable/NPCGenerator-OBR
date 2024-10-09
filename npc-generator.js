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

    // Return NPC details in an object
    return {
        name: randomName,
        class: randomClass,
        background: randomBackground,
        personality: randomPersonality,
        appearance: randomAppearance
    };
}

// Function to create and display the NPC generator UI within Owlbear Rodeo
function setupNPCGeneratorUI() {
    // Create a new panel for the NPC generator
    const generatorDiv = document.createElement('div');
    generatorDiv.id = 'npc-generator';
    generatorDiv.style.padding = '10px';
    generatorDiv.style.border = '1px solid #ccc';
    generatorDiv.style.margin = '10px';
    generatorDiv.style.backgroundColor = '#f9f9f9';

    // Add a button to generate the NPC
    const generateButton = document.c

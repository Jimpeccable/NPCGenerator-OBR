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
    const npc = {
        name: getRandomElement(npcNames),
        class: getRandomElement(npcClasses),
        background: getRandomElement(npcBackgrounds),
        personality: getRandomElement(npcPersonalities),
        appearance: getRandomElement(npcAppearances),
    };

    const npcHtml = `
        <p><strong>Name:</strong> ${npc.name}</p>
        <p><strong>Class:</strong> ${npc.class}</p>
        <p><strong>Background:</strong> ${npc.background}</p>
        <p><strong>Personality:</strong> ${npc.personality}</p>
        <p><strong>Appearance:</strong> ${npc.appearance}</p>
    `;

    document.getElementById('npc-display').innerHTML = npcHtml;

    // Create a text item on the OBR scene with the NPC info
    OBR.scene.items.create({
        id: OBR.scene.items.id(),
        type: 'TEXT',
        text: {
            plainText: `NPC: ${npc.name}\nClass: ${npc.class}\nBackground: ${npc.background}\nPersonality: ${npc.personality}\nAppearance: ${npc.appearance}`,
            richText: npcHtml
        },
        position: { x: 0, y: 0 },
        height: 200,
        width: 200
    });
}

// Ensure the SDK is ready before adding event listeners
OBR.onReady(() => {
    document.getElementById('generate-btn').addEventListener('click', generateNPC);
});

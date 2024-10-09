// Arrays of NPC traits
const npcNames = ["Aelar", "Briala", "Calder", "Darvin", "Eryndor", "Fiera", "Gryff", "Harros"];
const npcClasses = ["Fighter", "Rogue", "Wizard", "Cleric", "Ranger", "Bard", "Paladin"];
const npcBackgrounds = ["Noble", "Peasant", "Merchant", "Soldier", "Scholar", "Outlaw"];
const npcPersonalities = ["Brave", "Shy", "Arrogant", "Cunning", "Loyal", "Greedy"];
const npcAppearances = ["Tall and slender", "Short and stout", "Scarred face", "Long flowing hair", "Piercing green eyes", "Wears a hooded cloak", "Wears ornate armor"];

// Create a new div to hold the NPC generator
const generatorDiv = document.createElement('div');
generatorDiv.id = 'npc-generator';
generatorDiv.style.padding = '10px';
generatorDiv.style.border = '1px solid #ccc';
generatorDiv.style.margin = '10px';
generatorDiv.style.backgroundColor = '#f9f9f9';

// Add a button to generate the NPC
const generateButton = document.createElement('button');
generateButton.innerHTML = 'Generate NPC';
generateButton.style.padding = '10px 20px';
generateButton.style.backgroundColor = '#3498db';
generateButton.style.color = '#fff';
generateButton.style.border = 'none';
generateButton.style.borderRadius = '5px';
generateButton.style.cursor = 'pointer';

// Append the button to the generator div
generatorDiv.appendChild(generateButton);

// Create output area for the NPC
const outputDiv = document.createElement('div');
outputDiv.id = 'npc-output';
outputDiv.style.marginTop = '20px';

// Append the output div to the generator div
generatorDiv.appendChild(outputDiv);

// Function to generate random NPC details
function generateNPC() {
    const randomName = npcNames[Math.floor(Math.random() * npcNames.length)];
    const randomClass = npcClasses[Math.floor(Math.random() * npcClasses.length)];
    const randomBackground = npcBackgrounds[Math.floor(Math.random() * npcBackgrounds.length)];
    const randomPersonality = npcPersonalities[Math.floor(Math.random() * npcPersonalities.length)];
    const randomAppearance = npcAppearances[Math.floor(Math.random() * npcAppearances.length)];

    // Output the NPC details
    outputDiv.innerHTML = `
        <p><strong>Name:</strong> ${randomName}</p>
        <p><strong>Class:</strong> ${randomClass}</p>
        <p><strong>Background:</strong> ${randomBackground}</p>
        <p><strong>Personality:</strong> ${randomPersonality}</p>
        <p><strong>Appearance:</strong> ${randomAppearance}</p>
    `;
}

// Add event listener to the button
generateButton.addEventListener('click', generateNPC);

// Append the NPC generator to the Owlbear Rodeo document
document.body.appendChild(generatorDiv);

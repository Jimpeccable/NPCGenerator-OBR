// ... (keep the existing code at the top)

function initializeApp() {
    console.log("Initializing app");
    const generateButton = document.getElementById('generate-npc');
    const npcOutput = document.getElementById('npc-output');

    if (!generateButton || !npcOutput) {
        throw new Error("Required elements not found");
    }

    console.log("Adding event listener to generate button");
    generateButton.addEventListener('click', generateNPC);

    function generateNPC() {
        console.log("Generate NPC button clicked");
        try {
            console.log("Generating NPC");
            const name = document.getElementById('npc-name').value || 'Unknown';
            const race = document.getElementById('npc-race').value;
            const npcClass = document.getElementById('npc-class').value;

            console.log(`Name: ${name}, Race: ${race}, Class: ${npcClass}`);

            const stats = generateStats();
            const personality = generatePersonality();
            const quirk = generateQuirk();

            console.log("Generated attributes:", { stats, personality, quirk });

            const npcDescription = `
                <h2>${name}</h2>
                <p><strong>Race:</strong> ${race}</p>
                <p><strong>Class:</strong> ${npcClass}</p>
                <p><strong>Stats:</strong> STR ${stats.str}, DEX ${stats.dex}, CON ${stats.con}, INT ${stats.int}, WIS ${stats.wis}, CHA ${stats.cha}</p>
                <p><strong>Personality:</strong> ${personality}</p>
                <p><strong>Quirk:</strong> ${quirk}</p>
            `;

            npcOutput.innerHTML = npcDescription;
            console.log("NPC generated successfully");
        } catch (error) {
            console.error("Error generating NPC:", error);
            npcOutput.innerHTML = `<p style="color: red;">Error generating NPC: ${error.message}</p>`;
        }
    }

    // ... (keep the rest of the functions)
}

// Main execution
try {
    if (isInOBR) {
        console.log("Running inside Owlbear Rodeo");
        OBR.onReady(() => {
            console.log("OBR SDK is ready");
            initializeApp();
        });
    } else {
        console.log("Running outside Owlbear Rodeo");
        document.addEventListener('DOMContentLoaded', () => {
            console.log("DOM is ready");
            initializeApp();
        });
    }
} catch (error) {
    console.error("Error in script execution:", error);
    const npcOutput = document.getElementById('npc-output');
    if (npcOutput) {
        npcOutput.innerHTML = `<p style="color: red;">Error in script execution: ${error.message}</p>`;
    } else {
        console.error("Could not find npc-output element");
    }
}

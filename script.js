console.log("Script starting");

// Function to initialize the app
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
            const name = generateName();
            const sex = generateSex();
            const alignment = generateAlignment();
            const demeanor = generateDemeanor();
            const secret = generateSecret();

            console.log("Generated attributes:", { name, sex, alignment, demeanor, secret });

            const npcDescription = `
                <h2>${name}</h2>
                <p><strong>Sex:</strong> ${sex}</p>
                <p><strong>Alignment:</strong> ${alignment}</p>
                <p><strong>Demeanor:</strong> ${demeanor}</p>
                <p><strong>Secret:</strong> ${secret}</p>
            `;

            npcOutput.innerHTML = npcDescription;
            console.log("NPC generated successfully");
        } catch (error) {
            console.error("Error generating NPC:", error);
            npcOutput.innerHTML = `<p style="color: red;">Error generating NPC: ${error.message}</p>`;
        }
    }

    function generateName() {
        const names = ["Aria", "Zephyr", "Thorne", "Luna", "Jasper", "Sage", "Raven", "Finn", "Nova", "Ash"];
        return names[Math.floor(Math.random() * names.length)];
    }

    function generateSex() {
        return Math.random() < 0.5 ? "Male" : "Female";
    }

    function generateAlignment() {
        const alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];
        return alignments[Math.floor(Math.random() * alignments.length)];
    }

    function generateDemeanor() {
        const demeanors = ["Friendly", "Suspicious", "Arrogant", "Shy", "Energetic", "Calm", "Pessimistic", "Optimistic"];
        return demeanors[Math.floor(Math.random() * demeanors.length)];
    }

    function generateSecret() {
        const secrets = [
            "Has a hidden treasure map",
            "Is actually a shapeshifter",
            "Owes a large debt to a crime lord",
            "Is secretly royalty in hiding",
            "Has prophetic visions",
            "Is haunted by a ghost",
            "Is planning to betray their allies",
            "Has a forbidden magical artifact"
        ];
        return secrets[Math.floor(Math.random() * secrets.length)];
    }
}

// Main execution
console.log("Starting main execution");
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is ready");
    initializeApp();
});

try {
    OBR.onReady(() => {
        console.log("OBR SDK is ready");
        const generateButton = document.getElementById('generate-npc');
        const npcOutput = document.getElementById('npc-output');

        if (!generateButton || !npcOutput) {
            throw new Error("Required elements not found");
        }

        generateButton.addEventListener('click', generateNPC);

        function generateNPC() {
            try {
                console.log("Generating NPC");
                const name = document.getElementById('npc-name').value || 'Unknown';
                const race = document.getElementById('npc-race').value;
                const npcClass = document.getElementById('npc-class').value;

                const stats = generateStats();
                const personality = generatePersonality();
                const quirk = generateQuirk();

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

        function generateStats() {
            return {
                str: Math.floor(Math.random() * 6) + 8,
                dex: Math.floor(Math.random() * 6) + 8,
                con: Math.floor(Math.random() * 6) + 8,
                int: Math.floor(Math.random() * 6) + 8,
                wis: Math.floor(Math.random() * 6) + 8,
                cha: Math.floor(Math.random() * 6) + 8
            };
        }

        function generatePersonality() {
            const personalities = [
                "Friendly and outgoing",
                "Shy and reserved",
                "Gruff but well-meaning",
                "Eccentric and unpredictable",
                "Calm and collected",
                "Hot-headed and impulsive"
            ];
            return personalities[Math.floor(Math.random() * personalities.length)];
        }

        function generateQuirk() {
            const quirks = [
                "Always speaks in rhymes",
                "Collects unusual trinkets",
                "Afraid of heights",
                "Can't resist shiny objects",
                "Constantly quotes ancient proverbs",
                "Has an invisible 'friend'"
            ];
            return quirks[Math.floor(Math.random() * quirks.length)];
        }
    });
} catch (error) {
    console.error("Error in script execution:", error);
    document.getElementById('npc-output').innerHTML = `<p style="color: red;">Error in script execution: ${error.message}</p>`;
}

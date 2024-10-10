import OBR from "@owlbear-rodeo/sdk";

OBR.onReady(() => {
  document.getElementById('generate-btn').addEventListener('click', generateNPC);
});

function generateNPC() {
    const names = ['Arin', 'Borin', 'Cirin', 'Dorin'];
    const sexes = ['Male', 'Female', 'Non-binary'];
    const alignments = ['Lawful Good', 'Neutral', 'Chaotic Evil'];
    const demeanors = ['Friendly', 'Hostile', 'Neutral'];
    const secrets = ['Has a hidden treasure', 'Is a spy', 'Has a dark past'];
    
    const name = names[Math.floor(Math.random() * names.length)];
    const sex = sexes[Math.floor(Math.random() * sexes.length)];
    const alignment = alignments[Math.floor(Math.random() * alignments.length)];
    const demeanor = demeanors[Math.floor(Math.random() * demeanors.length)];
    const secret = secrets[Math.floor(Math.random() * secrets.length)];
    const gold = Math.floor(Math.random() * 100);
    const silver = Math.floor(Math.random() * 100);
    const copper = Math.floor(Math.random() * 100);

    const npc = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Sex:</strong> ${sex}</p>
        <p><strong>Alignment:</strong> ${alignment}</p>
        <p><strong>Demeanor:</strong> ${demeanor}</p>
        <p><strong>Secret:</strong> ${secret}</p>
        <p><strong>Money:</strong> ${gold} Gold, ${silver} Silver, ${copper} Copper</p>
    `;

    document.getElementById('npc-display').innerHTML = npc;
}

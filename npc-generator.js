// Background script
const npcNames = ["Aelar", "Briala", ...];
const npcClasses = ["Fighter", "Rogue", ...];
// ... other arrays

function generateNPC() {
    // ... generate NPC object
    return npc;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "generateNPC") {
        const npc = generateNPC();
        sendResponse({ npc });
    }
});

// Content script (if needed)
chrome.runtime.sendMessage({ type: "generateNPC" }, (response) => {
    // Handle the generated NPC in the content script
    console.log(response.npc);
});

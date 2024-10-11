const firstNames = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah"];
const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson"];
const sexes = ["Male", "Female", "Non-binary"];
const races = ["Human", "Elf", "Dwarf", "Halfling", "Gnome", "Half-Orc", "Tiefling"];
const classes = ["Fighter", "Wizard", "Rogue", "Cleric", "Paladin", "Bard", "Ranger", "Druid"];
const backgrounds = ["Acolyte", "Criminal", "Folk Hero", "Noble", "Sage", "Soldier", "Merchant", "Artisan"];
const professions = ["Blacksmith", "Farmer", "Merchant", "Guard", "Sailor", "Tailor", "Innkeeper", "Miner"];
const demeanors = ["Friendly", "Suspicious", "Arrogant", "Shy", "Eccentric", "Calm", "Nervous", "Jovial"];
const motivations = ["Wealth", "Power", "Knowledge", "Love", "Revenge", "Adventure", "Fame", "Peace"];
const secrets = ["Hidden treasure", "Dark past", "Secret identity", "Forbidden love", "Ancient curse", "Lost heir", "Betrayal", "Hidden power"];
const quirks = ["Talks to plants", "Always rhymes", "Collects odd trinkets", "Afraid of heights", "Constantly hums", "Never blinks", "Speaks in third person", "Obsessed with cleanliness"];
const items = ["Mysterious key", "Old map", "Family heirloom", "Lucky charm", "Strange coin", "Magical trinket", "Ancient book", "Unusual pet"];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateMoney() {
    const gold = Math.floor(Math.random() * 20);
    const silver = Math.floor(Math.random() * 50);
    const copper = Math.floor(Math.random() * 100);
    return `${gold} gold, ${silver} silver, ${copper} copper`;
}

function generateNPC() {
    const npc = {
        firstName: getRandomElement(firstNames),
        lastName: getRandomElement(lastNames),
        sex: getRandomElement(sexes),
        race: getRandomElement(races),
        class: getRandomElement(classes),
        background: getRandomElement(backgrounds),
        profession: getRandomElement(professions),
        age: Math.floor(Math.random() * 70) + 18,
        demeanor: getRandomElement(demeanors),
        motivation: getRandomElement(motivations),
        secret: getRandomElement(secrets),
        quirk: getRandomElement(quirks),
        money: generateMoney(),
        item: getRandomElement(items)
    };

    const npcInfoDiv = document.getElementById('npcInfo');
    npcInfoDiv.innerHTML = `
        <p><strong>Name:</strong> ${npc.firstName} ${npc.lastName}</p>
        <p><strong>Sex:</strong> ${npc.sex}</p>
        <p><strong>Race:</strong> ${npc.race}</p>
        <p><strong>Class:</strong> ${npc.class}</p>
        <p><strong>Background:</strong> ${npc.background}</p>
        <p><strong>Profession:</strong> ${npc.profession}</p>
        <p><strong>Age:</strong> ${npc.age}</p>
        <p><strong>Demeanor:</strong> ${npc.demeanor}</p>
        <p><strong>Motivation:</strong> ${npc.motivation}</p>
        <p><strong>Secret:</strong> ${npc.secret}</p>
        <p><strong>Quirk:</strong> ${npc.quirk}</p>
        <p><strong>Money:</strong> ${npc.money}</p>
        <p><strong>Item:</strong> ${npc.item}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    generateBtn.addEventListener('click', generateNPC);
});

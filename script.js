// Arrays for NPC characteristics
const firstNames = [
    'Arin', 'Borin', 'Cirin', 'Dorin', 'Erin', 'Farin', 'Garin', 'Harin', 'Irin', 'Jarin',
    'Karin', 'Lorin', 'Marin', 'Norin', 'Orin', 'Parin', 'Quirin', 'Rarin', 'Sarin', 'Tarin',
    'Urin', 'Varin', 'Warin', 'Xarin', 'Yarin', 'Zarin', 'Alira', 'Brynn', 'Cade', 'Darius',
    'Elara', 'Finn', 'Gideon', 'Hestia', 'Iris', 'Jace', 'Keira', 'Liam', 'Mira', 'Nyla',
    'Orion', 'Piper', 'Quinn', 'Rowan', 'Sage', 'Thea', 'Uma', 'Vex', 'Wren', 'Xander', 'Yara', 'Zephyr'
];

const alignments = [
    'Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'
];

const lastNames = [
    'Ironheart', 'Stormwind', 'Nightshade', 'Sunseeker', 'Moonshadow', 'Thornbush', 'Oakenshield',
    'Fireforge', 'Cloudchaser', 'Dawnbringer', 'Frostbeard', 'Shadowweaver', 'Lightfoot', 'Swiftarrow',
    'Blackthorn', 'Silverblade', 'Goldhammer', 'Windrider', 'Stonebreaker', 'Starfall', 'Ravenclaw',
    'Thunderstrike', 'Snowmane', 'Wildflower', 'Seastrider', 'Mountainheart', 'Riverdancer', 'Skywalker',
    'Earthkeeper', 'Flamecaller'
];

const sexes = ['Male', 'Female', 'Non-binary', 'Genderfluid', 'Agender', 'Bigender', 'Two-Spirit', 'Demigender'];

const races = [
    'Human', 'Elf', 'Dwarf', 'Halfling', 'Gnome', 'Half-Orc', 'Tiefling', 'Dragonborn', 'Half-Elf', 'Aasimar',
    'Goliath', 'Kenku', 'Tabaxi', 'Firbolg', 'Triton', 'Genasi', 'Changeling', 'Warforged', 'Kalashtar', 'Shifter'
];

const classes = [
    'Fighter', 'Wizard', 'Rogue', 'Cleric', 'Paladin', 'Ranger', 'Bard', 'Barbarian', 'Monk', 'Sorcerer',
    'Warlock', 'Druid', 'Artificer', 'Blood Hunter', 'Alchemist', 'Psion', 'Shaman', 'Necromancer', 'Battlemage', 'Swashbuckler'
];

const subclasses = {
    'Fighter': ['Champion', 'Battle Master', 'Eldritch Knight', 'Arcane Archer', 'Cavalier', 'Samurai'],
    'Wizard': ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'],
    'Rogue': ['Thief', 'Assassin', 'Arcane Trickster', 'Swashbuckler', 'Mastermind', 'Scout'],
    'Cleric': ['Life', 'Light', 'Knowledge', 'Nature', 'Tempest', 'Trickery', 'War', 'Grave', 'Forge'],
    'Paladin': ['Devotion', 'Ancients', 'Vengeance', 'Conquest', 'Redemption', 'Glory'],
    'Ranger': ['Hunter', 'Beast Master', 'Gloom Stalker', 'Horizon Walker', 'Monster Slayer'],
    'Bard': ['Lore', 'Valor', 'Glamour', 'Swords', 'Whispers', 'Eloquence'],
    'Barbarian': ['Berserker', 'Totem Warrior', 'Ancestral Guardian', 'Storm Herald', 'Zealot'],
    'Monk': ['Open Hand', 'Shadow', 'Four Elements', 'Drunken Master', 'Kensei', 'Sun Soul'],
    'Sorcerer': ['Draconic Bloodline', 'Wild Magic', 'Divine Soul', 'Shadow Magic', 'Storm Sorcery'],
    'Warlock': ['Archfey', 'Fiend', 'Great Old One', 'Celestial', 'Hexblade'],
    'Druid': ['Land', 'Moon', 'Dreams', 'Shepherd', 'Spores', 'Stars'],
    'Artificer': ['Alchemist', 'Artillerist', 'Battle Smith', 'Armorer'],
    'Blood Hunter': ['Order of the Ghostslayer', 'Order of the Lycan', 'Order of the Mutant', 'Order of the Profane Soul'],
    'Alchemist': ['Herbalist', 'Poisoner', 'Transmuter', 'Explosives Expert'],
    'Psion': ['Telepath', 'Kinetic', 'Seer', 'Shaper'],
    'Shaman': ['Spirit Walker', 'Elementalist', 'Witch Doctor', 'Totem Caller'],
    'Necromancer': ['Bone Collector', 'Soul Binder', 'Plague Bringer', 'Reanimator'],
    'Battlemage': ['Spellsword', 'War Caster', 'Rune Knight', 'Arcane Defender'],
    'Swashbuckler': ['Duelist', 'Pirate', 'Daredevil', 'Charmer']
};

// ... (include all other arrays from the previous script)

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const alignments = [
    'Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'
];

// Function to generate a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate NPC
function generateNPC() {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const name = `${firstName} ${lastName}`;
    const sex = getRandomElement(sexes);
    const race = getRandomElement(races);
    const characterClass = getRandomElement(classes);
    const subclass = getRandomElement(subclasses[characterClass]);
    const alignment = getRandomElement(alignments);
    // ... (rest of the code)
}

// Event listener for button click
document.getElementById('generate-btn').addEventListener('click', () => {
    const npc = generateNPC();
    const npcDisplay = document.getElementById('npc-display');
    npcDisplay.innerHTML = `
        <h2>${npc.name}</h2>
        <p><strong>Sex:</strong> ${npc.sex}</p>
        <p><strong>Race:</strong> ${npc.race}</p>
        <p><strong>Class:</strong> ${npc.characterClass} (${npc.subclass})</p>
        <p><strong>Background:</strong> ${npc.background}</p>
        <p><strong>Profession:</strong> ${npc.profession}</p>
        <p><strong>Age:</strong> ${npc.age}</p>
        <p><strong>Height:</strong> ${npc.height}</p>
        <p><strong>Weight:</strong> ${npc.weight} lbs</p>
        <p><strong>Alignment:</strong> ${npc.alignment}</p>
        <p><strong>Demeanor:</strong> ${npc.demeanor}</p>
        <p><strong>Motivation:</strong> ${npc.motivation}</p>
        <p><strong>Secret:</strong> ${npc.secret}</p>
        <p><strong>Quirk:</strong> ${npc.quirk}</p>
        <p><strong>Money:</strong> ${npc.gold} Gold, ${npc.silver} Silver, ${npc.copper} Copper</p>
        <p><strong>Items:</strong> ${npc.items.join(', ')}</p>
    `;
});

// Owlbear Rodeo integration
OBR.onReady(() => {
    OBR.action.setHeight(600);
});

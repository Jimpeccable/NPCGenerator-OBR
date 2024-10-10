document.getElementById('generate-btn').addEventListener('click', generateNPC);

function generateNPC() {
    const firstNames = [
        'Arin', 'Borin', 'Cirin', 'Dorin', 'Erin', 'Farin', 'Garin', 'Harin', 'Irin', 'Jarin',
        'Karin', 'Lorin', 'Marin', 'Norin', 'Orin', 'Parin', 'Quirin', 'Rarin', 'Sarin', 'Tarin',
        'Urin', 'Varin', 'Warin', 'Xarin', 'Yarin', 'Zarin', 'Alira', 'Brynn', 'Cade', 'Darius',
        'Elara', 'Finn', 'Gideon', 'Hestia', 'Iris', 'Jace', 'Keira', 'Liam', 'Mira', 'Nyla',
        'Orion', 'Piper', 'Quinn', 'Rowan', 'Sage', 'Thea', 'Uma', 'Vex', 'Wren', 'Xander', 'Yara', 'Zephyr'
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
    const alignments = [
        'Lawful Good', 'Neutral Good', 'Chaotic Good',
        'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
        'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'
    ];
    const demeanors = [
        'Friendly', 'Hostile', 'Neutral', 'Suspicious', 'Arrogant', 'Timid', 'Jovial', 'Melancholic', 'Stoic',
        'Flirtatious', 'Paranoid', 'Absent-minded', 'Enthusiastic', 'Sarcastic', 'Compassionate', 'Grumpy',
        'Eccentric', 'Serene', 'Mischievous', 'Brooding'
    ];
    const backgrounds = [
        'Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Noble',
        'Outlander', 'Sage', 'Sailor', 'Soldier', 'Urchin', 'Archaeologist', 'Haunted One', 'City Watch',
        'Clan Crafter', 'Cloistered Scholar', 'Courtier', 'Faction Agent', 'Far Traveler', 'Gladiator',
        'Knight', 'Mercenary Veteran', 'Urban Bounty Hunter'
    ];
    const motivations = [
        'Seeking revenge', 'Searching for lost knowledge', 'Protecting the innocent', 'Atoning for past sins',
        'Proving their worth', 'Seeking immortality', 'Uncovering a conspiracy', 'Restoring a fallen kingdom',
        'Finding true love', 'Becoming the greatest in their field', 'Solving an ancient mystery',
        'Redeeming a family name', 'Fulfilling a prophecy', 'Escaping a dark fate', 'Achieving godhood',
        'Bringing balance to the world', 'Overthrowing a tyrant', 'Preserving nature', 'Spreading chaos',
        'Uniting warring factions'
    ];
    const secrets = [
        'Has a hidden treasure', 'Is a spy', 'Has a dark past', 'Is secretly royalty', 'Has a forbidden love',
        'Is cursed', 'Knows a world-changing secret', 'Is not who they claim to be', 'Has a powerful enemy',
        'Is immortal', 'Can shapeshift', 'Is possessed by a spirit', 'Has prophetic visions',
        'Is the last of an ancient bloodline', 'Owes a debt to a demon', 'Has a twin no one knows about',
        'Is immune to magic', 'Can communicate with the dead', 'Is slowly turning to stone',
        'Knows the location of a lost city'
    ];
    const quirks = [
        'Always speaks in rhyme', 'Constantly fidgets with a coin', 'Sneezes when nervous',
        'Collects odd trinkets', 'Talks to inanimate objects', 'Always stands on one foot',
        'Speaks with an exaggerated accent', 'Believes they're invisible when they close their eyes',
        'Insists on using made-up words', 'Afraid of their own shadow', 'Only eats blue foods',
        'Compulsively counts everything', 'Breaks into song mid-conversation', 'Carries a pet rock everywhere',
        'Refuses to make eye contact', 'Always refers to themselves in third person', 'Constantly checks the time',
        'Speaks to plants as if they're people', 'Believes they can predict the weather through interpretive dance',
        'Collects toenail clippings of famous people'
    ];
    const items = [
        'A rusty key', 'A broken pocket watch', 'A small pouch of sand', 'A glass eye', 'A bent spoon',
        'A colorful feather', 'A smooth river stone', 'A tiny wooden figurine',
        'A scrap of parchment with illegible writing', 'A single earring', 'A lock of hair tied with a ribbon',
        'A small vial of odd-smelling liquid', 'A torn piece of a map', 'A seed from an unknown plant',
        'A tiny bell that doesn't ring', 'A compass that always points west', 'A miniature painting of a stranger',
        'A deck of cards missing the ace of spades', 'A small mirror that shows a different reflection',
        'A booklet of foreign currency', 'A tiny hourglass filled with blue sand', 'A clockwork butterfly',
        'A fossilized egg', 'A charm made of chicken bones', 'A cryptic puzzle box'
    ];
    const professions = [
        'Blacksmith', 'Merchant', 'Farmer', 'Guard', 'Innkeeper', 'Alchemist', 'Sailor', 'Miner', 'Tailor',
        'Carpenter', 'Healer', 'Scholar', 'Artist', 'Bounty Hunter', 'Diplomat', 'Explorer', 'Gambler',
        'Smuggler', 'Spy', 'Gladiator', 'Pirate', 'Assassin', 'Beastmaster', 'Courtesan', 'Fortune Teller'
    ];

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const name = `${firstName} ${lastName}`;
    const sex = getRandomElement(sexes);
    const race = getRandomElement(races);
    const characterClass = getRandomElement(classes);
    const subclass = getRandomElement(subclasses[characterClass]);
    const alignment = getRandomElement(alignments);
    const demeanor = getRandomElement(demeanors);
    const background = getRandomElement(backgrounds);
    const motivation = getRandomElement(motivations);
    const secret = getRandomElement(secrets);
    const quirk = getRandomElement(quirks);
    const profession = getRandomElement(professions);
    
    const gold = Math.floor(Math.random() * 10);
    const silver = Math.floor(Math.random() * 20);
    const copper = Math.floor(Math.random() * 50);

    const numItems = Math.floor(Math.random() * 3) + 1;
    const npcItems = [];
    for (let i = 0; i < numItems; i++) {
        let item;
        do {
            item = getRandomElement(items);
        } while (npcItems.includes(item));
        npcItems.push(item);
    }

    const age = Math.floor(Math.random() * 80) + 18;
    const height = Math.floor(Math.random() * 3) + 4 + "'" + Math.floor(Math.random() * 12);
    const weight = Math.floor(Math.random() * 150) + 100;

    const npc = `
        <h2>${name}</h2>
        <p><strong>Sex:</strong> ${sex}</p>
        <p><strong>Race:</strong> ${race}</p>
        <p><strong>Class:</strong> ${characterClass} (${subclass})</p>
        <p><strong>Background:</strong> ${background}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Height:</strong> ${height}</p>
        <p><strong>Weight:</strong> ${weight} lbs</p>
        <p><strong>Alignment:</strong> ${alignment}</p>
        <p><strong>Demeanor:</strong> ${demeanor}</p>
        <p><strong>Motivation:</strong> ${motivation}</p>
        <p><strong>Secret:</strong> ${secret}</p>
        <p><strong>Quirk:</strong> ${quirk}</p>
        <p><strong>Money:</strong> ${gold} Gold, ${silver} Silver, ${copper} Copper</p>
        <p><strong>Items:</strong> ${npcItems.join(', ')}</p>
    `;
    document.getElementById('npc-display').innerHTML = npc;
}

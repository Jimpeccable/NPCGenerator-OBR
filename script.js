const firstNames = [
  "Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona", "George", "Hannah", 
  "Iris", "Jasper", "Kara", "Liam", "Mira", "Noah", "Olivia", "Piper", 
  "Quinn", "Rowan", "Silas", "Talia", "Uriel", "Vera", "Wes", "Xander", 
  "Yara", "Zane", "Aiden", "Bridget", "Cassian", "Dorian", "Elara", "Finn", 
  "Gwen", "Hector", "Isla", "Juno", "Kai", "Leona", "Magnus", "Nina", "Oscar"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", 
  "Thorne", "Blackwood", "Ravencrest", "Stormwind", "Silverleaf", "Ironfoot", 
  "Goldmane", "Stonehammer", "Brightwood", "Ashdown", "Greystone", "Hawke", 
  "Ironfist", "Rivers", "Flint", "Winterborn", "Lightbringer", "Shadowmend", 
  "Firebrand", "Drake", "Bane", "Stoneshield", "Brighthelm"
];

const sexes = ["Male", "Female", "Non-binary", "Genderfluid", "Agender"];

const races = [
  "Human", "Elf", "Dwarf", "Halfling", "Gnome", "Half-Orc", "Tiefling", 
  "Dragonborn", "Half-Elf", "Tabaxi", "Aarakocra", "Genasi", "Firbolg", 
  "Kenku", "Goliath"
];

const classes = [
  "Fighter", "Wizard", "Rogue", "Cleric", "Paladin", "Bard", "Ranger", "Druid", 
  "Warlock", "Sorcerer", "Monk", "Barbarian", "Artificer", "Blood Hunter"
];

const backgrounds = [
  "Acolyte", "Criminal", "Folk Hero", "Noble", "Sage", "Soldier", "Merchant", 
  "Artisan", "Urchin", "Pirate", "Entertainer", "Hermit", "Gladiator", "Outlander", 
  "Charlatan", "Spy", "Knight", "Haunted One", "Courtier"
];

const professions = [
  "Blacksmith", "Farmer", "Merchant", "Guard", "Sailor", "Tailor", "Innkeeper", 
  "Miner", "Alchemist", "Apothecary", "Hunter", "Fisherman", "Librarian", 
  "Jeweler", "Cook", "Stable Master", "Tavern Bard", "Cobbler", "Cartographer", 
  "Gravedigger", "Herbalist", "Scribe", "Shipwright", "Weaver", "Woodcutter", 
  "Leatherworker"
];

const demeanors = [
  "Friendly", "Suspicious", "Arrogant", "Shy", "Eccentric", "Calm", "Nervous", 
  "Jovial", "Stern", "Charming", "Mysterious", "Grumpy", "Energetic", "Melancholic", 
  "Proud", "Dutiful", "Lazy", "Stoic", "Hot-tempered", "Optimistic", "Pessimistic"
];

const motivations = [
  "Wealth", "Power", "Knowledge", "Love", "Revenge", "Adventure", "Fame", "Peace", 
  "Justice", "Redemption", "Freedom", "Glory", "Survival", "Family", "Honor", 
  "Curiosity", "Vengeance", "Escape", "To prove themselves", "Duty"
];

const secrets = [
  "Hidden treasure buried beneath their family's ancestral home",
  "A dark past involving forbidden magic that could resurface at any time",
  "A secret identity as a royal heir of a long-lost kingdom",
  "Forbidden love with someone from an enemy faction or race",
  "An ancient curse that threatens not only them but their entire bloodline",
  "They are the true heir to a powerful and ancient artifact, but someone else is after it",
  "A betrayal of a close friend that resulted in that friend's downfall, now haunting them",
  "They possess a hidden power that could change the world, but they fear using it",
  "They know the location of a long-lost artifact that many are willing to kill for",
  "They were once part of a secretive assassin's guild and are now in hiding",
  "Their family was involved in a great betrayal that led to the downfall of a noble house",
  "They once made a deal with a powerful demon, and now that demon is coming to collect",
  "They are the last living member of an ancient and forgotten race",
  "They are cursed to forget everything they experience every seven years",
  "They possess knowledge of an ancient, apocalyptic prophecy",
  "They are in hiding from a notorious crime syndicate they once worked for",
  "They have a twin that they believe died, but is secretly alive and working against them",
  "They are a member of an underground rebellion aiming to overthrow the local government",
  "They once betrayed their kingdom to enemy forces and now live in shame",
  "They discovered a portal to another plane but are afraid of what lies beyond it"
];

const quirks = [
  "Talks to plants", "Always rhymes", "Collects odd trinkets", "Afraid of heights", 
  "Constantly hums", "Never blinks", "Speaks in third person", "Obsessed with cleanliness", 
  "Always has a pocket full of snacks", "Compulsively lies, even about small things", 
  "Afraid of small animals", "Wears mismatched shoes", "Believes they are constantly being watched", 
  "Has a fascination with fire", "Refuses to eat anything green", "Has a collection of strange masks", 
  "Makes jokes in serious situations", "Whistles when they’re nervous", "Cannot remember names", 
  "Hates the sound of music", "Reads people's fortunes using random objects", 
  "Constantly flips a coin and bases decisions on the result", "Writes down everything they say", 
  "Always smells faintly of garlic", "Incredibly superstitious about numbers", 
  "Thinks they are cursed but aren't", "Believes every stranger is an old friend in disguise", 
  "Compulsively collects buttons", "Taps their foot to an unheard rhythm", 
  "Refuses to ever walk under a ladder", "Never sleeps in the same place twice", 
  "Constantly fidgets with their hands", "Always carries a flower in their pocket", 
  "Can only sleep while standing up"
];

const items = [
  "Mysterious key with strange engravings that seem to change every time it's viewed",
  "Old map of a forgotten city that no longer appears on any other charts",
  "Family heirloom necklace that is said to protect its wearer from curses",
  "Lucky charm that was found in a dragon's hoard, rumored to bring great fortune",
  "Strange coin that always lands on its edge no matter how it's flipped",
  "Magical trinket that glows faintly whenever danger is near",
  "Ancient book written in a long-dead language, with illustrations of mysterious rituals",
  "Unusual pet, a small, glowing lizard that never eats or sleeps",
  "Broken sword hilt that vibrates slightly when near magic",
  "Tattered cloak that seems to blend into the surroundings when worn",
  "Music box that plays a haunting tune when opened, but no one knows the melody",
  "Compass that doesn't point north, but always points to something the user seeks",
  "A glass vial that contains a swirling mist, said to hold the soul of an ancient warrior",
  "A black candle that cannot be extinguished by any normal means",
  "A pocket watch that stops time for a few seconds when wound backward",
  "A ring that makes the wearer invisible, but only to cats",
  "A skull that whispers cryptic warnings when danger approaches",
  "A mirror that shows the reflection of one's true self, no matter their disguise",
  "A shield that absorbs light and becomes nearly invisible in the dark",
  "A feather quill that writes on its own, but only in riddles"
];


function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateMoney() {
    const gold = Math.floor(Math.random() * 10);
    const silver = Math.floor(Math.random() * 20);
    const copper = Math.floor(Math.random() * 50);
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

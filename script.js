document.getElementById('npc-generator-icon').addEventListener('click', function() {
  document.getElementById('npc-generator-modal').style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', function() {
  document.getElementById('npc-generator-modal').style.display = 'none';
});

document.getElementById('generate-npc').addEventListener('click', function() {
  const names = ['Aragorn', 'Legolas', 'Gimli', 'Frodo'];
  const traits = ['Brave', 'Cunning', 'Wise', 'Strong'];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomTrait = traits[Math.floor(Math.random() * traits.length)];
  document.getElementById('npc-result').innerText = `Name: ${randomName}, Trait: ${randomTrait}`;
});

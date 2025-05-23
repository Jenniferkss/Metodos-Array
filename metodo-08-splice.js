let playlist = ["Funk", "Hip-Hop", "Pop", "Rock", "Jazz", `Hino`, `Louvor`];
console.log(`Antes do splice: ${playlist}`);
let elementosRemovidos = playlist.splice(2, 2);
console.log(`Depois do splice: ${playlist}`);
console.log(`Elementos removidos: ${elementosRemovidos}`);

console.log(`Antes do splice: ${playlist}`);
let desafio = playlist.splice(3, 2);
console.log(`Elementos removidos: ${desafio}`);
console.log(`Depois do splice: ${playlist}`);

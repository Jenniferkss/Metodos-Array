let playlist = ['Funk', 'Hip-Hop', 'Pop', 'Rock', 'Jazz'];
let playlistOrdenada = playlist.sort();
let numeros = [10, 5, 100, 50, 1];
let numerosOrdenadosCrescentes = numeros.sort((a,b) => a - b);


console.log(`playlist Ordenada: ${playlistOrdenada}`);
console.log(`Antes do sort: ${numeros}`);
console.log(`Numeros em ordem crescente: ${numerosOrdenadosCrescentes}`);

let numerosOrdemDecrescente = numeros.sort((a,b) => b - a)
console.log(`Numeros em ordem decrescente: ${numerosOrdemDecrescente}`);


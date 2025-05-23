let playlist = ['Funk', 'Hip-Hop', 'Pop'];
let playlistEmCaps = playlist.map(musica => musica.toUpperCase()); // Transforma em maiusculo 
let playlistClone = playlist.map(itens => itens); // Só clona 
let playlistEmMin = playlist.map(item => item.toLowerCase());
let numeros = [10,20,30,40,50];
let dobrados = numeros.map(n => n * 2 );
let metades = numeros.map(n => n / 2);
let comoTexto = numeros.map(n =>`${n} pts`);


console.log(`Clone da playlist: ${playlistClone.join(`;`)}`);
console.log(`Playlist em maiuscula: ${playlistEmCaps.join(`;`)}`);
console.log(`Playlist em minuscula: ${playlistEmMin.join(`;`)}`);
console.log(`Valores dobrados: ${dobrados.join(`;`)}`);
console.log(`Valores pela metade: ${metades.join(`;`)}`);
console.log(`Como o texto: ${comoTexto.join(`;`)}`);

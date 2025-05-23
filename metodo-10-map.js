let playlist = ['Funk', 'Hip-Hop', 'Pop'];
let playlistEmCaps = playlist.map(musica => musica.toUpperCase());
let playlistClone = playlist.map(itens => itens); // Só clona 

console.log(`Clone da playlist: ${playlistClone.join(`;`)}`);
console.log(`Playlist em maiuscula: ${playlistEmCaps.join(`;`)}`);

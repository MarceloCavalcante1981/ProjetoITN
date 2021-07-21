//autor: Marcelo de Seixas Cavalcante
//Curso: Devmedia  Java Script modulo :objeto
// exercico:15 titulo dados do anime

var colecao_animes = [
    { id: 1, titulo: "Naruto",      episodios: 673 },
    { id: 2, titulo: "Bleach",      episodios: 366 },
    { id: 3, titulo: "One Piece",   episodios: 931 }
];

var primeiro_anime = colecao_animes[0];

var id_anime = primeiro_anime.id;
var titulo_anime = primeiro_anime.titulo;
var total_episodios_anime = primeiro_anime.episodios;

console.log("Id do anime: " + id_anime );
console.log("Título do anime: " + titulo_anime);
console.log("Total de episódios do anime: " + total_episodios_anime);
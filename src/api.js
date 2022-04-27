const urlCharacter = "https://rickandmortyapi.com/api/character";
const urlLocation = "https://rickandmortyapi.com/api/location";
const urlEpisode = "https://rickandmortyapi.com/api/episode";

function getCharacters(page) {
  return fetch(`${urlCharacter}/?page=${page}`)
    .then((resp) => resp.json())
    .then((resp) => resp.results);
}

function getLocations(page) {
  return fetch(`${urlLocation}/?page=${page}`)
    .then((resp) => resp.json())
    .then((resp) => resp.results);
}

function getEpisodes(page) {
  return fetch(`${urlEpisode}/?page=${page}`)
    .then((resp) => resp.json())
    .then((resp) => resp.results);
}

function getCharacter(id) {
  return fetch(`${urlCharacter}/${id}`)
    .then((resp) => resp.json())
    .then((resp) => resp.results);
}

function getLocation(id) {
  return fetch(`${urlLocation}/${id}`)
    .then((resp) => resp.json())
    .then((resp) => resp.results);
}

function getEpisode(id) {
  return fetch(`${urlEpisode}/${id}`)
    .then((resp) => resp.json())
    .then((resp) => resp.results);
}

export default {
  getCharacters,
  getLocations,
  getEpisodes,
  getCharacter,
  getLocation,
  getEpisode,
};

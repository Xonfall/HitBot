const CLIENTID = 'w0bM0TPRL9Lsicl0dacqHHudT0dzK7xMziGgin0EAcagdN-95fADAhMgq8F6Cbka',
CLIENTSECRET = "lelOXgftKe1-rThe108rQ_44C9urna6c7fMHDE5TpieEMF6uz4tVbmmAFGQj6CaukmmueKmqNjfXQmSl-kw7ow",
accessToken= "access_token=_5qJ9YVKI5eZ6cLbc0LfgIJtHklhmrw_uZzj9ugzmc_uCwoG6SsfOV2ZLCb0bIr7",
lyricsToken= "?apikey=03d5f80e88e40ca17ea9d78f326c84ee",
API = "https://api.genius.com/search",
APISong = "https://api.genius.com/songs/",
APIArtist = "https://api.genius.com/artists/",
APISearch = "https://api.genius.com/search?q=",
musixURL = "http://api.musixmatch.com/ws/1.1/track.search";

const xhr = new XMLHttpRequest(); //XML HTTP Request

// export const getLyrics = (slug) => {
//   console.log("http://api.musixmatch.com/ws/1.1/track.search?apikey=03d5f80e88e40ca17ea9d78f326c84ee&q_artist=queen&q_track=we%20are%20the%20champions&format=json&page_size=1&f_has_lyrics=1");
//   xhr.open("GET", "http://api.musixmatch.com/ws/1.1/track.search?apikey=03d5f80e88e40ca17ea9d78f326c84ee&q_artist=queen&q_track=we%20are%20the%20champions&format=json&page_size=1&f_has_lyrics=1", false);
//   xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   console.log(xhr);
//   xhr.send();
//   const response = xhr.response;
//
//   console.log(response);
//
//   let json = JSON.parse(response);
//   let song = json['response']['song'];
//
//   return(song);
//
// }

export const getSong = (id) => {
  xhr.open("GET", APISong+id+"?"+accessToken, false);
  xhr.send();
  const response = xhr.response;

  let json = JSON.parse(response);
  let song = json['response']['song'];

  return(song);
}

export const doSearch = (slug) => {
  xhr.open("GET", APISearch+slug+"&"+accessToken, false);
  xhr.send();
  const response = xhr.response;

  let json = JSON.parse(response);
  // let song = json['response']['song'];

  return(json.response);
}

export const getArtist = (name) => {
  const search = doSearch(name);
  const idArtist = search['hits'][0].result.primary_artist.id;

  xhr.open("GET", APIArtist+idArtist+"?text_format=html&"+accessToken, false);
  xhr.send();
  const response = xhr.response;

  let json = JSON.parse(response);
  let artist = json['response'].artist;

  let result  = {
    name: artist.name,
    image: artist.image_url,
    description: artist.description.html,
  }

  return(result);
}

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

export const doSearch = (slug) => {
  xhr.open("GET", APISearch+slug+"&"+accessToken, false);
  xhr.send();
  const response = xhr.response;

  let json = JSON.parse(response);
  let song = json['response']['song'];

  return(json.response['hits']);
}

export const getSong = (title) => {
  const search = doSearch(title);
  const idSong = search.length > 0 ? search[0].result.id : null;
  console.log(idSong);

  let result = null

  if(idSong !== null) {
    xhr.open("GET", APISong+idSong+"?text_format=html&"+accessToken, false);
    xhr.send();
    const response = xhr.response;

    let json = JSON.parse(response);
    let song = json['response'].song;

    result  = {
      title: song.title,
      release_date: song.release_date,
      image: song.song_art_image_url,
      album_title: song.album.name,
      artist: song.primary_artist.name,
    }
  }

  return(result);
}

export const getArtist = (name) => {
  const search = doSearch(name);
  const idArtist = search.length > 0 ? search[0].result.primary_artist.id : null;
  let result = null

  if(idArtist !== null) {
    xhr.open("GET", APIArtist+idArtist+"?text_format=html&"+accessToken, false);
    xhr.send();
    const response = xhr.response;

    let json = JSON.parse(response);
    let artist = json['response'].artist;

    result  = {
      name: artist.name,
      image: artist.image_url,
      description: artist.description.html,
      id: artist.id,
    }
  }

  return(result);
}

export const getSongs = (name) => {
  const search = doSearch(name);

  const songs = [];

  search.map(song => {
    songs.push({
      title: song.result.title,
      artist: song.result.primary_artist.name,
      image: song.result.header_image_url
    })
  });
  return songs;
}

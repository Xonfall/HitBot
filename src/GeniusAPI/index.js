const CLIENTID = 'w0bM0TPRL9Lsicl0dacqHHudT0dzK7xMziGgin0EAcagdN-95fADAhMgq8F6Cbka',
CLIENTSECRET = "lelOXgftKe1-rThe108rQ_44C9urna6c7fMHDE5TpieEMF6uz4tVbmmAFGQj6CaukmmueKmqNjfXQmSl-kw7ow",
accessToken= "access_token=_5qJ9YVKI5eZ6cLbc0LfgIJtHklhmrw_uZzj9ugzmc_uCwoG6SsfOV2ZLCb0bIr7",
API = "https://api.genius.com/search",
APISong = "https://api.genius.com/songs/",
APIArtist = "https://api.genius.com/artists/",
APISearch = "https://api.genius.com/search?q=";

const xhr = new XMLHttpRequest(); //XML HTTP Request

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

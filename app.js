const clientId = '584b42f299054b14956f2ffd9a6e6af9';
const clientSecret = '9751be6d860a48d7b30f5c7ab00e7322';
const url = 'https://accounts.spotify.com/api/token';


 fetch(url, {
      method: 'post',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
     },
     body: 'grant_type=client_credentials',
     json: true
 })
 .then(response => response.text())
 .then(data => {
     console.log(data);
      searchSpotify(data.access_token);
 })
 .catch(err => console.log(err));

 function searchSpotify(accessToken){
     const options = {
        headers: {
            'Authorization': 'Bearer ' + accessToken 
        }
    };
    let spotifyURL = 'https://api.spotify.com/v1/search?q=' + 'Eminem' + '&type=' + 'artist';
    fetch(spotifyURL, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}


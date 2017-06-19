console.log("Howdy!");


var bandInput = document.getElementById('bandInput');
var userSearchBar = document.getElementById('bandInput');
var submitButton = document.getElementById('submitButton');
var nameInput = "";
let searchInput = "";
submitButton.addEventListener('click', function(e) {
var searchInput = document.getElementById('bandInput').value
  console.log(searchInput)

let fetchAddress = "https://api.soundcloud.com/tracks/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=" + (searchInput);

fetch(fetchAddress)
.then(
  function(response) {
    if(response.status !== 200) {
      console.log("Looks like there is a problem with your fetch, fix it!" + response.status);
      return
    }

    console.log(fetchAddress);





  response.json().then(function(data){




    function renderData(){
      return `
          ${data.map(data => `
            <ul>
            <img src="${data.artwork_url}"</img>
            <li class="kind">${data.title}</li>
            <li><a href="#" data-value="${data.stream_url}">sound_90.mp3</a></li>
            </ul>
            `).join('')}

              `;

      }


        let markup = `
          <div class="results">
              ${renderData(data)}
          </div>
            `

      document.getElementById("results").innerHTML += markup;


      list.onclick = function(e) {
        e.preventDefault();

        var elm = e.target;
        var audio = document.getElementById('audio');

        var source = document.getElementById('audioSource');
        source.src = elm.getAttribute('data-value');

        audio.load(); //call this to just preload the audio without playing
      };

});
})
});



/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with


// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play


// Sound cloud ID: boatdreamin@gmail.com, pw: test12

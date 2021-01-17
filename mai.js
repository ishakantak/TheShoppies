//calls when page loads, set up event handlers
function pageLoad() {
  alert("Hello");
  document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
      alert('Enter is pressed!');
      getMovies();
  }
});
}

function getMovies() {
  var xhr = new XMLHttpRequest();
  var my_url = "http://www.omdbapi.com/?s=";
  var apikey = "ec497065";
  var movie = document.getElementsByClassName("movieType").value;
  xhr.open('GET', my_url + movie + '&apikey=' + apikey, true);

  // xhr.onload = function(){
  //   if (this.status == 200){
  //     var omdbFilter = JSON.parse(this.response);
  //     var movieFilter = omdbFilter.Search;
  //     console.log(movieFilter); //check
  //     var movieFilterList = movieFilter.filter(function (entry)
  //     {
  //       return entry.Type === 'movie';
  //     });
  //     console.log(movieFilterList);
  //     //end of this.status == 200
  //   }
  //   //end of xhr.onload()
  // }

  xhr.responseType = 'json';
  xhr.onload = () => {
    // var omdbFilter = JSON.parse(this.response);
    // var movieFilter = omdbFilter.Search;
    // console.log(movieFilter); //check
    console.log(xhr.response);
  };
  xhr.send();
}

window.onload = pageLoad;

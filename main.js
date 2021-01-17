const root = document.getElementById('resultBoxGroup');
const container = document.createElement('div');
container.setAttribute('class', 'container');
container.setAttribute('id','eraser');
root.appendChild(container);



//calls when page loads, set up event handlers
function pageLoad() {

  document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
      // alert('Enter is pressed!');
      getMovies();
  }

});
}

function getMovies() {
  var xhr = new XMLHttpRequest();
  let movieName = (document.getElementById("movieType").value);

  if (movieName.length === 0) {
    alert("Please enter a movie title");
  }

  xhr.open("GET", "https://www.omdbapi.com/?s=" + movieName + "&apikey=ec497065", true);

  xhr.onload = function () {
    if (this.status == 200){

      // alert("HI");
      var omdbFilter = JSON.parse(this.response);

      var movieFilter = omdbFilter.Search;
      console.log(movieFilter); //check

      var movieFilterList = (movieFilter || []).filter(function (entry)
      {
        return entry.Type === 'movie';
      });
      console.log(movieFilterList);

      movieFilterList.forEach((item, i) => {
        console.log(item.Title);

        //nomination in search result
        const searchresult_list = document.createElement('div')
        searchresult_list.setAttribute('class', 'list')
        //search content: movie Title and movie Year
        const search_content = document.createElement('div')
        search_content.textContent = item.Title + " (" + item.Year + ")"

        // create nomination button
        const nomination_button = document.createElement('button')
        nomination_button.setAttribute("class", "notificationButton")
        nomination_button.setAttribute('id', i)
        nomination_button.innerHTML = "Nominate";
        nomination_button.onclick = myFunction;

      if(document.getElementById("nominations").childElementCount == 0) {
        var emptyNoti = document.getElementById("emptyNoti")
        emptyNoti.setAttribute("style", "display: flex; align-items: center;");
      }

      if (true) {

      }


        //nomination button clicked section
        function myFunction() {

          if(emptyNoti != null ) {
            emptyNoti.setAttribute("style", "display: none;");
          }



          nomination_button.disabled = true;
          var copy = searchresult_list.cloneNode(true);
          // Append the cloned searchresult_list to nomination_List with id="nominations"
          var nomination_List = document.getElementById("nominations").appendChild(copy);
          nomination_List.removeChild(nomination_List.lastChild);
          //create remove nomination button next to the notification_List results
          // create nomination button
          const nominationremoved_button = document.createElement('button')
          nominationremoved_button.setAttribute("class", "notificationButton")
          nominationremoved_button.innerHTML = "Remove";
          // nominationremoved_button.setAttribute("style", "border: none");
          nominationremoved_button.onclick = removeNomination;


          //remove nomination function
          function removeNomination() {

            nomination_List.remove();
            nomination_button.disabled = false;

            if (document.getElementById("nominations").childElementCount < 5) {
              document.getElementById("successNoti").setAttribute("style", "display: none;")
              document.getElementById("cancelNoti").setAttribute("style", "display: none;")
            }
          }

          nomination_List.appendChild(nominationremoved_button);
            if(document.getElementById("nominations").childElementCount >= 5){
              console.log(nomination_List.lastChild);
              document.getElementById("successNoti").setAttribute("style", "display: flex; align-items: center;")
            }
            if(document.getElementById("nominations").childElementCount > 5){
              nomination_List.remove();
              document.getElementById("successNoti").setAttribute("style", "display: none; align-items: center;")
              document.getElementById("cancelNoti").setAttribute("style", "display: flex; align-items: center;")
            }

      //end of myFunction()
      }
      //end of for each loop
      container.appendChild(searchresult_list);
      searchresult_list.append(search_content, nomination_button);
});


       //end of this.status == 200
  }
  //end of xhr.onload()
}
  xhr.send();

  let Parent = document.getElementById("eraser");
  while (Parent.firstChild) {
    Parent.removeChild(Parent.firstChild);
  }
  /*change result for*/
  var result = document.getElementById('change');
  result.innerHTML = "Results for " + '"' + movieName + '"';
}

window.onload = pageLoad;

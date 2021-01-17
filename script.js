//for movie var
var my_url = "http://www.omdbapi.com/?s=";
var apikey = "ec497065";

//result divider
//resultBoxGroup is the beginning of results section
const root = document.getElementById('resultBoxGroup');
const container = document.createElement('div');
container.setAttribute('class', 'container');
container.setAttribute('id','eraser');
root.appendChild(container);

//starting the website
$(document).ready(function(){
  $('movieType').onkeyup = (e) => {
    var userData = e.target.value; //user entered data
    if(e.keyCode === 13)
    {
      var movie = document.getElementsByClassName("movieType").value;
      getMovies(movie);
      event.preventDefault();
    }
  }
});

function getMovies() {
  alert("IT WORKS");
}

// var my_url = "http://www.omdbapi.com/?s=";
// var apikey = "ec497065";
//
// //getting all required elements
// const searchWrapper = document.querySelector(".search-input");
// const inputBox = searchWrapper.querySelector("input");
// const suggBox = searchWrapper.querySelector(".autocom-box");
//
// //get app, which is the root
// const app = document.getElementById('resultBoxGroup');
// //create container, attribute is container
// const container = document.createElement('div');
// container.setAttribute('class', 'container');
// container.setAttribute('id','eraser');
// app.appendChild(container);
//
// $(document).ready(function(){
// //if user presses any key and releases
// inputBox.onkeyup = (e) => {
//   var userData = e.target.value; //user entered data
//   if(e.keyCode == 13)
//   {
//     var movie = document.getElementsByClassName("movieType").value;
//     getMovies(movie);
//     event.preventDefault();
//   }
// }
// });
//
// function getMovies(movie)
// {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', my_url + movie + '&apikey=' + apikey, true);
//   xhr.onload = function()
//   {
//     if (this.status == 200)
//     {
//       var omdbFilter = JSON.parse(this.response)
//
//       var movieFilter = omdbFilter.Search;
//       var movieFilterList = movieFilter.filter(function (entry)
//       {
//         return entry.Type === 'movie';
//       });
//       console.log(movieFilterList);
//
//
//
//       movieFilterList.forEach((item, i) => {
//         console.log(item.Title);
//
//
//       //nomination in search result
//       const searchresult_list = document.createElement('div')
//       searchresult_list.setAttribute('class', 'list')
//       //search content: movie Title and movie Year
//       const search_content = document.createElement('div')
//       search_content.textContent = item.Title + " (" + item.Year + ")"
//
//       //clearing section
//
//       // create nomination button
//       const nomination_button = document.createElement('button')
//       nomination_button.setAttribute("class", "notificationButton")
//       nomination_button.setAttribute('id', i)
//       nomination_button.innerHTML = "Nominate";
//       nomination_button.onclick = myFunction;
//
//
//
//
//
//       //nomination button clicked section
//       function myFunction() {
//         alert("OK");
//         nomination_button.disabled = true;
//         var copy = searchresult_list.cloneNode(true);
//         // Append the cloned searchresult_list to nomination_List with id="nominations"
//         var nomination_List = document.getElementById("nominations").appendChild(copy);
//         nomination_List.removeChild(nomination_List.lastChild);
//         //create remove nomination button next to the notification_List results
//         // create nomination button
//         const nominationremoved_button = document.createElement('button')
//         nominationremoved_button.setAttribute("class", "notificationButton")
//         nominationremoved_button.innerHTML = "Remove";
//         nominationremoved_button.onclick = removeNomination;
//
//         if(emptyNoti != null ) {
//           emptyNoti.setAttribute("style", "display: flex;");
//         }
//
//         //remove nomination function
//         function removeNomination() {
//           alert("Nomination removed");
//           nomination_List.remove();
//           nomination_button.disabled = false;
//           nomination_button.innerHTML = "Nominate";
//         }
//         nomination_List.appendChild(nominationremoved_button);
//         if(document.getElementById("nominations").childElementCount > 5){
//           alert("Nomination is greater than 5");
//         }
//         if(document.getElementById("nominations").childElementCount == 5){
//           alert("You have 5 nominations");
//         }
//
//       //end of myFunction()
//     }
//       //end of foreach function
//       container.appendChild(searchresult_list);
//       searchresult_list.append(search_content, nomination_button);
//
//         });
//       //end of if(400) function
//     }
//     //end of onload() function
//   }
//   //error
//   xhr.onerror = function() {
//     console.log("Error");
//   }
//   //end of xhr (XMLHttpRequest)
//   xhr.send();
// }

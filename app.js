const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector("#movie-box");
const getMovies = async (api) => {
    const response = await fetch(api); // get data from api in await mode(wait untill data not comes)
    const data = await response.json(); // get the json data from response;
    showMovies(data.results);
}
const showMovies = (data) => {
    movieBox.innerHTML=""; // reset the search
    console.log(data);
    data.forEach(element => {
        const box = document.createElement("div"); // created a box
        box.classList.add("box"); // add class name to box class name -> "box";
        box.innerHTML = `
        <img src="${IMGPATH + element.poster_path}" alt=""></img>
        <div class="overlay">
            <div class="title">
                <h2 class="title">${element.original_title}</h2>
                <span>${element.vote_average}</span>
            </div>
            <h3>Overview:</h3>
            <p>${element.overview
            }</p>
        </div>
        `;
        movieBox.appendChild(box);

    });
}

document.querySelector("#search").addEventListener( // search box 
    "keyup", (event) => {
        if (event.target.value != "") {
            getMovies(SEARCHAPI + event.target.value); // get data from sear
        } else {
            getMovies(APIURL);
        }
    }
)
//init call 
getMovies(APIURL);

const name = document.createElement("h3");
name.innerText="❤️ from Harsh";
document.querySelector(".main").after(name);
name.style.textAlign="center";
name.style.backgroundColor="black";
name.style.color="white";


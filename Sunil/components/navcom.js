let navbar = () => {
  return ` <div id="sh_navbar">
  <div id="sh_container1">
  <div>
    <img
      src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.51.89"
      alt=""
    />
  </div>
  <div><a href="./index.html">Home</a></div>
  <div><a href="./shiwam/TV-Shows.html">TV Shows</a></div>
  <div><a href="./somya/movies.html">Movies</a></div>
  <div><a href="">Web Series</a></div>
  <div><a href="">News</a></div>
  <div id="sh_dropDown">
    <img
      id="icon"
      src="https://img.icons8.com/nolan/512/four-squares.png"
      alt=""
    />
    <div>
      <div><a href="https://www.zee5.com/eduauraa">Eduauraa</a></div>
      <div><a href="https://www.zee5.com/premium">Premium</a></div>
      <div><a href="https://www.zee5.com/live-tv">Live-TV</a></div>
      <div><a href="https://www.zee5.com/music-videos">Music</a></div>
      <div>
        <a href="https://www.zee5.com/zee-plex-movies-on-rent">ZEEPLEX</a>
      </div>
      <div><a href="https://www.zee5.com/play5-games">Play</a></div>
      <div><a href="https://www.zee5.com/articles">Articles</a></div>
      <div><a href="https://www.zee5.com/kids">Kids</a></div>
      <div><a href="https://www.zee5.com/videos">Videos</a></div>
      <div>
        <a href="https://www.zee5.com/zeekannada/news">Stories</a>
      </div>
      <div>
        <a href="https://www.zee5.com/tv-shows/tv-channels">Channels</a>
      </div>
    </div>
  </div>
</div>
<div id="sh_container2">
  <input
    type="text"
    id="search"
    placeholder="Search for Movies, Shows etc"
  />
  <button id="login"><a id="loggedin" href="./login.html">LOGIN</a></button>
  <button id="buyplan">
    <a href="">BUY PLAN</a>
  </button>
  <div id="sh_lines">
    <hr />
    <hr />
    <hr />
    <div>
      <div><a href="./index.html">Home</a></div>
      <div><a href="https://www.zee5.com/myaccount/subscription">Buy Plan</a></div>
      <div><a href="./about.html">About Us</a></div>
      <div><a href="https://www.zee5.com/help/?translation=en&country=IN&hextoken=null&platform=desktop_web&user_type=guest&app_version=2.51.89">Help Center</a></div>
      <div><a href="https://www.zee5.com/termsofuse">Terms Of Use</a></div>
      <div><a href="https://www.zee5.com/privacypolicy">Privacy Policy</a></div>
    </div>
  </div>
</div>
</div>`;
};

let id;
let getData = async () => {
  let query = document.getElementById("search").value;
  console.log(query);
  //https://api.themoviedb.org/3/search/movie?api_key=187bd7eac6a993784bcfde66eb195472&query=${query}
  //const url = `https://www.omdbapi.com/?apikey=990f52aa&s=${query}`;

  const url = `https://api.themoviedb.org/3/search/movie?api_key=187bd7eac6a993784bcfde66eb195472&query=${query}`;
  let res = await fetch(url);
  let data = await res.json();
  // console.log(data);
  return data.results;
};

let appendData = (data) => {
  let container = document.getElementById("sh_result");
  container.innerHTML = null;

  if (!data) {
    let div = document.createElement("div");
    let name = document.createElement("h3");
    name.innerText = "No Result Found";
    div.append(name);
    container.append(div);
  }

  data.forEach((el) => {
    let div = document.createElement("div");
    div.style.cursor = "pointer";

    let name = document.createElement("h3");
    name.innerText = el.title;
    name.addEventListener("click", function (e) {
      e.preventDefault();
      click(el);
    });
    div.append(name);
    container.append(div);
  });
};

let main = async () => {
  let data = await getData();
  console.log(data);

  appendData(data);
};

let debouncing = () => {
  if (id) {
    clearTimeout(id);
  }
  setTimeout(function () {
    main();
  }, 2000);
};

// document.getElementById("search").addEventListener("input", debouncing);

let click = (data) => {
  console.log(data);
  localStorage.setItem("Movie", JSON.stringify(data));
  // window.location.href = "details.html";
};

// document.getElementById("sh_lines").addEventListener("click", (e) => {
//   console.log(2);
// });

// let login = localStorage.getItem("login") || false;
// let loggeduesr = JSON.parse(localStorage.getItem("LoggedIn"));
// let logIN = () => {
//   if (login) {
//     document.getElementById(
//       "loggedin"
//     ).innerText = `${loggeduesr[0].name} / LOGOUT`;
//     document.getElementById("login").style.width = "200px";
//   }
// };

// let logout = () => {
//   document.getElementById("login").addEventListener("click", () => {
//     login = false;
//     document.getElementById("loggedin").innerText = "LOGIN";
//     window.location.href = "#";
//   });
// };

export {
  navbar,
  getData,
  appendData,
  main,
  debouncing,
  id,
  // login,
  // logIN,
  // loggeduesr,
  // logout,
};
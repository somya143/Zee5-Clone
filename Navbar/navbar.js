let id;
async function getData() {
  let query = document.getElementById("search").value;
  console.log(query);
  //https://api.themoviedb.org/3/search/movie?api_key=187bd7eac6a993784bcfde66eb195472&query=${query}
  //const url = `https://www.omdbapi.com/?apikey=990f52aa&s=${query}`;

  const url = `https://api.themoviedb.org/3/search/movie?api_key=187bd7eac6a993784bcfde66eb195472&query=${query}`;
  let res = await fetch(url);
  let data = await res.json();
  // console.log(data);
  return data.results;
}

function appendData(data) {
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
}

async function main() {
  let data = await getData();
  console.log(data);

  appendData(data);
}

function debouncing() {
  if (id) {
    clearTimeout(id);
  }
  setTimeout(function () {
    main();
  }, 2000);
}

document.getElementById("search").addEventListener("input", debouncing);

function click(data) {
  console.log(data);
  localStorage.setItem("Movie", JSON.stringify(data));
  // window.location.href = "details.html";
}

document.getElementById("lines").addEventListener("click", (e) => {
  console.log(2);
});

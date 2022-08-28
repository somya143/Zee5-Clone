let array = JSON.parse(localStorage.getItem("news"));

displayNews(array);

function displayNews(array) {
  let box = document.getElementById("kd_show");
  array.forEach(function (el) {
    console.log("el:", el);
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.urlToImage;
    let title = document.createElement("p");
    title.innerText = el.title;
    let author = document.createElement("p");
    author.innerText = `Author: ${el.author}`;
    let description = document.createElement("p");
    description.innerText = el.description;
    let sources = document.createElement("p");
    sources.innerText = `Sources: ${el.source.name}`;
    let url = document.createElement("p");
    url.innerHTML = `For More Information: ${el.url}`;

    div.append(img, title, author, description, sources, url);
    box.append(div);
  });
}

function show() {
  localStorage.clear();
  window.location.href = "./news.html";
}

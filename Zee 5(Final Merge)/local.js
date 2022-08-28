let getData = async () => {
  try {
    let res = await fetch(
      "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=dcfb7e46f19f4785a64dea9422ea2784"
    );
    let data = await res.json();
    console.log(data);
    appendData(data.articles);
  } catch (err) {
    console.log(err);
  }
};
getData();
let array = JSON.parse(localStorage.getItem("news")) || [];
function appendData(data) {
  let container = document.getElementById("kd_mainHeading");
  data.forEach((el) => {
    // console.log('el:', el)
    let div = document.createElement("div");
    div.addEventListener("click", () => {
      array.push(el);
      localStorage.setItem("news", JSON.stringify(array));
      window.location.href = "./show.html";
    });
    let img = document.createElement("img");
    img.src = el.urlToImage;
    let Title = document.createElement("h4");
    Title.innerText = el.title;
    div.append(img, Title);
    container.append(div);
  });
}

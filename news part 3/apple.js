let getData = async () => {
    try {
      let res = await fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2022-08-24&to=2022-08-24&sortBy=popularity&apiKey=dcfb7e46f19f4785a64dea9422ea2784"
      );
      let data = await res.json();
      console.log(data);
      appendData(data.articles);
    } catch (e) {
      console.log(e);
    }
  };
  getData();
  
  function appendData(data) {
    let container = document.getElementById('kd_mainHeading')
    data.forEach((el) => {
      // console.log('el:', el)
      let div = document.createElement('div');
      let img = document.createElement("img");
      img.src = el.urlToImage;
      let Title = document.createElement("h4");
      Title.innerText = el.title;
      div.append(img,Title);
      container.append(div);
  
    });
      
  }
  
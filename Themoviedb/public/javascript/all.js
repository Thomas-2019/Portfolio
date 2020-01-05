(function() {
  "use strict";

  const cardBody = document.getElementById("card_body");
  const api_base_url =
    "https://api.themoviedb.org/3/movie/popular?api_key=e43a6492059a4b298f991f00dfe1bca2&language=zh-TW&page=1";

  const image_base_url = "http://image.tmdb.org/t/p/";
  const backdrop_sizes = ["w300", "w780", "w1280", "original"];
  /*=================modal*/
  const modalTitle = document.querySelector(".modal-title");
  const modalBody = document.querySelector(".modal-body");
  const data = [];

  axios.get(api_base_url).then(function(response) {
    data.push(...response.data.results);
    console.log(data);
    showCardDisplay(data);
    modalShowDisplay(data);
  });
  function showCardDisplay(data) {
    let content = "";
    data.forEach(element => {
      content += `
        <div class="card m-1 " style="width: 18rem;">
          <img src="${image_base_url}${backdrop_sizes[0]}${element.backdrop_path}" class="card-img-top" alt="img">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text text-secondary">${element.release_date}</p>
          </div>
          
          <button type="button" class="btn btn-primary"  data-id="${element.id}"  data-toggle="modal" data-target="#exampleModal">
            read more
          </button>
        </div>

      `;
    });
    cardBody.innerHTML = content;
  }

  function modalShowDisplay(data, id) {
    let modal = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === Number(id)) {
        modalTitle.innerText = data[i].title;

        modal = `
         <img src="${image_base_url}${backdrop_sizes[2]}${data[i].backdrop_path}" class="card-img-top" alt="img">
          <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p class="card-text text-secondary">${data[i].release_date}</p>
            <p class="card-text">${data[i].overview}</p>
          </div>
        `;
      }
    }
    modalBody.innerHTML = modal;
  }

  cardBody.addEventListener("click", function(event) {
    modalShowDisplay(data, event.target.dataset.id);
  });
})();

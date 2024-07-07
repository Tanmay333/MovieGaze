let left_btn = document.getElementsByClassName("fa-chevron-left")[0];
let right_btn = document.getElementsByClassName("fa-chevron-right")[0];
let cards = document.getElementsByClassName("shortcards")[0];

left_btn.addEventListener("click", () => {
  cards.scrollLeft -= 140;
});

right_btn.addEventListener("click", () => {
  cards.scrollLeft += 140;
});

let json_url = "movie.json";
fetch(json_url)
  .then((Responce) => Responce.json())
  .then((data) => {
    data.forEach((ele, i) => {
      let { name, imdb, date, sposter, bposter, genre, url } = ele;
      let card = document.createElement("a");
      card.classList.add("card");
      card.href = url;
      card.innerHTML = `
      
            <img src="${sposter}" alt="${name}" class="poster" />
            <div class="rec-card">
              <img src="${bposter}" alt="${name}" />
              <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                  <p>${genre},${date}</p>
                  <h3><span>IMDb</span><i class="fa-solid fa-star"> ${imdb}</i></h3>
                </div>
              </div>
            </div>
      `;
      cards.appendChild(card);
    });
  });

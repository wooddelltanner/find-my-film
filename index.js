const searchBar = document.getElementById(`search-bar`)
const submitBtn = document.getElementById(`submit-btn`)
const filmDisplay = document.getElementById('film-display-area')

submitBtn.addEventListener(`click`, searchFilm)

async function searchFilm(e) {
    e.preventDefault()

    const resolution = await fetch (`http://www.omdbapi.com/?apikey=1eeae7c0&s=${searchBar.value}`)
    const data = await resolution.json()

    let filmHtml = ``

    for (let film of data.Search) {
        filmHtml += `
            <div class=" flex film-card">
                <img id="movie-poster" src="${film.Poster}">
                <div class="flex vertical vertical-center gap">
                    <div class="flex film-title">
                        <h4>${film.Title}</h4>
                        <div class="flex">
                            <img class="contain" src="./images/star-rating.png">
                            <p class="small-text">8.1</p>
                        </div>
                    </div>
                    <div class="flex gap center">
                        <p class="small-text">117 min</p>
                        <p class="small-text">Action, Drama, Sci-fi</p>
                        <div class="flex small-gap center hover">
                            <img class="watchlist" src="./images/add-icon.png">
                            <p class="small-text">Watchlist</p>
                        </div>
                    </div>
                    <p class="film-desc">A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.</p>
                </div>
            </div>`
    }
    filmDisplay.innerHTML = filmHtml
    console.log(data)
}

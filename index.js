const searchBar = document.getElementById(`search-bar`)
const submitBtn = document.getElementById(`submit-btn`)
const filmDisplay = document.getElementById('film-display-area')
const addToWatchlist = document.getElementById('add-to-watchlist')

submitBtn.addEventListener(`click`, searchFilm)

filmDisplay.innerHTML = `
    <div class="flex vertical center vertical-center">
        <img src="./images/film-icon.png">
        <h2>Start Exploring</h2>
    </div>`

async function searchFilm(e) {
    e.preventDefault()

    const resolution = await fetch (`https://www.omdbapi.com/?apikey=1eeae7c0&s=${searchBar.value}`)
    const data = await resolution.json()

    let filmHtml = ``

    for (let film of data.Search) {
        const detailsRes = await fetch (`https://www.omdbapi.com/?apikey=1eeae7c0&i=${film.imdbID}`)
        const details = await detailsRes.json()
        let filmPosterHtml 
        
        if (film.Poster !== 'N/A') {
            filmPosterHtml = `<img class="movie-poster" src="${film.Poster}" onerror = "this.onerror = null; this.src = '/images/poster-placeholder.png'; this.classList.add('border')">`
        } else {
            filmPosterHtml = `<img class="movie-poster border" src="./images/poster-placeholder.png">`
        }

        filmHtml += `
            <div class=" flex film-card">
                ${filmPosterHtml}
                <div class="flex vertical vertical-center gap">
                    <div class="flex film-title">
                        <h4>${film.Title}</h4>
                        <div class="flex">
                            <img class="contain" src="./images/star-rating.png">
                            <p class="small-text">${details.imdbRating}</p>
                        </div>
                    </div>
                    <div class="flex gap center">
                        <p class="small-text">${details.Runtime}</p>
                        <p class="small-text">${details.Genre}</p>
                        <div id="add-to-watchlist" class="flex small-gap center hover">
                            <img class="watchlist" src="./images/add-icon.png">
                            <p class="small-text">Watchlist</p>
                        </div>
                    </div>
                    <p class="film-desc">${details.Plot}</p>
                </div>
            </div>`
    }
    filmDisplay.innerHTML = filmHtml
}



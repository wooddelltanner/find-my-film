const searchBar = document.getElementById(`search-bar`)
const submitBtn = document.getElementById(`submit-btn`)

submitBtn.addEventListener(`click`, searchFilm)

async function searchFilm(e) {
    e.preventDefault()

    const resolution = await fetch (`http://www.omdbapi.com/?apikey=1eeae7c0&s=${searchBar.value}`)
    const data = await resolution.json()
    console.log(data.Search)
}

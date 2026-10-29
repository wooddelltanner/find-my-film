let savedText = localStorage.getItem("watchlist")
let watchlist = []

if (savedText !== null) {
    watchlist = JSON.parse(savedText)
}

const submitBtn = document.getElementById(`submit-btn`)
const filmDisplay = document.getElementById('film-display-area')

submitBtn.addEventListener('click', searchWatchlist)

filmDisplay.innerHTML = `
    <div class="flex center empty vertical gap">
        <h2>Your watchlist is looking a little empty...</h2>
        <div class="flex gap">
            <img src="./images/add-icon.png">
            <h3>Let's add some movies!</h3>
        </div>
    </div>`

function searchWatchlist(e) {
    e.preventDefault()

}

console.log(watchlist)
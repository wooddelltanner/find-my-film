const submitBtn = document.getElementById(`submit-btn`)

submitBtn.addEventListener('click', searchWatchlist)

function searchWatchlist(e) {
    e.preventDefault()

    console.log('Clicked!')
}
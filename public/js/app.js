const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((forcastData) => {
            if (forcastData.error) {
                messageOne.textContent = forcastData.error
            } else {
                messageOne.textContent = forcastData.forecast
            }
        })
    })
})
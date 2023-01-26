document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest() {
    const name = document.querySelector('input').value
    try {
        const response = await fetch(`https://shy-tan-elk-robe.cyclic.app/api/${name}`)
        const data = await response.json()

        document.querySelector('h3').innerText = data.occupation
    } catch(error) {
        console.log(error)
    }
}
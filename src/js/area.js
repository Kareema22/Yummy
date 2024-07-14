const areas = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    try {
        const data = await fetch(url, { method: 'GET' })
        const response = await data.json()

        return show(response.meals)
    } catch (error) {
        console.log(error)
    }
}

function show(data) {
    let html =
        '<div class="container grid gap-4 grid-cols-1 md:grid-cols-4 py-10">'
    for (let i = 0; i < data.length; i++) {
        html += `<div onclick="" class="area rounded-2 text-center cursor-pointer text-white">
        <i class="text-8xl fa-solid fa-house-laptop fa-4x"></i>
        <h3 class="text-3xl font-bold">${data[i].strArea}</h3></div>`
    }
    html += '</div>'
    return html
}

export default areas

const ingredients = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
    try {
        const data = await fetch(url, { method: "GET" });
        const response = await data.json()
        return show(response.meals.slice(0, 20))
    }
    catch (error) {
        console.log(error)
    }
}

function show(data) {
    let html = '<div class="container grid gap-4 grid-cols-1 md:grid-cols-4 py-10">'
    for (let i = 0; i < data.length; i++) {
        html += `<div onclick="" class="ingredient rounded-2 text-center cursor-pointer text-white">
        <i class="text-8xl fa-solid fa-drumstick-bite fa-4x"></i>
        <h3 class="text-3xl font-bold">${data[i].strIngredient}</h3>
        <p>${data[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
        </div>`
    }
    html += '</div>'
    return html
}

export default ingredients
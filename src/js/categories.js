const categories = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`
    try {
        const data = await fetch(url, { method: 'GET' })
        const response = await data.json()
        return show(response.categories)
    } catch (error) {
        console.log(error)
    }
}

function show(data) {
    let html =
        '<div class="container grid gap-4 grid-cols-1 md:grid-cols-4 py-10">'
    for (let i = 0; i < data.length; i++) {
        html += `
        <div class="category relative overflow-hidden rounded-lg cursor-pointer">
            <img class="w-full" src="${
                data[i].strCategoryThumb
            }" alt="" srcset="">
            <div class="meal-layer absolute  bg-[#f9f6f6ca] text-center text-black p-2">
                <h3 class="text-4xl">${data[i].strCategory}</h3>
                <p>${data[i].strCategoryDescription
                    .split(' ')
                    .slice(0, 20)
                    .join(' ')}</p>  
            </div>
        </div>
        `
    }
    html += '</div>'
    return html
}

export default categories

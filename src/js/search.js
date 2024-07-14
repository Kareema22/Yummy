const addInput = () => {
    return `
    <div class="search grid gap-4 grid-cols-1 md:grid-cols-3 py-10">
      <div class="">
           <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text" placeholder="Search By Name" id="mealByName">
     </div>
     <div class="">
          <input maxlength="1"class=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border
          border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500
          focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="Search By First Letter" id="mealByFirstLetter">
     </div>
   </div>
`
}

const mealByName = async (text = '') => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    try {
        const data = await fetch(url, { method: 'GET' })
        const response = await data.json()
        return show(response.meals.slice(0, 20))
    } catch (error) {
        console.log(error)
    }
}

const mealByFirstLetter = async (text = 'a') => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`
    try {
        const data = await fetch(url, { method: 'GET' })
        const response = await data.json()
        return show(response.meals.slice(0, 20))
    } catch (error) {
        console.log(error)
    }
}

const mealByCategory = async (text = '') => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${text}`
    try {
        const data = await fetch(url, { method: 'GET' })
        const response = await data.json()
        return show(response.meals.slice(0, 20))
    } catch (error) {
        console.log(error)
    }
}

const mealByArea = async (text = '') => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${text}`
    try {
        const data = await fetch(url, { method: 'GET' })
        const response = await data.json()
        return show(response.meals.slice(0, 20))
    } catch (error) {
        console.log(error)
    }
}

const mealByIngredient = async (text = '') => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`
    try {
        const data = await fetch(url, { method: 'GET' })
        const response = await data.json()
        return show(response.meals.slice(0, 20))
    } catch (error) {
        console.log(error)
    }
}

const mealById = async (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    try {
        const data = await fetch(url, { method: 'GET' })
        const response = await data.json()
        return mealDetails(response.meals.at(0))
    } catch (error) {
        console.log(error)
    }
}

function show(data) {
    let html =
        '<div class="container grid gap-4 grid-cols-1 md:grid-cols-4 py-10">'
    for (let i = 0; i < data.length; i++) {
        html += `
        <div class="meal relative overflow-hidden rounded-lg cursor-pointer" data-value=${data[i].idMeal}>
            <img class="w-full" src="${data[i].strMealThumb}" alt="" srcset="">

            <div class="meal-layer absolute  bg-[#f9f6f6ca] flex items-center justify-center text-black p-2">
                <h3 class="text-4xl">${data[i].strMeal}</h3>
            </div>
        </div>
        `
    }
    html += '</div>'
    return html
}

function mealDetails(meal) {
    let ingredientsList = ``

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredientsList += `<li class="rounded p-1 mb-4 border-[1px] border-[transparent] text-[#055160] bg-[#cff4fc] border-[#b6effb]" role="alert">${
                meal[`strMeasure${i}`]
            } ${meal[`strIngredient${i}`]}</li>`
        }
    }

    const tags = meal.strTags?.split(',') ?? []
    let tagsList = tags
        .map(
            (tag) =>
                `<li class="rounded p-1 mb-4 border-[1px] border-[transparent] text-[#842029] bg-[#f8d7da] border-[#f5c2c7]" role="alert">${tag}</li>`
        )
        .join('')

    return /*HTML*/ ` <div
        class="container grid grid-cols-1 gap-2 md:grid-cols-2 py-10 text-white"
    >
        <div class="">
            <img class="rounded-lg" src="${meal.strMealThumb}" alt="" />
            <h2 class="font-extrabold">${meal.strMeal}</h2>
        </div>
        <div class="">
            <h2 class="font-extrabold">Instructions</h2>
            <p>${meal.strInstructions}</p>
            <h3><span class="font-extrabold">Area : </span>${meal.strArea}</h3>
            <h3>
                <span class="font-extrabold">Category : </span
                >${meal.strCategory}
            </h3>
            <h3 class="font-extrabold">Recipes:</h3>
            <ul class="list-unstyled flex gap-3 flex-wrap">
                ${ingredientsList}
            </ul>

            <h3 class="font-extrabold">Tags :</h3>
            <ul class="list-unstyled flex gap-3 flex-wrap">
                ${tagsList}
            </ul>

            <a
                target="_blank"
                href="${meal.strSource}"
                class="bg-green-800 hover:bg-green-900 text-white font-semibold py-2 px-4  rounded shadow"
                >Source</a
            >
            <a
                target="_blank"
                href="${meal.strYoutube}"
                class="bg-red-800 hover:bg-red-900 text-white font-semibold py-2 px-4   rounded shadow"
                >Youtube</a
            >
        </div>
        <div></div>
    </div>`
}

export default {
    addInput,
    mealByName,
    mealByFirstLetter,
    mealByCategory,
    mealByArea,
    mealByIngredient,
    mealById,
}

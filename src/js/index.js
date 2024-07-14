import areas from './area.js'
import categories from './categories.js'
import contactUs from './contact-us.js'
import ingredients from './ingredient.js'
import search from './search.js'

$(document).ready(() => {
    search.mealByName('').then((data) => {
        $('.loading-screen').fadeOut(500)
        $('body').css('overflow', 'visible')
        mealList(data)
    })
    $('.loading-screen').fadeOut(500)
    closeMenu()
})

$('#close').click(closeMenu)
$('#open').click(openMenu)

$('#search').click(() => {
    $('#searchInput').html('')
    $('#content').html('')

    closeMenu()
    const inputs = search.addInput()
    $('#searchInput').html(inputs)
    bindSearchFun()
})

$('#categories').click(() => {
    $('#content').html('')
    $('#searchInput').html('')

    $('.inner-loading-screen').fadeIn(300)
    closeMenu()
    categories().then((data) => {
        $('#content').html(data)
        bindCategoryHover()
        bindCategoryClick()
    })
    $('.inner-loading-screen').fadeOut(300)
})

$('#area').click(() => {
    $('#content').html('')
    $('#searchInput').html('')

    $('.inner-loading-screen').fadeIn(300)
    closeMenu()
    areas().then((data) => {
        $('#content').html(data)
        bindAreaClick()
    })
    $('.inner-loading-screen').fadeOut(300)
})

$('#ingredients').click(() => {
    $('#content').html('')
    $('#searchInput').html('')

    $('.inner-loading-screen').fadeIn(300)
    closeMenu()
    ingredients().then((data) => {
        $('#content').html(data)
        bindIngredientClick()
    })
    $('.inner-loading-screen').fadeOut(300)
})

$('#contactUs').click(() => {
    $('#content').html('')
    $('#searchInput').html('')

    closeMenu()
    const inputs = contactUs.addInput()
    $('#content').html(inputs)
    bindContactUsValidationFunctions()
})

function closeMenu() {
    $('#menu').hide(() => {
        let boxWidth = $('#menu').outerWidth()
        $('#menu').animate(
            {
                left: -boxWidth,
            },
            500
        )
    })

    for (let i = 0; i < 5; i++) {
        $('.bar-links li')
            .eq(i)
            .animate(
                {
                    top: 300,
                },
                (i + 5) * 100
            )
    }

    $('#close').hide()
    $('#open').show()
}

function openMenu() {
    $('#menu').show(() => {
        $('#menu').animate(
            {
                left: 0,
            },
            500
        )
    })

    for (let i = 0; i < 5; i++) {
        $('.bar-links li')
            .eq(i)
            .animate(
                {
                    top: 0,
                },
                (i + 5) * 100
            )
    }

    $('#close').show()
    $('#open').hide()
}

function bindCategoryHover() {
    $('.category').hover(
        function () {
            $(this).children('.meal-layer').css('background-color', '').animate(
                {
                    top: 0,
                    height: '100%',
                    width: '100%',
                },
                500
            )
        },
        function () {
            $(this).children('.meal-layer').animate(
                {
                    top: '100%',
                },
                500
            )
        }
    )
}

function bindCategoryClick() {
    $('.category').click(function () {
        const category = $(this).children('.meal-layer').children('h3').html()
        $('#content').html('')
        $('.inner-loading-screen').fadeIn(300)
        closeMenu()
        search.mealByCategory(category).then(mealList)
        $('.inner-loading-screen').fadeOut(300)
    })
}

function bindAreaClick() {
    $('.area').click(function () {
        const area = $(this).children('h3').html()
        $('#content').html('')
        $('.inner-loading-screen').fadeIn(300)
        closeMenu()
        search.mealByArea(area).then(mealList)
        $('.inner-loading-screen').fadeOut(300)
    })
}

function bindIngredientClick() {
    $('.ingredient').click(function () {
        const ingredient = $(this).children('h3').html()
        $('#content').html('')
        $('.inner-loading-screen').fadeIn(300)
        closeMenu()
        search.mealByIngredient(ingredient).then(mealList)
        $('.inner-loading-screen').fadeOut(300)
    })
}

function bindMealHover() {
    $('.meal').hover(
        function () {
            $(this).children('.meal-layer').css('background-color', '').animate(
                {
                    top: 0,
                    height: '100%',
                    width: '100%',
                },
                500
            )
        },
        function () {
            $(this).children('.meal-layer').animate(
                {
                    top: '100%',
                },
                500
            )
        }
    )
}

function bindMealClick() {
    $('.meal').click(function () {
        const id = $(this).data('value')
        $('#content').html('')
        $('.inner-loading-screen').fadeIn(300)
        closeMenu()
        search.mealById(id).then(mealDetails)
        $('.inner-loading-screen').fadeOut(300)
    })
}

function bindSearchFun() {
    $('#mealByFirstLetter').bind('keyup', function () {
        let node = $(this)
        $('#content').html('')

        $('.inner-loading-screen').fadeIn(300)
        closeMenu()
        search.mealByFirstLetter(node.val()).then(mealList)
        $('.inner-loading-screen').fadeOut(300)
    })

    $('#mealByName').bind('keyup', function () {
        $('#content').html('')

        let node = $(this)
        let val = node.val()
        $('.inner-loading-screen').fadeIn(300)
        closeMenu()
        search.mealByName(val).then(mealList)
        $('.inner-loading-screen').fadeOut(300)
    })
}

function mealList(data) {
    $('#content').html(data)
    bindMealHover()
    bindMealClick()
}

function mealDetails(data) {
    $('#searchInput').html('')
    $('#content').append(data)
}

function bindContactUsValidationFunctions() {
    let validName = false,
        validEmail = false,
        validPhone = false,
        validAge = false,
        validPassword = false,
        validRepass = false

    $('#submitName').bind('keyup', function () {
        const value = $(this).val().trim()
        if (!contactUs.nameValidation(value)) {
            $('#submitNameValidation')
                .show()
                .html('Special characters and numbers not allowed')
            validName = false
        } else {
            $('#submitNameValidation').hide().html('')
            validName = true
        }

        toggleSubmit(
            validName,
            validEmail,
            validPhone,
            validAge,
            validPassword,
            validRepass
        )
    })

    $('#submitEmail').bind('keyup', function () {
        const value = $(this).val().trim()
        if (!contactUs.emailValidation(value)) {
            $('#submitEmailValidation')
                .show()
                .html('Email not valid *exemple@yyy.zzz')
            validEmail = false
        } else {
            $('#submitEmailValidation').hide().html('')
            validEmail = true
        }

        toggleSubmit(
            validName,
            validEmail,
            validPhone,
            validAge,
            validPassword,
            validRepass
        )
    })

    $('#submitPhone').bind('keyup', function () {
        const value = $(this).val().trim()
        if (!contactUs.phoneValidation(value)) {
            $('#submitPhoneValidation').show().html('Enter valid Phone Number')
            validPhone = false
        } else {
            $('#submitPhoneValidation').hide().html('')
            validPhone = true
        }

        toggleSubmit(
            validName,
            validEmail,
            validPhone,
            validAge,
            validPassword,
            validRepass
        )
    })

    $('#submitAge').bind('keyup', function () {
        const value = $(this).val().trim()
        if (!contactUs.ageValidation(value)) {
            $('#submitAgeValidation').show().html('Enter valid age')
            validAg = false
        } else {
            $('#submitAgeValidation').hide().html('')
            validAge = true
        }

        toggleSubmit(
            validName,
            validEmail,
            validPhone,
            validAge,
            validPassword,
            validRepass
        )
    })

    $('#submitPassword').bind('keyup', function () {
        const value = $(this).val().trim()
        if (!contactUs.passwordValidation(value)) {
            $('#submitPasswordValidation')
                .show()
                .html(
                    'Enter valid password *Minimum eight characters, at least one letter and one number:*'
                )
            validPassword = false
        } else {
            $('#submitPasswordValidation').hide().html('')
            validPassword = true
        }

        toggleSubmit(
            validName,
            validEmail,
            validPhone,
            validAge,
            validPassword,
            validRepass
        )
    })

    $('#submitRePassword').bind('keyup', function () {
        const password = $('#submitPassword').val()
        const value = $(this).val().trim()
        if (!contactUs.rePasswordValidation(password, value)) {
            $('#submitRePasswordValidation')
                .show()
                .html('Enter valid repassword')
            validRepass = false
        } else {
            $('#submitRePasswordValidation').hide().html('')
            validRepass = true
        }

        toggleSubmit(
            validName,
            validEmail,
            validPhone,
            validAge,
            validPassword,
            validRepass
        )
    })

    $('#submit').click(() => alert('Submitted'))
}

function toggleSubmit(
    validName,
    validEmail,
    validPhone,
    validAge,
    validPassword,
    validRepass
) {
    if (
        validName &&
        validEmail &&
        validPhone &&
        validAge &&
        validPassword &&
        validRepass
    ) {
        $('#submit').removeAttr('disabled')
    } else {
        $('#submit').attr('disabled', 'disabled')
    }
}

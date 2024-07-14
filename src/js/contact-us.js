const addInput = () => {
    return /*HTML*/ `
        <div class="contact-us py-10">
        <div class="top-[50%] grid gap-4 grid-cols-1 md:grid-cols-2 pt-56 pr-20">
        <div class="">
        <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            placeholder="Enter Your Name"
            id="submitName"
        />
        <div id="submitNameValidation" class="mt-2 hidden rounded p-1 mb-4 border-[1px] border-[transparent] text-[#842029] bg-[#f8d7da] border-[#f5c2c7]" role="alert"></div>
    </div>
    <div class="">
        <input
            class=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            placeholder="Enter Your Email"
            id="submitEmail"
        />
        <div id="submitEmailValidation" class="mt-2 hidden rounded p-1 mb-4 border-[1px] border-[transparent] text-[#842029] bg-[#f8d7da] border-[#f5c2c7]" role="alert"></div>

    </div>
    <div class="">
        <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            placeholder="Enter Your Phone"
            id="submitPhone"
        />
        <div id="submitPhoneValidation" class="mt-2 hidden rounded p-1 mb-4 border-[1px] border-[transparent] text-[#842029] bg-[#f8d7da] border-[#f5c2c7]" role="alert"></div>
    </div>
    <div class="">
        <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="number"
            placeholder="Enter Your Age"
            id="submitAge"
        />
        <div id="submitAgeValidation" class="mt-2 hidden rounded p-1 mb-4 border-[1px] border-[transparent] text-[#842029] bg-[#f8d7da] border-[#f5c2c7]" role="alert"></div>
    </div>
    <div class="">
        <input
            class=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            placeholder="Enter Your Password"
            id="submitPassword"
        />
        <div id="submitPasswordValidation" class="mt-2 hidden rounded p-1 mb-4 border-[1px] border-[transparent] text-[#842029] bg-[#f8d7da] border-[#f5c2c7]" role="alert"></div>
    </div>
    <div class="">
        <input
            class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            type="text"
            placeholder="Repassword"
            id="submitRePassword"
        />
        <div id="submitRePasswordValidation" class="mt-2 hidden rounded p-1 mb-4 border-[1px] border-[transparent] text-[#842029] bg-[#f8d7da] border-[#f5c2c7]" role="alert"></div>
    </div>
</div>
<div class="items-center justify-center align-middle flex py-10">
<button id="submit"
disabled
class="bg-red-800 hover:bg-red-900 text-white font-semibold py-2 px-4 rounded shadow"
>Submit</button
> </div>
</div>
    `
}

export default {
    addInput,
    nameValidation,
    emailValidation,
    phoneValidation,
    ageValidation,
    passwordValidation,
    rePasswordValidation,
}

function nameValidation(value) {
    return /^[a-zA-Z ]+$/.test(value)
}

function emailValidation(value) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
    )
}
function phoneValidation(value) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        value
    )
}

function ageValidation(value) {
    return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(value)
}

function passwordValidation(value) {
    return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(value)
}

function rePasswordValidation(password, rePassword) {
    return password === rePassword
}

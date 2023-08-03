let btn = document.getElementById('btn')
let birthdayEl = document.getElementById("birth-date")
let resultEl = document.getElementById("result")

document.getElementById("btn").addEventListener('click', calculateAge)

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "")
        alert("PLEASE ENTER YOUR BIRTH DATE")
    else {
        const age = getAge(birthdayValue)
        resultEl.innerText = `you are ${age} ${age > 1 ? "yrs" : "yr"} old`
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date()
    const birthdayDate = new Date(birthdayValue)

    let age = currentDate.getFullYear() - birthdayDate.getFullYear()
    let month = currentDate.getMonth() - birthdayDate.getMonth()


    if ( month < 0 || month === 0 &&  currentDate.getDate() <  birthdayDate.getDate()  ){
    age -= 1}

    else{
    age -= 0}

    return age

}
document.getElementById("btn").addEventListener('click', calculateAge)
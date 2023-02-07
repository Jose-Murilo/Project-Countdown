const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const seconds = document.querySelector('.seconds')
const bntTime = document.querySelector('.bntTime')

setInterval(() => {
    const date = new Date
    const timeDays = date.getDate()
    const timeHours = date.getHours()
    const timeMinutes = date.getMinutes()
    const timeSeconds = date.getSeconds()

    day.innerHTML = `${String(timeDays).padStart(2, 0)} :`
    hour.innerHTML = `${String(timeHours).padStart(2, 0)} :`
    minute.innerHTML = `${String(timeMinutes).padStart(2, 0)} :`
    seconds.innerHTML = `${String(timeSeconds).padStart(2, 0)}`
}, 1000)

bntTime.addEventListener('click', () => {
    alert("Cadastrou!")
})
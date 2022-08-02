/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const num = prompt('Enter a number: ')
inputEl.textContent = num

function MeterFeet(){
    let meterTofeet = num * 3.281
    let feetTometer = num / 3.281
    lengthEl.textContent = `${num} meters = ${meterTofeet.toFixed(3)} feet / ${num} feet = ${feetTometer.toFixed(3)} meters`
}

function LiterGallon(){
    let literTogallon = num * 0.264
    let gallonToliter = num / 0.264
    volumeEl.textContent = `${num} liters = ${literTogallon.toFixed(3)} gallons / ${num} gallons = ${gallonToliter.toFixed(3)} liters`
}

function KgPound(){
    let kgTopound = num * 2.204
    let poundTokg = num / 2.204
    massEl.textContent = `${num} kilograms = ${kgTopound.toFixed(3)} pounds / ${num} pounds = ${poundTokg.toFixed(3)} kilograms`
}

function conversions(){
    MeterFeet()
    LiterGallon()
    KgPound()
}

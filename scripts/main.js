import { fetch437430, fetch437432, fetch438011, fetch438014, fetch438815 } from "./fetchData.js"

const displayFetch1 = async () => {
    const data = await fetch438815()
    render438815(data)
}

const displayFetch2 = async () => {
    const data = await fetch438011()
    render438011(data)
}

const displayFetch3 = async () => {
    const data = await fetch438014()
    render438014(data)
}

const displayFetch4 = async () => {
    const data = await fetch437430()
    render437430(data)
}

const displayFetch5 = async () => {
    const data = await fetch437432()
    render437432(data)
}

const render438815 = (response) => {
    const html = `
    <div>
        <h2>${response.title}</h2>
        <img src="${response.primaryImageSmall}">
    </div>
    `
    document.querySelector('.renderFirst').innerHTML = html
}

const render438011 = (response) => {
    const html = `
    <div>
        <h2>${response.title}</h2>
        <img src="${response.primaryImageSmall}">
    </div>
    `
    document.querySelector('.renderSecond').innerHTML = html
}

const render438014 = (response) => {
    const html = `
    <div>
        <h2>${response.title}</h2>
        <img src="${response.primaryImageSmall}">
    </div>
    `
    document.querySelector('.renderThird').innerHTML = html
}

const render437430 = (response) => {
    const html = `
    <div>
        <h2>${response.title}</h2>
        <img src="${response.primaryImageSmall}">
    </div>
    `
    document.querySelector('.renderFourth').innerHTML = html
}

const render437432 = (response) => {
    const html = `
    <div>
        <h2>${response.title}</h2>
        <img src="${response.primaryImageSmall}">
    </div>
    `
    document.querySelector('.renderFifth').innerHTML = html
}

const callAll = async () => {
    await Promise.all([displayFetch1(), displayFetch2(), displayFetch3(), displayFetch4(),displayFetch5()])
}

const renderToApp = () => {
    callAll()
    let html = `<div class="renderFirst"></div>`
    html += `<div class="renderSecond"></div>`
    html += `<div class="renderThird"></div>`
    html += `<div class="renderFourth"></div>`
    html += `<div class="renderFifth"></div>`

    document.querySelector(`.app`).innerHTML = html
}

renderToApp()
const planItem = document.querySelectorAll('.item-path')
const cellAddress = document.querySelector('#address')
const cellFloors = document.querySelector('#floors')
const cellFreeFlat = document.querySelector('#freeFlat')
const cellSoldFlat = document.querySelector('#soldFlat')
const cellActionFlat = document.querySelector('#actionFlat')

const showInformation = (cell, dataAttr) => planItem.forEach(path => {
    path.addEventListener('mouseover', () => {
        cell.innerText = path.getAttribute(dataAttr)
    })

    const buildFreeFlats = path.getAttribute('data-free-flats')

    buildFreeFlats === "0" ? path.classList.add('sold') : null

    if (path.classList.contains('sold')) {
        const buildLink = path.closest('.item-link')
        buildLink.addEventListener('click', (event) => {
            event.preventDefault()
        })
    }

})

showInformation(cellAddress, 'data-adress')
showInformation(cellFloors, 'data-floors')
showInformation(cellFreeFlat, 'data-free-flats')


if (document.querySelector('.build-item-page')) {
    showInformation(cellSoldFlat, 'data-sold-flats')
    showInformation(cellActionFlat, 'data-action-flats')
}

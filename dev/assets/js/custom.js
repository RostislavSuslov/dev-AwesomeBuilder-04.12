const planItem = document.querySelectorAll('.item-path')
const cellAddress = document.querySelector('#address')
const cellFloors = document.querySelector('#floors')
const cellFreeFlat = document.querySelector('#freeFlat')
const cellSoldFlat = document.querySelector('#soldFlat')
const cellActionFlat = document.querySelector('#actionFlat')
/*
planItem.forEach(path => {

    path.addEventListener('mouseover',()=> {
		const thisAddress = path.getAttribute('data-adress')
		const thisFloors = path.getAttribute('data-floors')
		const thisFreeFlats = path.getAttribute('data-free-flats')
		const thisSoldFlats = path.getAttribute('data-sold-flats')


		cellAddress.innerText = thisAddress
		cellFloors.innerText = thisFloors
		cellFreeFlat.innerText = thisFreeFlats
		cellSoldFlat.innerText = thisSoldFlats
	})

	const buildFreeFlats = path.getAttribute('data-free-flats')

    // buildFreeFlats === "0" ? build.classList.add('sold') : null
	//	if (build.classList.contains('sold')) {
	//		const buildLink= build.closest('.item-link')
	//		buildLink.addEventListener('click', (event)=>{
	//			event.preventDefault()
	//		})
	//}

	if( buildFreeFlats === "0") {
		path.style.cssText = `
		    fill: #ff8f8f;
	  		stroke: #940000;
		`;

		const buildLink= path.closest('.item-link')

		buildLink.addEventListener('click', (event)=>{
			event.preventDefault()
		})
	}
})
*/


const showInformation = (cell, dataAttr)=> planItem.forEach(path => {
	path.addEventListener('mouseover',()=> {
		cell.innerText = path.getAttribute(dataAttr)
	})

	const buildFreeFlats = path.getAttribute('data-free-flats')

	buildFreeFlats === "0" ? path.classList.add('sold') : null

	if (path.classList.contains('sold')) {
		const buildLink= path.closest('.item-link')
		buildLink.addEventListener('click', (event)=>{
			event.preventDefault()
		})
	}

})

showInformation(cellAddress, 'data-adress')
showInformation(cellFloors, 'data-floors')
showInformation(cellFreeFlat, 'data-free-flats')


if(document.querySelector('.build-item-page')) {
	showInformation(cellSoldFlat, 'data-sold-flats')
	showInformation(cellActionFlat, 'data-action-flats')
}


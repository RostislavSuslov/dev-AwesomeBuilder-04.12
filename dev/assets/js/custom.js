const planItem = document.querySelectorAll('.item-path')
const cellAddress = document.querySelector('#address')
const cellFloors = document.querySelector('#floors')
const cellFreeFlat = document.querySelector('#freeFlat')
const cellSoldFlat = document.querySelector('#soldFlat')
planItem.forEach(build => {
    build.addEventListener('mouseover',()=> {
		const thisAddress = build.getAttribute('data-adress')
		const thisFloors = build.getAttribute('data-floors')
		const thisFreeFlats = build.getAttribute('data-free-flats')
		const thisSoldFlats = build.getAttribute('data-sold-flats')


		cellAddress.innerText = thisAddress
		cellFloors.innerText = thisFloors
		cellFreeFlat.innerText = thisFreeFlats
		cellSoldFlat.innerText = thisSoldFlats
	})

	const buildFreeFlats = build.getAttribute('data-free-flats')

/*	 buildFreeFlats === "0" ? build.classList.add('sold') : null


	if (build.classList.contains('sold')) {
		const buildLink= build.closest('.item-link')

		buildLink.addEventListener('click', (event)=>{
			event.preventDefault()
		})
	}*/

	if( buildFreeFlats === "0") {
		build.style.cssText = `
		    fill: #ff8f8f;
	  		stroke: #940000;
		`;

		const buildLink= build.closest('.item-link')

		buildLink.addEventListener('click', (event)=>{
			event.preventDefault()
		})
	}
})

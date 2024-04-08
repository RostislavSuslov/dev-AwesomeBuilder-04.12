const flatArray = [{
	id: 0,
	house: "2",
	floor: "1",
	rooms: "3",
	square: "82.3 м.кв.",
	price: "700$",
	priceTotal: "52500$",
	flatNumber: 1,
	status: "booking",
},
	{
		id: 1,
		house: "2",
		floor: "1",
		rooms: "2",
		square: "60,7 м.кв.",
		price: "700$",
		priceTotal: "42000$",
		flatNumber: 2,
		status: "sold",
	},
	{
		id: 2,
		house: "2",
		floor: "1",
		rooms: "3",
		square: "60,7 м.кв.",
		price: "700$",
		priceTotal: "42000$",
		flatNumber: 3,
		status: "action",
	},
	{
		id: 3,
		house: "2",
		floor: "1",
		rooms: "3",
		square: "82 м.кв.",
		price: "700$",
		priceTotal: "52500$",
		flatNumber: 4,
		status: "booking",
	},
	{
		id: 4,
		house: "2",
		floor: "1",
		rooms: "3",
		square: "79.7 м.кв.",
		price: "700$",
		priceTotal: "55790$",
		flatNumber: 5,
		status: "booking",
	},
	{
		id: 5,
		house: "2",
		floor: "1",
		rooms: "1",
		square: "39.2 м.кв.",
		price: "700$",
		priceTotal: "27440$",
		flatNumber: 6,
		status: "free",
	},
	{
		id: 6,
		house: "2",
		floor: "1",
		rooms: "1",
		square: "40.0 м.кв.",
		price: "700$",
		priceTotal: "29400$",
		flatNumber: 7,
		status: "booking",
	},
	{
		id: 7,
		house: "2",
		floor: "1",
		rooms: "1",
		square: "39.2 м.кв.",
		price: "700$",
		priceTotal: "27440$",
		flatNumber: 8,
		status: "booking",
	},
	{
		id: 8,
		house: "2",
		floor: "1",
		rooms: "3",
		square: "79.3 м.кв.",
		price: "700$",
		priceTotal: "55510$",
		flatNumber: 9,
		status: "action",
	},
]

const installFloor = ()=> {
	const flats = document.querySelectorAll('.flat');
	const flatInfo = document.querySelector('.floor-options');
	const removeActiveClass =()=> flats.forEach(flat=> {
		flat.classList.remove('active');
	})

	const initialValue= [{
		id: 0,
		house: "2",
		floor: "1",
		rooms: "3",
		square: "82.3 м.кв.",
		price: "700$",
		priceTotal: "52500$",
		flatNumber: 1,
		status: "booking",
	}]


	const renderInformation = (array) => {
		const flatInformation = array.map(item =>{
			return (`
			<div class="floor-option-item">
				<div>Номер дома:</div>
				<div>${item.house}</div>
			</div>
			<div class="floor-option-item">
				<div>Этаж:</div>
				<div>${item.floor}</div>
			</div>
			<div class="floor-option-item">
				<div>Номер квартиры:</div>
				<div id="flat-number">${item.flatNumber}</div>
			</div>
			<div class="floor-option-item">
				<div>Кол-во комнат:</div>
				<div>${item.rooms}</div>
			</div>
			<div class="floor-option-item">
				<div>Площадь квартиры:</div>
				<div>${item.square}</div>
			</div>
			<div class="floor-option-item">
				<div>Цена за м²:</div>
			    <div>${item.price}</div>
			</div>
			<div class="floor-option-item">
				<div>Цена за квартиру:</div>
				<div>${item.priceTotal}</div>
			</div>
			<div class="floor-option-item">
				<div>Статус увартиры:</div>
				<div>${item.status}</div>
			</div>
			`)
		})
		flatInfo.innerHTML = flatInformation
	}
	renderInformation(initialValue)

	flats.forEach( (flat, index, arr) => {
		flat.addEventListener('click',()=>{
			removeActiveClass();
			flat.classList.add('active')

			const thisFlat = flat.getAttribute('data-flat-number')

			let flatNumber = flatArray.filter(item =>  item.flatNumber ===  Number(thisFlat) )

			renderInformation(flatNumber)
		})

		flats.forEach(flat=> {
			if (flat.classList.contains('booking')){
				flat.querySelector('.flat-status-cell__tspan').innerHTML = "Бронь"
			} else if (flat.classList.contains('action')) {
				flat.querySelector('.flat-status-cell__tspan').innerHTML = "Акция"
			} else if (flat.classList.contains('already-sold')) {
				flat.querySelector('.flat-status-cell__tspan').innerHTML = "Продано"
			} else {
				flat.querySelector('.flat-status-cell__tspan').innerHTML = "Свободна"
			}
		})

	})
}

document.querySelector('.floor-item-page') ? installFloor() : undefined;







let retrieveData = 'https://raw.githubusercontent.com/rfrank6023/rockwoods-portfolio/master/json/testimonials.json'
let request = new XMLHttpRequest()
request.open('GET', retrieveData)
request.responeType = 'JSON'
request.send();


let testContEl = document.getElementById("test-container")

request.onload = function() {
	let testimonials = request.response
	createTiles(testimonials)
}

var path = window.location.pathname
var page = path.split("/").pop()

function createTiles(testimonials)
{
	let testObj = JSON.parse(testimonials)
	let objArray = []

	for (let i = testObj.testimonials.length-1; i >= 0; i--)
	{
		if ( testObj.testimonials.length-1-i >= 6 && page == "index.html" )
		{
			i = -1 
		}
		let tileDiv = document.createElement("div")
		tileDiv.className = "test-tile"
		tileDiv.id = `tile-${i}`

		let cliImg = document.createElement("div")
		cliImg.style.background = `url('${testObj.testimonials[i].imgSrc}')`
		cliImg.className = "back-img"
		tileDiv.appendChild(cliImg)

		let cliQuote = document.createElement("p")
		cliQuote.innerHTML = testObj.testimonials[i].quote
		cliQuote.className = "quote"
		tileDiv.appendChild(cliQuote)

		let cliName = document.createElement("p")
		cliName.innerHTML = testObj.testimonials[i].name
		cliName.className = "client"
		tileDiv.appendChild(cliName)

		let overlayEl = document.createElement("div")
		overlayEl.className = "overlay"
		tileDiv.appendChild(overlayEl)

		tileDiv.setAttribute("data-aos", "fade-up")
		if( (i+1)%3 == 0 )
		{
			tileDiv.setAttribute("data-aos-delay", "300")
		}

		else if ( (i+1)%3 == 2 )
		{
			tileDiv.setAttribute("data-aos-delay", "150")
		}	

		testContEl.appendChild(tileDiv)	

		function darkenDiv()
		{
			overlayEl.classname = "overlay"
		}

	}
}

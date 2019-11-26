let retrieveData = 'https://raw.githubusercontent.com/rfrank6023/rockwoods-portfolio/master/json/testimonials.json'
let request = new XMLHttpRequest()
request.open('GET', retrieveData)
request.responeType = 'JSON'
request.send();


request.onload = function() {
	let testimonials = request.response
	createTiles(testimonials)
}

function createTiles(testimonials)
{
	let testType = typeof testimonials
	console.log(testType)
	let testObj = JSON.parse(testimonials)
	let testContEl = document.getElementById("#test-container")

	for (let i = 0; i < testObj.testimonials.length; i++)
	{
		let tileDiv = document.createElement("div")
		tileDiv.className = "test-tile"

		let cliImg = document.createElement("img")
		cliImg.src = testObj.testimonials[i].img-src
		tileDiv.appendChild(cliImg)

		let cliQuote = docuemnt.createElement("p")
		cliQuote.innerHTML = testObj.testimonials[i].quote
		cliQuote.className = "quote"
		tileDiv.appendChild(cliQuote)

		let cliName = document.createElement("p")
		cliName.innerHTML = testObj.testimonials[i].quote
		cliName.className = "client"
		tileDiv.appendChild(cliName)
		
		let learnBut = document.createElement("a")
		learnBut.innerHTML = "Learn More"
		learnBut.className = "learnbut"
		learnBut.href = "?"
		titleDiv.appendChild(learnBut)

		test-contEl.appendChild(titleDiv)	
	}
}

const inputbox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")

// adding up elements
function addTask(){
	if (inputbox.value === ''){
		alert("Are you an asshole?")
	}
	else{
		let li = document.createElement("li")
		li.innerHTML = inputbox.value
		listcontainer.appendChild(li)

		// adding X at the end of the task
		let span = document.createElement("span")
		span.innerHTML = "\u00d7"
		li.appendChild(span)
	}
	// emptying the inputbox after insertion
	inputbox.value = ""
	savedata()
}

// click
listcontainer.addEventListener("click", function(e){
	if (e.target.tagName === "LI"){
		e.target.classList.toggle("checked")
		savedata()
	}
	else if (e.target.tagName === "SPAN"){
		e.target.parentElement.remove()
		savedata()
	}
}, false)

// retain the data
function savedata(){
	localStorage.setItem("data", listcontainer.innerHTML)
}

// display the previous tasks
function showtask() {
	listcontainer.innerHTML = localStorage.getItem("data")
}
showtask()

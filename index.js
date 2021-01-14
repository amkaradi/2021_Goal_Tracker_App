// Derick's Code

// STEP 1
// VARIABLES
// Create variable for btnAddNewGoal
var btnAddNewGoal = document.getElementById("btnAddNewGoal")
var demoForm = document.getElementById("demoForm")
var submitForm = document.getElementById("")

// Create event lister for +Add Goal btn
btnAddNewGoal.addEventListener("click", displayForm);

function displayForm() {
	if(demoForm.style.display === "none"){
		demoForm.setAttribute("style", "")
	} else{
		demoForm.setAttribute("style", "display: none;")
	}
}

function fetchGoals(){
	fetch("http://localhost:3000/goals")
	.then(response => response.json())
	.then(goalList => {
		goalList.forEach(item => showItem(item))
	})
}

function showItem(itemData){
	// console.log(itemData)
	// CREATE ELEMENTS
	const outerDiv = document.createElement("div")
	const innerDiv = document.createElement("div")
	const addBtn = document.createElement("button")
	const deleteBtn = document.createElement("button")
	const hashBtn = document.createElement("button")
	const h1 = document.createElement("h1")
	const p = document.createElement("p")

	// GRAB ELEMENT
	const divTileContainer = document.querySelector("#tileContainerId")

	// ADD ATTRIBUTES TO ELEMENTS
	outerDiv.setAttribute("class", "card")
	outerDiv.setAttribute("style", "width: 18rem")
	innerDiv.setAttribute("class", "card-body justify-content-center")
	addBtn.setAttribute("class", "btn btn-successs")
	addBtn.setAttribute("style", "margin: 4px")
	addBtn.innerText = "Add"
	deleteBtn.setAttribute("class", "btn btn-danger")
	deleteBtn.setAttribute("style", "margin: 4px")
	deleteBtn.innerText= "Delete"
	hashBtn.setAttribute("class", "btn btn-secondary")
	hashBtn.innerText = itemData.category
	hashBtn.setAttribute("style", "margin: 4px")
	h1.innerText = itemData.goal
	p.innerText = itemData.description

	// CONNECT ALL THE ELEMENTS
	outerDiv.append(innerDiv)
	innerDiv.append(addBtn, deleteBtn, hashBtn, h1, p)
	divTileContainer.append(outerDiv)

}

fetchGoals()

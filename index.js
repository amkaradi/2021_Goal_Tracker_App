// ENVOKED FUNCTIONS
fetchGoals()

// VARIABLES
const btnAddNewGoal = document.getElementById("btnAddNewGoal")
const demoForm = document.getElementById("demoForm")
const form = document.getElementById("form")
const divTileContainer = document.querySelector("#tileContainerId")

// EVENT LISTENERS
btnAddNewGoal.addEventListener("click", displayForm)
form.addEventListener("submit", submitForm)

// FUNCTIONS
function fetchGoals(){
	fetch("http://localhost:3000/goals")
	.then(response => response.json())
	.then(goalList => {
		goalList.forEach(item => showItem(item))
	})
}

function showItem(itemData){
	// create elements
	const outerDiv = document.createElement("div")
	const innerDiv = document.createElement("div")
	const deleteBtn = document.createElement("button")
	const hashBtn = document.createElement("button")
	const h1 = document.createElement("h1")
	const p = document.createElement("p")

	// add attributes
	outerDiv.setAttribute("class", "card")
	outerDiv.setAttribute("style", "width: 18rem")
	innerDiv.setAttribute("class", "card-body justify-content-center")
	deleteBtn.setAttribute("class", "btn btn-danger")
	deleteBtn.setAttribute("style", "margin: 4px")
	deleteBtn.innerText= "Delete"
	hashBtn.setAttribute("class", "btn btn-secondary")
	hashBtn.innerText = itemData.category
	hashBtn.setAttribute("style", "margin: 4px")
	h1.innerText = itemData.goal
	p.innerText = itemData.description

	// connect elements
	outerDiv.append(innerDiv)
	innerDiv.append(deleteBtn, hashBtn, h1, p)
	divTileContainer.append(outerDiv)

}

function displayForm() {
	if(demoForm.style.display === "none"){
		demoForm.setAttribute("style", "")
	} else{
		demoForm.setAttribute("style", "display: none;")
	}
}

function submitForm(event){
	event.preventDefault()
	// grab name part of form
	const goalNameInput = document.getElementById("goalNameInput")
	// grab user input for name
	const userNameInput = goalNameInput.value
	// grab category part of form
	const goalCategoryInput = document.getElementById("pickCategoryInput")
	// grab user input for category
	const userCategoryInput = goalCategoryInput.value
	// grab details part of form
	const goalDetailInput = document.getElementById("goalDetailInput")
	// grab user input for details
	const userDetailInput = goalDetailInput.value

	const newGoalObject = {
		goal: userNameInput,
		category: userCategoryInput,
		description: userDetailInput
	}
	// backend persistence
	fetch()

	// showItem(newGoalObject)
}












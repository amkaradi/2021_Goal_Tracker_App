// Derick's Code

// STEP 1
// VARIABLES
// Create variable for btnAddNewGoal
var btnAddNewGoal = document.getElementById("btnAddNewGoal")
var demoForm = document.getElementById("demoForm")
var form = document.getElementById("form")

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
	// CREATE ELEMENTS
	const outerDiv = document.createElement("div")
	const innerDiv = document.createElement("div")
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
	innerDiv.append(deleteBtn, hashBtn, h1, p)
	divTileContainer.append(outerDiv)

}


form.addEventListener("submit", submitForm)

function submitForm(event){
	event.preventDefault()
	// GRAB NAME PART OF FORM
	const goalNameInput = document.getElementById("goalNameInput")
	// GRAB USER'S INPUT FOR NAME
	const userNameInput = goalNameInput.value
	// GRAB CATEGORY PART OF FORM
	const goalCategoryInput = document.getElementById("pickCategoryInput")
	// GRAB USER'S INPUT FOR CATEGORY
	const userCategoryInput = goalCategoryInput.value
	// GRAB DETAILS PART OF FORM
	const goalDetailInput = document.getElementById("goalDetailInput")
	// GRAB USER'S INPUT FOR DETAILS
	const userDetailInput = goalDetailInput.value

	const newGoalObject = {
		goal: userNameInput,
		category: userCategoryInput,
		description: userDetailInput
	}

	showItem(newGoalObject)


}

fetchGoals()

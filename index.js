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


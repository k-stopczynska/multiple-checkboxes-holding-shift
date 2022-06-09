const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

//creating last checked variable
let lastChecked;

//creating function that will listen to an event of shoft down and checkbox actually clicked

function evalCheck(e) {
    //creating another variable that will change if sth is in between first and last checked
    let inBetween = false;
    //determining if shift key is down and sth is clicked
    if (e.shiftKey && this.checked) {
        //looping through checkboxes to find checked ones
    checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween;
        }
        if (inBetween) {
            checkbox.checked = true;
        }
    });
    }
    lastChecked = this;
}
//adding event listener to run the functionon click
checkboxes.forEach(checkbox => checkbox.addEventListener('click', evalCheck));
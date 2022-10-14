// Here we initialitize some variables
var data = [];
var changes = 0;
var pressed = false;

// This function will add to the list all the values inserted in the input
function addToList() {
    var inputHTML = document.getElementById("input");
    data[data.length] = inputHTML.value;
    inputHTML.value = "";
    if (pressed == false) document.getElementById("explanation").innerHTML = `<p>This is the data you're inserting:</p>`;
    document.getElementById("result").innerHTML += `<li>${data[data.length-1]}</li>`;
}

// And this will sort all what's already inserted in the list (data[])
function sort() {
    for (var i = 0; i < data.length; i++) {
        changes = 0;

        for (var j = 0; j < data.length; j++) {

            if (data[j] > data[j+1]) {
                var temp = [data[j], data[j+1]];

                data[j] = temp[1];
                data[j+1] = temp[0];
                changes = 1;
            }
            console.log(data);
            
        }
        // If there aren't any changes, then finish, because the list is already sorted
        if (changes == 0) {
            console.log(data)
            print(data);
            return;
        }
        
    }

    
}

function print(data) {
    var resultHTML = document.getElementById("result");
    document.getElementById("explanation").innerHTML = "This is the data sorted:";
    resultHTML.innerHTML = "";
    data.forEach(element => {
        resultHTML.innerHTML += `<li>${element}</li>`;
    });
}
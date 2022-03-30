let addButton = document.getElementById('addButton')
let buttonsDiv = document.getElementById('buttonsDiv')

let generateButton = document.getElementById('generateButton')

let options = ['Name', 'Boy name', 'Girl name', 'Direction', 'DNI', 'Phone (house)', 'Phone (mobile)', 'Date']

addButton.addEventListener('click', function() {
    let i = 0

    let divisorDiv = document.createElement('div')

    let input = document.createElement('input')
    let select = document.createElement('select')

    input.name = 'input'
    select.name = 'select'

    buttonsDiv.appendChild(divisorDiv)

    divisorDiv.appendChild(input)
    divisorDiv.appendChild(select)
    
    options.forEach(option => {
        let tag = document.createElement('option')
        tag.textContent = option
        tag.value = option
        select.appendChild(tag)
    });
})

generateButton.addEventListener('click', function() {
    $("#buttonsDiv div").each(function(e) {
        let input = this.children[0]
        let option = this.children[1]
        console.log(this.children[0].value)
        console.log(this.children[1].value)

        switch(option.value) {
            case "Name": 
                fetch('http://names.drycodes.com/10?nameOptions=girl_names', {
                    mode: "cors",
                    credentials: 'include'
                  })
                .then(response => response.json())
                .then(data => console.log(data))

        }
    })
})
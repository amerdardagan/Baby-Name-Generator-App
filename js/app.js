/*

document.querySelector ('#generate-names').addEventListener ('submit', loadNames);

//Execute the function to quaery API

function loadNames (e) {
    e.preventDefault ();

    //Read the values from the Form and create variables
    const country = document.getElementById ('country').value;
    const genre = document.getElementById ('genre').value;
    const amount = document.getElementById ('quantity').value;

    //Build URL
    let url = 'https://uinames.com/api/?'; //main URL on which will add parameters below
    //Read the country and append to main URL
    if (country !== '') { //if user picks country
        url += `region=${country}&`; //chenage url to fit selected country from html form/filter by country
    }

    //Read the gender and append to main URL
    if (genre !== '') { //if user picks gender
        url += `gender=${genre}&`; //adding 6 because adding after/filter by gender
    }

    //Read the amount and append to main URL
    if (amount !== '') { //if user picks amount
        url += `amount=${amount}`; //cheage url to fit selected amount from html form/filter by amount
    }*/

    /*
    //Ajax Call (4 steps)

    const xhr = new XMLHttpRequest ();

    xhr.open ('GET', url , true); //url-based on user parameters above, url will be requested

    xhr.onload = function () {
        if (this.status === 200) {

            const names = JSON.parse (this.responseText);

            //Insert objects/strings into HTML
            let html ='<h2>Generate Baby Names</h2>'
            html+='<ul class="list">'
                names.forEach (function (name) {
                    html += `
                    <li>${name.name}</li>
                    `;
                });
                    
            html+='</ul>';

            document.querySelector ('#result').innerHTML = html;
        }
    }

    xhr.send ();
     */

     /*

     fetch (url)

     .then (function (response) {
         return response.json ()
     })

     .then (function (names){
         console.log (names)

         let html = '<h2>Generate Baby Names</h2>'

        names.forEach (function (name){
            html += '<ul class="list">'
                html += `<li>${name.name}</li>`
            html += '</ul>'
        
        });

        document.getElementById ('result').innerHTML = html
     })


}*/

//BABY NAME GENERATOR USING ARROW FUNCTIONS

document.querySelector ('#generate-names').addEventListener ('submit', loadNames);

//Execute the function to quaery API

function loadNames (e) {
    e.preventDefault ();

    //Read the values from the Form and create variables
    const country = document.getElementById ('country').value;
    const genre = document.getElementById ('genre').value;
    const amount = document.getElementById ('quantity').value;

    //Build URL
    let url = 'https://uinames.com/api/?'; //main URL on which will add parameters below
    //Read the country and append to main URL
    if (country !== '') { //if user picks country
        url += `region=${country}&`; //chenage url to fit selected country from html form/filter by country
    }

    //Read the gender and append to main URL
    if (genre !== '') { //if user picks gender
        url += `gender=${genre}&`; //adding 6 because adding after/filter by gender
    }

    //Read the amount and append to main URL
    if (amount !== '') { //if user picks amount
        url += `amount=${amount}`; //cheage url to fit selected amount from html form/filter by amount
    }

      /*fetch (url)

      .then (response => response.json ())*/ //will place it in async function below!
     
    getNames (url)

      .then (names => {

        let html = '<h2>Generate Baby Names</h2>'
        let nameObject = names.names

        nameObject.forEach (name => { //now loops through objects not arrays
            html += '<ul class="list">'
                html += `<li>${name.name}</li>`
                html += '</ul>'
        });

        

        document.getElementById ('result').innerHTML = html
     })
 
        .catch (error => console.log (error))

}

async function getNames(url) {
    const response = await fetch (url)

    const names = await response.json ();
    return {
        names
    }

}
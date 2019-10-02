document.querySelector ('#generate-names').addEventListener ('submit', loadNames);

//Execute the function to quaery API

function loadNames (e) {
    e.preventDefault ();

    //Read the values from the Form and create variables
    const country = document.getElementById ('country').value;
    const genre = document.getElementById ('genre').value;
    const amount = document.getElementById ('quantity').value;

    //Build URL
    let url = 'https://uinames.com/api/?'; //main URL 
    //Read the country and append to main URL
    if (country !== '') { //if user picks country
        url += `region=${country}&`; //chenage url to fit selected country from html form

        console.log (url);
    }


}
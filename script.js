//Get all the countries from the Asia continent /region using the Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true)
request.send();
request.onload=function() {
    var data = request.response
    var result = JSON.parse(data)
    var asianCountries = result.filter(country => country.region === "Asia");
    console.log(asianCountries)
}

//----------------------------------------------------------------

// Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true)
request.send();
request.onload=function() {
    var data = request.response
    var result = JSON.parse(data)
    var asianCountries = result.filter(country => country.population < 200000);
    var final = asianCountries.map((country) => country.name)
    console.log(final)
}

//------------------------------------------------------------------------------

//Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true)
request.send();
request.onload=function() {
    var data = request.response
    var result = JSON.parse(data)
    result.forEach(country => {
        console.log(`Name: ${country.name}, Capital: ${country.capital}, Flag: ${country.flag}`);
      })
    }

    //-----------------------------------------------------------------------------


// Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true)
request.send();
request.onload=function() {
    var data = request.response
    var result = JSON.parse(data)
    var totalPopulation = result.reduce((a, result) => a + result.population, 0);
console.log(totalPopulation)
}

//-------------------------------------------------------------------------------

// Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true)
request.send();
request.onload=function() {
    var data = request.response
    var result = JSON.parse(data)
   var res = result.filter((ele)=>{
    for(var key in ele.currencies) {
        if(ele.currencies[key].code==="USD"){
            console.log(ele.name);
        }
   }
    
})
}
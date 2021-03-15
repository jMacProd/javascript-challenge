// from data.js
var tableData = data;

//////////////////////////////////////
// Collect array of unique values for drop down
// https://appdividend.com/2019/04/11/how-to-get-distinct-values-from-array-in-javascript/

//DATES
var arraydates = tableData.map(function(date) {
    return date.datetime;
  });
uniqueAges = [...new Set(arraydates)]
console.log(uniqueAges);

//////////////////////////////////////
// Select input and  array of unique values for drop down

//Remove input tag
//https://www.tutorialsteacher.com/d3js/dom-manipulation-using-d3js#remove
d3.select('body').select('input').remove();

// check that the input elements have gone
var ul = d3.select('body').selectAll('ul').html();
//console.log(ul)

// Append drop down emelent to li
//Append select html tag to first li
var selectapp = d3.select('body').select('li').append('select').attr(
    "class", "form-control");
//needed to add a second attibute of id
var selectaddid = d3.select('body').select('li').select('select').attr(
    "id", "form-datetime");

//Append the option tag 
//var optionapp = d3.select('body').select('li').select('select').append('option').attr('value', "-").text('No selection');
//var optionappselection = d3.select('body').select('li').select('select').select('option').attr('selected', '')
var optionapp2 = d3.select('body').select('li').select('select').append('option').attr('value', "1/1/2010").text('1/1/2010');
/* <select class="form-control" id="datetime">
    <option value="" selected>No selection</option>
    <option value="1/1/2010">1/1/2010</option>
    <option value="1/2/2010">1/2/2010</option>
    <option value="1/3/2010">1/3/2010</option>
    <option value="1/4/2010">1/4/2010</option>
    <option value="1/5/2010">1/5/2010</option>
    <option value="1/6/2010">1/6/2010</option>
    <option value="1/7/2010">1/7/2010</option>
    </select> */
console.log(ul)


//////////////////////////////////////
// FULL DATA INITIAL LOAD

var tbody = d3.select("tbody");

function fulldata() {
    tbody.html("");
    console.log(`Complete data: ${tableData.length} records in this table.`);
    console.log("----------");

    tableData.forEach(function(sighting) {

        var row = tbody.append("tr");

        Object.entries(sighting).forEach(function([key, value]) {

            var cell = row.append("td");

            cell.text(value);
        });
    });
}

fulldata();

/////////////////////////////////////
// LISTENING EVENT

//Capture the values in each field

//Reference the button id
var button = d3.select("#filter-btn");

//Reference the input field id
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

/////////////////////////////////////
// FUNCTION TO COLLECT VALUES

// Create the function to run for both events
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //DATE
    // Select the input element and get the raw HTML node
    var inputElementdate = d3.select("#datetime");
    var inputValuedate = inputElementdate.property("value");

    //Added this conditional to allow blank values to return to main table
    
    //if (inputValuedate === "") {
        //console.log("No date filter");
    //}
    //else {
    //    console.log(`The date entered is ${inputValuedate}`);
    //}

    //CITY
    // Select the input element and get the raw HTML node
    var inputElementcity = d3.select("#city");
    var inputValuecity = inputElementcity.property("value");
    // if (inputValuecity === "") {
    //     console.log("No city entered");
    // }
    // else {
    //     console.log(`The city entered is ${inputValuecity}`);
    // }

    //STATE
    // Select the input element and get the raw HTML node
    var inputElementstate = d3.select("#state");
    var inputValuestate = inputElementstate.property("value");
    // if (inputValuestate === "") {
    //     console.log("No state entered");
    // }
    // else {
    //     console.log(`The state entered is ${inputValuestate}`);
    // }

    //COUNTRY
    // Select the input element and get the raw HTML node
    var inputElementcountry = d3.select("#country");
    var inputValuecountry = inputElementcountry.property("value");
    // if (inputValuecountry === "") {
    //     console.log("No country entered");
    // }
    // else {
    //     console.log(`The country entered is ${inputValuecountry}`);
    // }

    //SHAPE
    // Select the input element and get the raw HTML node
    var inputElementshape = d3.select("#shape");
    var inputValueshape = inputElementshape.property("value");
    // if (inputValueshape === "") {
    //     console.log("No shape entered");
    // }
    // else {
    //     console.log(`The shape entered is ${inputValueshape}`);
    // }
    console.log('Filters:')
    console.log('-------')
    console.log(`Date: ${inputValuedate}`);
    console.log(`City: ${inputValuecity}`);
    console.log(`State: ${inputValuestate}`);
    console.log(`Country: ${inputValuecountry}`);
    console.log(`Shape: ${inputValueshape}`);
    //console.log("----------");

    //filteredtable(inputValuedate, inputValuecity, inputValuestate, inputValuecountry, inputValueshape)
    filteredtable(inputValuedate, inputValuecity, inputValuestate, inputValuecountry, inputValueshape) 

}

/////////////////////////////////////
// FILTER DATA

//Filter the data using captured values above

//function filteredtable(date, city, state, country, shape) {
function filteredtable(date, city, state, country, shape) {
    if (date === "-") {
        var tableDatadate = tableData
    }
    else {
        var tableDatadate = tableData.filter(dataitem => dataitem.datetime === date);
    }

    if (city === "") {
        var tableDatacity = tableDatadate
    }
    else {
        var tableDatacity = tableDatadate.filter(cityitem => cityitem.city === city);
    }

    if (state === "") {
        var tableDatastate = tableDatacity
    }
    else {
        var tableDatastate = tableDatacity.filter(stateitem => stateitem.state === state);
    }

    if (country === ""){
        var tableDatacountry = tableDatastate
    }
    else {
        var tableDatacountry = tableDatastate.filter(ctryitem => ctryitem.country === country);
    }

    if (shape === "") {
        var tableDatashape = tableDatacountry
    }
    else {
        var tableDatashape = tableDatacountry.filter(shapeitem => shapeitem.shape === shape);
    }

    //var tableDatadate = tableData.filter(dataitem => dataitem.datetime === date);
    //var tableDatacity = tableDatadate.filter(cityitem => cityitem.city === city);
    //var tableDatastate = tableDatacity.filter(stateitem => stateitem.state === state);
    //var tableDatacountry = tableDatastate.filter(ctryitem => ctryitem.country === country);
    //var tableDatashape = tableDatacountry.filter(shapeitem => shapeitem.shape === shape);


    //This TableData should reflect each layer of filtering
    //console.log(tableDatashape);
    //console.log("-");

    /////////////////////////////////////
// ADD FILTERED DATA TO TABLE

    function addtable() {
        tbody.html("");
        console.log(`There are ${tableDatashape.length} records in this table.`);
        console.log("----------");
        tableDatashape.forEach(function(sighting) {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
    addtable()
}






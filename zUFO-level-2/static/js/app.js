// from data.js
var tableData = data;

// Console.log the data from data.js
//console.log(tableData);
    //confirmed

// Using the UFO dataset provided in the form of an array of
    //JavaScript objects, write code that appends a table
    //to your web page and then adds new rows of data for
    // each UFO sighting.

// Get a reference to the table body
var tbody = d3.select("tbody");


//    tableData.forEach(function(sighting) {
//    var row = tbody.append("tr");

/////////////////////////////////////////////////////////////////////////////
//FULL DATA
// Decided need its own function so can return to full data by calling function
function fulldata() {
    tbody.html("");
    filteredData = tableData
    console.log(`There are ${tableData.length} records in this table.`);
    console.log(filteredData)
    //console.log("-");
    // Loop Through `data` to capture each object
    filteredData.forEach(function(sighting) {
        //console.log(sighting);
            //confirmed
        //Use d3 to append one table row `tr` for each weather report object
        var row = tbody.append("tr");
            //html in Elements confirmed
        //Use `Object.entries` to collect each report value
        Object.entries(sighting).forEach(function([key, value]) {
        //console.log(key, value);
                //confirmed
            // Append a cell to the row for each value
            var cell = row.append("td");
                //html in Elements confirmed
            // Add the values to each cell
            cell.text(value);
                //confirm
        });
    });
}

fulldata();

// Using multiple `input` tags and/or select dropdowns, write JavaScript code
    //so the user can to set multiple filters and search for UFO sightings using
    //the criteria based on the table columns:

/////////////////////////////////////////////////////////////////////////////
//DATE FILTER

function filteredtable(date){
    tbody.html("");
    //var filteredData = tableData.filter(dataitem => dataitem.datetime === date);
    filteredData = tableData.filter(dataitem => dataitem.datetime === date);
    console.log(`There are ${filteredData.length} records in this table.`);
    console.log(filteredData)
    console.log("-");
        //confirmed
    filteredData.forEach(function(filteredsighting) {
        var row = tbody.append("tr");
        Object.entries(filteredsighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
 }


/////////////////////////////////////////////////////////////////////////////
//LISTENING EVENT

//get date value from input - listening event

//Reference the button id
var button = d3.select("#filter-btn");

//Reference the input field id
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

/////////////////////////////////////////////////////////////////////////////
//COLLECT DATE VALUE

// Create the function to run for both events
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //console.log("Basic runEnter function working")
        //confirmed
    
        // Select the input element and get the raw HTML node
    var inputElementdate = d3.select("#datetime");
    var inputValuedate = inputElementdate.property("value");
    //var inputstring  = inputValue.toString(); - unneccessary
    console.log(`The date entered is ${inputValuedate}`);

    var inputElementcity = d3.select("#city");
    var inputValuecity = inputElementcity.property("value");
    //var inputstring  = inputValue.toString(); - unneccessary
    console.log(`The city entered is ${inputValuecity}`);
    
    //Added this conditional to allow blank values to return to main table
    //if (inputValue === "") {
    //    console.log("No date entered");
    //    fulldata()
    //}
    //else {
    //    console.log(`The date entered is ${inputValue}`);
    //    filteredtable(inputValue)
    //}
    

    if (inputValuedate === "") {
        fulldata()
    }
    else {
        filteredtable(inputValuedate)
    }
}



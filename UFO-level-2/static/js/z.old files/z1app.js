// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

inputValuedate = ""

//////////////////////////////////////
// FULL DATA FUNCTION

// Decided need its own function so can return to full data by calling function
function fulldata() {
    tbody.html("");
    console.log(`There are ${tableData.length} records in this table.`);
    console.log("-");
    // Loop Through `data` to capture each object
    tableData.forEach(function(sighting) {
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



//////////////////////////////////////
// DATE FILTER FUNCTION

function filteredtabledate(date){
    tbody.html("");

    if (inputValuedate === "") {
        console.log("No date entered");
        fulldata()
    }
    else {
        console.log(`The date entered is ${inputValuedate}`);
    tableData = tableData.filter(dataitem => dataitem.datetime === date);
    console.log(`There are ${tableData.length} records in this table.`);
    console.log("-");
       //confirmed
    tableData.forEach(function(filteredsighting) {
        var row = tbody.append("tr");
        Object.entries(filteredsighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
      });
    }
}

/////////////////////////////////////
// CITY FILTER FUNCTION

function filteredtablecity(city){
    tbody.html("");
    tableData = tableData.filter(cityitem => cityitem.city === city);
    console.log(`There are ${tableData.length} records in this table.`);
    console.log("-");
       //confirmed
    tableData.forEach(function(filteredsighting) {
        var row = tbody.append("tr");
        Object.entries(filteredsighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
      });
}


//////////////////////////////////////
// LISTENING EVENT

//Reference the button id
var button = d3.select("#filter-btn");

//Reference the input field id
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// form.on("keypress", function() {
//     if(d3.event.keyCode === 13){
//         console.log("Congrats, you pressed enter or space!")
//     }
// });

// form.on("keydown", function() {
//     d3.event.preventDefault();
//     if(d3.event.keyCode === 13){
//         button.on("click", runEnter);
//     }
// });

//////////////////////////////////////
// CAPTURE FILTER VALUES FUNCTION

// Create the function to run for both events
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //DATE
    // Select the input element and get the raw HTML node
    var inputElementdate = d3.select("#datetime");
    var inputValuedate = inputElementdate.property("value");
    //var inputstring  = inputValue.toString(); - unneccessary

    //CITY
    // Select the input element and get the raw HTML node
    var inputElementcity = d3.select("#city");
    var inputValuecity = inputElementcity.property("value");
    //var inputstring  = inputValue.toString(); - unneccessary

    filteredtabledate(inputElementdate)

//     //Added this conditional to allow blank values to return to main table
//     if (inputValuedate === "") {
//         console.log("No date entered");
//         fulldata()
//     }
//     else {
//         console.log(`The date entered is ${inputValuedate}`);
//         filteredtabledate(inputValuedate)
//     }
    
//     if (inputValuecity === "") {
//         console.log("No date entered");
//         filteredtabledate(inputValuedate)
//     }
//     else {
//         console.log(`The date entered is ${inputValuedate}`);
//         filteredtablecity(inputValuecity)
//     }
}

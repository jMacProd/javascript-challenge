// from data.js
var tableData = data;
//console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Needed an intial function so can return to full data by calling function
function fulldata() {
    tbody.html("");
    console.log(`There are ${tableData.length} records in this table.`);
    console.log("-");
    // Loop Through `data` to capture each object
    tableData.forEach(function(sighting) {
        //console.log(sighting);

        //Use d3 to append one table row `tr` for each weather report object
        var row = tbody.append("tr");
            //html in Elements confirmed
        //Use `Object.entries` to collect each report value
        Object.entries(sighting).forEach(function([key, value]) {
        //console.log(key, value);

            // Append a cell to the row for each value
            var cell = row.append("td");
                //html in Elements confirmed
            // Add the values to each cell
            cell.text(value);

        });
    });
}

fulldata();


//define function that achieves stepped out filtering and rendering new table

 function filteredtable(date){
     tbody.html("");
     var filteredData = tableData.filter(dataitem => dataitem.datetime === date);
     console.log(`There are ${filteredData.length} records in this table.`);
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



//get date value from input - listening event

//Reference the button id
var button = d3.select("#filter-btn");

//Reference the input field id
var form = d3.select("form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    //var inputstring  = inputValue.toString(); - unneccessary

    //Added this conditional to allow blank values to return to main table
    if (inputValue === "") {
        console.log("No date entered");
        fulldata()
    }
    else {
        console.log(`The date entered is ${inputValue}`);
        filteredtable(inputValue)
    }
    
}



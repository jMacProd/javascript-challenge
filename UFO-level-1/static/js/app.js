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

// Use a date form in your HTML document and write JavaScript
    //code that will listen for events and search through the
    //`date/time` column to find rows that match user input.


 //Set date value to test function
//var inputValue = "1/1/2010"

// filter using date
// filter function
//var filteredData = tableData.filter(dataitem => dataitem.datetime === inputValue);

// call date filter function
//console.log(filteredData);
  //confirmed

// clear table - needs to be inside the function
//tbody.html("");
  //confirmed in html in Elements

//add new table with filter results

//filteredData.forEach(function(filteredsighting) {
//    var row = tbody.append("tr");
//    Object.entries(filteredsighting).forEach(function([key, value]) {
//        var cell = row.append("td");
//        cell.text(value);
//    });
//  });
    // confirmed in webpage and html


//define function that achieves the above

 function filteredtable(date){
     tbody.html("");
     var filteredData = tableData.filter(dataitem => dataitem.datetime === date);
     console.log(filteredData);
        //confirmed
     filteredData.forEach(function(filteredsighting) {
         var row = tbody.append("tr");
         Object.entries(filteredsighting).forEach(function([key, value]) {
             var cell = row.append("td");
             cell.text(value);
         });
       });
 }

// call function - date needs to be filter
filteredtable('1/10/2010')


//get date value from input - listening event



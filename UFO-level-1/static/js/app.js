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



// from data.js
var tableData = data;

var tbody = d3.select("tbody");

//////////////////////////////////////
// Drop down menu

//DATE
var tableDatabydates = d3.nest()
  .key(function(d) { return d.datetime; })
  .entries(tableData);
//console.log(tableDatabydates);

var tableDatabydatesStr = JSON.stringify(tableDatabydates)
//console.log(data);
var datescount = JSON.parse(tableDatabydatesStr);
//console.log(datescount);

//End up with a list of unique dates
var datearray = [];
for (var i in datescount) {
    datearray.push(datescount[i].key);
};
console.log(datearray)

//add select dropdown html tag
var dropDown = d3.select('#dropdown_container')
    .append("select")
    .attr("class", "form-control")
    .attr("id", "datetime");
    //.attr("name", "date");
//console.log(dropDown)

// Add first option dropdown html tag
var options = d3.select("#datetime")
    .append("option");
//    .attr("value", "1/1/2010")
//   .text("1/1/2010");
console.log(options);

//Add the value to the option
options.text(datearray[0])
    .attr("value", datearray[0]);


//////////////////////////////////////
// FULL DATA INITIAL LOAD

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

    console.log('Filters:')
    console.log('--------')
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
    if (date === "") {
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






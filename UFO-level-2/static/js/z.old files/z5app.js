// from data.js
var tableData = data;

var tbody = d3.select("tbody");



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
    
    newdropdowndata = []
    tableDatashape.forEach(function(x) {
        newdropdowndata.push(x);
    });
    
    //newdropdowndatacount ()
    // dynamicfilters ()
    test ()

    //REMOVE LI TAG
    //d3.select('ul').selectAll('li').remove();

    if (date != "") {
        dateA ()
    }
    else {
        dateB
    }
   
    optionbuild ()
    // //DATES - CALL FUNCTION
    // dropdownbuild('date', 'datetime', uniquedates)

    // //CITY - CALL FUNCTION
    // dropdownbuild('city', 'city', uniquecities)

    // //STATE - CALL FUNCTION
    // dropdownbuild('state', 'state', uniquestates)

    // //COUNTY CALL FUNCTION
    // dropdownbuild('country', 'country', uniquectry)

    // //SHAPE CALL FUNCTION
    // dropdownbuild('shape', 'shape', uniqueshape)

    //Change button to Clear data
    // if (date==0 && city==0 && state==0 && country==0 && shape==0) {
    //    d3.select ("#filter-btn").text("Filter Table");
    // }
    // else {
    //    d3.select ("#filter-btn").text("Clear Filters");
    // }
    
    
}


//////////////////////////////////////
// Defining dynamic data for dropdown list

// //define empty tableDatashape
var newdropdowndata = tableData
//console.log(newdropdowndata.length);

//function newdropdowndatacount () {
//    console.log(newdropdowndata.length);
//}


// function dynamicfilters (){
//     //if filter not happened yet then
//     //user table data in the function
//     //else use the final data in filter for unique arrays

//     if (newdropdowndata.length === 0) {
//         dropdowndata = tableData
//     }
//     else {
//         dropdowndata = newdropdowndata
//     }
//}

//////////////////////////////////////
// Drop down menu upon load

//https://stackoverflow.com/questions/33777272/creating-a-drop-down-with-d3-js
//https://stackoverflow.com/questions/20780835/putting-the-country-on-drop-down-list-using-d3-via-csv-file


function dateA () {
    //DATE - UNIQUE ARRAY
    var datearray = tableData.map(function(array) {
        return array.datetime;
    });
    uniquedates = [...new Set(datearray)]
    //console.log(uniquedates);
}
dateA()

function dateB () {
    //DATE - UNIQUE ARRAY
    var datearray = newdropdowndata.map(function(array) {
        return array.datetime;
    });
    uniquedates = [...new Set(datearray)]
    //console.log(uniquedates);
}




function test () {
    //DATE - UNIQUE ARRAY
    // var datearray = newdropdowndata.map(function(array) {
    //     return array.datetime;
    // });
    // uniquedates = [...new Set(datearray)]
    //console.log(uniquedates);

    //CITY - UNIQUE ARRAY
    var cityarray = newdropdowndata.map(function(array) {
        return array.city;
    });
    uniquecities = [...new Set(cityarray)]
    uniquecities.sort();
    //console.log(uniquecities);

    //STATE - UNIQUE ARRAY
    var statearray = newdropdowndata.map(function(array) {
    return array.state;
    });
    uniquestates = [...new Set(statearray)]
    uniquestates.sort();
    //console.log(uniquestates);

    //COUNTRY - UNIQUE ARRAY
    var ctryarray = newdropdowndata.map(function(array) {
    return array.country;
    });
    uniquectry = [...new Set(ctryarray)]
    uniquectry.sort();
    //console.log(uniquectry);

    //SHAPE - UNIQUE ARRAY
    var shapearray = newdropdowndata.map(function(array) {
    return array.shape;
    });
    uniqueshape = [...new Set(shapearray)]
    uniqueshape.sort();
    //console.log(uniqueshape);
}
test()

//DATE - UNIQUE ARRAY
////var datearray = tableData.map(function(array) {
//    return array.datetime;
//});
//uniquedates = [...new Set(datearray)]
//console.log(uniquedates);

// //CITY - UNIQUE ARRAY
// var cityarray = tableData.map(function(array) {
//         return array.city;
// });
// uniquecities = [...new Set(cityarray)]
// uniquecities.sort();
// //console.log(uniquecities);

// //STATE - UNIQUE ARRAY
// var statearray = tableData.map(function(array) {
//     return array.state;
// });
// uniquestates = [...new Set(statearray)]
// uniquestates.sort();
// //console.log(uniquestates);

// //COUNTRY - UNIQUE ARRAY
// var ctryarray = tableData.map(function(array) {
//     return array.country;
// });
// uniquectry = [...new Set(ctryarray)]
// uniquectry.sort();
// //console.log(uniquectry);

// //SHAPE - UNIQUE ARRAY
// var shapearray = tableData.map(function(array) {
//     return array.shape;
// });
// uniqueshape = [...new Set(shapearray)]
// uniqueshape.sort();
// //console.log(uniqueshape);


//REMOVE LI TAG
//https://www.tutorialsteacher.com/d3js/dom-manipulation-using-d3js#remove
d3.select('ul').select('li').select.remove();


// CREATE DROP DOWN

// function dropdownbuild(label, selectid, array) {

//     //ADD LI WITH HTML
//     var addli = d3.select('ul').append('li');
//     var liattr = addli.attr("class", "filter list-group-item");

//     var addlabel = addli.append('label');
//     var labelattr = addlabel.attr("for", label).text(`Select a ${label}`);
        
//     //Add div ##dropdown_container
//     var adddiv = addli.append('div');
//     var divattr = adddiv.attr("id", '#dropdown_container');
        
        
//     //add select dropdown html tag
//     var dropDown = adddiv
//         .append("select")
//         .attr("class", "form-control")
//         .attr("id", selectid)
//         .attr("name", label);

//     // Add option dropdowns html tag
//     d3.select(`#${selectid}`).append('option').attr('value', "").text('Select');
    

//     array.forEach(function(item) {
//         d3.select(`#${selectid}`)
//             .append("option")
//             .attr("value", item)
//             .text(item);
//     });
// }

function dropdownbuild(label, selectid, aray) {

    //ADD LI WITH HTML
    var addli = d3.select('ul').append('li');
    var liattr = addli.attr("class", "filter list-group-item");

    var addlabel = addli.append('label');
    var labelattr = addlabel.attr("for", label).text(`Select a ${label}`);
        
    //Add div ##dropdown_container
    var adddiv = addli.append('div');
    var divattr = adddiv.attr("id", '#dropdown_container');
        
        
    //add select dropdown html tag
    var dropDown = adddiv
        .append("select")
        .attr("class", "form-control")
        .attr("id", selectid)
        .attr("name", label);

    // Add option dropdowns html tag
    d3.select(`#${selectid}`).append('option').attr('value', "").text('Select');

        array.forEach(function(item) {
        d3.select(`#${selectid}`)
            .append("option")
            .attr("id", "optiondate")
            .attr("value", item)
            .text(item);
    });
}
//DATES - CALL FUNCTION
dropdownbuild('date', 'datetime', uniquedates)

//CITY - CALL FUNCTION
dropdownbuild('city', 'city', uniquecities)

//STATE - CALL FUNCTION
dropdownbuild('state', 'state', uniquestates)

//COUNTY CALL FUNCTION
dropdownbuild('country', 'country', uniquectry)

//SHAPE CALL FUNCTION
dropdownbuild('shape', 'shape', uniqueshape)
    

function optionbuilddate (selectid, array) {

    d3.select('#optiondate').remove();
    array.forEach(function(item) {
        d3.select(`#${selectid}`)
            .append("option")
            .attr("value", item)
            .text(item);
    });
}










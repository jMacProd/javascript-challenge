# javascript-challenge

Using JavaScript, HTML, and CSS, and D3.js, a html table was coded based upon a provided dataset of UFO sightings in North American cities. Users are able to filter the table data for specific values. 

## Status
Project is finalised

## Navigating the repository
### Directory: **Process Maps**
* Contains following documents:
    * UFO_Dynamic_Table_Webpage_Part1.png
    * UFO_Dynamic_Table_Webpage_Part2.png

    ### Directory: **UFO-level-1**
    * Contains following:
      * index.html
      **Subdirectories**
      **static**
      **css**
      - style.css
      **images**
      - nasa.jpg
      - ufo.svg
      **js**
      - app.js
      - data.js
    
    ### Directory: **UFO-level-1**
    * Contains following:
      * index.html
        **Subdirectories**
            **static**
                **css**
                    - style.css
                **images**
                    - nasa.jpg
                    - ufo.svg
                **js**
                    - app.js
                    - data.js

### Directory: **UFO-level-1**
* Contains following:
  * index.html
    **Subdirectories**
        **static**
            **css**
                - style.css
            **images**
                - nasa.jpg
                - ufo.svg
            **js**
                - app.js
                - data.js
                **z.old files** to be ignored

## Running order and notes
### UFO-level-1
**Run: index.html**
* See process map below for the main concepts within the code.
* To be run on Google Chrome
* Table is rendered with full data with single date filter field
* Accepted dates to be entered into filter field are from 1 Jan 2010 to 13 Jan 2010 as per data provided
* Dates must be entered in US format ie 1/13/2010 - concentrated on filtering code
* FIlter value can be submited via pressing the enter key or clicking the "Filter Table" button
* Console logs will call the filter value and the number of records returned in the filtered table
* Table is cleared and rendered again with filtered date
* If filter field is left blank, the full data will be returned in the code

**Considerations**
* Used html start file provided - concentrated on filtering code
* No data cleansing or sorting has taken place - concentrated on filtering code 

![UFO DYNAMIC TABLE WEBPAGE - Filtered by date](https://github.com/jMacProd/javascript-challenge/blob/main/Process%20Maps/UFO_Dynamic_Table_Webpage_Part1.png)

### UFO-level-2
**Run: index.html**
* See process map below for the main concepts within the code.
* To be run on Google Chrome
* Table is rendered with full data
* Text filter field dynamically replaced with 5 dropdown filters
* When filter is selected, table us automatically cleared and rendered again with filtered date
* Subsequent filters can be selected to narrow down the table output.
* Every time a filter is selected the other filters are dynamically adjusted to only include values available in the current data. The filter that was last selected remains the same. For instance, if a date is selected, only cities that had sightings on that date appear in the city filter. But the full date range remains so another date can be selected.
* At each filter selection console logs will call the values for all filters and the number of records returned in the filtered table
* The filter can be returned to no value (top of the dropdown list) to capture all available data.
* The "Filger Table" button is dynamically replaced with a "Reset Table" button which reloads the index.html file, therefore rendering the table with full data.

**Considerations**
* Used html start file provided - concentrated on filtering code. Priority was given to developing a user friendly dropdown filter over creating a webpage.
* No data cleansing or sorting has taken place - concentrated on filtering code
* Idealling, the "Reset Table" button would not refresh the index.html, but only re-filter the data and render the table. This was not able to be achieved by the deadlined.

![UFO DYNAMIC TABLE WEBPAGE
- Filtered by date, city, state, country and shape](https://github.com/jMacProd/javascript-challenge/blob/main/Process%20Maps/UFO_Dynamic_Table_Webpage_Part2.png)

## Technologies
* HTML
* JavaScript
* CSS
* D3.js

## Resources
* https://stackoverflow.com/questions/3536055/stopping-a-javascript-function-when-a-certain-condition-is-met
This concept allowed the code to reduce filter options depending on the current filtered date except for the filter option last selected

* https://stackoverflow.com/questions/33777272/creating-a-drop-down-with-d3-js
* https://stackoverflow.com/questions/20780835/putting-the-country-on-drop-down-list-using-d3-via-csv-file



## Contact
Created by https://github.com/jMacProd - feel free to contact me!

// from data.js
let tableData = data;

// YOUR CODE HERE!
// select the tbody elements using d3
let tbody =d3.select("tbody");
// create a function to build a table
function createTable(data){
    // clear out existing data from the table
    tbody.html('');

    // loop through each object in the data 
    // append rows and cell for each data value in our data
    data.forEach((dataRow)=>{
        let row =tbody.append("tr");

        //use Object.values to return an array of the property values
        // then place  each value into the cells (td)
        Object.values(dataRow).forEach((val)=>{
            let cell = row.append("td");
            cell.text(val);
        });
    });
}
// Create a list of filters - first  create the filter variable and empty array
let filters = {};
// create a function to update the filters
function updateFilters() {

    // Save the element, value, and id of the filter that was changed by user
    let changedElement = d3.select(this).select("input");
    let elementValue = changedElement.property("value");
    let filterId = changedElement.attr("id");
  
    // If a filter value was entered then add that filterId and value to the filters list.
    //  Else, clear that filter from the filters object
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }
  
    // Call function to apply all filters and rebuild the table
    filterTable();
  
  }

function filterTable() {
    // Start with filtered data as table data
    let filteredData = tableData;

    // use Object.entries to return the array of key-value pairs
    // check to see which that match the filter user input values
    Object.entries(filters).forEach(([key,value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    // rebuild the table using filtered data
    createTable(filteredData);
}

// Create the event listener to see when the form filter is changed
d3.selectAll(".filter").on("change", updateFilters);

// Build the table when the page loads or when all user filters are cleared
createTable(tableData);
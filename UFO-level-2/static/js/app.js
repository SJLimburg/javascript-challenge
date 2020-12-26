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
// Create a list of filters - first  create the filter variable
let filters={};
// create a function to update the filters
function updateFilters(){
    // Record the element, value and id of a filter that is changed
    let changedElement = d3.select(this).select("input");
    let elementValue = changedElement.property("value");
    let filterId = changedElement.attr("id");

    // If a filter value is entered - add the vlue and filterId to the list
    // if there is no input for a given filter - clear it from the filter list
    if(elementValue){
        filters[filterId] = elementValue;
    }
    else{
        delete filters[filterId];
    }
    // call the function to build the fully filtered table
    filterTable();
}

function filterTable() {
    // Start with filtered data as table data
    let filteredData = tableData;

    // use Object.entries to return the array of key-value pairs
    // that match the filter values
    Object.entries(filters).forEach(([key,vlaue])=>{
        filteredData = filteredData.filter(row => row[key] === value);
    });

    // rebuild the table using filtered data
    createTable(filteredData);
}

// Create the event listener to see when the form button is clicked
d3.selectAll(".filter").on("change",updateFilters);

// Build the table when the page loads
createTable(tableData);
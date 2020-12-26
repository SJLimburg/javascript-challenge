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
function handleClick(){

    // prevent auto refresh 
    d3.event.preventDefault();

    // retrieve date value from the filter box using the id from the html element
    let dateInput = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // verify a date was entered
    // filter the data usign tthe date input
    if (dateInput) {
        // use our new varible to hold the data filtered to include
        // only those values where the date equals the user dateInput
        filteredData=filteredData.filter(row => row.datetime === dateInput);
    }

    // use the filtered data to rebuild the table
    // since we set filteredData = tableData it will default to 
    // the original data if no date is entered
    createTable(filteredData);
}
// Create the event listener to see when the form button is clicked
d3.selectAll("#filter-btn").on("click",handleClick);

// Build the table when the page loads
createTable(tableData);
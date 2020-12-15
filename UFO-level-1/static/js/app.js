//  Assign the data from `data.js` to a descriptive variable
var tableData = data;
// MY CODE HERE!

// Get a reference to the table body 
var tbody = d3.select("tbody");
// let table = d3.select("table");

// Select the button  and the form
var button = d3.select("#filter-btn");
var form = d3.select("#datetime");


//  Loop Through `data` and console.log each UFO report object
function createTable(tableData){
    // Clear out any existing data in the table
    tbody.html("");
    //  Loop Through `data` and console.log each UFO report object
    tableData.forEach(item => {
        // console.log(item)
    // Step 2:  Use d3 to append one table row `tr` for each UFO report object
        let row = tbody.append("tr");
    // Loop through each field in the row and add the values
        row.append("td").text(item.datetime)
        row.append("td").text(item.city)
        row.append("td").text(item.state)
        row.append("td").text(item.country)
        row.append("td").text(item.shape)
        row.append("td").text(item.durationMinutes)
        row.append("td").text(item.comments)
        }
    );
 };

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node and get the value property from it
    var inputValue = d3.select("#datetime").property("value")
    var filteredData = tableData.filter(row => row.datetime === inputValue);
    
    createTable(filteredData);
    console.log(inputValue);
    console.log(filteredData)
};

// load all without filter on page opening
createTable(tableData);

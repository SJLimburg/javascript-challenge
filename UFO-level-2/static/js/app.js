//  Assign the data from `data.js` to a descriptive variable
let tableData = data;
// Get a reference to the table body 
let tbody = d3.select("tbody");
// let table = d3.select("table") - not neded - kept to remind me

//  Loop Through `data` and console.log each UFO report object
function createTable(data){
    // Clear out any existing data in the table
    tbody.html("");


    //  Loop Through `data` and console.log each UFO report object
    data.forEach((item) => {
        let row =tbody.append("tr");

        
// loop through every field in the item to add the value to the table row
        Object.values(item).forEach(val) =>{
        let cellData = row.append("td");
        cellData.text(val);
      });
    });
 }

function handleClick() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node and get the value property from it
    let inputDate = d3.select("#datetime").property("value")
    let filteredData = tableData

    // Check to see if a date was entered

    if (inputDate) {  
        //  filter table data based on the date

        filteredData = filteredData.filter(row => row.datetime === inputDate);
        }
        
    createTable(filteredData);
}

// Create event handlers 
// Select the button  and the form
d3.select("#filter-btn").on("click", handleClick);
d3.select("#datetime").on("submit", handleClick);

// load all without filter on page opening
createTable(tableData);

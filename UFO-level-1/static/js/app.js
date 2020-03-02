

// YOUR CODE HERE!
// Assign the data from `data.js` to a descriptive variable
var tableData = data;

//load the data of UFO Sightings into rows 

var tableBody = d3.select('tbody');

for (let index = 0; index < tableData.length; index++) {
  var dictionary = tableData[index];
  //build empty row to hold cell data 
  var row = tableBody.append('tr') 
  row.append('td').text(dictionary['datetime']); 
  row.append('td').text(dictionary['city']); 
  row.append('td').text(dictionary['state']);
  row.append('td').text(dictionary['country']); 
  row.append('td').text(dictionary['shape']); 
  row.append('td').text(dictionary['durationMinutes']);
  row.append('td').text(dictionary['comments']);

};


// Select the filter button
var button = d3.select("#filter-btn");

button.on("click", function() {

  //prevent page from refreshing is a must. By default the pages refresh for button click. 
d3.event.preventDefault()

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = tableData.filter(dictionary => dictionary.datetime === inputValue);

  // clear table before new filter
tableBody.html("")
// input filtered data with the loop to select the dictionary of filtered data

for (let index = 0; index < filteredData.length; index++) {
  var dictionary = filteredData[index];
  //build empty row to hold cell data 
  var row = tableBody.append('tr') 
  row.append('td').text(dictionary['datetime']); 
  row.append('td').text(dictionary['city']); 
  row.append('td').text(dictionary['state']);
  row.append('td').text(dictionary['country']); 
  row.append('td').text(dictionary['shape']); 
  row.append('td').text(dictionary['durationMinutes']);
  row.append('td').text(dictionary['comments']);

};
  
  console.log(filteredData);

});
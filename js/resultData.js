function addData(data, view, options, chart, newData) {
    // Loop through the array of new data points
    for (var i = 0; i < newData.length; i++) {
        // Extract the element name, density, and color for the current data point
        var elementName = newData[i][0];
        var density = parseFloat(newData[i][1]);
        var color = newData[i][2];

        // Add the new data point to the existing data array
        data.addRow([elementName, density, color]);
    }

    // Redraw the chart with the updated data
    chart.draw(view, options);
}

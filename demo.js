d3.selectAll("#scores").style("background-color", "yellow");

var newSubject = d3.select('#subject');

newSubject
    .append("option")
    .property("value", "歷史")
    .text("歷史");


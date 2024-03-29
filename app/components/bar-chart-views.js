import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class BarChartViewsComponent extends Component {
  @action 
  runAction(element) {
    // set the dimensions and margins of the graph
    let margin = {top: 30, right: 30, bottom: 70, left: 60};
    let width = 460 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    let svg = d3.select(element)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Parse the Data
    d3.csv("data/oneCatOneNum.csv", 
      function(data) {
      // sort data
      data.sort(function(b, a) {
        return a.Value - b.Value;
      });

      // X axis
      let x = d3.scaleBand()
        .range([ 0, width ])
        .domain(data.map((d) => d.Country ))
        .padding(0.2);

      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

      // Add Y axis
      let y = d3.scaleLinear()
        .domain([0, 13000])
        .range([ height, 0]);

      svg.append("g")
        .call(d3.axisLeft(y));

      // Bars
      svg.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d) => x(d.Country))
        .attr("y", (d) => y(d.Value))
        .attr("width", x.bandwidth())
        .attr("height", (d) => height - y(d.Value))
        .attr("fill", "#69b3a2")
    });
  }
}
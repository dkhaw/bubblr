# bubblr
Reusable D3 Bubble Chart

This API makes it easy to build bubble charts in D3 using data stored in a csv file. Bubble charts allow users to visualize 3 dimensional data, encoded in the x-axis, y-axis, and circle size. Follow these simple steps to create your own bubble chart!

* Initialize your chart, using the methods described.
* Create a function to convert quantitative variables in your csv from strings to numeric data types, similar to below.
```javascript
function type(d) {
  d.param1 = +d.param1;
  d.param2 = +d.param2;
  d.param3 = +d.param3;
  return d;
}
```
* Load your csv file with D3, passing in your data type conversion function.
* Select the div in which to display your chart, bind your data to it, and call your chart object.

  Methods       | Parameters                          | Instructions
  ------------- | ----------------------------------- | ------------
  x             | x-axis variable                     | Pass the name of the variable to encode in the x-axis
  y             | y-axis variable                     | Pass the name of the variable to encode in the y-axis
  xLabel        | x-axis label                        | Pass the label name for the x-axis
  yLabel        | y-axis label                        | Pass the label name for the y-axis
  radius        | circle radius variable              | Pass the name of the variable to encode in the circle size
  color         | circle color                        | Pass the desired color for circles
  key           | circle variable                     | Pass the name of the variable for each circle to be displayed in the tooltip

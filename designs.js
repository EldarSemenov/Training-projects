//gaining access to the DOM specific elements utilizing their ID attribute declaring by a variable name: "const", "var", or "let"
//corresponding to the Syntax of MDN Web Docs: "var element = document.getElementById(id);"
var size = document.getElementById('sizePicker'); // sizePicker goes first in HTML document 
var heightNumber = document.getElementById('inputHeight'); // id inputHeight goes as a second
var widthNumber = document.getElementById('inputWidth'); // id inputWidth goes as a third
var colorPicker = document.getElementById('colorPicker'); // id colorPicker is a forth
var pixelCanvas = document.getElementById('pixelCanvas'); // pixelCanvas is the last id attribute  

//Now I call the submit jquary method to call the Grid using id sizePicker, "inputHeight", "inputWidth" form HTML code
$('#sizePicker').submit(function(event) {// $(dollar) is a jquary object(variable)  //this is a jquery(sizePicker id and event with submit botton. Lesson 8 - 7th part. 'Find and return the element with an ID of "header"'
    event.preventDefault(); //finding jquery submit method in the jQuary API Documentation site( https://api.jquery.com/event.preventDefault/)
    const height = $('#inputHeight').val(); //taking the height value id from HTML
    const width = $('#inputWidth').val(); //taking the width value id from HTML
    makeGrid(height, width);//makeGrid call, installing the height and the width values in the Grid
});
//creating the Grid using nested loops method
function makeGrid(height, width) { 
      // Your code goes here! Lesson 10 - part 5
    for (let i = 1; i <= height; i++){ //(nested  loops method)
      $('#pixelCanvas').append('<tr id=table' + i + '></tr>');//adding i (JavaScrit) parametr to HTML table row
      for (let s = 1; s <= width; s++) { //repeating the same process for td (HTML) by nested loops 
      $('#table' + i).append('<td></td>');//appending id for td(HTML). "i" to get the same square
      }
    };
//appending the color to the created square // see https://jquery.com/
$('td').click (function addColor(value) {//jquery + function "add color"
  color = $('#colorPicker').val(); //using colorPicker id
  if ($(this). attr('style')) {//adding the color for attribute
    $(this).removeAttr('style');//removing the color from the attribute
      } else {
        $(this).attr('style', 'background-color:' + color);//for other attributes have background color
      }
    });
};




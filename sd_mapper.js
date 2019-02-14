/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Rafael Martinez 
   Date: 2/13/19   

*/
var thisTime = new Date();
// This variable saves the date and the day it saves the the curent day. 

var timeStr = thisTime.toLocaleString();
// This variable saves the text of the variable that set the current date.

document.getElementById("timeStamp").innerHTML = timeStr;
// The document finds the selcted ID, and so it will change timeStr variable.

var thisHour = thisTime.getHours();
// The thishour variable uses the thisTime variable and with that it uses.getHours and what this means is can get the hour

var thisMonth = thisTime.getMonth();
// The thisMonth variable find the month using the .getMonth

var mapNum = (2 * thisMonth + thisHour) % 24;
// The mapNum uses the formula to find what number of sky images to use.
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
// The imgStr variable will save the value of the text.
document.getElementById("planisphere").insertAdjacentHTML("afterBegin", imgStr);
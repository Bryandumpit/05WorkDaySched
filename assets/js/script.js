/*
Date into currentDay container id=currentDay
*/

var rightNow = moment().format("MMMM Do, YYYY");
var date = document.querySelector("#currentDay");
date.textContent = rightNow;
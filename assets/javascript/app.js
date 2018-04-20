//$(document).ready(function () {
    $(function ()  {
        loadButtons ("gifItems", "createButtons", ".buttonGroup");
    })
    //Set items array
    var gifItems = ["German Shepherd", "Poodle", "Pit Bull"]; 
    //Create buttons
    function loadButtons (array, classToAdd, areaToAdd) {
        $(areaToAdd).empty(); //Clear out input box
        //Loop through array
        for (var i = 0; i < gifItems.length; i++) {
            var a = $("<button>"); //Creating button to define
            a.addClass(classToAdd); //Adding a class to button
            a.attr("data-type", gifItems[i]); //Adding data type equal to array items
            a.text(gifItems[i]); //Adding text that will display gif item
            $(areaToAdd).append (a);  //END LOADBUTTONS FUNCTION
            
        }
    }


$(document).ready(function () {
    $(function () {
        loadButtons("arrayItems", "searchArea", ".buttonGroup");
    })
    //Set items array
    var arrayItems = ["German Shepherd", "Poodle", "Pit Bull"];
    //Create buttons
    function loadButtons(array, classToAdd, areaToAdd) {
        $(areaToAdd).empty(); //Clear out input box
        //Loop through array
        for (var i = 0; i < arrayItems.length; i++) {
            var a = $("<button>"); //Creating button to define
            a.addClass(classToAdd); //Adding a class to button
            a.attr("data-type", arrayItems[i]); //Adding data type equal to array items
            a.text(arrayItems[i]); //Adding text that will display gif item
            $(areaToAdd).append(a);  //appends new button to buttons area
        }
    }

    //Create listener event. Execute function when search button is clicked
    $(document).on("click", ".searchArea", function () {
        var type = $(this).data("type");
        //queries Giphy API
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=Ph9byLn7rOUYW4AlIB1aSKFuaG1k9nIX&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        })
    })

})
//Need to fix images loading incorrectly
//Need to fix buttons not adding images 
//Need to add animate

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

    //Create event listener. Execute function when search box is clicked
    $(document).on("click", ".searchArea", function () {
        var type = $(this).data("type");
        //queries Giphy API
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=Ph9byLn7rOUYW4AlIB1aSKFuaG1k9nIX&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log (response);
        //Loops through response data array
    for (var i =0; i < response.data.length; i++) {   
        var imageSearch = $("<div class = 'image-search'>");  //Creates image-search class, assigns it to imageSearch variable
        var rating = response.data[i].rating; //Loops through object, acesses rating for each item
        var p = $("<p>").text("Gif Rating: " +rating); //Creates paragraph to display rating
        var stillImage = response.data[i].images.fixed_height_still.url; //Loops through response objects accessing still images
        var animatedImage =response.data[i].images.fixed_height.url; //Loops through response objects accessing animated images
        var image = $("<img>"); //Assigns image tag to image variable
        image.attr("src", stillImage);           //adding attributes to image tag
        image.attr("data-still", stillImage);    //adding attributes to image tag
        image.attr("data-still", animatedImage); //adding attributes to image tag
        image.attr("data-state", "stillImage");   //adding attributes to image tag
        image.addClass("searchImage");   //Add class of searchImage
        imageSearch.append(p);  //Display rating for each image
        imageSearch.append(image);  //Display images for Gifs
        $(".searchArea").append (imageSearch);  //Put imageSearch info in html searchArea class
    }
})
})
$("#submitButton").on("click", function () { 
    var newItem = $("#inputDogBreed").eq(0).val(); //Assigns input text to newItem variable
    arrayItems.push (newItem); //Adds input value to items array
    loadButtons (loadButtons, "searchButton,", "#buttonGroup"); //Execute loadButtons function
    return false; //Prevents page from reloading
})

})
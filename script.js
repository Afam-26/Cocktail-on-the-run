var latPos;
var longPos;

$(".btn").click(function(){
   
    var cocktail = document.getElementById("drink-input").value;
    localStorage.setItem('searchDrink', cocktail);

    location.reload();


});

function fetch(){

var drinkSearch = localStorage.getItem('searchDrink');

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkSearch,
    "method": "GET",
    
    success:function(data){

        if(data.drinks == null){
            document.getElementById("drinkName").innerHTML = "Drink does not seem to exist. Please try again!";
        }

        else{
            document.getElementById("drinkName").innerHTML = data.drinks[0].strDrink;

        if (data.drinks[0].strIngredient1 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient1 +'</li>');
        }

        if (data.drinks[0].strIngredient2 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient2 +'</li>');
        }

        if (data.drinks[0].strIngredient3 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient3 +'</li>');
        }

        if (data.drinks[0].strIngredient4 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient4 +'</li>');
        }

        if (data.drinks[0].strIngredient5 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient5 +'</li>');
        }

        if (data.drinks[0].strIngredient6 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient6 +'</li>');
        }

        if (data.drinks[0].strIngredient7 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient7 +'</li>');
        }

        if (data.drinks[0].strIngredient8 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient8 +'</li>');
        }

        if (data.drinks[0].strIngredient9 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient9 +'</li>');
        }

        if (data.drinks[0].strIngredient10 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient10 +'</li>');
        }

        if (data.drinks[0].strIngredient11 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient11 +'</li>');
        }

        if (data.drinks[0].strIngredient12 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient12 +'</li>');
        }

        if (data.drinks[0].strIngredient13 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient13 +'</li>');
        }

        if (data.drinks[0].strIngredient14 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient14 +'</li>');
        }

        if (data.drinks[0].strIngredient15 != null){
            $("#printIngredients").append('<li>'+ data.drinks[0].strIngredient15 +'</li>');
        }
        if(data.drinks[0].strInstructions!=null){
            $("#printInstructions").append('<p>' + data.drinks[0].strInstructions + '</p>');
        }
        }


    },

    error: function(){

                console.log("Sorry");
    }

};

$.ajax(settings).done(function(response) {
	console.log(response);
})
};

fetch();


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.")
  }
}

function showPosition(position) {
  
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  latPos = position.coords.latitude;
  longPos = position.coords.longitude;

  localStorage.setItem('latNum', latPos);
  localStorage.setItem('longNum', longPos);

}

$(".findBtn").click(function(){
   
   getLocation();
   const settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://yelp-com.p.rapidapi.com/search/nearby/" + localStorage.getItem('latNum') + "/" + localStorage.getItem('longNum') + "?offset=0&term="+ localStorage.getItem('searchDrink') + "&radius=15",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1c3366a160mshfe422dda179d253p1a37c0jsnf0ef6bb35b7f",
		"x-rapidapi-host": "yelp-com.p.rapidapi.com"
    },
    
    success:function(data){
        for(var i = 0; i < 6; i++){
            $("#nearRest").append('<a href="' + data.business_search_results[i].business.url + '" target="_blank"><li>'+ data.business_search_results[i].business.android_app_annotation.annotation_title +'</li></a>');
        }
    },

    error:function(){
        $("#nearRest").append('<a href="https://www.yelp.com/" target="_blank"><li>' + "Click here to find these cocktails near you!" + '</li></a>');
    }
};

$.ajax(settings2).done(function (response) {
	console.log(response);
})

});






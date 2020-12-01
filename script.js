var latPos;
var longPos;
var cityLocation;

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
            localStorage.setItem('drinkMenu', data.drinks[0].strDrink);

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


$(".findBtn").click(function(){
   
   const settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://google-search3.p.rapidapi.com/api/v1/search/q=" + localStorage.getItem('drinkMenu') + "+near+"+ localStorage.getItem('citySpot') +"&num=100",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ac2a29a2dfmsh23cb80d77f48976p103e23jsn6c79ec0e8065",
		"x-rapidapi-host": "google-search3.p.rapidapi.com"
	},
    
    success:function(data){
        for(var i = 0; i < 5; i++){
            $("#nearRest").append('<a href="' + data.results[i].link + '" target="_blank"><li>'+ data.results[i].title +'</li></a>');
        }

        $.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=ae46d8ccddf746e9822ca1f7be226347", function(data) {
       console.log(data.ip_address);
       console.log(data);
       localStorage.setItem('citySpot', data.city);
        })

        
    },

    error:function(){
        $("#nearRest").append('<a href="https://www.yelp.com/" target="_blank"><li>' + "Click here to find these cocktails near you!" + '</li></a>');
    }
};

$.ajax(settings2).done(function (response) {
	console.log(response);
})

});







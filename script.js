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


    }
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
}

fetch();

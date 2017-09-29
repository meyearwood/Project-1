var restaurants_api = "d52ecb4be52dca714fafcf32915e7866";
var user_search= "chinese";
var queryURL = "https://developers.zomato.com/api/v2.1/search?q="+user_search+"&count=10";

$.ajax({
    url: queryURL,
    headers:  {'user-key': restaurants_api }, //different from class's ajax call, we need to add
    method: 'GET'
}).done(function(restaurantData){
    console.log(queryURL);
    restaurantData
});

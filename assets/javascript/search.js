var search = $("#searchInput").val();
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=xoc8kmonGBULYdCHuIy1jeEEVWPTjur5";

$.ajax({
    url: queryUrl,
    method: 'GET'
}).then(function(response){
    console.log(response);
    $("#articles").html(response.docs);
})


// define variables
var $covidNews = $('#covidNews') 


 // clear data
function clearNewsData() {
    $covidNews.html('');
}

 // main news api
function getCovidNews() {
    covidNewsUrl = ('https://newsapi.org/v2/top-headlines?country=sg&q=covid&apiKey=810151c410ef4086baac829ca401a0ce');
    $.getJSON(covidNewsUrl, function(newsData) {
        console.log('Global covid news: ');
        console.log(newsData);
        if (newsData.articles.length > 0) {            
            for (i=0; i < 3; i++) {
                var newsTitle = newsData.articles[i].title;
                var newsUrl = newsData.articles[i].url;

                $covidNews.append(
                    '<li><a href="' + newsUrl + '">' + newsTitle + '</a></li><br/>'
                );
            }
        }
        else {
            $covidNews.append('Global news not available');
        }
    });
};


// reloading data
function reloadNewsData() {
    clearNewsData();
    getCovidNews();
};

//load data on page load
$(document).ready(function() {
    getCovidNews();
})

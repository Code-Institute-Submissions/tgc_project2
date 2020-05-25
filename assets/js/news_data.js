// define variables
var $covidSgNews = $('#covidSgNews') 
var $covidGlobalNews = $('#covidGlobalNews')


 // clear data
function clearNewsData() {
    $covidSgNews.html('');
    $covidGlobalNews.html('');
}

 // local news api
function getSgCovidNews() {
    covidNewsUrl = ('https://newsapi.org/v2/top-headlines?country=sg&sortBy=publishedAt&q=covid&apiKey=810151c410ef4086baac829ca401a0ce');
    $.getJSON(covidNewsUrl, function(newsData) {
        console.log('Local covid news: ');
        console.log(newsData);
        if (newsData.articles.length > 0) {            
            for (i=0; i < 3; i++) {
                var newsTitle = newsData.articles[i].title;
                var newsUrl = newsData.articles[i].url;

                $covidSgNews.append(
                    '<li><a href="' + newsUrl + '">' + newsTitle + '</a></li><br/>'
                );
            }
        }
        else {
            $covidSgNews.append('Local news not available');
        }
    });
};

// global news api
 function getGlobalCovidNews() {
    covidGlobalNewsUrl = ('https://newsapi.org/v2/everything?q=covid&language=en&apiKey=810151c410ef4086baac829ca401a0ce');
    $.getJSON(covidGlobalNewsUrl, function(newsGlobalData) {
        console.log('Global covid news: ');
        console.log(newsGlobalData);
        if (newsGlobalData.articles.length > 0) {            
            for (i=0; i < 3; i++) {
                var newsTitleGlobal = newsGlobalData.articles[i].title;
                var newsUrlGlobal = newsGlobalData.articles[i].url;

                $covidGlobalNews.append(
                    '<li><a href="' + newsUrlGlobal + '">' + newsTitleGlobal + '</a></li><br/>'
                );
            }
        }
        else {
            $covidGlobalNews.append('Lcao news not available');
        }
    });
};


// reloading data
function reloadNewsData() {
    clearNewsData();
    getSgCovidNews();
    getGlobalCovidNews();
};

//load data on page load
$(document).ready(function() {
    getSgCovidNews();
    getGlobalCovidNews();
})

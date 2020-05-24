// define variables
var $covidNews = $('#covidNews') 
var $newsTitle = $('#newsTitle')
var $newsUrl = $('#newsUrl')
var $covidCountryNews = $('#covidCountryNews')


 // clear data
function clearNewsData() {
    $covidNews.html('');
    $newsTotalResults.html('');
}

 // main news api
function getCovidNews() {
    covidNewsUrl = ('https://newsapi.org/v2/top-headlines?q=covid&sortBy=popularity&apiKey=810151c410ef4086baac829ca401a0ce');
    $.getJSON(covidNewsUrl, function(newsData) {
        console.log('Global covid news: ');
        console.log(newsData);
        if (newsData.articles.length > 0) {
            var newsTotalResults = 0;
            
            for (i=0; i < 3; i++) {
                var newsTitle = newsData.articles[i].title;
                var newsUrl = newsData.articles[i].url;

                $covidNews.append(
                    '<li><a href="' + newsUrl + '">' + newsTitle + '</a></li><br/>'
                );
            }
        }
        else {
            $covidNews.append('No results found');
        }
    });
};

// country list
function getCovidCountryNews() {
    covidCountryNewsUrl = ('https://newsapi.org/v2/top-headlines?country=' + countrycode + '&q=covid&sortBy=popularity&apiKey=810151c410ef4086baac829ca401a0ce');
    $.getJSON(covidCountryNewsUrl, function(countryNews){
        console.log('Covid news by country: ')
        console.log(countryNews);
        if (countryNews.articles.length > 0) {
            var newsTotalResults = 0;
            
            for (i=0; i < 3; i++) {
                var countryNewsTitle = countryNews.articles[i].title;
                var countryNewsUrl = countryNews.articles[i].url;

                $covidCountryNews.append(
                    '<li><a href="' + countryNewsUrl + '">' + countryNewsTitle + '</a></li><br/>'
                );
            }
        }
        else {
            $covidCountryNews.append('No results found');
        }
    });
}

//country look-up
$("searchCountries").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#countryNews").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

// reloading data
function reloadNewsData() {
    clearNewsData();
    getCovidNews();
};

//load data on page load
$(document).ready(function() {
    getCovidNews();
});

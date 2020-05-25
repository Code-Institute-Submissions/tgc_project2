//token for google
var google_access_token = "AIzaSyCL-2h1wEWTB6lmVZGHVX7Z6j92pBzw9YE";

//load g charts
google.charts.load('current', {
    'packages': ['corechart', 'geochart'],
    'mapsApiKey': google_access_token
});

//variables for html
var $covidTable = $('#covidTable')

var $sgNewConfirmed = $('#sgNewConfirmed');
var $sgTotalConfirmed = $('#sgTotalConfirmed');
var $sgNewDeaths = $('#sgNewDeaths');
var $sgTotalDeaths = $('#sgTotalDeaths');
var $sgNewRecovered = $('#sgNewRecovered');
var $sgTotalRecovered = $('#sgTotalRecovered');

var $globeNewConfirmed = $('#globeNewConfirmed');
var $globeTotalConfirmed = $('#globeTotalConfirmed');
var $globeNewDeaths = $('#globeNewDeaths');
var $globeTotalDeaths = $('#globeTotalDeaths');
var $globeNewRecovered = $('#globeNewRecovered');
var $globeTotalRecovered = $('#globeTotalRecovered');

var $country = $('#country');
var $newConfirmed = $('#newConfirmed');
var $totalConfirmed = $('#totalConfirmed');
var $newDeaths = $('#newDeaths');
var $totalDeaths = $('#totalDeaths');
var $newRecovered = $('#newRecovered');
var $totalRecovered = $('#totalRecovered');

var $ratioSgRecovered = $('#ratioSgRecovered');
var $ratioSgRecoveredChart = $('#ratioSgRecoveredChart');
var $ratioSgTotalConfirmed = $('#ratioSgTotalConfirmed');
var $ratioSgTotalRecovered = $('#ratioSgTotalRecovered');


//clear data
function clearData() {
    $covidTable.html('');

    $globeNewConfirmed.html('');
    $globeTotalConfirmed.html('');
    $globeNewDeaths.html('');
    $globeTotalDeaths.html('');
    $globeNewRecovered.html('');
    $globeTotalRecovered.html('');

    $sgNewConfirmed.html('');
    $sgNewDeaths.html('');
    $sgNewRecovered.html('');
    $sgTotalConfirmed.html('');
    $sgTotalDeaths.html('');
    $sgTotalRecovered.html('');

    $ratioSgRecovered.html('');
    $ratioSgRecoveredChart.html('');
    $ratioSgTotalConfirmed.html('');
    $ratioSgTotalRecovered.html('');
}

//stats
function getCovidData() {
    covidDataUrl = ('https://api.covid19api.com/summary');
    $.getJSON(covidDataUrl, function(covidData) {
        console.log('Covid Data: ');
        console.log(covidData);
        if (covidData.Countries.length > 0) {
            var sgNewConfirmed = 0;
            var sgTotalConfirmed = 0;
            var sgNewDeaths = 0;
            var sgTotalDeaths = 0;
            var sgNewRecovered = 0;
            var sgTotalRecovered = 0;

            var globeNewConfirmed = 0;
            var globeTotalConfirmed = 0;
            var globeNewDeaths = 0;
            var globeTotalDeaths = 0;
            var globeNewRecovered = 0;
            var globeTotalRecovered = 0;

            for (i=0; i < covidData.Countries.length; i++) {
                var country = covidData.Countries[i].Country;
                var newConfirmed = covidData.Countries[i].NewConfirmed;
                var totalConfirmed = covidData.Countries[i].TotalConfirmed;
                var newDeaths = covidData.Countries[i].NewDeaths;
                var totalDeaths = covidData.Countries[i].TotalDeaths;
                var newRecovered = covidData.Countries[i].NewRecovered;
                var totalRecovered = covidData.Countries[i].TotalRecovered;

                var sgNewConfirmed = covidData.Countries[150].NewConfirmed;
                var sgTotalConfirmed = covidData.Countries[150].TotalConfirmed;
                var sgNewDeaths = covidData.Countries[150].NewDeaths;
                var sgTotalDeaths = covidData.Countries[150].TotalDeaths;
                var sgNewRecovered = covidData.Countries[150].NewRecovered;
                var sgTotalRecovered = covidData.Countries[150].TotalRecovered;

                var countryTable = covidData.Countries[i].Country;
                var totalConfirmedTable = covidData.Countries[i].TotalConfirmed;
                var newDeathsTable = covidData.Countries[i].NewDeaths;
                var totalDeathsTable = covidData.Countries[i].TotalDeaths;
                var newRecoveredTable = covidData.Countries[i].NewRecovered;
                var newConfirmedTable = covidData.Countries[i].NewConfirmed;
                var totalRecoveredTable = covidData.Countries[i].TotalRecovered;

                globeNewConfirmed += newConfirmed;
                globeTotalConfirmed += totalConfirmed;
                globeNewDeaths += newDeaths;
                globeTotalDeaths += totalDeaths;
                globeNewRecovered += newRecovered;
                globeTotalRecovered += totalRecovered;

                sgNewConfirmed += newConfirmed;
                sgTotalConfirmed += totalConfirmed;
                sgNewDeaths += newDeaths;
                sgTotalDeaths += totalDeaths;
                sgNewRecovered += newRecovered;
                sgTotalRecovered += totalRecovered;

                //table
                $covidTable.append(
                    '<tr><td>' + countryTable + 
                    '</td><td>' + totalConfirmedTable + 
                    '</td><td>' + totalDeathsTable + 
                    '</td><td>' + totalRecoveredTable + 
                    '</td><td>' + newConfirmedTable + 
                    '</td><td>' + newDeathsTable +
                    '</td><td>' + newRecoveredTable +
                    '</td></tr>'
                    );
            }

            $globeNewConfirmed.append(globeNewConfirmed.toLocaleString());
            $globeTotalConfirmed.append(globeTotalConfirmed.toLocaleString());
            $globeNewDeaths.append(globeNewDeaths.toLocaleString());
            $globeTotalDeaths.append(globeTotalDeaths.toLocaleString());
            $globeNewRecovered.append(globeNewRecovered.toLocaleString());
            $globeTotalRecovered.append(globeTotalRecovered.toLocaleString());

            $sgNewConfirmed.append(sgNewConfirmed.toLocaleString());
            $sgTotalConfirmed.append(sgTotalConfirmed.toLocaleString());
            $sgNewDeaths.append(sgNewDeaths.toLocaleString());
            $sgTotalDeaths.append(sgTotalDeaths.toLocaleString());
            $sgNewRecovered.append(sgNewRecovered.toLocaleString());
            $sgTotalRecovered.append(sgTotalRecovered.toLocaleString());
        
            //world map
            drawMap(covidData.Countries, 'TotalConfirmed', 'totalCasesMap');
        } else {
            console.log('Wait before reloading!')
        }
    })

}

function drawMap(countriesArr, key, elementId) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Cases');

    for (i=0; i< countriesArr.length; i++) {

        if (countriesArr[i].Country == "United States of America") {
            countriesArr[i].Country = "United States";
        }

        if (countriesArr[i].Country == "Russian Federation") {
            countriesArr[i].Country = "RU";
        }

        data.addRow(
            [countriesArr[i].Country, countriesArr[i][key]]
        );
    }

    var options = {
        colorAxis: {colors: ['#D89FA6', '#F1202B']},
        backgroundColor: '#5D001E'
    };

    var element = document.getElementById(elementId);
    if (typeof(element) != 'undefined' && element != null) {
        var chart = new google.visualization.GeoChart(document.getElementById(elementId));
        chart.draw(data, options);
    };
};


//show-collapse
$("#showAll").click(function(){
    $("#covidTable").show();
})

$("#collapseAll").click(function(){
    $("#covidTable").hide();
})


//format numbers
function formatNumber(number) {
    // 9 zeroes for bil
    return Math.abs(Number(number)) >= 1.0e+9
    ? (Math.abs(Number(number)) / 1.0e+9).toFixed(2) + "B"

    // 6 zeroes for mil
    : Math.abs(Number(number)) >= 1.0e+6
    ? (Math.abs(Number(number)) / 1.0e+6).toFixed(2) + "M"
    
    // 3 zerose for thousands
    : Math.abs(Number(number)) >= 1.0e+3
    ? (Math.abs(Number(number)) / 1.0e+3).toFixed(2) + "K"
    : Math.abs(Number(number));
};

// resize trigger  
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);
});

// country lookup search
$("#searchCountry").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#covidTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

// re-load upon resize  
$(window).on('resizeEnd', function() {
    reloadData();
});

//data reload
function reloadData() {
    clearData();
    getCovidData();
}

//data on page load
$(document).ready(function() {
    getCovidData();
})


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
                    '<tr><td>' + country + 
                    '</td><td>' + totalConfirmed + 
                    '</td><td>' + totalDeaths + 
                    '</td><td>' + totalRecovered + 
                    '</td><td>' + newConfirmed + 
                    '</td><td>' + newDeaths +
                    '</td><td>' + newRecovered +
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
            
            //ratioRecovered
            $ratioSgTotalConfirmed.append(formatNumber(sgTotalConfirmed));
            $ratioSgTotalRecovered.append(formatNumber(sgTotalRecovered));

            var ratioSgRecovered = ((sgTotalRecovered/sgTotalConfirmed)*100).toFixed(1);
            console.log(ratioSgRecovered);
            $ratioSgRecovered.append(ratioSgRecovered);

            var sgMinusRecovered = sgTotalConfirmed - sgTotalRecovered;
            drawDonutChart(sgTotalRecovered, sgMinusRecovered)


        } else {
            console.log('No data for now!')
        }
    })

}

//draw donut chart
function drawDonutChart(value1, value2) {
    var data = new google.visualization.arrayToDataTable([
        ['Ratio', 'Percent'],
        ['Recovered', value1],
        ['Not Recovered', value2],
    ]);

    var options = {
        pieHole: 0.7,
        legend: 'none',
        colors: ['#4455AB', '#f1f3f9'],
        chartArea: {'width': '100%', 'height': '100%'},
        pieSliceText: 'none'
    };

    var element = document.getElementById('ratioSgRecoveredChart');
    if (typeof(element) != 'undefined' && element != null) {
        var chart = new google.visualization.PieChart(document.getElementById('ratioSgRecoveredChart'));
        chart.draw(data, options);
    };
};

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

// create trigger for resizeEnd event     
$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);
});

// call function when window resize is done 
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
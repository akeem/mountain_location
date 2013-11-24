var cheerio = require('cheerio')
var request = require('request');

request('http://trailmapcompare.com/ski-resorts/nyc-new-york-city', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var fetchedHTML = body;
    var parsedHTML = cheerio.load(fetchedHTML);

    parsedHTML('.grid_panel-box').map(function(i, foo) {
      var mountainName = cheerio(foo).find('strong');
      var cityAndState = cheerio(foo).find(".grid_panel-resort_subtext");

      console.log("%s,", mountainName.text(), cityAndState.text());
    })

  }
})

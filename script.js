// JavaScript Document
  $.getJSON('http://en.wikipedia.org/w/api.php?action=parse&page=' + inputText + '&prop=text&format=json&callback=?', function(json) { 
    $('#wikiInfo').html(json.parse.text['*']); 
    $("#wikiInfo").find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");}); 
    $("#wikiInfo").find("a").attr("target", "_blank"); 
  });
  $('#search-button').on('click', function () {
  var inputText = $.trim($('#query').val());
  startSearch(inputText);
  });



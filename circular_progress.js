function Circlle(el){
  $(el).circleProgress({fill: {color: '#16ece2'}})
    .on('circle-animation-progress',
    function(event, progress, stepValue){
      $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
              });  
  };
  Circlle('.round');
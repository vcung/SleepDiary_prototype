   d3.selectAll('.back-btn')
   .on('click', function() {
      d3.select('body').html('');

      d3.html('2-main.html', function(err, d) {
          if(err) console.log(err);
          d3.select('body').node().appendChild(d);
      });
    });
   
   d3.selectAll('.navbar-brand')
   .on('click', function() {
      d3.select('body').html('');

      d3.html('2-main.html', function(err, d) {
          if(err) console.log(err);
          d3.select('body').node().appendChild(d);
      });
    });

// $("#cozy").click(function() {
//     $('body').addClass('cozy-theme');
// });
// $("#standard").click(function() {
//     $('body').removeClass('cozy-theme');
// });
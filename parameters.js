/*var para = { 'menu_height': screen.height * 0.5,
    'menu_width': screen.width * 0.5 * 3,
    'menu_2height': screen.height * 0.8,
    'menu_2width': screen.width * 1.3,
    'head_width': screen.width * 3.1,
    'head_height': screen.height * 0.3,
    'screen_width': screen.width * 3,
    'screen_height': screen.height * 2.5,
    'big' : '120px',
    'small': '40px',
    'mid': '60px',
    'mid_margin' : screen.width * 0.2,
    'top_margin' : screen.height * 0.5,
    'top_margin_small' : screen.height * 0.1
    },
    //new Date(year, month, day, hours, minutes)

    data = [
     'e1': {'Date1': new Date(2015,2,15),
     'Date2': new Date(2015,2,16),
     'BedTime': new Date(2015,2,15,23,30),
     'Wakeup': new Date(2015,2,16,07,30),
     'Interrupt': [new Date(2015,2,16,05,3)],
     'Rating': 4,
     'Comment': 'say something...'},

     'e2': {'Date1': new Date(2015,2,16),
     'Date2': new Date(2015,2,17),
     'BedTime': new Date(2015,2,16,23,40),
     'Wakeup': new Date(2015,2,17,08,30),
     'Interrupt': [],
     'Rating': 4,
     'Comment': 'say something...'},
     ],

     current_entry = 'e2'
    ;
*/

$(document).ready(function(){
$("#back-save-custom").click(function(){
    $(".overlay").show();
    $(".overlay .yes-btn").click(function() {
        window.location = "9-view_entries.html";
    });
    $(".overlay .no-btn").click(function () {
        window.location = "2-main.html";
    });
});

$(".sleep-bg").click(function () {
   $(".overlay").show();
});
$(".glyphicon-trash").click(function () {
   $(".overlay").show();
   var selected = $(this);
    $(".overlay .yes-btn").click(function() {
        $(selected).parents(".entry").remove();
        $(".overlay").hide();
    });
    $(".overlay .no-btn").click(function () {
        $(".overlay").hide();
    });
});

$("#save-auto-entry").click(function(){
    $(".overlay").show();
    $(".overlay .yes-btn").click(function() {
        window.location = "9-view_entries.html";
    });
    $(".overlay .no-btn").click(function () {
        window.location = "4-good_night.html";
        $(".overlay").show(); //if this doesn't show popup, goto 5-wake_up.html
    });
});

$("#reset").click(function(){
    $(".overlay").show();
    $(".overlay .yes-btn").click(function() {

        window.location = "2-main.html";
    });
    $(".overlay .no-btn").click(function () {
        $(".overlay").hide();
    });
});
$(".layout-btn").click(function(){
    $(this).addClass('active');
    $(this).siblings(".btn").removeClass('active');
});
});
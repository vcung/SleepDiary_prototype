var test = 1,
    para = {
    'fhead' : '25px',
    'fbig': '20px',
    'fmid': '18px',
    'fsmall': '8px',
    'layout': 'standard'
    },
    motto = [
    'Sleeping is no mean art: for its sake one must stay awake all day. ~Friedrich Nietzsche',
    'If you can\'t sleep, then get up and do something instead of lying there worrying. ~Dale Carnegie',
    'No day is so bad it can\'t be fixed with a nap. ~Carrie Snow',
    'Life is something that happens when you can\'t get to sleep. ~Fran Lebowitz',
    'It\'s a cruel season that makes you get ready for bed while it\'s light out. ~Bill Watterson',
    'A good laugh and a long sleep are the best cures in the doctor\'s book. ~Irish Proverb',
    'Life is too short to sleep on low thread-count sheets. ~Leah Stussy',
    'People who say they sleep like a baby usually don\'t have one. ~Leo J. Burke'
    ],
    data = [
     {'Bedtime': new Date(2015,2,15,23,30), 
     'Wakeup': new Date(2015,2,16,08,30), 
     'Interrupt': ['00:10AM', '00:20AM'],
     'Rating': 4.3,
     'Comment': ''},
     {'Bedtime': new Date(2015,2,16,23,50), 
     'Wakeup':new Date(2015,2,17,08,40), 
     'Interrupt': ['02:10AM'],
     'Rating': 4.2,
     'Comment': 'I was plagued by nightmares'},
     
     {'Bedtime': new Date(2015,2,18,00,30), 
     'Wakeup':new Date(2015,2,18,09,30), 
     'Interrupt': [],
     'Rating': 5,
     'Comment': ''},

     {'Bedtime': new Date(2015,2,19,01,50), 
     'Wakeup':new Date(2015,2,19,10,10), 
     'Interrupt': [],
     'Rating': 5,
     'Comment': ''},

     {'Bedtime': new Date(2015,2,19,23,55), 
     'Wakeup':new Date(2015,2,20,08,20), 
     'Interrupt': [],
     'Rating': 4.8,
     'Comment': 'milk'},

      {'Bedtime': new Date(2015,2,21,01,40), 
     'Wakeup':new Date(2015,2,21,06,10), 
     'Interrupt': [],
     'Rating': 2.1,
     'Comment': 'dead'},

      {'Bedtime': new Date(2015,2,22,00,15), 
     'Wakeup':new Date(2015,2,22,05,10), 
     'Interrupt': [],
     'Rating': 3,
     'Comment': 'dead'},

     {'Bedtime': new Date(2015,2,22,23,10), 
     'Wakeup':new Date(2015,2,23,08,10), 
     'Interrupt': [],
     'Rating': 4,
     'Comment': ''},
      
      {'Bedtime': new Date(2015,2,23,23,20), 
     'Wakeup':new Date(2015,2,24,09,10), 
     'Interrupt': [],
     'Rating': 3.5,
     'Comment': ''},

     {'Bedtime': new Date(2015,2,25,00,40), 
     'Wakeup':new Date(2015,2,25,09,10), 
     'Interrupt': [],
     'Rating': 4.1,
     'Comment': ''},

     {'Bedtime': new Date(2015,2,25,23,50), 
     'Wakeup':new Date(2015,2,26,09,20), 
     'Interrupt': [],
     'Rating': 4.3,
     'Comment': ''}
    ],
    current_entry = [
   ],
   hashMon = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']


function formatDate(d){
    var tmp = d.getMonth() + '-' + d.getDate() + '-' + (d.getYear() + (2015 - 115)) + ' '
     return tmp;
}

function formatTime(d){
    var tmp = hashMon[d.getMonth() - 1]+ '. ' + d.getDate() + ' ' + (d.getYear() + (2015 - 115)) + ', ',
        hours =  d.getHours(),
        suffix = 'AM';
        if(hours > 12){
            suffix = 'PM'
            hours = hours - 12
        }
     return tmp + hours + ':' + d.getMinutes() + suffix;
}

function getHoursTime(d){
    var tmp = d.getMonth() + '-' + d.getDate() + '-' + (d.getYear() + (2015 - 115)) + ' ',
        hours =  d.getHours(),
        suffix = 'AM';
        if(hours > 12){
            suffix = 'PM'
            hours = hours - 12
        }
     return hours + ':' + d.getMinutes() + suffix;
}

function getHoursBetween (d1, d2) {
    var tmp = Math.abs(d1.getTime() - d2.getTime())
    return tmp / 36 /100000;
}
//The main interface
$home_screen = $("#home_screen");
$view_entries_screen = $("#view_entries_screen");
$back_btn = $(".back-btn");
$("#entries-btn").click(function () {
       $home_screen.removeClass("active");
       $view_entries_screen.addClass("active");
       $back_btn.show();
       $back_btn.click(function () {
            $view_entries_screen.removeClass("active");
            $home_screen.addClass("active");
            $(".overlay").hide();
       });
});

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
$("#back-to-entries").click(function(){
    $(".overlay").show();
    $(".overlay .yes-btn").click(function() {
        window.location = "9-view_entries.html";
    });
    $(".overlay .no-btn").click(function () {
        window.location = "9-view_entries.html";
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

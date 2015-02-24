var para = {
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
     'Interrupt': ['00:10', '00:20'],
     'Rating': 4.3,
     'Comment': ''},
     {'Bedtime': new Date(2015,2,16,23,50), 
     'Wakeup':new Date(2015,2,17,08,40), 
     'Interrupt': ['02:10'],
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
     'Wakeup':new Date(2015,2,20,09,20), 
     'Interrupt': [],
     'Rating': 4.8,
     'Comment': 'milk'},

     {'Bedtime': new Date(2015,2,20,23,20), 
     'Wakeup':new Date(2015,2,21,07,40), 
     'Interrupt': ['02:10', '04:50'],
     'Rating': 3,
     'Comment': 'feel tired'},

      {'Bedtime': new Date(2015,2,21,01,40), 
     'Wakeup':new Date(2015,2,21,06,10), 
     'Interrupt': [],
     'Rating': 2.1,
     'Comment': 'dead'},

      {'Bedtime': new Date(2015,2,21,23,15), 
     'Wakeup':new Date(2015,2,22,08,10), 
     'Interrupt': [],
     'Rating': 3,
     'Comment': 'dead'},

     {'Bedtime': new Date(2015,2,22,23,10), 
     'Wakeup':new Date(2015,2,23,08,10), 
     'Interrupt': [],
     'Rating': 4,
     'Comment': ''},

     {'Bedtime': new Date(2015,2,24,00,40), 
     'Wakeup':new Date(2015,2,24,09,10), 
     'Interrupt': [],
     'Rating': 4.1,
     'Comment': ''},

     {'Bedtime': new Date(2015,2,25,23,50), 
     'Wakeup':new Date(2015,2,26,08,20), 
     'Interrupt': [],
     'Rating': 5.3,
     'Comment': ''}
    ],
    current_entry = [
   ]

//     //new Date(year, month, day, hours, minutes)
//     data = [
//      'e1': {'Date1': new Date(2015,2,15),
//      'Date2': new Date(2015,2,16),
//      'BedTime': new Date(2015,2,15,23,30),
//      'Wakeup': new Date(2015,2,16,07,30),
//      'Interrupt': [new Date(2015,2,16,05,3)],
//      'Rating': 4,
//      'Comment': 'say something...'},

//      'e2': {'Date1': new Date(2015,2,16),
//      'Date2': new Date(2015,2,17),
//      'BedTime': new Date(2015,2,16,23,40),
//      'Wakeup': new Date(2015,2,17,08,30),
//      'Interrupt': [],
//      'Rating': 4,
//      'Comment': 'say something...'}
//      ],
//      current_entry = 'e2'

function formatTime(d){
    return d.getMonth() + '-' + d.getDate() + '-' + (d.getYear() + (2015 - 115)) 
    + ' ' + d.getHours() + ':' + d.getMinutes();
}

function getHoursBetween (d1, d2) {

    var tmp = Math.abs(d1.getTime() - d2.getTime())
    return tmp / 36 /100000;
}
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

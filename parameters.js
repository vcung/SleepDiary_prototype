var para = {
    'fhead' : '25px',
    'fbig': '20px',
    'fmid': '18px',
    'fsmall': '10px',
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
     {'Bedtime': {'Date':'2015-02-15', 'Time':'23:30'}, 
     'Wakeup': {'Date':'2015-02-16', 'Time':'7:30'}, 
     'Interrupt': ['0:10', '0:20'],
     'Rating': 5,
     'Comment': ''},

     {'Bedtime': {'Date':'2015-02-16', 'Time':'00:30'}, 
     'Wakeup':{'Date':'2015-02-17', 'Time':'8:30'}, 
     'Interrupt': ['2:10'],
     'Rating': 4,
     'Comment': 'Nightmare'}
    ],
    current_entry = [
    {'Bedtime': {'Date':'2015-02-22', 'Time':'22:30'}, 
     'Wakeup': {'Date':'2015-02-23', 'Time':'7:30'}, 
     'Interrupt': [],
     'Rating': 5,
     'Comment': ''}]

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

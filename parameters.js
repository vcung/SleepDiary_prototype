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
    sub_data = [],
    current_entry = -1,
    data = [
     {'Bedtime': new Date("Feb 12, 2015 23:30:00"), 
     'Wakeup': new Date("Feb 13, 2015 08:40:00"), 
     'Interrupt': [],
     'Rating': 4.3,
     'Comment': ''},

     {'Bedtime': new Date("Feb 13, 2015 23:30:00"), 
     'Wakeup': new Date("Feb 14, 2015 07:40:00"), 
     'Interrupt': ['00:10'],
     'Rating': 4.3,
     'Comment': ''},

     {'Bedtime': new Date("Feb 14, 2015 23:55:00"), 
     'Wakeup':new Date("Feb 15, 2015 08:10:00"), 
     'Interrupt': [],
     'Rating': 4.2,
     'Comment': ''},

     {'Bedtime': new Date("Feb 16, 2015 00:10:00"), 
     'Wakeup':new Date("Feb 16, 2015 08:10:00"), 
     'Interrupt': [],
     'Rating': 4.6,
     'Comment': ''},

     {'Bedtime': new Date("Feb 16, 2015 23:35:00"), 
     'Wakeup':new Date("Feb 17, 2015 07:30:00"), 
     'Interrupt': ['02:10'],
     'Rating': 4.2,
     'Comment': 'I was plagued by nightmares'},

     {'Bedtime': new Date("Feb 18, 2015 00:50:00"), 
     'Wakeup':new Date("Feb 18, 2015 09:30:00"), 
     'Interrupt': [],
     'Rating': 5,
     'Comment': ''},

     {'Bedtime': new Date("Feb 19, 2015 01:10:00"), 
     'Wakeup':new Date("Feb 19, 2015 10:30:00"), 
     'Interrupt': [],
     'Rating': 5,
     'Comment': ''},

     {'Bedtime': new Date("Feb 19, 2015 23:45:00"), 
     'Wakeup':new Date("Feb 20, 2015 08:35:00"), 
     'Interrupt': [],
     'Rating': 4.8,
     'Comment': 'milk'},

      {'Bedtime': new Date("Feb 21, 2015 01:40:00"), 
     'Wakeup':new Date("Feb 21, 2015 06:10:00"), 
     'Interrupt': [],
     'Rating': 2.1,
     'Comment': 'dead'},

      {'Bedtime': new Date("Feb 22, 2015 00:15:00"), 
     'Wakeup':new Date("Feb 22, 2015 05:05:00"), 
     'Interrupt': ['03:40'],
     'Rating': 3,
     'Comment': 'dead'},

     {'Bedtime': new Date("Feb 23, 2015 00:50:00"), 
     'Wakeup':new Date("Feb 23, 2015 07:05:00"), 
     'Interrupt': [],
     'Rating': 3.5,
     'Comment': ''},
      
      {'Bedtime': new Date("Feb 23, 2015 23:30:00"), 
     'Wakeup':new Date("Feb 24, 2015 08:10:00"), 
     'Interrupt': [],
     'Rating': 3.5,
     'Comment': ''},

     {'Bedtime': new Date("Feb 25, 2015 00:10:00"), 
     'Wakeup':new Date("Feb 25, 2015 09:10:00"), 
     'Interrupt': [],
     'Rating': 4.1,
     'Comment': ''},

     {'Bedtime': new Date("Feb 25, 2015 23:40:00"), 
     'Wakeup':new Date("Feb 26, 2015 07:40:00"), 
     'Interrupt': [],
     'Rating': 4.3,
     'Comment': ''},

     {'Bedtime': new Date("Feb 26, 2015 23:10:00"), 
     'Wakeup':new Date("Feb 27, 2015 06:40:00"), 
     'Interrupt': ['01:15'],
     'Rating': 3.9,
     'Comment': ''}
    ],
    current_entry = [
   ],
   hashMon = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

para.fsmall = Math.floor(window.width / 100) + 'px';

/******************************
 * reverse the order of entries
 *******************************/
data.reverse();

function makeADate(date, hrs){
    var arrDate = date.split('-'),
        arrHrs = hrs.split(':'),
        year = arrDate[0],
        mon = hashMon[+arrDate[1] - 1],
        date = arrDate[2],
        hrs = arrHrs[0],
        min = arrHrs[1],
        str = mon + ' ' + date + ', ' + year + ' ' + hrs + ':' + min + ':00',
        d = new Date(str)
       return d
}

function formatDate(d){
    var tmp = d.getMonth() + '-' + d.getDate() + '-' + (d.getYear() + (2015 - 115)) + ' '
     return tmp;
}

function formatTime(d){
    if(!d)
        return
    var tmp = hashMon[+d.getMonth()]+ '. ' + d.getDate() + ' ' + (d.getYear() + (2015 - 115)) + ', ',
        hoursStr, minStr,
        hours = +d.getHours(),
        mins = +d.getMinutes(),
        suffix = 'AM';
        if(hours > 12){
            suffix = 'PM'
            hours = hours - 12
        }
        hoursStr = hours < 10 ? '0' + hours : hours
        minStr = mins < 10 ? '0' + mins : mins

     return tmp + hoursStr + ':' + minStr + ' ' + suffix;
}

function formatTimeOnly(d){
    var arr =  d.split(":"), hoursStr, minStr,
        hours = +arr[0],
        suffix = 'AM';
        if(hours > 12){
            suffix = 'PM'
            hours = hours - 12
        }
        hoursStr = hours < 10 ? '0' + hours : hours
        minStr = (+arr[1]) < 10 ? ('0' + (+arr[1])) : (arr[1])
     return hoursStr + ':' + minStr + ' ' + suffix;
}

function getHoursTime(d){
    var tmp = d.getMonth() + '-' + d.getDate() + '-' + (d.getYear() + (2015 - 115)) + ' ',
        hours =  d.getHours(),
        suffix = 'AM';
        if(hours > 12){
            suffix = 'PM'
            hours = hours - 12
        }
     return hours + ':' + d.getMinutes() + ' ' + suffix;
}

function getHoursBetween (d1, d2) {
    var tmp = Math.abs(d1.getTime() - d2.getTime())
    return tmp / 36 /100000;
}


$(document).ready(function(){
$("#back-save-custom").on('click', function(){
    $(".overlay").show();
    $(".overlay .yes-btn").on('click', function() {
        window.location = "9-view_entries.html";
    });
    $(".overlay .no-btn").on('click', function () {
        window.location = "2-main.html";
    });
});
// may not need?

// $(".sleep-bg").click(function () {
//    $(".overlay").show();
// }); 
// moved to good_night html

// $(".glyphicon-trash").click(function () {
//    $(".overlay").show();
//    var selected = $(this);
//     $(".overlay .yes-btn").click(function() {
//         $(selected).parents(".entry").remove();
//         $(".overlay").hide();
//     });
//     $(".overlay .no-btn").click(function () {
//         $(".overlay").hide();
//     });
// });
// moved to view entries

// $("#save-auto-entry").click(function(){
//     $(".overlay").show();
//     $(".overlay .yes-btn").click(function() {
//         window.location = "9-view_entries.html";
//     });
//     $(".overlay .no-btn").click(function () {
//         window.location = "4-good_night.html";
//         $(".overlay").show(); //if this doesn't show popup, goto 5-wake_up.html
//     });
// });
// moved to auto_entry html

// $("#back-to-entries").click(function(){
//     $(".overlay").show();
//     $(".overlay .yes-btn").click(function() {
//         window.location = "9-view_entries.html";
//     });
//     $(".overlay .no-btn").click(function () {
//         window.location = "9-view_entries.html";
//     });
// });
// moved to edit1 html

$(".layout-btn").on('click', function(){
    $(this).addClass('active');
    $(this).siblings(".btn").removeClass('active');
});
});

var para = { 'menu_height': 70,
    'head_width': 300,
    'head_height': 70,
    'screen_width': 300,
    'screen_height': 470
    },
    //new Date(year, month, day, hours, minutes)
    data = [
    {'Date1': new Date(2015,2,15),
     'Date2': new Date(2015,2,16),
     'BedTime': new Date(2015,2,15,23,30),
     'Wakeup': new Date(2015,2,16,07,30),
     'Interrupt': [new Date(2015,2,16,05,3)],
     'Rating': 4,
     'Comment': 'say something...'},

     {'Date1': new Date(2015,2,16),
     'Date2': new Date(2015,2,17),
     'BedTime': new Date(2015,2,16,23,40),
     'Wakeup': new Date(2015,2,17,08,30),
     'Interrupt': [],
     'Rating': 4,
     'Comment': 'say something...'},
     ],

     current_entry = 
     {'Date1': new Date(2015,2,16),
     'Date2': new Date(2015,2,17),
     'BedTime': new Date(2015,2,16,23,40),
     'Wakeup': new Date(2015,2,17,08,30),
     'Interrupt': [],
     'Rating': 4,
     'Comment': 'say something...'}
    ;
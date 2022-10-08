$('document').ready(function() {

    const songs = {
        "song":[
            {
                "Title":"On My Own",
                "Key":"C",
                "Length":"3:55",
                "Genre":"Rock"
            },
            {
                "Title":"Darkness Sets In",
                "Key":"C Minor",
                "Length":"4:30",
                "Genre":"Rock"
            },
            {
                "Title":"Rage",
                "Key":"G",
                "Length":"4:54",
                "Genre":"Rock"
            },
            {
                "Title":"Cool Cat",
                "Key":"B",
                "Length":"3:01",
                "Genre":"Pop"
            },
            {
                "Title":"Honey Brown",
                "Key":"A",
                "Length":"4:12",
                "Genre":"Rock"
            },
            {
                "Title":"High Vibe Information",
                "Key":"A Minor",
                "Length":"2:22",
                "Genre":"Pop"
            },
            {
                "Title":"The Abyss",
                "Key":"G Minor",
                "Length":"3:19",
                "Genre":"Pop"
            },
            {
                "Title":"Block That Bitch",
                "Key":"D",
                "Length":"3:33",
                "Genre":"Pop"
            },
            {
                "Title":"Do You Feel?",
                "Key":"C",
                "Length":"3:41",
                "Genre":"Pop"
            },
            {
                "Title":"We Got The Groove",
                "Key":"B Minor",
                "Length":"2:34",
                "Genre":"Pop"
            },
            {
                "Title":"Barely Holding On",
                "Key":"C Minor",
                "Length":"4:01",
                "Genre":"Ballad"
            },
            {
                "Title":"Hope",
                "Key":"F",
                "Length":"2:55",
                "Genre":"Pop"
            },
            {
                "Title":"Pop Sugar",
                "Key":"F",
                "Length":"3:35",
                "Genre":"Pop"
            }
    
        ]
        
    }
    console.log(songs);
    for(var i = 0; i < songs.song.length; i++) {
        $('#songPool').append('<option value="'+songs.song[i].Title+'">'+songs.song[i].Title+'</option>');
    }

});
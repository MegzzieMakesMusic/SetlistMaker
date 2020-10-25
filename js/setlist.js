$('document').ready(function() {
    // var json = $.getJSON("./songs.json");
    // var songs = eval("(" +json.responseText + ")");
    var songs = {
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
            }
    
        ]
        
    }
    console.log(songs);
    for(var i = 0; i < songs.song.length; i++) {
        $('#songPool').append('<option>'+songs.song[i].Title+'</option>');
    }

});
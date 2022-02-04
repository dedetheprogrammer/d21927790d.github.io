var r_text = new Array();
r_text[0] = "Chief is working hard on it. Patience."
r_text[1] = "Did you know that Chief is studying computer engineering?"
r_text[2] = "Of course you don't."
r_text[3] = "Error 404... Ups, not now."
r_text[4] = "Welcome."
r_text[5] = "Welcome back again."
r_text[6] = "Uhmm, now you really know... Some kind of paradox?"
r_text[7] = "Nothing has changed the last time you visited me."
r_text[8] = "Chief, what are you doing?!"
r_text[9] = "\"It always ends like this.\""
r_text[10] = "Chief is also a good artist, visit him on instagram: @isdedekong"
r_text[11] = "Did you know that Chief can also make videogames?"
r_text[12] = "\"I never quite realized ... how beautiful this world is.\""
r_text[13] = "..."

$(document).ready(function(){
    var element = $(".tip-msg");

    setInterval(function advance () {
        element.fadeOut(1000, function(){
            element.text(r_text[Math.floor((Math.random() * r_text.length))]);
            element.fadeIn(1000);
        });
        
    }, 10000);
});

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
r_text[10] = "Chief is also a good artist, visit him on instagram: @D21927790D"
r_text[11] = "Did you know that Chief can also make videogames?"
r_text[12] = "\"I never quite realized ... how beautiful this world is.\""
r_text[13] = "..."
r_text[13] = "Chief is still working hard on it."
r_text[14] = "C'mon, don't be impatience, god."
r_text[15] = "Is Chief coming back one day..?"
r_text[16] = "Where are you chief..?"
r_text[17] = "Follow Chief in Twitter and Instagram!"
r_text[18] = "Did I forget tell how to find him on social media?"
r_text[19] = "I DID!"
r_text[20] = "@D21927790D... OH, here it goes."
$(document).ready(function(){
    var element = $(".tip-msg");

    setInterval(function advance () {
        element.fadeOut(1000, function(){
            element.text(r_text[Math.floor((Math.random() * r_text.length))]);
            element.fadeIn(1000);
        });
    }, 10000);
});

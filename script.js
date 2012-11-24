// TODO: Make the back buttons go to the prior page 
// $(".button-prev").on('click', function(eventObject){
// 	document.write('<a href="'+ document.referrer +'">jQuery</a>');
// });

$(document).ready(function() {
        // $(".button-prev").attr('<a class="button-prev" href="' + document.referrer + '" data-transition="slide-out">Back</a>');
        // $(".button-prev").attr("href", "document.referrer");
        $(".button-prev").click(function() {
            
            alert("i'm ready!" + "document.referrer");
            history.go(-1);
        });
        
});
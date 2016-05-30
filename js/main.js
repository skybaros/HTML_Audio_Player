$(document).ready(function() {
	var currentSong = 0;
            $("#player")[0].src = $("#playlist li a")[0];
            $("#player")[0].play();
            $(".playlist li a").click(function(e){
               e.preventDefault(); 
               $("#player")[0].src = this;
               $("#player")[0].play();
               $(".playlist li").removeClass("current");
                currentSong = $(this).parent().index();
                $(this).parent().addClass("current");
            });
            
            $("#player")[0].addEventListener("ended", function(){
               currentSong++;
                if(currentSong == $(".playlist li a").length)
                    currentSong = 0;
                $(".playlist li").removeClass("current");
                $(".playlist li:eq("+currentSong+")").addClass("current");
                $("#player")[0].src = $(".playlist li a")[currentSong].href;
                $("#player")[0].play();
            });

});
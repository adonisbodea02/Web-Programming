
    var score=0;
    var time_left=30;
    var clock;
    var t;
    var xPos;
    var yPos;

    $(document).ready(function(){
        $("#start_button").click(function(){
            start();
        });
        $("#gamespace").on("click", "img", function(){
            incScore();
            if (score == 10) {
                $("#controls").remove();
                $("#gamespace").remove();
                var txt1 = "<div id=\"win\">You scored 10 points!</div>";
                $("body").append(txt1);
            }
        });
        
    });

    function start(){
        console.log("intru iar in start");
        addMole();
    };    
    
    function randPosX(){
        return Math.floor(Math.random()*200);
    };

    function randPosY(){
        return Math.floor(Math.random()*600);
    };

    function addMole(){
        console.log("intru iar in add mole");
        $("#gamespace").append('<img alt="WAT" src="Wat.jpg" style="position:absolute; top:'+randPosX()+'px; left:'+randPosY()+'px;" />');
        $("#gamespace").append('<img alt="TOM" src="tom.jpg" style="position:absolute; top:'+randPosX()+'px; left:'+randPosY()+'px;" />');
        $("img").fadeOut(1000);

        if(score < 10) {
            t=setTimeout(addMole, 1000);
        }

    };

    function incScore(){
        score +=1;
        $("#score").html("Score: "+ score);
    };
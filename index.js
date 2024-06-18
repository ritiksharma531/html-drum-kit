var count=0;
function play_audios(count){
    if(count==="a")
    {
        var aud = new Audio("./sounds/crash.mp3");
        aud.play();
    }
    else if(count==="s")
    {
        var aud = new Audio("./sounds/kick-bass.mp3");
        aud.play();
    }
    else if(count==="d")
    {
        var aud = new Audio("./sounds/snare.mp3");
        aud.play();
    }
    else if(count==="f")
        {
            var aud = new Audio("./sounds/tom-1.mp3");
            aud.play();
        }
        else if(count==="j")
        {
            var aud = new Audio("./sounds/tom-2.mp3");
            aud.play();
        }
        else if(count==="k")
        {
            var aud = new Audio("./sounds/tom-3.mp3");
            aud.play();
        }
        else  if(count==="l")
            {
                var aud = new Audio("./sounds/tom-4.mp3");
                aud.play();
            }
    count++;
    // if(count>6)
    //     count = count-7;
}

// alert(buttons[0].getAttribute("class"))
var buttons = document.querySelectorAll(".drum");
    for(var i=0; i<7; i++){
        buttons[i].addEventListener("click", function(){
            // alert(buttons[i].getAttribute("class"));
            play_audios(this.innerHTML);
            add_animation(this.innerHTML);   
            // setTimeout(function(){
            //     remove_animation(this.innerHTML);
            // }, 100);
        });
    } 

    // for(var i=0; i<7; i++){                                    //NOT WORKINGGGGGG
    //     buttons[i].addEventListener("onmouseup", function(){
    //         remove_animation(this.innerHTML);
    //     });
    // } 

    document.addEventListener("keydown", function(e){
        // alert(e.key);  WORKINGGGGGG
        play_audios(e.key);
        add_animation(e.key);
        // setTimeout(function(){
        //     remove_animation(e.key);
        // }, 100);
    })
    // document.addEventListener("keyup", function(e){
    //     remove_animation(e.key);
    // })

    function add_animation(current_key){
        var activeButton = document.querySelector("." + current_key);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            remove_animation(current_key);
        }, 100);
    }
    function remove_animation(current_key){
        var nonActiveButton = document.querySelector("." + current_key);
        nonActiveButton.classList.remove("pressed");
    }









/* (document.querySelectorAll(".drum"))[0].addEventListener("click", function(){
    var aud = new Audio("./sounds/crash.mp3");
    aud.play();
});

(document.querySelectorAll(".drum"))[1].addEventListener("click", function (){
    var aud = new Audio("./sounds/kick-bass.mp3");
    aud.play();});
// console.log((document.querySelectorAll(".drum"))[1]);


(document.querySelectorAll(".drum"))[2].addEventListener("click", function (){
    var aud = new Audio("./sounds/snare.mp3");
    aud.play();
});


(document.querySelectorAll(".drum"))[3].addEventListener("click", function (){
    var aud = new Audio("./sounds/tom-1.mp3");
    aud.play();
});


(document.querySelectorAll(".drum"))[4].addEventListener("click", function (){
    var aud = new Audio("./sounds/tom-2.mp3");
    aud.play();
});


(document.querySelectorAll(".drum"))[5].addEventListener("click", function (){
    var aud = new Audio("./sounds/tom-3.mp3");
    aud.play();
});


(document.querySelectorAll(".drum"))[6].addEventListener("click", function (){
    var aud = new Audio("./sounds/tom-4.mp3");
    aud.play();
}); */
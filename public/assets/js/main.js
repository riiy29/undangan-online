$(document).ready(function () {

    // Mendapatkan query string dari URL
    var queryString = window.location.search;
    // Memecah query string menjadi pasangan nama=nilai
    var params = new URLSearchParams(queryString);
    // Mendapatkan nilai parameter 'nama'
    var nama = params.get('to');
    if(nama) {
        $('.target-nama').text(nama)
    }

    $("section").hide();
    $("#intro").show();
    
    var tinggi = $("#intro").outerHeight();
    $("body").css("height",tinggi+"px");

    function music() {
        $(".hidden").css("display","block"); 
        $(".navbar").css("display","block");
        $(".button-menu").css("display","block");
        $("#mute").css("display","block");
        $("body").css("overflow","auto");
        $("body").css("height","auto");
        var myAudio = $("#audio")[0];
        if (myAudio.duration > 0 && !myAudio.paused) {
        }
        else myAudio.play();
    }

    $('#mute').on('click', function() {
        mute();
    })

    function mute() {
        music();
        
        var myAudio = document.getElementById("audio");
        var mute = document.getElementById("mute");
        if(myAudio.muted == true) {
            myAudio.muted = false;
            mute.innerHTML = '<i class="fal fa-volume-up"></i>';
        } else if(myAudio.muted == false) {
            myAudio.muted = true;
            mute.innerHTML = '<i class="fal fa-volume-slash"></i>';
        }
    }

    function make_timer_resepsi() {
        var endTime = new Date("03 December 2023 19:00:00");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days_resepsi").html(days + "<span>Hari</span>");
        $("#hours_resepsi").html(hours + "<span>Jam</span>");
        $("#minutes_resepsi").html(minutes + "<span>Menit</span>");
        $("#seconds_resepsi").html(seconds + "<span>Detik</span>");
    }

    function make_timer_akad() {
        var endTime = new Date("03 December 2023 19:00:00");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days_akad").html(days + "<span>Hari</span>");
        $("#hours_akad").html(hours + "<span>Jam</span>");
        $("#minutes_akad").html(minutes + "<span>Menit</span>");
        $("#seconds_akad").html(seconds + "<span>Detik</span>");
    }

    setInterval(function () {
        make_timer_resepsi();
        make_timer_akad();
    }, 0);

    //Height Into
    var hwindow = $( window ).height();
    $("#intro").css("height",hwindow+"px");

    //Smooth Scrool
    $('.link' ).on( 'click', function(e){

        // Define variable of the clicked »a« element (»this«) and get its href value.
        var href = $(this).attr('href');
        music();
        
        // Run a scroll animation to the position of the element which has the same id like the href value.
        $( 'html, body' ).animate({
            scrollTop: $( href ).offset().top
        }, '300' );
        
        // Prevent the browser from showing the attribute name of the clicked link in the address bar
        e.preventDefault();
    });
});

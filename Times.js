function showTime () {
    const date = new Date ();
    return date .getHours ()+ "Hrs:"	+ date .getMinutes () + "Mins :+date .getSecond()" ;
    }

    function showSessionExpire (){
    console.log ("11 Activity-B: Your session expired at 11" +showTime ());
    }

    console.log ("11 Activity-A: Trigerring Activity-B at 11" +showTime ()); 
    setTimeout (showSessionExpire, 5000);
    console.log ("11 Activity-A: Triggered Activity-B at 11" +showTime ()+"11 will execute after 5 seconds");
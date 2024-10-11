
function bmi(){

    var Height = document.getElementById('Height');
    var Weight = document.getElementById('Weight');
    var bmi= w / ( h/100 * h/100 );
    var total = bmi . toFixed(1);
    document.getElementById('result').innerHTML = "Your bmi is " + total;
    
    }
    
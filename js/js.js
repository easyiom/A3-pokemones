////////////////////////////
////////Ejercicio 1
////////////////////////////

////////////////////////////
////////Ejercicio 2
////////////////////////////
function nightmode(hora) {
    if ((hora < 7) || (hora > 17)) {
        $('body').addClass('nightMode');
        $('body').removeClass('dayMode');
        $('.header h1').css('color', '#fff')
    } else {
        $('body').addClass('dayMode');
        $('body').removeClass('nightMode');
        $('.header h1').css('color', '#000')
    }
}
$(document).ready(function() {
    let d = new Date(),
        hora = d.getHours();
    nightmode(hora);
    if (hora > 17) {
        $('.header h1').text("Buenas noches")
    } else {
        $('.header h1').text("Buenos días")

    }
});
////////////////////////////
////////Ejercicio 3
////////////////////////////

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getListRandom(n, min, max) {
    var arr = [];
    let numr
    for (let i = 0; i < n; i++) {
        numr = getRndInteger(min, max);
        if (arr.includes(numr)) {
            i--
        } else {
            arr.push(numr);
        }
    }
    return arr;
}


////////////////////////////
////////Ejercicio 4
////////////////////////////

function opacity() {
    $('.PokeBola').toggleClass('opacity')
}

////////////////////////////
////////Ejercicio 5
////////////////////////////
$(document).ready(function() {
    $('.PokeBola').click(function() {
        opacity();
        var mina = 1,
            maxa = $('.carta').length,
            na = maxa;
        valores = getListRandom(na, mina, maxa)
        $('.carta img').each(function(index) {
            $(this).attr('src', `./img/IMG_${ valores[index] }.PNG `)
        })
    });
});
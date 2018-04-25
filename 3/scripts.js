// Custom Java script is here
document.getElementsByClassName('parwan')

function search() {
    keyWord = document.getElementById('search').value;
    var kabul = document.getElementsByClassName('kabul');
    var herat = document.getElementsByClassName('herat');
    var parwan = document.getElementsByClassName('parwan'
    );


    for (var i = 0; i < kabul.length; i += 1) {
        kabul[i].classList.remove('hidden');
    }
    for (var i = 0; i < herat.length; i += 1) {
        herat[i].classList.remove('hidden');
    }
    for (var i = 0; i < parwan.length; i += 1) {
        parwan[i].classList.remove('hidden');
    }

    // This is some comment
    switch (keyWord) {
        case 'kabul':
            for (var i = 0; i < parwan.length; i++) {
                parwan[i].classList.add('hidden');
            }

            for (var i = 0; i < herat.length; i++) {
                herat[i].classList.add('hidden');
            }
            break;
        case 'herat':
            for (var i = 0; i < parwan.length; i++) {
                parwan[i].classList.add('hidden');
            }

            for (var i = 0; i < kabul.length; i++) {
                kabul[i].classList.add('hidden');
            }
            break;
        case 'parwan':
            for (var i = 0; i < kabul.length; i++) {
                kabul[i].classList.add('hidden');
            }

            for (var i = 0; i < herat.length; i++) {
                herat[i].classList.add('hidden');
            }
            break;
        default:

    }
}
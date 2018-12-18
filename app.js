

// var audio9 = new Audio('sounds/tom.wav');

document.addEventListener('keypress', () => {
    var button = event.key;
    if (button === 'r') {
        document.getElementById('audio1').play()
        document.getElementById('1').style.backgroundColor = 'red'
        var element = document.getElementById('fingers1');
        element.classList.add('move1');
    } else if (button === 't') {
        document.getElementById('audio2').play()
        document.getElementById('2').style.backgroundColor = 'red'
        var element = document.getElementById('fingers1');
        element.classList.add('move2');
    } else if (button === 'y') {
        document.getElementById('audio3').play() 
        document.getElementById('3').style.backgroundColor = 'red'
        var element = document.getElementById('fingers2');
        element.classList.add('move3');
    } else if (button === 'f') {
        document.getElementById('audio4').play() 
        document.getElementById('4').style.backgroundColor = 'red'
        var element = document.getElementById('fingers1');
        element.classList.add('move4');
    } else if (button === 'g') {
        document.getElementById('audio5').play()
        document.getElementById('5').style.backgroundColor = 'red'
        var element = document.getElementById('fingers1');
        element.classList.add('move5');
    } else if (button === 'h') {
        document.getElementById('audio6').play()
        document.getElementById('6').style.backgroundColor = 'red'
        var element = document.getElementById('fingers2');
        element.classList.add('move6');
    } else if (button === 'v') {
        document.getElementById('audio7').play()
        document.getElementById('7').style.backgroundColor = 'red'
        var element = document.getElementById('fingers1');
        element.classList.add('move7');
    } else if (button === 'b') {
        document.getElementById('audio8').play()
        document.getElementById('8').style.backgroundColor = 'red'
        var element = document.getElementById('fingers2');
        element.classList.add('move8');
    } else if (button === 'n') {
        document.getElementById('audio9').play()
        document.getElementById('9').style.backgroundColor = 'red'
        var element = document.getElementById('fingers2');
        element.classList.add('move9');
    } // else {
    //     document.getElementById('1').style.backgroundColor = 'forestgreen'
    //     document.getElementById('2').style.backgroundColor = 'forestgreen'
    //     document.getElementById('3').style.backgroundColor = 'forestgreen'
    //     document.getElementById('4').style.backgroundColor = 'forestgreen'
    //     document.getElementById('5').style.backgroundColor = 'forestgreen'
    //     document.getElementById('6').style.backgroundColor = 'forestgreen'
    //     document.getElementById('7').style.backgroundColor = 'forestgreen'
    //     document.getElementById('8').style.backgroundColor = 'forestgreen'
    //     document.getElementById('9').style.backgroundColor = 'forestgreen'
    // }
})

document.addEventListener('keyup', () => {
    var button = event.key;
    if (button === 'r') {
        document.getElementById('1').style.backgroundColor = 'forestgreen'
        var element = document.getElementById('fingers1');
        element.classList.remove('move1');
    } else if (button === 't') {
        document.getElementById('2').style.backgroundColor = 'forestgreen'
        var element = document.getElementById('fingers1');
        element.classList.remove('move2');
    } else if (button === 'y') {
        document.getElementById('3').style.backgroundColor = 'forestgreen'
        var element = document.getElementById('fingers2');
        element.classList.remove('move3');
    } else if (button === 'f') {
        document.getElementById('4').style.backgroundColor = 'forestgreen'
        var element = document.getElementById('fingers1');
        element.classList.remove('move4');
    } else if (button === 'g') {
        document.getElementById('5').style.backgroundColor = 'forestgreen'
        var element = document.getElementById('fingers1');
        element.classList.remove('move5');
    } else if (button === 'h') {
        document.getElementById('6').style.backgroundColor = 'forestgreen'
        var element = document.getElementById('fingers2');
        element.classList.remove('move6');
    } else if (button === 'v') {
        document.getElementById('7').style.backgroundColor = 'forestgreen'
        var element = document.getElementById('fingers1');
        element.classList.remove('move7');
    } else if (button === 'b') {
        document.getElementById('8').style.backgroundColor = 'forestgreen'
        var element = document.getElementById('fingers2');
        element.classList.remove('move8');
    } else if (button === 'n') {
        document.getElementById('9').style.backgroundColor = 'forestgreen'
        var element = document.getElementById('fingers2');
        element.classList.remove('move9');
    }
}
)

// document.addEventListener('keypress', () => {
//     document.getElementsByTagName('p').classList.toggle('move1')
//  }
//  )
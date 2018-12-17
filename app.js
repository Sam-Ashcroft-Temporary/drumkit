

// var audio9 = new Audio('sounds/tom.wav');

document.addEventListener('keypress', () => {
    var button = event.key;
    if (button === 'r') {
        document.getElementById('audio1').play()
    } else if (button === 't') {
        document.getElementById('audio2').play()
    } else if (button === 'f') {
        document.getElementById('audio4').play() 
    } else if (button === 'g') {
        document.getElementById('audio5').play()
    } else if (button === 'h') {
        document.getElementById('audio6').play()
    } else if (button === 'v') {
        document.getElementById('audio7').play()
    } else if (button === 'b') {
        document.getElementById('audio8').play()
    } else if (button === 'n') {
        document.getElementById('audio9').play()
    }
})





// var audio9 = new Audio('sounds/tom.wav');

document.addEventListener('keypress', () => {
    var button = event.key;
    if (button === 'r') {
        document.getElementById('audio1').play()
        document.getElementById('1').style.backgroundColor = 'red'
    } else if (button === 't') {
        document.getElementById('audio2').play()
        document.getElementById('2').style.backgroundColor = 'red'
    } else if (button === 'y') {
        document.getElementById('audio3').play() 
        document.getElementById('3').style.backgroundColor = 'red'
    } else if (button === 'f') {
        document.getElementById('audio4').play() 
        document.getElementById('4').style.backgroundColor = 'red'
    } else if (button === 'g') {
        document.getElementById('audio5').play()
        document.getElementById('5').style.backgroundColor = 'red'
    } else if (button === 'h') {
        document.getElementById('audio6').play()
        document.getElementById('6').style.backgroundColor = 'red'
    } else if (button === 'v') {
        document.getElementById('audio7').play()
        document.getElementById('7').style.backgroundColor = 'red'
    } else if (button === 'b') {
        document.getElementById('audio8').play()
        document.getElementById('8').style.backgroundColor = 'red'
    } else if (button === 'n') {
        document.getElementById('audio9').play()
        document.getElementById('9').style.backgroundColor = 'red'
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
    } else if (button === 't') {
        document.getElementById('2').style.backgroundColor = 'forestgreen'
    } else if (button === 'y') {
        document.getElementById('3').style.backgroundColor = 'forestgreen'
    } else if (button === 'f') {
        document.getElementById('4').style.backgroundColor = 'forestgreen'
    } else if (button === 'g') {
        document.getElementById('5').style.backgroundColor = 'forestgreen'
    } else if (button === 'h') {
        document.getElementById('6').style.backgroundColor = 'forestgreen'
    } else if (button === 'v') {
        document.getElementById('7').style.backgroundColor = 'forestgreen'
    } else if (button === 'b') {
        document.getElementById('8').style.backgroundColor = 'forestgreen'
    } else if (button === 'n') {
        document.getElementById('9').style.backgroundColor = 'forestgreen'
    }
}
)
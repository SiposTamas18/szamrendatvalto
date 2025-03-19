
// Decimális átváltása más rendszerekbe
function convertDecimal() {
    let decimal = document.getElementById("decimalInput").value;
    
    if (decimal !== "") {
        let binary = parseInt(decimal).toString(2);
        let octal = parseInt(decimal).toString(8);
        let hexadecimal = parseInt(decimal).toString(16).toUpperCase();

        document.getElementById("decimalResult").innerHTML = `
            Bináris: ${binary} <br>
            Oktális: ${octal} <br>
            Hexadecimális: ${hexadecimal}
        `;
    } else {
        document.getElementById("decimalResult").innerHTML = "Kérlek, adj meg egy számot!";
    }
}

// Bináris átváltása más rendszerekbe
function convertBinary() {
    let binary = document.getElementById("binaryInput").value;

    if (/^[01]+$/.test(binary)) {
        let decimal = parseInt(binary, 2);
        let octal = decimal.toString(8);
        let hexadecimal = decimal.toString(16).toUpperCase();

        document.getElementById("binaryResult").innerHTML = `
            Decimális: ${decimal} <br>
            Oktális: ${octal} <br>
            Hexadecimális: ${hexadecimal}
        `;
    } else {
        document.getElementById("binaryResult").innerHTML = "Érvénytelen bináris szám!";
    }
}

// Oktális átváltása más rendszerekbe
function convertOctal() {
    let octal = document.getElementById("octalInput").value;

    if (/^[0-7]+$/.test(octal)) {
        let decimal = parseInt(octal, 8);
        let binary = decimal.toString(2);
        let hexadecimal = decimal.toString(16).toUpperCase();

        document.getElementById("octalResult").innerHTML = `
            Decimális: ${decimal} <br>
            Bináris: ${binary} <br>
            Hexadecimális: ${hexadecimal}
        `;
    } else {
        document.getElementById("octalResult").innerHTML = "Érvénytelen oktális szám!";
    }
}

// Hexadecimális átváltása más rendszerekbe
function convertHexadecimal() {
    let hexadecimal = document.getElementById("hexadecimalInput").value;

    if (/^[0-9A-Fa-f]+$/.test(hexadecimal)) {
        let decimal = parseInt(hexadecimal, 16);
        let binary = decimal.toString(2);
        let octal = decimal.toString(8);

        document.getElementById("hexadecimalResult").innerHTML = `
            Decimális: ${decimal} <br>
            Bináris: ${binary} <br>
            Oktális: ${octal}
        `;
    } else {
        document.getElementById("hexadecimalResult").innerHTML = "Érvénytelen hexadecimális szám!";
    }
}
// Decimális Kvíz ellenőrzése
function checkDecimalAnswers() {
    let score = 0;

    // 1. kérdés ellenőrzése
    if (document.getElementById('q1d').checked) {
        score++;
    }

    // 2. kérdés ellenőrzése
    if (document.getElementById('q2a').checked) {
        score++;
    }

    if (document.getElementById('q3a').checked) {
        score++;
    }

    if (document.getElementById('q2a').checked) {
        score++;
    }

    if (document.getElementById('q2a').checked) {
        score++;
    }
    // Eredmény kiírása
    document.getElementById('decimal-result').innerHTML = `Pontjaid: ${score}/5`;
}

// Bináris Kvíz ellenőrzése
function checkBinaryAnswers() {
    let score = 0;

    // 1. kérdés ellenőrzése
    if (document.getElementById('q1b').checked) {
        score++;
    }

    // 2. kérdés ellenőrzése
    if (document.getElementById('q2a').checked) {
        score++;
    }

    // Eredmény kiírása
    document.getElementById('binary-result').innerHTML = `Pontjaid: ${score}/5`;
}

// Oktális Kvíz ellenőrzése
function checkOctalAnswers() {
    let score = 0;

    if (document.getElementById('q1a').checked) score++;
    if (document.getElementById('q2a').checked) score++;
    if (document.getElementById('q3a').checked) score++;
    if (document.getElementById('q4a').checked) score++;
    if (document.getElementById('q5a').checked) score++;

    document.getElementById('octal-result').innerHTML = `Pontjaid: ${score}/5`;

    // Eredmény kiírása
    document.getElementById('octal-result').innerHTML = `Pontjaid: ${score}/5`;
}

// Hexadecimális Kvíz ellenőrzése
function checkHexadecimalAnswers() {
    let score = 0;

    if (document.getElementById('q1a').checked) score++;
    if (document.getElementById('q2a').checked) score++;
    if (document.getElementById('q3a').checked) score++;
    if (document.getElementById('q4a').checked) score++;
    if (document.getElementById('q5a').checked) score++;

    document.getElementById('hexadecimal-result').innerHTML = `Pontjaid: ${score}/5`;
    // Eredmény kiírása
    
}

function openFullscreen() {
    var video = document.getElementById("myVideo");
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari, Edge
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // Internet Explorer
        video.msRequestFullscreen();
    }
}
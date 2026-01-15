 const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    ' ': '/'
};

const inputText = document.getElementById('inputText');
const convertBtn = document.getElementById('convertBtn');
const output = document.getElementById('output');

convertBtn.addEventListener('click', () => {
    const text = inputText.value.toUpperCase();
    let morseCode = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (morseCodeMap[char]) {
            morseCode += morseCodeMap[char] + ' ';
        }
    }

    output.textContent = morseCode.trim();
});

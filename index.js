const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let label1 = document.getElementById("input1");
let label2 = document.getElementById("input2");

function getpass() {
    let password = "";
    for (let i = 0; i < 15; i++) {
        let ran = Math.floor(Math.random() * characters.length);
        password += characters[ran];
    }
    return password
   
}

function updatepasswords() {
    label1.textContent = getpass();
    label2.textContent = getpass();
}









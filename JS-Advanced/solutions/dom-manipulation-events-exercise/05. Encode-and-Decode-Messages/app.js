function encodeAndDecodeMessages() {
    const [toEncode, toDecode] = Array.from(document.querySelectorAll('textarea'));
    const [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll('button'));
    let messageToDecode = '';
    let decodedMessage = '';

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode(e) {
        const encodedMessage = toEncode.value;
        messageToDecode = '';

        for (let char of encodedMessage) {
            let asciiChar = char.charCodeAt(0) + 1;
            messageToDecode += String.fromCharCode(asciiChar);
        }

        toDecode.value = messageToDecode;
        toEncode.value = '';
    }

    function decode(e) {
        for (let char of messageToDecode) {
            let asciiChar = char.charCodeAt(0) - 1;
            decodedMessage += String.fromCharCode(asciiChar);
        }

        toDecode.value = decodedMessage;
    }
}
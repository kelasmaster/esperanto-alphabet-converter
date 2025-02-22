// script.js

document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const clearButton = document.getElementById('clearButton');
    const copyButton = document.getElementById('copyButton');

    // Function to replace digraphs with Esperanto characters
    function convertToEsperanto(text) {
        return text
            .replace(/cx/g, 'ĉ')
            .replace(/gx/g, 'ĝ')
            .replace(/hx/g, 'ĥ')
            .replace(/jx/g, 'ĵ')
            .replace(/sx/g, 'ŝ')
            .replace(/ux/g, 'ŭ');
    }

    // Event listener for real-time conversion
    inputText.addEventListener('input', () => {
        const convertedText = convertToEsperanto(inputText.value);
        outputText.textContent = convertedText;
    });

    // Clear button functionality
    clearButton.addEventListener('click', () => {
        inputText.value = '';
        outputText.textContent = '';
    });

    // Copy button functionality
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(outputText.textContent).then(() => {
            alert('Text copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});

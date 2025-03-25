function resetText() {
    document.getElementById("output").innerHTML = "";
}

function boldText() {
    document.execCommand("bold");
}

function applyColor(color, isBg) {
    let colorStyles = {
        red: 'red',
        yellow: 'yellow',
        green: 'green',
        blue: 'blue',
        white: 'white'
    };
    document.execCommand(isBg ? "hiliteColor" : "foreColor", false, colorStyles[color]);
}

function copyText() {
    let outputDiv = document.getElementById("output");
    let range = document.createRange();
    let selection = window.getSelection();
    
    range.selectNodeContents(outputDiv);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    
    alert("Copied to clipboard!");
}

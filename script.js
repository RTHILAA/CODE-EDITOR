let html = document.getElementById("html-code");
let css = document.getElementById("css-code");
let js = document.getElementById("js-code");
function runCode() {
    let html = document.getElementById("html-code").value;
    let css = document.getElementById("css-code").value;
    let js = document.getElementById("js-code").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    output.contentWindow.eval(js);
}
html.addEventListener("input", runCode);
css.addEventListener("input", runCode);
js.addEventListener("input", runCode);

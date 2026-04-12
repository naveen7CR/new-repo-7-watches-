function runCode() {
    const html = document.getElementById("html").value;
    const css = "<style>" + document.getElementById("css").value + "</style>";
    const js = "<script>" + document.getElementById("js").value + "<\/script>";

    const output = document.getElementById("output").contentWindow.document;

    output.open();
    output.write(html + css + js);
    output.close();
}
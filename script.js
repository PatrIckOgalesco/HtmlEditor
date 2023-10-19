const htmlEditor = CodeMirror.fromTextArea(document.querySelector('.html-code textarea'), {
    mode: 'xml',
    lineNumbers: true,
    theme: 'material-darker'
});

const cssEditor = CodeMirror.fromTextArea(document.querySelector('.css-code textarea'), {
    mode: 'css',
    lineNumbers: true,
    theme: 'material-darker'
});

const jsEditor = CodeMirror.fromTextArea(document.querySelector('.js-code textarea'), {
    mode: 'javascript',
    lineNumbers: true,
    theme: 'material-darker'
});

const result = document.querySelector('#result');

function run() {
    // Storing data in Local Storage
    localStorage.setItem('html_code', htmlEditor.getValue());
    localStorage.setItem('css_code', cssEditor.getValue());
    localStorage.setItem('js_code', jsEditor.getValue());

    // Executing HTML, CSS & JS code
    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
    result.contentWindow.eval(localStorage.js_code);
}

// Checking if the user is typing anything in the input fields
htmlEditor.on("change", run);
cssEditor.on("change", run);
jsEditor.on("change", run);

// Accessing data stored in Local Storage
htmlEditor.setValue(localStorage.html_code || "");
cssEditor.setValue(localStorage.css_code || "");
jsEditor.setValue(localStorage.js_code || "");

run(); // Execute the code on page load

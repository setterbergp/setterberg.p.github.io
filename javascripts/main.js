var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');
function loadFile(file) {
    reader.open('get', file, true);
    reader.onreadystatechange = displayContents;
    reader.send(null);
}

function displayContents() {
    if(reader.readyState==4) {
        var el = document.getElementById('main');
        el.innerHTML = reader.responseText;
    }
}

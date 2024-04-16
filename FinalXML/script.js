// script.js
window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "hospital_records.xml", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var xml = xhr.responseXML;
            var xsltProcessor = new XSLTProcessor();
            var xslRequest = new XMLHttpRequest();
            xslRequest.open("GET", "hospital_transform.xslt", true);
            xslRequest.onreadystatechange = function() {
                if (xslRequest.readyState == 4 && xslRequest.status == 200) {
                    xslProcessor = new XSLTProcessor();
                    xslProcessor.importStylesheet(xslRequest.responseXML);
                    var output = xslProcessor.transformToFragment(xml, document);
                    document.getElementById("xmlOutput").appendChild(output);
                }
            };
            xslRequest.send(null);
        }
    };
    xhr.send(null);
};
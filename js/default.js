

function shuffle(a) { 
    var j, x, i; 
    for (i = a.length; i; i -= 1) { 
        j = Math.floor(Math.random() * i); 
        x = a[i - 1]; 
        a[i - 1] = a[j]; 
        a[j] = x; 
    } 
}  

function goIndex() {
    if (location.href.indexOf("/openExam/") > -1) {
        location.href = "/openExam/"
    } else {
        location.href = "/";
    }
}



function getExamVersion() {
    let version = getParameter("examVersion");
    if (version == "") {
        version = "2021-7";
    }
    return version;
}

function getFormatDate(date) {
    let year = date.getFullYear();
    let month = getNumberToTwoLengthText(date.getMonth() + 1);
    let day = getNumberToTwoLengthText(date.getDate());
    let hours = getNumberToTwoLengthText(date.getHours());
    let minutes = getNumberToTwoLengthText(date.getMinutes());
    let secondes = getNumberToTwoLengthText(date.getSeconds());
    return `${year}.${month}.${day} ${hours}:${minutes}:${secondes}`;
}

function getNumberToTwoLengthText(numberVal) {
    return (numberVal >= 10) ? numberVal : "0" + numberVal;
}

function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
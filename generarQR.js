function generateQRCode() {
    var qrcodeElement = document.getElementById("qrcode");
    qrcodeElement.innerHTML = "";
    var inputData = document.getElementById("inputData").value;
    var qrcode = new QRCode(qrcodeElement, {
        text: inputData,
        width: 128,
        height: 128,
        margin: 10
    });
}
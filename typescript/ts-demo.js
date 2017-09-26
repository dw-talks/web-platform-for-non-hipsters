Object.defineProperty(window, "HelloTypeScript", { value: "v1.0.0", readonly: false });
function deliveryMethod() {
    var deliveryElement = document.querySelectorAll('#deliveryMethod');
    if (deliveryElement) {
        return deliveryElement[0].textContent;
    }
    else {
        return undefined;
    }
}
function shipWeight() {
    return parseInt(document.getElementById('weight').textContent);
}
/**
 * @param {(string | string[])} emailAddr - An email address of array of email addresses
 */
function sendUpdates(emailAddr) {
    function sendEmail(addr) {
        if (shipWeight > 100) {
            console.log("WARNING: Oversize package");
        }
    }
    // if its an array, loop over it
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach(function (val, idx) {
            sendEmail(val.trim());
        });
    }
    else {
        sendEmail(emailAddr.trin());
    }
}
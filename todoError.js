function requiredError(el, smallId, msg) {
    if (el.value == "") {
        el.classList.add("is-invalid");
        document.getElementById(smallId).innerText = msg;
        return true;
    }
    el.classList.remove("is-invalid");
    document.getElementById(smallId).innerText = msg;
    return false;
}
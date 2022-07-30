function OpenModal(modalId) {
    // Get the modal
    let modal = document.getElementById(modalId);

    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    modal.onclick = modal.focus();
    document.body.style.overflow = "hidden";

    // Get the <span> element that closes the modal
    let spans = document.getElementsByClassName("close_");

    // When the user clicks on <span> (x), close the modal
    for(let span of spans) {
        span.onclick = function () {
            setTimeout(() => {
                modal.className = modal.className.replace(" modal2", "");
                modal.style.display = "none";
                modal.setAttribute("aria-hidden", "true");
            }, 250);
            modal.className += " modal2";
            document.body.style.overflowY = "overlay";
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            setTimeout(() => {
                modal.className = modal.className.replace(" modal2", "");
                modal.style.display = "none";
                modal.setAttribute("aria-hidden", "true");
            }, 250);
            modal.className += " modal2";
            document.body.style.overflowY = "overlay";
        }
    }
}

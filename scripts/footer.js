const footer = document.getElementById('footer');

function hide(event) {
    event.preventDefault();

    if (event.deltaY < 0) {
        footer.classList.replace('show', 'hidden');
    } else {
        footer.classList.replace('hidden', 'show');
    }
}

document.onwheel = hide;
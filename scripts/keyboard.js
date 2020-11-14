const links = document.getElementsByClassName('link');
const rowElementsNumber = links.length / document.getElementsByClassName('subtitle').length;

const baseStyle = links[0].style;

var pos = 0;

// check if the move is legal, if so moves the indicator to newPose 
function move(newPos) {
    if ((newPos >= 0) && (newPos < links.length) && 
    (newPos%rowElementsNumber != 0 || pos%rowElementsNumber != rowElementsNumber - 1) &&
    (newPos%rowElementsNumber != rowElementsNumber - 1 || pos%rowElementsNumber != 0)) {
        links[pos].setAttribute('style', baseStyle);
        pos = newPos;
        links[pos].setAttribute('style', 'color: var(--accent);');
    }
}

/* 
    called when a key is pressed
    if in insert mode (the search bar is selected) and Esc is pressed switches to vim mode, else does nothing
    if in vim mode and i is pressed switches to insert mode, else allows movement trough links via vim keys
*/
window.addEventListener('keydown', (e) => {
    const keyName = e.key;

    if (document.activeElement.id === 'q') {
        if (keyName === 'Escape') {
            document.activeElement.blur();
            links[pos].setAttribute('style', 'color: var(--accent);');
        }

    } else {
        switch (keyName) {
            case 'h':
                move(pos - rowElementsNumber);
                break;

            case 'j':
                move(pos + 1);
                break;

            case 'k':
                move(pos - 1);
                break;

            case 'l':
                move(pos + rowElementsNumber);
                break;

            case 'i':
                setTimeout(() => { document.getElementById("q").focus() }, 1);
                links[pos].setAttribute('style', baseStyle);
                break;

            case 'Enter':
                links[pos].click();
                break;
        }
    }
}, false);

/*
    called when mouse clicks
    if insert mode (the search bar is selected) removes indicator from links
    if in vim mode does nothing
*/
window.addEventListener('click', e => {
    if (document.activeElement.id === 'q') {
        links[pos].setAttribute('style', baseStyle);
    }
}, false);
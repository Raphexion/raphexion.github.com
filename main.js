window.onload = function() {
    var ticktime = 2000;

    var box = document.querySelector('.circle');
    box.left = true;

    function toggle(event) {
        if (box.left) {
            box.classList.remove('left');
            box.classList.add('right');
            box.classList.add('intransition');
        } else {
            box.classList.add('left');
            box.classList.remove('intransition');
            box.classList.remove('right');
        }

        box.left = !box.left;
        window.setTimeout(toggle, ticktime);
    };

    window.setTimeout(toggle, ticktime);
};

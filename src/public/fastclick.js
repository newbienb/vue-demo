import FastClick from 'fastclick'

! function (n) {
    if ('addEventListener' in n.document) {
        n.document.addEventListener('DOMContentLoaded', function () {
            FastClick.attach(document.body);
        }, false);
    }
}(window);

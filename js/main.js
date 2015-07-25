var overworked = (function() {

    var width = window.innerWidth;

    function init() {
        $('body').flowtype({
            minimum   : 100,
            maximum   : width / 1.2,
            minFont   : 12,
            maxFont   : 60,
            fontRatio : 36
        });
    }

    return {
        'init': init
    };
})();

$(document).ready(overworked.init);

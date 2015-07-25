var overworked = (function() {

    var width = window.innerWidth;

    function init() {
        $('body').flowtype({
            minimum   : 100,
            maximum   : width / 1.4,
            minFont   : 14,
            maxFont   : 80,
            fontRatio : 30
        });
    }

    return {
        'init': init
    };
})();

$(document).ready(overworked.init);

var searchBtn = document.getElementsByClassName('search-btn')[0];
var navigationTop = document.getElementById('navigation-top');

searchBtn.onclick = function() {
    navigationTop.classList.toggle('open');
};

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
    // options
    horizontalOrder: true, // keep horizontal order
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer', // this element is used to define grid element size
    gutter: 5, // horizontal space between grid elements
    fitWidth: true // centering the grid container
});

var shareBtns = document.getElementsByClassName('share-btn');

for(var i = 0; i < shareBtns.length; i++) {
    shareBtns[i].onclick = function (e) {
        closeTooltips();
        e.stopPropagation();
        this.parentElement.classList.add('focused');
        var tooltip = this.querySelector('.tooltip');
        tooltip.classList.add('open');

        var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        var height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;

        var x = e.clientX;
        var y = e.clientY;

        // check screen width
        if(width < 525 ) {
            // small width
            if(y < height/2) {
                tooltip.classList.add('south');
            } else {
                tooltip.classList.add('north');
            }
        } else {
            // wider screens
            if(x < width/2) {
                tooltip.classList.add('east');
            } else {
                tooltip.classList.add('west');
            }

            if(y < height/2) {
                tooltip.classList.add('arrow-top');
            } else {
                tooltip.classList.add('arrow-bottom');
            }
        }
    };
}

window.onclick = function(e) {
    closeTooltips();
};

function closeTooltips() {
    var tooltips = document.querySelectorAll('.tooltip.open');
    if(tooltips.length) {
        for(var i = 0; i < tooltips.length; i++) {
            tooltips[i].className = 'tooltip';
        }
    }

    var gridItems = document.querySelectorAll('.grid-item.focused');
    if(gridItems.length) {
        for(var i = 0; i < gridItems.length; i++) {
            gridItems[i].className = 'grid-item';
        }
    }
}
anime({
    // Lots of css styling can be use. See the examples that have been commented out. NOTE THEY NEED TO BE IN CAMEL CASE
    targets: 'div.box',
    translateY: [
        { value: 200, duration: 500 },
        { value: 0, duration: 800}
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    },
    // css properties below for example
    // backgroundColor: '#000',
    // opacity: '.5',
    delay: function(element, index, totalTargets) {
        return index * 1000;
    }
})
$(document).ready(function() {

var $allChar = [
                {"playa": "neo", "hp": "180", "ap": "25"},
                {"playa": "morphious", "hp": "120", "ap": "8"},
                {"playa": "cypher", "hp": "100", "ap": "5"},
                {"playa": "mrSmith", "hp": "150", "ap": "25"},
];

var $char = $('#char');
$.each($allChar, function (index, playa) {
    console.log('button', index, playa);
    var $character = $('<button><img src="assets/images/' + $allChar[index].playa + '.jpg">')
    .addClass($allChar[index])
    .attr('health-points', $allChar[index].hp)
    .attr('attack-points', $allChar[index].ap);
    $character.html(playa[index]);
    $char.append($character);
});

































});
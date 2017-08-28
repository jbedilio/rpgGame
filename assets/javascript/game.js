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
    var $character = $('<button><img src="assets/images/' + $allChar[index].playa + '.jpg" class="' + $allChar[index].playa + '"><br><p class="'+ $allChar[index].playa+'">'+$allChar[index].hp+'</p>')
    .addClass('playa ' + $allChar[index].playa)
    .attr('health-points', $allChar[index].hp)
    .attr('attack-points', $allChar[index].ap);
    $character.html(playa[index]);
    $char.append($character);
});

var $enemies = [
                { "enemy": "neo", "hp": "180", "ap": "25" },
                { "enemy": "morphious", "hp": "120", "ap": "8" },
                { "enemy": "cypher", "hp": "100", "ap": "5" },
                { "enemy": "mrSmith", "hp": "150", "ap": "25" },
];

$('.playa').on('click', function () {;
    var playa = $(this);
    playa1 = playa;
    $('#char').find('*').not('.' + playa1).remove();
    var $enemy = $('#toAttack');
    $.each($enemies, function (index, playa) {
        console.log('click', index, playa);
        var $foe = $('<button><img src="assets/images/' + $enemies[index].enemy + '.jpg" class="' + $allChar[index].playa + '"><br><p class="' + $enemies[index].enemy + '">' + $enemies[index].hp + '</p>')
        .addClass('enemies ' + $enemies[index].enemy)
        .attr('health-points', $enemies[index].hp)
        .attr('attack-points', $enemies[index].ap);
        $foe.html(playa[index]);
        $enemy.append($foe); 
        });
    });

});
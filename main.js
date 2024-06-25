var move = 1;
var play = true;

$('table tr td').click(function(){
    if( $(this).text()== "" && play){
        if( (move%2)== 1){
            $(this).append("X");
            $(this).css('color', '#fff');
        } else {
            $(this).append("O");
            $(this).css('color', '#000000');
        }
        move++;
        var winner = findWinner();
        if (winner != -1 && winner != ""){
            if(winner =="X"){
               $('body').append('<div class="winner"><span>Winner X</span></div>');
               $('body').append(' <button onclick="location.reload()">Play Again</button> ');
               $('.winner').css('color', '#fff');
               $('.winner').css('background-color', '#fe019a');
               $('button').css('color', '#61892f');
               
            } else if (winner =="O") {
                $('body').append('<div class="winner"><span>Winner</span>O</div>');
               $('body').append(' <button onclick="location.reload()">Play Again</button> ');
               $('.winner').css('background-color', '#fff').css();
               $('button').css('color', '#000');
              
            } else if (winner == "Draw") {
                $('body').append('<div class="winner"><span>Draw</span></div>');
                $('body').append(' <button onclick="location.reload()">Play Again</button> ');
                $('.winner').css('background-color', '#d3d3d3');
                $('button').css('color', '#d3d3d3');
            }
            play = false;
        }
    }
})

var winningCombination = [];

function findWinner(){
    sp1 = $('table tr:nth-child(1) td:nth-child(1)').text();
    sp2 = $('table tr:nth-child(1) td:nth-child(2)').text();
    sp3 = $('table tr:nth-child(1) td:nth-child(3)').text();
    sp4 = $('table tr:nth-child(2) td:nth-child(1)').text();
    sp5 = $('table tr:nth-child(2) td:nth-child(2)').text();
    sp6 = $('table tr:nth-child(2) td:nth-child(3)').text();
    sp7 = $('table tr:nth-child(3) td:nth-child(1)').text();
    sp8 = $('table tr:nth-child(3) td:nth-child(2)').text();
    sp9 = $('table tr:nth-child(3) td:nth-child(3)').text();
  //check rows
    if((sp1 == sp2) && (sp2 == sp3)){
        return sp3;
    }else if((sp4 == sp5) && (sp5 == sp6)){
        return sp6;
    }else if((sp7 == sp8) && (sp8 == sp9)){
        return sp9;
    }
    // check column
    if((sp1 == sp4) && (sp4 == sp7)){
        return sp7;
    }else if((sp2 == sp5) && (sp5 == sp8)){
        return sp8;
    }else if((sp3 == sp6) && (sp6 == sp9)){
        return sp9;
    }
    //check diagonal
    else if((sp1 == sp5) && (sp5 == sp9)){
        return sp9;
    }else if((sp3 == sp5) && (sp5 == sp7)){
        return sp7;
    }
    // Check for draw
    if (sp1 != "" && sp2 != "" && sp3 != "" && sp4 != "" && sp5 != "" && sp6 != "" && sp7 != "" && sp8 != "" && sp9 != "") {
        return "Draw";
    }
    //no winner
    return -1;
}
function highlightWinningCells(combination) {
    combination.forEach(function(cell) {
        $('table tr:nth-child(' + cell[0] + ') td:nth-child(' + cell[1] + ')').css('background-color', 'yellow');
    });
}
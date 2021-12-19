console.log('week 4 -   day 4 |  project-1');

console.log('tuwaiq 1000 -  js 30/11');





//   ........  Project: 1 ........ 

        

    // console.log($('#p1'));

    $(document).ready(function () {
      const cells = $(".cell");
    
      const winnerSpan = $("#winner");
      const turnSpan = $("#turn");
      const winnerPar = $("#parWinner");
      const turnPar = $("#parTurn");
    
      const restartButton = $("#restart");
      // console.log(cells);
      let turn = "X";
      const O = "O";
      const X = "X";
      const W = " ";
      cells.click(cellClicked);
      restartButton.click(restartTheGame);
    
      winnerPar.hide();
      restartButton.hide();
    
      function cellClicked() {
        // console.log(this);
        // this => DOM
        if ($(this).text() === "") {
          if (turn === X) {
            $(this).text(X);
            turnSpan.text(O);
            checkWinner(X);
            turn = O;
          } else {
            $(this).text(O);
            turnSpan.text(X);
            checkWinner(O);
            turn = X;
          }
          // checkWinner(turn);  next player
        } else {
          $(this).css("background-color", "red");
          setTimeout(() => {
            $(this).css("background-color", 'gray');
          }, 200); 
        }
      }
      function restartTheGame() {
        console.log("restart called");
        location.reload();
      }
    
      function checkWinner(currentPlayer) {
        /* - | \ /
        0 1 2
        3 4 5
        6 7 8
        */
        // console.log(cells);
        // Check Horizontal
        if (
          $(cells[0]).text() === $(cells[1]).text() &&
          $(cells[1]).text() === $(cells[2]).text() &&
          $(cells[0]).text() !== ""
        ) {
          playerWin(currentPlayer); 
          $(cells[0]).css('background-color','green');
          $(cells[1]).css('background-color','green');
          $(cells[2]).css('background-color','green');
        } else if (
          $(cells[3]).text() === $(cells[4]).text() &&
          $(cells[4]).text() === $(cells[5]).text() &&
          $(cells[3]).text() !== ""
        ) {
          playerWin(currentPlayer);
          $(cells[3]).css('background-color','green');
          $(cells[4]).css('background-color','green');
          $(cells[5]).css('background-color','green');
        } else if (
          $(cells[6]).text() === $(cells[7]).text() &&
          $(cells[7]).text() === $(cells[8]).text() &&
          $(cells[6]).text() !== ""
        ) {
          playerWin(currentPlayer);
          $(cells[6]).css('background-color','green');
          $(cells[7]).css('background-color','green');
          $(cells[8]).css('background-color','green');
          // Start check Vertical
        } else if (
          $(cells[0]).text() === $(cells[3]).text() &&
          $(cells[3]).text() === $(cells[6]).text() &&
          $(cells[0]).text() !== ""
        ) {
          playerWin(currentPlayer);
          $(cells[0]).css('background-color','green');
          $(cells[3]).css('background-color','green');
          $(cells[6]).css('background-color','green');
        } else if (
          $(cells[1]).text() === $(cells[4]).text() &&
          $(cells[4]).text() === $(cells[7]).text() &&
          $(cells[1]).text() !== ""
        ) {
          playerWin(currentPlayer);
          $(cells[1]).css('background-color','green');
          $(cells[4]).css('background-color','green');
          $(cells[7]).css('background-color','green');
        } else if (
          $(cells[2]).text() === $(cells[5]).text() &&
          $(cells[5]).text() === $(cells[8]).text() &&
          $(cells[2]).text() !== ""
        ) {
          playerWin(currentPlayer);
          $(cells[2]).css('background-color','green');
          $(cells[5]).css('background-color','green');
          $(cells[8]).css('background-color','green');
          // Diagonal  0 4 8   2 4 6
        } else if (
          $(cells[0]).text() === $(cells[4]).text() &&
          $(cells[4]).text() === $(cells[8]).text() &&
          $(cells[0]).text() !== ""
        ) {
          playerWin(currentPlayer);
          $(cells[0]).css('background-color','green');
          $(cells[4]).css('background-color','green');
          $(cells[8]).css('background-color','green');
        } else if (
          $(cells[2]).text() === $(cells[4]).text() &&
          $(cells[4]).text() === $(cells[6]).text() &&
          $(cells[2]).text() !== ""
        ) {
          playerWin(currentPlayer);
          $(cells[2]).css('background-color','green');
          $(cells[4]).css('background-color','green');
          $(cells[6]).css('background-color','green');
        } else { 
    // Do nothing
          // you need do think about for draw
          // console.log('DRAW');
        }
      }
    
      function playerWin(theWinner) {
        winnerSpan.text(theWinner);
        turnPar.hide(1000);
        winnerPar.show(1000);
        restartButton.show(2000);
    
        if ($("#winner").text() === "X" || $("#winnet").text() === "O") {
          for (let mm = 0; mm < cells.length; mm++) {
            if ($(cells[mm]).text() === "") {
              //to hide the cells
              // $(cells).hide();
    
              //to off click event
              $(cells[mm]).off("click");
              $(cells[mm]).off("click");
            }
          }
        }
      }
    });
    
       
        
    /*
      STEP 1: Grid Layout [HTML + CSS]
        HTML: use div with id 'board' and 9 div with class 'cell'
        CSS: style grid "board"
        CSS: style width & height "cell"
        HTML: add div id="all"
        HTML: add par "PLAYER TURN:" id='turn'
        HTML: add par "WIN" id='winner'
        HTML: add button "Play Again" id='restart'
        CSS: #all display: grid; && justify-content: center;
        CSS: p text-align: center;    
    
      STEP 2: When the player click on one of the cell => Show X || O
        show click X
        show click X || O (turn variable to switch between turns)
        Show the turn show turn to which player => PLAYER TURN: X || O
        Extra: 
          Invalid move => background red || can't click 
    
      NOW. when click on the button 'Play Again' the game will restart or the page will refresh (restart the game)
    
      STEP 3: When the player select 3 Win (check the winner)
        Build the logic to check if a player win or not [horizontal, vertical, or diagonal]
        Call the function check winner on each turn. if so change the winner p to the player who win
        if not don't do anything
    
      STEP 4: When a player win 
        Show who is the winner
        Hide the 'turn' p
        Show button say "Play Again" (restart the game)
        Make this button restart the game (refresh the page)
        
      Extra:
        Block clicked on the cell after a player win
        Enhance the design CSS
        Add tone when the player win
        Use Animation
        Change the background in the path that the winner win in
    */
    
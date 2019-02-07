$(document).ready(function () {


    //creating arrays here for now ... will move or manipulate as neccesary.
    var friends = ['Joe', 'Matt', 'Dustin', 'Brooks', 'Chip'];
    var locations = ['cellar', 'attic', 'panic room', 'loft', 'deep freezer', 'back yard', 'garage', 'theater room', 'bathroom', 'kitchen'];
    var weapons = ['meat clever', 'toilet plunger', 'stapler', 'pitch fork', 'vice grips', 'samurai sword', 'shiv', 'power cord', 'spatula', 'vase', 'dirty gym sock', 'piano', 'spoon', 'sledge hammer', 'nail gun', 'grinder', 'baseball bat', 'bear trap', 'bomb', 'anthrax'];


    for (i = 1; i < 101; i++) { // SOMEHOW NEED TO USE MODULUS (REMAINDERS) WITH THIS LOOP TO ITERATE THROUGH MY ARRAYS.
        $('<h3>Accusation' + ' ' + i + '</h3>').appendTo(document.body); //THIS CREATES AND APPENDS 100 H3'S.."ACCUSATION 1" - "ACCUSATION 100"... NOT SURE THE LOOP IS CORRECT THOUGH.

    }
    $(document).click(function (event) { // NEEDS A FUNCTION INSIDE OF HERE TO "ALERT FOR A PARTICULAR LOOP ITERATION" 
        var clickedH3 = event.target;
        alert(clickedH3.innerHTML + ': I accuse ' + friends[11 % 10] + ', with the ' + weapons[0] + ' in the ' + locations[0] + '!'); //JUST A TEST.. NEEDS FUNCTION(S) CREATED TO RANDOMLY CYCLE THROUGH THE GIVEN ARRAYS AND PASS THEM IN 
    });






});


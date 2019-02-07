$(document).ready(function () {
    //*CAPS NOTATION DENOTES PROBLEMS THAT HAVEN'T BEEN SOLVED..REMOVE ALL CAPS NOTATION WHEN FINISHED!!

    //arrays.... WILL MOVE OR CHANGE IF NECCESARY.


    for (i = 1; i < 101; i++) { // SOMEHOW NEED TO USE MODULUS (REMAINDERS) WITH THIS LOOP TO ITERATE THROUGH MY ARRAYS.
        $('<h3>Accusation' + ' ' + i + '</h3>').appendTo('.h3-container'); //THIS CREATES AND APPENDS 100 H3'S.."ACCUSATION 1" - "ACCUSATION 100"... NOT SURE THE LOOP IS CORRECT THOUGH.
        var friends = ['Joe', 'Matt', 'Dustin', 'Brooks', 'Chip'];
        var weapons = ['meat clever', 'toilet plunger', 'stapler', 'pitch fork', 'vice grips', 'samurai sword', 'shiv', 'power cord', 'spatula', 'vase', 'dirty gym sock', 'piano', 'spoon', 'sledge hammer', 'nail gun', 'grinder', 'baseball bat', 'bear trap', 'bomb', 'anthrax'];
        var locations = ['cellar', 'attic', 'panic room', 'loft', 'deep freezer', 'back yard', 'garage', 'theater room', 'bathroom', 'kitchen'];
        friends[i] = friends[i % 5];
        weapons[i] = weapons[i % 20];
        locations[i] = locations[i % 10];
        console.log(friends[i]);
        console.log(weapons[i]);
        console.log(locations[i]);//NEED TO FIGURE OUT A WAY TO USE THIS TO PASS TO THE ALERT FOR EACH H3

    }

    $('h3').click(function (event) { // NEEDS A FUNCTION INSIDE OF HERE TO "ALERT FOR A PARTICULAR LOOP ITERATION" 
        alert(event.target.innerHTML + ': I accuse ' + friends[i] + ', with the ' + weapons[i] + ' in the ' + locations[i] + '!'); //JUST A TEST.. NEEDS FUNCTION(S) CREATED TO RANDOMLY CYCLE THROUGH THE GIVEN ARRAYS AND PASS THEM IN

    });






});


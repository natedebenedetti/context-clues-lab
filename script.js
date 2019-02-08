$(document).ready(function () {
    

    
    var friends = ['Joe', 'Matt', 'Dustin', 'Brooks', 'Chip'];
    var weapons = ['meat clever', 'toilet plunger', 'stapler', 'pitch fork', 'vice grips', 'samurai sword', 'shiv', 'power cord', 'spatula', 'vase', 'dirty gym sock', 'piano', 'spoon', 'sledge hammer', 'nail gun', 'grinder', 'baseball bat', 'bear trap', 'bomb', 'anthrax'];
    var locations = ['cellar', 'attic', 'panic room', 'loft', 'deep freezer', 'back yard', 'garage', 'theater room', 'bathroom', 'kitchen'];
    
    
    for (i = 1; i < 101; i++) { 
        var headers = $('<h3 class=text-danger>Accusation ' + i + '</h3>');
        $('.h3-container').append(headers);
        var accusations = accusationBuilder(i);
        friends[i] = friends[i % 5];
        weapons[i] = weapons[i % 20];
        locations[i] = locations[i % 10];
        
        function accusationBuilder(i) {
            return headers.click(function () {
                alert('Accusation ' + i + ': I accuse ' + friends[i] + ', with the ' + weapons[i] + ' in the ' + locations[i] + '!');
            })
        }
        
        
        
    }

    

    




});


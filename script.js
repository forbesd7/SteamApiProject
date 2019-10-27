

const getGame = document.getElementById('getGame');
const addGameButton = document.getElementById('addGameButton');
const editGameButton = document.getElementById('editGameButton');
const deleteGameButton = document.getElementById('deleteGameButton');

const form = document.querySelector('form');


editGameButton.addEventListener("click", function(e) {
    e.preventDefault;
});
addGameButton.addEventListener("click", function(e) {
    e.preventDefault();

    let addGameName = document.getElementById('addGameName').value;
    let addGamePrice = document.getElementById('addGamePrice').value;
    let addGamePublisher = document.getElementById('addGamePublisher').value;

    axios.get('http://localhost:3000/addGame/?gameName=' + addGameName + '&gamePrice=' + addGamePrice + '&gamePublisher')
    .then( response => {
        for(let game of response.data.rows) {
            if (game.name === addGameName)  {
                console.log('oo');
                document.querySelector('.gameName').innerHTML = game.name;
                document.querySelector('.gamePrice').innerHTML = addGamePrice;
                document.querySelector('.gamePublisher').innerHTML = addGamePublisher;

            }
        }
    document.querySelector('.gameName').innerHTML = addGameName;
    document.querySelector('.gamePrice').innerHTML = addGamePrice;
    document.querySelector('.gamePublisher').innerHTML = addGamePublisher;
    console.log(addGameName);

    //addGamePriceInput = response.data.rows[0].name
    //addGamePublisherInput = response.data.rows[0].name
    })
    
    .catch(function(error) {
        console.log('y');
        console.log(error);
    })
    
    
})


getGameButton.addEventListener('click', function(e) {
    e.preventDefault();

    axios.get('http://localhost:3000/gameNames')
    .then( response => {

        let gameName = document.querySelector('.gameName');
        let gamePrice = document.querySelector('.gamePrice');
        let gamePublisher = document.querySelector('.gamePublisher');
        let errorMessage = document.querySelector('.error-message');
        let randomNum = Math.floor(Math.random() * 10000);
        console.log(randomNum);
        console.log(response);
        if (response.data.rows[randomNum]) {

            gameName.innerHTML = 'Game Title: ' + response.data.rows[randomNum].name;
            gamePrice.innerHTML = 'Game Price: $' + response.data.rows[randomNum].price;
            gamePublisher.innerHTML = 'Game Publisher: ' + response.data.rows[randomNum].publisher;

          } else {
            errorMessage.innerHTML = "This game is not in our database"
          }
        
    })
    
    .catch(function(error) {
        console.log(error);
    })

});
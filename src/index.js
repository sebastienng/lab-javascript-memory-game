const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {

    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if(memoryGame.pickedCards.length<2) card.classList.toggle('turned');

      
     
      memoryGame.pickedCards.push(card);
      console.log(memoryGame.pickedCards);
     
     setTimeout(()=>{
  

      if(memoryGame.pickedCards.length>=2){
        
        const cardObject1 = cards.find(item => item.name === memoryGame.pickedCards[0].getAttribute('data-card-name'));
        const cardObject2 = cards.find(item => item.name === memoryGame.pickedCards[1].getAttribute('data-card-name'));
        console.log(cardObject1);
        if(!memoryGame.checkIfPair(cardObject1.name,cardObject2.name)){
  
       
          memoryGame.pickedCards[0].classList.toggle('turned');
          memoryGame.pickedCards[1].classList.toggle('turned');
          memoryGame.pickedCards=[];
        
        }else{
          memoryGame.pickedCards=[];

        }
        

      }
      document.querySelector('#pairs-clicked').innerHTML=memoryGame.pairsClicked;
      document.querySelector('#pairs-guessed').innerHTML=memoryGame.pairsGuessed;
     },3000)
    

    });
  });
});

function subscribeButton() {
  const elementButton = document.querySelector('.js-subscribe-button');
  
  if (elementButton.innerHTML === 'Subscribe') {
    elementButton.innerHTML = 'Subscribed';
    elementButton.classList.add('is-subscribed')
  } else {
    elementButton.innerHTML = 'Subscribe';
    elementButton.classList.remove('is-subscribed')
  }
};

 
function calculateShipping() {
    // Get the order amount from the input field
    let orderAmount = document.querySelector('.js-text-input').value;
    const displayPrice = document.querySelector('.displayPrice');
    orderAmount = parseFloat(orderAmount);
    if (orderAmount <= 0) {
      displayPrice.innerHTML = 'Error: cost cannot be less than $0'
    } else {

    // Calculate the shipping price
    let totalPrice;
    if (orderAmount < 40) {
      totalPrice = orderAmount + 10;
      totalPrice = totalPrice.toFixed(2);
     } else {
      totalPrice = orderAmount;
    }
    displayPrice.innerHTML = `Total Price: $${totalPrice}`;
  }
}

function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateShipping();
  }
}

function changeSecondButton() {
   const changeButton = document.querySelector('.second-button');
   changeButton.innerHTML = '9b done'
}

function headsButton(button) {
  if (button === 'heads') {
  document.querySelector('.choice').innerHTML = 'You choose heads !'
  } else if (button === 'tails') {
    document.querySelector('.choice').innerHTML = 'You choose tails !'  
  }
}

function showText() {
  const showText = document.querySelector('.text-area');
  document.querySelector('.show-text').innerHTML = `Your name is ${showText.value}`;
}

function onKey(event) {
  if (event.key === 'Enter') {
    showText();
  }
}

function typeSame() {
  let inputText = document.querySelector('.type-same');
  document.querySelector('.text-same').innerHTML = inputText.value; 
}

let testButton = document.querySelector('.js-button');
 console.log(testButton.classList.contains('js-button'));

function isToggledButton(button) {
     if (button === 'gaming') {
     let gamingButton = document.querySelector('.js-gaming');
     if (gamingButton.classList.contains('is-toggled')) {
       gamingButton.classList.remove('is-toggled');
     } else {
       gamingButton.classList.add('is-toggled')
     }
   } else if (button === 'music') {
    let gamingButton = document.querySelector('.js-music');
     if (gamingButton.classList.contains('is-toggled')) {
       gamingButton.classList.remove('is-toggled');
     } else {
       gamingButton.classList.add('is-toggled')
     }
   } else if (button === 'tech') {
    let gamingButton = document.querySelector('.js-tech');
     if (gamingButton.classList.contains('is-toggled')) {
       gamingButton.classList.remove('is-toggled');
     } else {
       gamingButton.classList.add('is-toggled')
     }
    }
}

function isToggledButton2(value) {
    const gamingButton2 = document.querySelector('.js-gaming2');
    const musicButton2 = document.querySelector('.js-music2');
    const techButton2 = document.querySelector('.js-tech2');
    
    if (value === 'gaming2') {
      gamingButton2.classList.remove('is-toggled');
      musicButton2.classList.add('is-toggled');
      techButton2.classList.add('is-toggled');
    } else if (value === 'music2') {
      gamingButton2.classList.add('is-toggled');
      musicButton2.classList.remove('is-toggled');
      techButton2.classList.add('is-toggled');
    } else if (value === 'tech2') {
      gamingButton2.classList.add('is-toggled');
      musicButton2.classList.add('is-toggled');
      techButton2.classList.remove('is-toggled');
    }
}

const add = function() {
  console.log(2 + 3);
}

add();
add();

function runTwice(fun) {
  fun();
  fun();
}

runTwice(add);

function startTwoSecond() {
  const startButton = document.querySelector('.start-button');
    startButton.innerHTML = 'Loading...'
  setTimeout(function() {
    startButton.innerHTML = 'Finished'
  }, 2000);
}
let timerId;
function addToCart() {
  clearTimeout(timerId);
  const startButton = document.querySelector('.add-cart-button');
  const textAdded = document.querySelector('.text-added');
  startButton.innerHTML = 'Remove'  
  textAdded.innerHTML = 'Added'
  timerId = setTimeout(function() {
    textAdded.innerHTML = ''
  }, 2000);
}
/*
//function to change the title of the webpage for every 1 second
let interId = setInterval(function() {
  document.title = '(2) New messages';
}, 1000);

setInterval(function() {
  document.title = 'App'
}, 2000);
*/

let messageQuantity = 0;
function addQuantity() {
  messageQuantity++;
  document.title = `(${messageQuantity}) New messages`
}

function  removeQuan() {
  if (messageQuantity === 1) {
    document.title = 'App'
    messageQuantity--;
  } else {
    messageQuantity--;
    document.title = `(${messageQuantity}) New messages`
  }
}
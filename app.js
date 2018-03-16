var btn = document.querySelector(".btn")
var gameStart = document.getElementById('game-start')
var game = document.getElementById('game')
var flag = document.querySelectorAll('.flag img')
var pays = document.querySelector('.pays')
var nom = pays.textContent
var time = document.querySelector('.time span')
var gameOver = document.querySelector('#game-over')
var button = document.querySelector('.button')
var count = 0
count = time.textContent
var change_country = pays

btn.addEventListener('click', function() {
  gameStart.classList.remove('is-open');
  button.addEventListener('click', function() {
    gameOver.classList.remove('is-open')
    count = 21

  })


  function set() {
    if (count > 0) {
      count--
      time.textContent = count;



    } else {
      gameOver.classList.add("is-open")
    }


  }


  window.setInterval(set, 1000)

})

for (var i = 0; i < flag.length; i++) {
  flag[i].setAttribute('src', "flags/" + flags[Math.floor(Math.random() * flags.length)].code + ".svg"), change_country.innerHTML = flags[Math.floor(Math.random() * flags.length)].name



}
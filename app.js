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
var live = document.querySelector(".lives")
var btn2 = document.querySelector('.button')


var number
count = time.textContent
var change_country = pays
btn2.addEventListener('click', function() {
  gameStart.classList.add('is-open');

})
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
var change = []
for (var i = 0; i < flag.length; i++) {

  number = Math.floor(Math.random() * flags.length)
  change.push(flags[number].name)
  flag[i].setAttribute('src', "flags/" + flags[number].code + ".svg")
  flag[i].setAttribute('name', flags[number].name)
  flag[i].addEventListener("click", function() {
    var image = document.querySelector(".img1")
    var test = document.querySelectorAll(".img1")
    var j = test.length



    if (this.name === pays.innerHTML) {
      count += 3;


    } else {

      if (image !== null && j > 1) {
        live.removeChild(image)

      } else if (j === 1) {
        gameOver.classList.add("is-open")

      }

    }
  })

}
pays.innerHTML = change[Math.floor(Math.random() * change.length)]
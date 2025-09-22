const cardwrapper = document.querySelector('.content-cards')
const searchInput = document.getElementById('search-input')
const searchbutton = document.getElementById('search-button')




const films = [
{
  id: 0 ,
  title: 'марсианин1' ,
  original: 'The Martian 2015',
  category: 'Фантастика, приключения',
  rating: 7.8,
  link: '/film.png',
  image : './images/film.png'
},
{
  id: 1 ,
  title: 'марсианин2' ,
  original: 'The Martian 2015',
  category: 'Фантастика, приключения',
  rating: 7.8,
  link: '/film.png',
  image : './images/film.png'
},
{
  id: 2 ,
  title: 'марсианин3' ,
  original: 'The Martian 2015',
  category: 'Фантастика, приключения',
  rating: 7.8,
  link: '/film.png',
  image : './images/film.png'
}
]

const render = (array) => {
   cardwrapper.innerHTML = ''

   array.forEach ((item) => {
cardwrapper.insertAdjacentHTML('beforeend', `
  
  <a href="${item.link}" class="content-cards_item">
                <div class="content-cards_item--img">
                  <img src="./images/film.png" alt="film">
                </div>

                <div class="content-cards_item--title">
                  <h5>${item.title}</h5>
                  <span>${item.original}</span>
                </div>
                <p class="content-cards_item--description">${item.category}</p>
                <p class="content-cards_item--rating">${item.rating}</p>
              </a>
  `)
   })
}

searchbutton.addEventListener('click', () => {
  render(films.filter((item) => item.title.includes(searchInput.value)));  
})

render(films)
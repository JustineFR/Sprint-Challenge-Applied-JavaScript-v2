// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then((response) => {
    console.log('cards response: ', response.data)
    createCards(response.data)
})

.catch((error) => {
    console.log('ERROR: ', error)
})

const cardsContainer = document.querySelector('.cards-container')


function createCards(data) {

        // create elements
        const card = document.createElement('div')
        const headline = document.createElement('div')
        const author = document.createElement('div')
        const imgContainer = document.createElement('div')
        const image = document.createElement('img')
        const byAuthor = document.createElement('span')
    
        // add classes
        card.classList.add('card')
        headline.classList.add('headline')
        author.classList.add('author')
        imgContainer.classList.add('img-container')
    
        // Add content
        card.textContent = data.articles[0]
        // card.textContent = data.articles.topic
        headline.textContent = data.articles[1]
        // card.textContent = data.articles.topic[0].headine
        author.textContent = data.articles[2]
        // card.textContent = data.articles.topic[0].authorName
        image.textContent = data.articles[3]
        // card.textContent = data.articles.topic[0].authorPhoto
        byAuthor.textContent = data.articles[4]
    
        // Append
        cardsContainer.appendChild(card)
        card.appendChild(headline)
        card.appendChild(author)
        author.appendChild(imgContainer)
        imgContainer.appendChild(img)
        author.appendChild(byAuthor)


    
     return card
    
      }
    
      createCards()
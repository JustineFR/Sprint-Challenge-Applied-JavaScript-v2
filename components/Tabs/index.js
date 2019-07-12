// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')


axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then((response) => {
    console.log('response: ', response)
})

.catch((error) => {
    console.log('ERROR: ', error)
  })


function createTabs() {

    // create elements
    const tab1 = document.createElement('div')
    const tab2 = document.createElement('div')
    const tab3 = document.createElement('div')
    const tab4 = document.createElement('div')
    const tab5 = document.createElement('div')



  }
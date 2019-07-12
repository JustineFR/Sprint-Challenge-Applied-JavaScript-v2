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
    console.log('response: ', response.data.topics)

    const items = response.data.topics
    console.log(items)

    items.forEach(topic => {
        const tab = document.createElement('div')
        tab.classList.add('tab')
        tab.textContent = items[topic]
        topics.appendChild(tab)

    });

})

.catch((error) => {
    console.log('ERROR: ', error)
  })






// function createTabs(data) {

//     // create elements
//     const tab1 = document.createElement('div')
//     const tab2 = document.createElement('div')
//     const tab3 = document.createElement('div')
//     const tab4 = document.createElement('div')
//     const tab5 = document.createElement('div')

//     // add classes
//     tab1.classList.add('tab')
//     tab2.classList.add('tab')
//     tab3.classList.add('tab')
//     tab4.classList.add('tab')
//     tab5.classList.add('tab')

//     // Add content
//     tab1.textContent = data.topics[0]
//     tab2.textContent = data.topics[1]
//     tab3.textContent = data.topics[2]
//     tab4.textContent = data.topics[3]
//     tab5.textContent = data.topics[4]

//     // Append
//     topics.appendChild(tab1)
//     topics.appendChild(tab2)
//     topics.appendChild(tab3)
//     topics.appendChild(tab4)
//     topics.appendChild(tab5)

 

//   }

//   createTabs()
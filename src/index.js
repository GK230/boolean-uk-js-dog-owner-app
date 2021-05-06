// console.log(data);
// We create individual components here

function dogList(dogs) {
    for (dog of dogs) {
        let liEl = document.createElement('li')
        liEl.setAttribute("class", "dogs-list__button")
        liEl.innerText = dog.name
        liEl.addEventListener('click', displayDog(dog))
        let ulEl = document.querySelector(".dogs-list")
        ulEl.append(liEl)
    }
}


function displayDog(dog) {

    let secEl = document.querySelector('.main__dog-section')

    let h2El = document.querySelector('h2')
    h2El.innerText = dog.name

    let imgEl = document.createElement('img')
    imgEl.setAttribute('src', dog.image)
    imgEl.setAttribute('alt', 'picture of relevant dog')
    imgEl.setAttribute('width', '400')
    imgEl.setAttribute('height', '300')

    let divEl = document.createElement('div')
    divEl.setAttribute('class', 'main__dog-section__desc')

    let h3El = document.createElement('h3')
    h3El.innerText = "Bio"

    let pEl = document.createElement('p')
    pEl.innerText = dog.bio

    divEl.append(h3El, pEl)

    let div2El = document.createElement('div')
    div2El.setAttribute('class', 'main__dog-section__btn')

    let p2El = document.createElement('p')
    let emEl = document.createElement('em')
    emEl.innerText = "Is naughty?"
    p2El.append(emEl)
    div2El.append(p2El)

    secEl.append(imgEl, divEl, div2El)



}

dogList(data)





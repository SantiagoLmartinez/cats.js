console.log('test 00...start')
const _catContainer = document.querySelector('.catContainer')
const _btn = document.querySelector('#btn')

// EventLis
_btn.addEventListener('click', () =>{
    fetchData()
})

function fetchData(){
    fetch(' https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => createCat(data) );
    // createCat(data)
    // console.log(data)
}

function createCat(cat){
    console.log(cat)
    _catContainer.innerHTML =`<img class="" id="cat-img" src="${cat.file}" alt="miau">` 
}


fetchData()
console.log('test 01...end')
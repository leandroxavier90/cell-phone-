
const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')
 

input.addEventListener('focus',() =>{
    console.log('dei um foco')
})
  select.addEventListener('change', () =>{
    console.log(select.value)
  })
  // button,addEventListener('click', ()=>{
  //  alert('o botao foi clicado')
 //  })
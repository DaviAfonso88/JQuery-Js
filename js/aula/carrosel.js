let carosseis = document.getElementsByClassName('carossel-Container')

for(let i = 0; i < carosseis.length; i++){
  let carossel = carosseis[i]
  let btnBack = carossel.getElementsByClassName('BtnBack')[0]
  let btnNext = carossel.getElementsByClassName('BtnNext')[0]

  let itens = carossel.getElementsByClassName('item')
  let posicaoAnterior = 0
  let mover = posicaoAnterior + 100

  btnNext.addEventListener('click', ()=>{
    mover = posicaoAnterior + 100

    for(let c = 0; c < itens.length; c++ ){

    itens[c].style.right=  mover + '%'

    posicaoAnterior = mover}
  })

  btnBack.addEventListener('click', ()=>{
    mover = posicaoAnterior - 100

    for(let c = 0; c < itens.length; c++ ){

    itens[c].style.right=  mover + '%'

    posicaoAnterior = mover}

  })
}

const trocarCor = (cor)=>{
    document.body.style.background=''
    document.body.style.backgroundColor=cor
    
}
const corAleatoria = ()=>{
    document.body.style.background=''
    let cor = Math.floor(Math.random()*255)
    let cor1 = Math.floor(Math.random()*255)
    let cor2 = Math.floor(Math.random()*255)
    document.body.style.backgroundColor= `rgb(${cor},${cor1},${cor2})`
    console.log(cor)
    console.log(cor1)
    console.log(cor2)
}
const aplicarCor = ()=>{
   let corDesejada = document.getElementById("corDesejada").value
   trocarCor(corDesejada)

}
function setImagemBody  (imagem){
    const reader = new FileReader()
    reader.onload = function (ev) {
       document.body.style.backgroundImage= `url(${ev.target.result})`
       
    }
    reader.readAsDataURL(imagem)
    

}
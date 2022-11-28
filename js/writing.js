const barbtn = document.querySelector('.bar');
const menu = document.querySelector('.navbar_menu');

barbtn.addEventListener('click',()=>{
    menu.classList.toggle('avtive');
});

document.addEventListener('DOMContentLoaded', () => {

const selectDrop = document.querySelector('#countires');
// const selectDrop = document.getElementById('countires');

fetch('https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=922f4bc8842956d94e130993d069759b&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list').then(res => {
    return res.json(); 
}).then(data => {
    let output = "";
   data.forEach(country => {
    output += `<options>${country.mClass}</options>`;
   })
}).catch(err => {
    console.log(err);
})

})
const form = document.getElementById('form');
const fill = document.getElementById('fill');
const msg = document.getElementById('msg');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    update();
})

const update = () =>{
  if(fill.value==""){
    alert('Fill up the text');
  }else{
    alert('Data Saved');
  }
  addData();
}
const data = {};
const addData = () =>{
  data['text'] = fill.value;
  fill.value = "";
  displayData();
}

const displayData = () =>{
    msg.innerHTML = `<p>${data.text}</p>`
}
const button=document.querySelectorAll('button');
const screen=document.querySelector('#screen');
for(let btn of button){
    btn.addEventListener('click',(e)=>{
       const text= e.target.innerText
       if(text==="x"){
           screen.value+='*'; 
       }
       else if(text==='C'){
           screen.value="";
       }
       else if(text==="="){
          screen.value= eval(screen.value);
       }
       else{
           screen.value+=text;
       }
    })
}
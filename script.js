const tics=document.querySelectorAll('.tic');
console.log(tics);
let turn="X";
let info=document.querySelector('.info');
info.innerText=turn+" turn";
let image=document.querySelector('img');
let b=false;
function changeturn(){
    if(turn==="X"){
        turn="O";
    }
    else{
        turn="X";
    }
}
function checkwin(){
    let box=document.getElementsByClassName('text');
    const win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ]
    win.forEach((e) => {
        if((box[e[0]].innerText===box[e[1]].innerText) && (box[e[1]].innerText===box[e[2]].innerText) && (box[e[0]].innerText!=="")){
            info.innerText=box[e[0]].innerText+" WON";
            b=true;
            image.style.width="120px";
        }
    })
}
tics.forEach(element=>{
    let text=element.querySelector('.text')
    element.addEventListener('click',function(){
        console.log(text);
        if(text.innerHTML==""){
            text.innerHTML=turn;
            changeturn();
            checkwin();
            if(!b){
                info.innerText=turn+" turn";
            }

        }
        
    })

})

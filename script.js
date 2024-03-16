const imgs= document.querySelectorAll('.header-slider ul img');
const prev_button= document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n=0;

function changeslide(){
    for (let i=0; i < imgs.length; i++ ){
        imgs[i].style.display ='none';
    }
    imgs[n].style.display ='block';

}


prev_button.addEventListener('click' , (e)=> {
    if (n > 0){
       n-- ;
    }else{
        n= imgs.length-1;
    }
    changeslide();
}
)
next_btn.addEventListener('click' , (e)=> {
    if (n < imgs.length-1){
       n++ ;
    }else{
        n= 0;
    }
    changeslide();
}
)

const scrollContainer = document.querySelectorAll('.product');

for (const it of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft+=evt.deltaY;
    })
}
// let i = 0;
function counter(i){
    setTimeout(function(){
        if(i<=5){
            console.log(i);
            counter(i+1);
        }
    },100);
    return;
    }
counter(1);

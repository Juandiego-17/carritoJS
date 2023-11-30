let count=0;
const valor=document.getElementById("valor")

function increment(){
    //alert("incremento")
    count+=1;
    //localstorage.setItem("contador",contador)
    valor.innerHTML=count
}
function decrement(){
    //alert("decremento")
    if(count>0){
        count-=1;
        valor.innerHTML=count;
    }else{
        count=0;
        valor.innerHTML=count;
    }
}
function reset(){
    count=0;
    valor.innerHTML=count;
}
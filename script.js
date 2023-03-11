var data = 0 ;
document.getElementById("minus").innnerText=data;
function decrement(){
    data=data-1;
    document.getElementById('num-btn').innerText=data;
}
function increment(){
    data=data+1;
    document.getElementById('plus').innerText=data;
}
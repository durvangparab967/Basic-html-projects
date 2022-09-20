const h1 = document.querySelector("h1");
const parentDiv = document.querySelector(".parent");
const digitalClock = () =>{
    const dateObj = new Date();
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let seconds = dateObj.getSeconds();

    if(+hours<=9){
        hours=`0${hours}`;
    }
    if(+minutes<=9){
        minutes=`0${minutes}`;
    }
    if(+seconds<=9){
        seconds=`0${seconds}`;
    }
    h1.innerHTML=`${hours}:${minutes}:${seconds}`;
   // parentDiv.classList.toggle('animate');
    
}
setInterval(digitalClock, 1000);
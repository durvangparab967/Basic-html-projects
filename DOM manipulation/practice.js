var devices = prompt('Which device you want to turn on?');
switch(devices){
    case 'fan': 
    console.log("The fan is turned on");
    break;
    case 'light': 
    console.log("The light is turned on");
    break;
    case 'AC': 
    console.log("The AC is turned on");
    break;
    default: 
    console.log(`${devices} is invaild option selected`);
    break;
}
console.log('Anything elese!');

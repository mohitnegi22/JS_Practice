const MyUser={
    name:"Mohit",
    roll:"190161",
    city:"ghaziabad"
}

MyUser.greeting=function(){
    console.log(`Hello JS User , ${this.name}`);
}
console.log(MyUser.greeting())
const mysym= Symbol("key1")
const users={
     name:"Mohit",
     [mysym]: "mykey1",

}
console.log(users[mysym]);
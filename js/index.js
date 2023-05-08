let nameArray = ["Mike", "Luke", "Timmy", "Susan", "Victoria"];
let isTimmy = false;

for(let i = 0; i < nameArray.length; i++){
    
    let user = nameArray[i];

    if(user === "Timmy"){
        isTimmy = true
    }
}

console.log("Is Timmy at the party? " + isTimmy)







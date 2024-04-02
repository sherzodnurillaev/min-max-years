let students = [
    {
        id: 1,
        name: "Sherzod",
        age: 20,
        isMarried: false
    },
    {
        id: 2,
        name: "Farrux",
        age: 19,
        isMarried: true
    },
    {
        id: 3,
        name: "Ilya",
        age: 14,
        isMarried: false
    },
    {
        id: 4,
        name: "Amal",
        age: 11,
        isMarried: true
    },
]

old = students[0]

students.forEach((user) => {
   if (user.age > old.age) {
        old = user
   }
})

console.log(old);


young = students[0]

students.forEach((yuser) => {
   if (young.age > yuser.age) {
        young = yuser
   }
})

console.log(young);

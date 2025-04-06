const user = {
    name: "John",
    surname: "Smith"
};

user.name = "Pete";
// console.log(user.name) - test case
delete user.name;
console.log(user.name)

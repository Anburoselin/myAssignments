// Functions examples 

// function declaration
function userProfile(name) {
    console.log('Hello, ' + name + '!');
}
// Arrow function
const double = (number) => number * 2;

// anonymous function with setTimeout
setTimeout(function () {
    console.log('This message is delayed by 2 seconds');
}, 2000);

// callback function with delayed user data
function getUserData(callback) {
    setTimeout(function () {
        const user = { name: 'John', age: 25 };
        callback(user);
    }, 3000);
}
//functional call

userProfile('Alice');
console.log('Double of 5 is:', double(5));

getUserData(function (user) {
    console.log('User Name:', user.name);
    console.log('User Age:', user.age);
});

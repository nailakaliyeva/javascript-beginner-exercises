var person = {
    name: "John",                    //String
    lastname: "Doe",
    age: 35,                         //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2       //Object, yes the same variable/object defined after
};
person.lucky_numbers[3] = 33;


var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

//Little Jimmy's object

var family = {
    lastname: "Doe",
    members: [person, person2]       //Array of objects, don't forget to add Jimmy
};
let person3 = {
  name : "Jimmy",
  lastname: "Doe",
  age: 13,
  gender: "male",
  lucky_numbers: [ 1,2,3,4],
  significant_other: null
};
family.members.push(person3);
let nums = [];
let myArray = family.members.forEach((item, index)=>{
  nums.push(item.lucky_numbers);
});
nums = nums.flat();
let sum = 0;
for (i=0;i<nums.length; i++){
  sum += nums[i]
}
console.log(sum)


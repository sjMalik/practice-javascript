// ES5
const college1 = {
    name : 'DTU',
    established : '1941',
    isPrivate : false
};
 
let name1 = college.name;
let established1 = college.established;
let isPrivate1 = college.isPrivate;

// ES6
const college2 = {
    name : 'DTU',
    established : '1941',
    isPrivate : false
};
 
let{name,established,isPrivate} = college;
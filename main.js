// Your code here.
const getFirstName = function (person) {
  return person.firstName;
};


const getLastName = function (person) {
  return person.lastName; 
};

const getFullName = function (person) {

return (person.firstName + " " + person.lastName);

};

const setFirstName = function (person, name) {
  return (person.firstName = name);
};

const setAge = function (person, age) {
  return (person.age = age);
};

function giveBirthday(person) {
	if (person["age"] === undefined) {
		return (person["age"] = 1);
	} else {
		return (person["age"] += 1);
	}
}


function marry(person1, person2) {
  person1.married = true;
	person2.married = true;
	person1.spouseName = person2.firstName + " " + person2.lastName;
  person2.spouseName = person1.firstName + " " + person1.lastName;
}

function divorce(person1, person2) {
	 delete person1.spouseName;
	 delete person2.spouseName;
	person1.married = false;
	person2.married = false;
}




















// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}

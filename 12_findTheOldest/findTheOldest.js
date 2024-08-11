let currentDate = new Date();
let currentYear = currentDate.getFullYear();

const findTheOldest = function(people) {
    oldestPerson = people.reduce((oldest,person) => {
        let oldestAge;
        let personAge;

        oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        personAge = person.yearOfDeath - person.yearOfBirth;
        if (oldest.yearOfDeath === undefined) {
            oldestAge = currentYear - oldest.yearOfBirth;

        }
        if (person.yearOfDeath === undefined) {
            personAge = currentYear - person.yearOfBirth;
        }

        if (personAge > oldestAge){
            return person;
        }else return oldest;
    })
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;

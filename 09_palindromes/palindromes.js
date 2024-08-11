const palindromes = function (string) {
 
    string = string.replace(/[!"#$%&'() *+,-./:;<=>?@[\]^_`{|}~]/g,'').toLowerCase();


    let firstHalf = string.slice(0,Math.floor(string.length/2));
    let secondHalf = string.slice(Math.ceil(string.length/2),string.length);

    // we turn the secondHalf into an array to reverse it 
    secondHalf = secondHalf.split("").reverse().toString().replaceAll(",","")
    if (firstHalf === secondHalf){
        return true;
    }else return false;

};

// Do not edit below this line
module.exports = palindromes;

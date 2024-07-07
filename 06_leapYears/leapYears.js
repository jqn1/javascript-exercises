const leapYears = function(year) {
  if (
    year % 4 === 0 && 
    (!( year % 100 === 0 ) || year % 400 === 0)
  ) {
    console.log("TRUE");
    return true;

  } else {
    console.log("FALSE");

   return false;
  }

};

// Do not edit below this line
module.exports = leapYears;

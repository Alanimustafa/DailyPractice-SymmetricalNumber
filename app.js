theArrayNumber = [];

function isSymmetricalNumbers (theNumber) {

reverseString = theNumber.split('').reverse().join('');

(theNumber === reverseString) ? console.log(`${theNumber} is a symmetrical number`) : console.log(`${theNumber} is NOT a symmetrical number`) ;

//console.log(reverseString);  

}


isSymmetricalNumbers('72227') ;
isSymmetricalNumbers('123456') ;
isSymmetricalNumbers('989') ;
isSymmetricalNumbers('12345678987654321') ;
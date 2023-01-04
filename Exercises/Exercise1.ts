// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

function twoFer(name:string = "you"):string{
    return `One for ${name}, one for me`
}

twoFer("Elton")


// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

function isLeapYear(year:number):boolean {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true
    }
    else{
        return false
    }
}


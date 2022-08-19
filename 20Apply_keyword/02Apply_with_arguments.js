// The apply() method accepts arguments in an array:
var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe"
}
console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

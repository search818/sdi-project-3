alert("JavaScript works!");



var rsvp = function (name,age,gender) {
  // Private
  var donations = [];
  var donationContent = function (item) {
	if (item !== "cash") {
	  donations.push(item);
	} else {
	  console.log("No cash donations allowed!")
	}
  };
  var getName = function () { return name; };
  return {
  
	"name": getName,
	"age": getAge,
	"gender": getGender,
	"donationContent": donationContent
	
  };
};
 //rsvp names
 var Tiffany = rsvp("Tiffany",36,"Female");
 var Chuck   = rsvp("Chuck",42,"Male");
 var Will    = rsvp("Will" ,39,"Male");
 var Lisa    = rsvp("Lisa" ,48,"Female");
  


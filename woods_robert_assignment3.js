alert("JavaScript works!");
//Robert Woods
//
//sdi 1211
//Project 3 rsvp charity party


var rsvpList= [];


var rsvp = function (name,age,gender) {
  var donations = [];
  
	
	//functions
	var addDonation = function (item) {
	 for (var i =0; i < item.length; i++) {
	  if (gender === "Female") {
	    console.log(name + " has added " + item[i] + " to her donation.");
	  } else {
	    console.log(name + " has added " + item[i] + " to his donation.");
	  } 
	  donations.push(item);
	
	}
  };
  
  var showDonation = function () {
    for ( var i = 0; i < donationAmount.length; i++) {
      console.log(name + " brought " + donations[i] + " for the charity party.");
    };
    return donation;
  };
  
  var getAge = function () {
    if(age < 18) {
      console.log(name + " must be with an adult at the charity party")
    } else {
      console.log(name + " is an adult ")
    };
    return age;
  };
  
  var getGender = function () {
    return gender;
  };
  
  return { 
    "name": getName,
	"age": getAge,
	"gender": getGender,
	"addContents": addDonation,
	"showContents": showDonation
	
  };
};
 //rsvp names
 var rsvp1 = rsvp("Tiffany",36,"Female");
 rsvpList.push(rsvp1);
 var rsvp2 = rsvp("Chuck",42,"Male");
 rsvpList.push(rsvp2);
 var rsvp3 = rsvp("Will",39,"Male");
 rsvpList.push(rsvp3);
 var rsvp4 = rsvp("Lisa",48,"Female");
 rsvpList.push(rsvp4);
 var rsvp5 = rsvp("Sara",17,"Female");
 rsvpList.push(rsvp5);
 
 rsvp1.addContents(["300 dollar check"]);
 rsvp2.addContents(["350 dollar check"]);
 rsvp3.addContents(["200 dollar check"]);
 rsvp4.addContents(["400 dollar check"]);
 rsvp4.addContents(["50 dollars"]);
 
 console.log(rsvp1.name() + " is " + rsvp1.age());
 console.log(rsvp2.name() + " is " + rsvp2.age());
 console.log(rsvp3.name() + " is " + rsvp3.age());
 console.log(rsvp4.name() + " is " + rsvp4.age());
 console.log(rsvp5.name() + " is " + rsvp5.age());
 
 
 
 
  
 
 
  


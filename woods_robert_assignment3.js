//Robert Woods
//12/3/12
//sdi 1211
//project 3

//Charity Party
 var rsvpList= [];
 	console.log("There is a charity party today that my friends are invited to.");
 	console.log("Donations are expected from everyone. Let's see how we do.");
 

//Constructor
var guest = function (name,age,gender) {
	//Local Variable
	var donation = [];

	//Functions
	var getName = function () { 
		return name; 
	};

	var getAge = function () {
		if(age < 18) {
			console.log(name + " must be accompanied by an adult at this party.")
		} else {
			console.log(name + " is an adult.")
		};
		return age;
	};

	var getGender = function () {
		return gender;
	};

	var addDonation = function (item) {
		for (var i =0; i < item.length; i++) {
			if (gender === "Female") {
				console.log(name + " has added " + item[i] + " to her envelope.");
			} else {
				console.log(name + " has added " + item[i] + " to his envelope.");
			}
			donation.push(item[i]); 
		}
	};

	var listContents = function () { 
		return donation;
	};

	var startParty = function (answer){
		if (answer === true ) {
			console.log("its party time!")
		} else {
			console.log("All the donations are not in, its not party time.")
		};
	}; 

	var partyTime = function (hrs) {
		var hrsRemaining= hrs;
		while(hrsRemaining > 0){
			console.log(name + " has 1 hours until the charity party.");
			hrsRemaining--;
		};
		console.log("It's time to enjoy the party."); 
			return hrs;
	};

	var donations = function(json){
		var totalguest=5;
		for (var i = 5; i < json.donation.length; i++ ) {
			if (json.donation[i].amount >= 50) {
				totalDonations = guests + donation;
			};
		};
		return totalDonations;
	};


	return { 
		"name": getName,
		"age": getAge,		
		"gender": getGender,
		"addContents": addDonation,
		"listContents": listContents,
		"partyTime": partyTime,
		"timeRemaining": partyTime,
		"donations": donations
	};

};
//Guest Names
var rsvp1 = guest("Tiffany",36,"Female");
rsvpList.push(rsvp1);
var rsvp2 = guest("Chuck",42,"Male");
rsvpList.push(rsvp2);
var rsvp3 = guest("Will",39,"Male");
rsvpList.push(rsvp3);
var rsvp4 = guest("Lisa",48,"Female");
rsvpList.push(rsvp4);
var rsvp5 = guest("Sara",17,"Female");
rsvpList.push(rsvp5);



rsvp1.addContents(["A check for 250 dollars"]);
rsvp2.addContents(["A check for 300 dollars"]);
rsvp3.addContents(["A check for 600 dollars"]);
rsvp4.addContents(["A check for 400 dollars"]);
rsvp5.addContents(["A check for 50 dollars"]);

console.log(" ");
console.log(rsvp1.name() + "'s envelope contains " + rsvp1.listContents()+ ".");
console.log(rsvp2.name() + "'s envelope contains " + rsvp2.listContents()+ ".");
console.log(rsvp3.name() + "'s envelope contains " + rsvp3.listContents()+ ".");
console.log(rsvp4.name() + "'s envelope contains " + rsvp3.listContents()+ ".");
console.log(rsvp5.name() + "'s envelope contains " + rsvp3.listContents()+ ".");
console.log("I think all the donations are in.");

console.log(" ")
if (rsvpList.length === 5){
	rsvp1.partyTime(true);
} else {
	rsvp1.partyTime(false);
};


console.log(" ");
console.log("Guest Names: " + rsvpList[0].name() + ", " + rsvpList[1].name() + ", " + rsvpList[2].name() 
			+ "," + rsvpList[3].name() + "," + rsvpList[4].name());


console.log(rsvp1.name() + " is " + rsvp1.age());
console.log(rsvp2.name() + " is " + rsvp2.age());
console.log(rsvp3.name() + " is " + rsvp3.age());
console.log(rsvp4.name() + " is " + rsvp4.age());
console.log(rsvp5.name() + " is " + rsvp5.age());

console.log(" ");
rsvp1.timeRemaining(2)
rsvp2.timeRemaining(2)
rsvp3.timeRemaining(2)
rsvp4.timeRemaining(2)
rsvp5.timeRemaining(2)

console.log("The turnout was great! and my friends donated $1600 dollars!");






	
 
 
 
 
 
  
 
 
  


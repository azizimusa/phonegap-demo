function createcontact() {
		var fname = document.getElementById('fname').value;
		//var lname = document.getElementById('lname').value;
		
		if(fname != ""){
        var myContact = navigator.contacts.create();
		myContact.displayName = fname;  
		
		myContact.save(onContacts,offContacts);  
		}		
		else {
			alert("Fill in the box 1st");
		}
    }
function onContacts(myContact){
	alert("Success create 1 contact, " + myContact.displayName + "\nNow how about you find some contacts");
	document.getElementById('fname').value="";	
}

function offContacts(contactError){
	alert(contactError.code);
}

function findcontacts() {
                // find all contacts with 'Bob' in any name field
				var fname = document.getElementById('fname').value;
				
				if(fname != ""){
                var optionsfind = new ContactFindOptions();
                optionsfind.filter = fname;
                var fields = ["displayName", "name"];
                navigator.contacts.find(fields, onfind, offfind, optionsfind);
				}
				else{
					alert("Fill in the box 1st");
				}
            }

            // onSuccess: Get a snapshot of the current contacts

            function onfind(contacts) {
                for (var i = 0; i < contacts.length; i++) {
                    document.getElementById('findcontact').innerHTML+="Display Name = " + contacts[i].displayName + "<br />";
					//alert("Display Name = " + contacts[i].displayName);
                }
            }

            // onError: Failed to get the contacts

            function offfind(contactError) {
                alert('onError!');
            }

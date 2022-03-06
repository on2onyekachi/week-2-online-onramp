  const cancelBtn = document.querySelector('#cancel')
const firstName = document.querySelector(".firstName");
const emailHolder = document.querySelector(".email");
const phoneNumber = document.querySelector(".phoneNumber");
const sendBtn = document.querySelector("#send");
const messageHolder = document.querySelector("#message");


function clearAll(e){
  e.preventDefault();
    firstName.value = "";
    messageHolder.value = "";
    emailHolder.value = "";
    phoneNumber.value = "";
}

cancelBtn.addEventListener("click", clearAll)


function checkDetails(e){
   const firstNameValue = firstName.value
   const messageHolderValue = messageHolder.value
   const phoneNumberValue = phoneNumber.value
   const emailHolderValue = emailHolder.value
   console.log(isNaN(phoneNumberValue))
				if( firstNameValue !== "" && messageHolderValue !== "" && phoneNumberValue !== "" && emailHolderValue !== ""){
								if(isNaN(phoneNumberValue)){
								  e.preventDefault()
												window.alert("Phone numbermust be filled with only numbers")
												}else if(messageHolderValue.length > 100){
												e.preventDefault()
																window.alert("message length is high")
												}else {
										window.alert("Successfully Sent")
								}
			}else {
				   e.preventDefault()
						window.alert("all input boxes must be filled")
				}
}


sendBtn.addEventListener("click", checkDetails)

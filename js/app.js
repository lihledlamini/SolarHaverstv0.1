function loginUser(){

let role = document.querySelector("select").value;


if(role === "Farmer"){

window.location.href="dashboard.html";

}


else if(role === "Hub Staff"){

window.location.href="hub_dashboard.html";

}


else if(role === "Buyer"){

window.location.href="buyer.html";

}


else if(role === "Driver"){

window.location.href="driver.html";

}


else if(role === "Admin"){

window.location.href="admin.html";

}


else{

alert("Please select a user role");

}


}

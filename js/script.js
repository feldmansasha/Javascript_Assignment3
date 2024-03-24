//variable for diffrent html tags
var studentNumber=document.querySelector('#studentNumber');
var studentName=document.querySelector('#studentName');

var submitBtn=document.querySelector("#sendOrder");

// Pizza class
class Pizza {
    customerName;
    telephone;
    emailAddress;
    deliveryAddress;
    pizzaType;
    pizzaSize;
    numberOfPizza;

    // Constructor to create Pizza object
    constructor(customerName, telephone, emailAddress, deliveryAddress, pizzaType, pizzaSize, numberOfPizza){
        this.customerName=customerName;
        this.telephone=telephone;
        this.emailAddress=emailAddress;
        this.deliveryAddress=deliveryAddress;
        this.pizzaType=pizzaType;
        this.pizzaSize=pizzaSize;
        this.numberOfPizza=numberOfPizza;
    }
    
    //function to display the info of the order
    summary(){
        var orderInfo=`${this.customerName}, your order is confirmed! We started cooking your ${this.pizzaSize} ${this.pizzaType}.
        Your order is ${this.numberOfPizza} pizzas at ${this.deliveryAddress}. Contact number: ${this.telephone}.
        Receipt is send at your email: ${this.emailAddress}. Thank you!`;
        return orderInfo;
    }
}
// Event listener on the submit button
submitBtn.addEventListener("click", function(event){
    // prevents p tags for disappearing (keep them on the screen)
    event.preventDefault();
    // receive the order details 
    var customerName=document.querySelector('#name').value;
    var telephone=document.querySelector('#tel').value;
    var emailAddress=document.querySelector('#email').value;
    var deliveryAddress=document.querySelector('#delivery').value;
    var pizzaType=document.querySelector('#pizzaType').value;
    var pizzaSize=document.querySelector('#pizzaSize').value;
    var numberOfPizza=document.querySelector('#pizzaNumber').value;

    var displayOrder=document.querySelector('#orderInfo');

    //create new Pizza object and store in 'order' variable
    var order=new Pizza(customerName, telephone, emailAddress, deliveryAddress,
        pizzaType, pizzaSize, numberOfPizza);
    
    // confirmation variable stores the summary of the order
    var confirmation=order.summary();

    //simple checks for input correctness
    if (customerName===""){
        alert("Enter your name!");
    }
    else if(telephone===""){
        alert("Enter your phone number!");
    }
    else if(emailAddress===""){
        alert("Enter valid email address!");
    }
    else if(deliveryAddress===""){
        alert("Check the delivery address");
    }
    else if(pizzaType==="Select Your Pizza"){
        alert("Choose your pizza type");
    }
    else if(pizzaSize==="Select Your size"){
        alert("Choose your pizza size");
    }
    else if(numberOfPizza==="Select number of pizzas"){
        alert("Don't forget about the quantity!");
    }
    //if all inputs are correct then display the alert message and order summary above the sumbit button
    else{
    alert("Order confirmed! We started cooking!");
    displayOrder.textContent=confirmation;
    studentName.textContent="Created by Alex Feldman";
    studentNumber.textContent="Student ID: 200544551";
    }
});
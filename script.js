function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email address.");
        return false;
    }

    // Email validation regex pattern
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone == "") {
        alert("Please enter your phone number.");
        return false;
    }

    // Phone number validation regex pattern
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    if (message == "") {
        alert("Please enter a message.");
        return false;
    }
}

const scrollToEnquireForm = document.getElementsByClassName("scrollToEnquireForm");
const enquireForm = document.getElementById("enquireform");
function move_to(){
    enquireForm.scrollIntoView({ behavior: "smooth" });
}
// scrollToEnquireForm.addEventListener("click", function() {
   
// });

// carousel


    // const container = document.getElementById("carousel-container");
    // const carousel = document.getElementById("carousel");
    // const products = carousel.getElementsByClassName("product");

    // let currentIndex = 0;

    // function scrollToProduct(index) {
    //   if (index < 0 || index >= products.length) {
    //     return;
    //   }

    //   currentIndex = index;
    //   carousel.style.transform = `translateX(-${currentIndex * ( 200/ products.length)}%)`;
    //   console.log(currentIndex,products.length   )
    // }

    // // Function to scroll the carousel to the next set of products
    // function scrollNext() {
    //     const lastIndex = products.length - 4;
    //     const nextIndex = currentIndex + 1;
      
    //     if (nextIndex <= lastIndex) {
    //       scrollToProduct(nextIndex);
    //     }
    //   }


    // // Function to scroll the carousel to the previous set of products
    // function scrollPrev() {
    //     const prevIndex = currentIndex - 1;
      
    //     if (prevIndex >= 0) {
    //       scrollToProduct(prevIndex);
    //     }
    //   }

    // // Add event listeners to scroll buttons
    // document.getElementById("next-button").addEventListener("click", scrollNext);
    // document.getElementById("prev-button").addEventListener("click", scrollPrev);

    filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
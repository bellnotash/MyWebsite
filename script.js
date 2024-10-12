function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "CONTENT CREATOR",
    "DESIGNER",
    "YOUTUBER"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter

// Thêm đoạn code này vào cuối file script.js

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-10vh"; // Điều chỉnh giá trị này nếu cần
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("contact-modal");
    const btn = document.getElementById("open-chat-btn");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("contact-form");

    btn.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Button clicked");
        modal.style.display = "block";
    });

    span.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Xử lý gửi form ở đây (có thể sử dụng AJAX hoặc Fetch API)
        alert("Message sent successfully!");
        modal.style.display = "none";
        form.reset();
    });
});

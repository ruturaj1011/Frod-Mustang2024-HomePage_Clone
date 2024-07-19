
// first navbar

let firstNav = document.querySelector(".navbar-hero1");


document.addEventListener("scroll", ()=>{

    if (window.scrollY > 5) { // Adjust the value as needed

        firstNav.classList.add("firstNavScroll");
        
    } else {

        firstNav.classList.remove("firstNavScroll");
        
    }
});


// second navbar

document.addEventListener("scroll", () => {

    const secondNav = document.querySelector(".hero-two-navbar");


    const firstNavBottom = firstNav.getBoundingClientRect().bottom;

    if(firstNavBottom <= 0){
        secondNav.classList.add("navFixed");
        console.log("added");
    }
    else{
        secondNav.classList.remove("navFixed");
        console.log("removed");
    }
})

// FAQs

let plusBtn = document.querySelectorAll(".faqs-q h2");


function plusBtnWork(){

    let btn = this;

    let btnSpan = btn.firstElementChild;

    let hideInfo = btn.nextElementSibling;

    if(btnSpan.innerText == "+"){
        btnSpan.innerText = "-";

        btn.style.color = "black";

        hideInfo.classList.remove("hidden");

    }
    else{
        btnSpan.innerText = "+";

        btn.style.color = "rgb(101, 94, 94)";

        hideInfo.classList.add("hidden");
    }
}

plusBtn.forEach(btn => {

    btn.addEventListener("click", plusBtnWork);
});



// Disclosures info hide

let discOut = document.querySelector(".disclo-out");

let infoHide = document.querySelector(".disclo-info");

let hideBtn = document.querySelector(".disclo-out h2");

let hideBtnPlus = document.querySelector(".disclo-out h2 span");

hideBtn.addEventListener("click", function(){

    if(hideBtnPlus.innerText == "+"){
        hideBtnPlus.innerText = "-";
        infoHide.classList.remove("disc-hidden");
        discOut.style.paddingBottom = "56px";
    }
    else{
        hideBtnPlus.innerText = "+";
        infoHide.classList.add("disc-hidden");
        discOut.style.paddingBottom = "0px";
    }
});
        
const price = document.querySelector(".plan-price");
const plan = document.querySelector(".plan");
const pricing = document.querySelector(".price");

document.querySelector(".change").addEventListener('click',(event)=>{
    var l = parseInt(window.getComputedStyle(pricing).getPropertyValue("left").slice(0,-2))
    if (event.target.dataset.plan === "yearly"){
        plan.innerHTML = "Monthly Plan";
        price.innerHTML = "$5.99/month";
        event.target.dataset.plan = "monthly";
        pricing.style.left = (l + 2 + "px")
    }else{
        plan.innerHTML = "Annual Plan";
        event.target.dataset.plan = "yearly";
        price.innerHTML = "$59.99/year";
        pricing.style.left = (l -2 + "px")
    }
})
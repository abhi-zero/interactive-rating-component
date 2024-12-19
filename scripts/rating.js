const ratingCard = document.querySelector(".rating");
const thanksCard = document.querySelector(".thanks");
const displayRating = document.querySelector(".rating-score");

function getRating(){
    const  ratingButtons = document.querySelectorAll('input[name="rating"]')

    let selectedButton;
    ratingButtons.forEach(button => {
        if(button.checked){
            selectedButton = button.value;
        }
    })
    if(selectedButton){
        return selectedButton;
    }
    else{
        return 0;
    }
   
}

document.querySelector(".submit-btn").addEventListener("click", () => {
    
    ratingCard.style.display = "none";

    thanksCard.style.display = "flex";
    
    displayRating.textContent = getRating();
})
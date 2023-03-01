// Passing selected rating to its variable
let selectedRating = 0;
const ratings = document.querySelectorAll('.rate');
ratings.forEach(rating => {
    rating.addEventListener('click', (e) => {
        button.innerText = 'Submit';
        button.classList.remove('warning');
        selectedRating = e.target.innerText;
    })
})

// Submitting selected rating
const ratingPanel = document.querySelector('#rating-panel');
const feedbackPanel = document.querySelector('#feedback-panel');
const feedbackText = document.querySelector('#feedback-text');
const button = document.querySelector('.submit');
button.addEventListener('click', () => {
    if (selectedRating !== 0) { // switching to feedback panel if any rating selected
        ratingPanel.style.visibility = 'hidden';
        feedbackPanel.style.visibility = 'visible';
        feedbackText.innerText = `You selected ${selectedRating} out of 5`;
    }
    else { // warning message if no rating selected
        button.innerText = 'Please choose a rating';
        button.classList.add('warning');
    };
})
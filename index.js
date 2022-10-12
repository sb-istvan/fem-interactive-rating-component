// Handling rating selection
const ratings = document.querySelectorAll('.rate');
const button = document.querySelector('button');
ratings.forEach(selectedRating => {
    selectedRating.addEventListener('click', () => {
        button.classList.remove('warning'); // resetting previously activated warning message (if any)
        button.innerText = 'Submit';
        ratings.forEach(unselectPrev => unselectPrev.classList.remove('selected')); // removing previously selected rating
        selectedRating.classList.add('selected'); // keep clicked rating selected
    });
})

// Submitting selected rating
const ratingPanel = document.querySelector('#rating-panel');
const feedbackPanel = document.querySelector('#feedback-panel');
const feedbackText = document.querySelector('#feedback-text');
button.addEventListener('click', () => {
    if (document.querySelector('.selected')) { // switching to feedback panel if any rating selected
        ratingPanel.style.visibility = 'hidden';
        feedbackPanel.style.visibility = 'visible';
        const clickedRating = document.querySelector('.selected').innerHTML;
        feedbackText.innerText = `You selected ${clickedRating} out of 5`;
    }
    else { // warning message if no rating selected
        button.innerText = 'Please choose a rating';
        button.classList.add('warning');
    };
})
document.addEventListener('DOMContentLoaded', function() {
    const menu_button = document.getElementById('menu_button');
    if (menu_button) {
        menu_button.addEventListener('click', handleMenuButtonClick);
    }
    const buttonLefttContact = document.getElementById('button_left_contact');
    if (buttonLefttContact) {
        buttonLefttContact.addEventListener('click', handleButtonClick);
    }
    const buttonRightContact = document.getElementById('button_right_contact');
    if (buttonRightContact) {
        buttonRightContact.addEventListener('click', handleButtonClick);
    }
    const buttonLeftPossbilities = document.getElementById('button_left_possibilities');
    if (buttonLeftPossbilities) {
        buttonLeftPossbilities.addEventListener('click', handleButtonClick);
    }
    const buttonRightPossibilities = document.getElementById('button_right_possibilities');
    if (buttonRightPossibilities) {
        buttonRightPossibilities.addEventListener('click', handleButtonClick);
    }
    const buttonLeftAdvantages = document.getElementById('button_left_advantages');
    if (buttonLeftAdvantages) {
        buttonLeftAdvantages.addEventListener('click', handleButtonClick);
    }
    const buttonRightAdvantages = document.getElementById('button_right_advantages');
    if (buttonRightAdvantages) {
        buttonRightAdvantages.addEventListener('click', handleButtonClick);
    }
    const buttonLeftPartners = document.getElementById('button_left_partners');
    if (buttonLeftPartners) {
        buttonLeftPartners.addEventListener('click', handleButtonClick);
    }
    const buttonRightPartners = document.getElementById('button_right_partners');
    if (buttonRightPartners) {
        buttonRightPartners.addEventListener('click', handleButtonClick);
    }
});

function handleMenuButtonClick() {

    const element = document.getElementById('menu')
    element.classList.toggle('hidden');


}

function handleButtonClick(event) {
    let scroll_div
    if (event.currentTarget.id.includes('partners')) {
        scroll_div = document.getElementById('partners');
    }
    else if (event.currentTarget.id.includes('advantages')) {
        scroll_div = document.getElementById('advantages');
    }
    else if (event.currentTarget.id.includes('possibilities')) {
        scroll_div = document.getElementById('possibilities');
    }
    else if (event.currentTarget.id.includes('contact')) {
        scroll_div = document.getElementById('contact');
    }

    let inicial_value = scroll_div.scrollLeft
    
    if (event.currentTarget.id.includes('left')) {
        scroll_div.scrollLeft -= scroll_div.scrollWidth / scroll_div.childElementCount;
    } else {
        scroll_div.scrollLeft += scroll_div.scrollWidth / scroll_div.childElementCount;
    }

    console.log(event.currentTarget.id, scroll_div.scrollWidth, inicial_value, scroll_div.scrollLeft)
}
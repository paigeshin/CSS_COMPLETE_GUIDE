const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
// 각각의 Plan 버튼을 누르면 각각의 modal과 backgdrop이 보여짐
if (selectPlanButtons) {
    for (let i = 0; i < selectPlanButtons.length; i++) {
        selectPlanButtons[i].addEventListener("click", () => {
            // modal.style.display = "block";
            // backdrop.style.display = "block";
            // modal.className = "open";
            modal.classList.add('open'); //복수의 같은 element들이 있으면 classList를 사용하자
            backdrop.classList.add('open');
        });
    }
}

// backdrop을 다시 누르면, modal과 backdrop이 사라짐. 그리고 backdrop을 누르면 navbar도 사라짐
backdrop.addEventListener("click", () => {
    mobileNav.classList.remove('open');
    closeModal();
});

// modal no button을 누르면 backdrop과 modal이 사라짐.
if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}

// toggle button을 누르면 mobile nav가 보여짐
toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';

    mobileNav.classList.add('open');
    backdrop.classList.add('open');

});

// 모달과 backdrop을 지워줌
function closeModal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    if(modal){
        modal.classList.remove('open'); //복수의 같은 element들이 있으면 classList를 사용하지
    }
    backdrop.classList.remove('open');
}
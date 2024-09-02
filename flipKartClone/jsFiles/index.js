const loginBtn = document.querySelector('.btnLogin');
let LoginDropdown = document.querySelector('.dropDownContent');
let LoginDropdownManu = document.querySelector('.loginDropDown');


LoginDropdownManu.addEventListener('mouseover',()=>{
    LoginDropdown.style.display = 'flex';
});

LoginDropdownManu.addEventListener('mouseout',()=>{
    LoginDropdown.style.display = 'none';
});
// johannes.js
export const firstname = 'Johannes';
export const surname = 'Smith';
export const role = 'Product Manager';

const display= firstname + " " + surname + " (" + role + ")";
document.querySelector('#johannes').innerText = display;
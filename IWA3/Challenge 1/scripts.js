// configuration.js

export const company = 'Your Company Name';
export const year = 2022;

// scripts.js

import { company, year } from 'configuration';

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;

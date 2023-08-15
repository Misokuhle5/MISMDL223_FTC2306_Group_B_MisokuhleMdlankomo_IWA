const leoName = 'Leo';
const leoSurname = 'Musvaire';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.2';

const divider = '----------------------------------';

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance); 
const leoFormatted = `${leoName} ${leoSurname.trim()} (Owed: R ${Math.abs(parseFloat(leoBalance)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')})`;
const sarahFormatted = `${sarahName.trim()} ${sarahSurname} (Owed: R ${Math.abs(parseFloat(sarahBalance)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')})`;
const total = `Total amount owed: R ${Math.abs(owed).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
const result = `${leoFormatted}\n${sarahFormatted}\n${divider}\n${divider}\n${total}\n${divider}`;

console.log(result);

const rent = 400;
const tax = 0.08; // changed tax to decimal
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0; 
const minuteOfDay = 0; 

// Only change below this line

if (hourOfDay === 0 && minuteOfDay === 0) { 
  const taxAsDecimal = salary * tax; 
  const startingAfterTax = salary - taxAsDecimal;
  const balance = startingAfterTax - transport - food - rent;
  

  const formattedBalance = `R ${balance.toFixed(2)}`; 
  
  console.log(formattedBalance);
}

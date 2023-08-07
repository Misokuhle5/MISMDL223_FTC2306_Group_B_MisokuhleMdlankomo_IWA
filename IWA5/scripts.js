const FREE_SHIPPING_THRESHOLD_RSA_NAM = 1000; // R1000
const FREE_SHIPPING_THRESHOLD_OTHER = 60; // $60
const SHIPPING_COST_RSA = 400;
const SHIPPING_COST_NAM = 600;
const SHIPPING_COST_OTHER = 800;
const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately, we do not ship to your country of residence';

function calculateShipping(location, cost) {
  if (location === 'RSA') {
    return cost >= FREE_SHIPPING_THRESHOLD_RSA_NAM ? 0 : SHIPPING_COST_RSA;
  } else if (location === 'NAM') {
    return cost >= FREE_SHIPPING_THRESHOLD_RSA_NAM ? 0 : SHIPPING_COST_NAM;
  } else {
    return SHIPPING_COST_OTHER;
  }
}

function calculateTotalCost(location, cost) {
  const shipping = calculateShipping(location, cost);
  return cost + shipping;
}

const location = 'RSA';
const customers = 1;
const costWithoutShipping = 1270;

if (location === 'NK') {
  console.log(BANNED_WARNING);
} else {
  const totalCost = calculateTotalCost(location, costWithoutShipping);
  if (totalCost >= FREE_SHIPPING_THRESHOLD_RSA_NAM && customers === 1) {
    console.log('Price:', 'R' + totalCost);
  } else {
    console.log(FREE_WARNING);
  }
}

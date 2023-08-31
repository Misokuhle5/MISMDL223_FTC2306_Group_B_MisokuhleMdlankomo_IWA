const data = {
	lists: [
	  ['first', [15, 11, 13, 7, 5]],
	  ['second', [2, 6, 8, 4, 14, 12, 10]],
	  ['third', [9, 3, 1]],
	]
  }
  
  const result = []
  
  const extractBiggest = () => {
	const lastValues = data.lists.map(arr => arr[1][arr[1].length - 1]);
	const indexOfLargest = lastValues.indexOf(Math.max(...lastValues));
  
	if (indexOfLargest !== -1) {
	  const largestValue = data.lists[indexOfLargest][1].pop();
	  if (data.lists[indexOfLargest][1].length === 0) {
		data.lists.splice(indexOfLargest, 1);
	  }
	  return largestValue;
	}
  
	return 0;
  }
  
  // only edit above
  
  result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
  
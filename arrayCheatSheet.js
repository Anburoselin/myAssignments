
// Array examples (minimal comments)

let browsers = new Array('Chrome', 'Firefox', 'Safari');
console.log(browsers);
let browsersLiteral = ['Chrome', 'Firefox', 'Safari'];
console.log(browsersLiteral);
console.log('Array constructor:', browsers);
console.log('Array literal:', browsersLiteral);

browsersLiteral.push('Edge');
console.log('After push:', browsersLiteral);
browsersLiteral.unshift('Opera');
console.log('After unshift:', browsersLiteral);

let last = browsersLiteral.pop();
console.log('Popped last:', last);
console.log("after removing last element", browsersLiteral);
let first = browsersLiteral.shift();
console.log('Shifted first:', first);
console.log("after removing first element", browsersLiteral);


console.log('indexOf Firefox:', browsersLiteral.indexOf('Firefox'));
console.log('lastIndexOf Chrome:', browsersLiteral.lastIndexOf('Chrome'));
console.log('find starting with F:', browsersLiteral.find(b => b.startsWith('F')));
console.log('findIndex starting with F:', browsersLiteral.findIndex(b => b.startsWith('F')));

browsersLiteral.forEach(eachbrowserval => console.log('forEach item:', eachbrowserval));
browsersLiteral.forEach(eachbrowserval => console.log('forEach item:', eachbrowserval));
console.log('map to lengths:', browsersLiteral.map(eachbrowserval => eachbrowserval.length));
console.log('every length > 3:', browsersLiteral.every(eachbrowserval => eachbrowserval.length > 3));
console.log('some length > 6:', browsersLiteral.some(eachbrowserval => eachbrowserval.length > 6));

console.log('filter length>5:', browsersLiteral.filter(eachbrowserval => eachbrowserval.length > 5));
console.log('reduce total length:', browsersLiteral.reduce((total, eachbrowserval) => total + eachbrowserval.length, 0));
console.log('reduceRight total length:', browsersLiteral.reduceRight((t, b) => t + b.length, 0));
console.log('flat result:', [1, [2, 3], [4, 5]].flat());
console.log('flatMap result:', [1, 2, 3].flatMap(x => [x, x * 2]));
console.log('sorted numbers:', [10, 2, 15, 1].sort((a, b) => a - b));
console.log('reversed array:', browsersLiteral.slice().reverse());
console.log('slice(1,3):', browsersLiteral.slice(1, 3));
console.log('join:', browsersLiteral.join(', ')); //convert array to string
console.log('concat:', browsersLiteral.concat(['Vivaldi', 'Brave'])); //concatenate arrays
console.log('includes Chrome:', browsersLiteral.includes('Chrome')); //check if array contains an element
console.log(browsersLiteral); //convert array to string
console.log('fill demo:', ['a', 'b', 'c'].fill('NewBrowser'));//fill array with a value
let copyExample = ['a', 'b', 'c', 'd'];
console.log(copyExample);
copyExample.copyWithin(2, 0); //copy elements within the array
console.log('copyWithin demo values:', copyExample);


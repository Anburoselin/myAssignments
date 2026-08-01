// String examples (minimal comments)

let message = 'Hello, Testleaf!';
console.log('Message:', message);
let anotherMessage = new String('Welcome to JavaScript');
console.log('Another Message:', anotherMessage);

// basic properties
console.log('Length of message:', message.length);
console.log('First character:', message.charAt(0));

// case and concat
console.log('Upper case:', message.toUpperCase());
console.log('Lower case:', message.toLowerCase());
console.log('Joined message:', message.concat(' We are learning strings.'));
let spacedText = '   Hello World   ';
console.log('Trimmed text:', spacedText.trim());

console.log('After replace:', message.replace('Testleaf', 'Playwright'));
console.log('Index of l:', message.indexOf('l'));
console.log('Last index of l:', message.lastIndexOf('l'));
console.log('Search for uppercase:', message.search(/[A-Z]/));
console.log('Match uppercase letters:', message.match(/[A-Z]/g));

// extracting string parts
console.log('Substring(0,5):', message.substring(0, 5));
console.log('Slice(-10):', message.slice(-10));
console.log('Substr(0,5):', message.substr(0, 5));
console.log('Split by comma:', message.split(','));
console.log('Includes Testleaf:', message.includes('Testleaf'));
console.log('Starts with Hello:', message.startsWith('Hello'));
console.log('Ends with !:', message.endsWith('!'));

// repeat and template literal
console.log('Repeat:', 'Hi '.repeat(3));
let name = 'Sam';
console.log(`Template literal: Hello ${name}, welcome!`);

//  if-else to print a browser launch
function launchBrowser(browserName) { 
    //check browsername and print message 
  if (browserName === 'chrome') {
    console.log('Launching Chrome browser');
  } else {
    console.log('Launching ' +browserName  );
}}
// switch cases to print message based on Testtypes 
function runTests(testType) {
  switch (testType) {
    case 'smoke':
      console.log("Running smoke tests");
      break;
    case 'sanity':
      console.log("Running sanity tests");
      break;
    case 'regression':
      console.log("Running regression tests");
      break;
    default:
      console.log("default smoke test run");
      break;
  }
}

//calling functions
launchBrowser('chrome');    // launch chrome browser..
launchBrowser('edge');      // launch edge browser
runTests('smoke');          //smoke case
runTests('regression');     // regression case
runTests('sanity');        // sanity case
runTests('random');          // default case
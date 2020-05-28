/**
 * @name get title
 *
 * @desc Get the title of a page and print it to the console.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagetitle}
 */
const puppeteer = require('puppeteer-core');
// STATUS
const OK = 'OK';
const FAILED = 'FAILED';

(async () => {
  	const browser = await puppeteer.launch({defaultViewport: {height: 1080, width: 1920}, headless: true, args: ['--display=:1', '--no-sandbox', '--disable-extensions'], executablePath: '/usr/bin/chromium-browser'});
  	const page = await browser.newPage();
  	try{
		// returns: <Promise<?Response>> Promise which resolves to the main resource response. 
        // In case of multiple redirects, the navigation will resolve with the response of the last redirect.
        let resp = await page.goto('http://www.example.com');
        // Get Page Title
        const title = await page.title();
        // Ok(): Contains a boolean stating whether the response was successful (status in the range 200-299) or not.
        if(resp.ok() && title == "Example Domain")
            // INTERNET ACCESS
	        console.log('STATUS:'+OK);
        else
        {
            // DEBUG
            // console.log('STATUS ['+resp.status()+']');
            if(resp.status() >=300 && resp.status() <= 308)
            {
                // 3xx Redirection
                // SplashPage in resp
                // Identify page
                //await identify_page(resp);
                // ----- CORE CODE -----
                // Call breaking techniques
                //await breaking.simple_form(browser);
                // ------------------------
            }
            else
                // 4xx Client errors - 5xx Server errors
                console.log('STATUS:'+FAILED);
        }
        
        process.exit();
	}
	catch(err) {
        if (err instanceof puppeteer.errors.TimeoutError) {
            // DEBUG
            //console.log("TIMEOUT ERROR.");
        }
        // DEBUG
        //console.log(err);
        console.log('STATUS:'+FAILED);
		// EXIT APP
		process.exitCode = -1;
		process.exit();
	}
})()

Tech-Stack used
-----------------
* Playright
* HTML Reporting

How to run tests
----------------
* npx playwright test --headed  
        

Where to check reports
----------------------
Reports will be generated using following command 

* npx playwright test --reporter=html

* To open last HTML report run: npx playwright show-report

-----------------------------------------------
#### Project Description 
1. The framework is created using the latest tool available in the market - Playwright
2. As per the assigment requirement, happy path is covered where the trail contains 5 pages.
3. Assertions are used to check the quantity of items at multiple places viz. 
        InventoryPage, CartPage, OverviewPage.
4. Page object model framework is used where the structure of framework is 
        
project-root/
├── pages/
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── InventoryPage.js
│   ├── LoginPage.js
│   └── OverviewPage.js
├── tests/
│   └── testScript.spec.js
└── playwright.config.js



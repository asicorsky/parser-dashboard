#parser-dashboard

#How to install:
1. Download and install nodejs (https://nodejs.org/en/), add to PATH install location
2. Download and install phantom (http://phantomjs.org/), add to PATH install/bin location
3. Checkout https://github.com/asicorsky/parser-dashboard.git
4. Open command line and execute "npm start" at the root package of the project
5. Check http://localhost:3000 in browser
6. Type in needed URL and click to Download
7. Wait some time. Then click to PDF button

A tried to use a lot of different nodejs server side frameworks (such as pdfkit, webshot, wkhtmltopdf) but only phantom works correctly with most web pages.
But phantom use "print" functionality for web pages. In this case I have troubles with some client libraries such as bootstrap on parsing.
Unfortunately, https://almsaeedstudio.com/AdminLTE uses bootstrap and left-side menu is not render correctly. 
In this cases I think we need to investigate bootstrap library and replace problem styles for pdf-generation.

But you may try to check http://www.google.com, http://www.youtube.com, http://www.facebook.com, http://www.onliner.by and a lot of other web pages which render correctly.

At client side I use jquery for simply working with elements and ajax queries and bootstrap for responsive layouts.
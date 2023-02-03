function onSubmit() {

    /* There are a couple of ways to use this password webpage. */

    /* Option 1 */ 
	/* Use the following line of code to go directly to another page when the correct code is entered and the "submit" button is clicked. */
          /*if (document.getElementById('password').value == '1234') {window.location.href = 'http:google.com'; }else{ alert('Access Denied, Please try again');}*/
    
    /* Option 2 */
    /* Use this line of code to show an "Access Granted" linkable button the user must click after entering the correct code and clicking the "submit" button. */
    /* (the new button that appears must also be clicked to go to the new page.) */ 
            if (document.getElementById('password').value == '1234') {window.button2.style.display="block"; }
            else{ 
                alert('Access Denied, Please try again');
            }
     }
     

     
     
     
// In the code above, the ".value" sets the passcode. 
// If you change it to a longer number, make sure you change 
// the "maxlength" on the index.htm page to match. 

// You can also change the web page in the "href" to another page. 
// Simply replace "https://www.freecodecamp.org/" with your desired page. 

// You can also change the "alert" text above to what you want to say.
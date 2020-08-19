In this lesson I learned the basics of jQuery.
Here are some important notes: 

DATA
  1) If I want to access an element's data, it has to be specific to the element I want.
     Which means, I can't write $('div').data().something  if there are other div elements in the html document -
     I have to reach the wanted div using a specific id or class.
  2) data's name MUSN'T include capital letters at all.
     for exmaple: data-expirationDate  <- not a legit name (capital D)
         	  data-expirationdate  <- a very legit name

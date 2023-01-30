const interval = setInterval(function() {
    const loc = window.location.href;
    if(loc.substring(8, 11) == "www"){
       var newLoc = loc.substring(0, 8) + loc.substring(12)
        window.location.href = newLoc; 
       
    }
  
  }, 5000);

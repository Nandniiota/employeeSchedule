$(function() {
    $("#employeeA").hide();
    $("#employeeB").hide();
     $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy", // Format: day-month-year
        changeMonth: true,      // Dropdown for month
        changeYear: true,       // Dropdown for year
        yearRange: "1900:2100", // Limit year range
        showAnim: "slideDown",   // Animation effect
        onSelect: function(dataText){
            let parts= dataText.split("-");
            let day=parseInt(parts[0]);
            let month=parseInt(parts[1])-1;
            let year=parseInt(parts[2]);
            let dateObj = new Date(year,month,day);
           let week=getWeekNumber(dateObj);
            let main=dateObj.getDay();
            console.log(week);
            console.log(main);
            if(main>0 && main<6){
                $("#employeeA").show();
            }
            if(main>0 && main<3 && week%2!==0){
               $("#employeeB").show();
            }
            if(main>3 && main<6 && week%2===0){
                $("#employeeB").show();
            }
            if(main===6){
               $("#employeeA").hide();
               $("#employeeB").hide(); 
            }
            if(main===3){
                $("#employeeB").hide(); 
            }
         }
         });
  });
  function getWeekNumber(date) {
    const tempDate = new Date(date.getTime());
    tempDate.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year
    tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7));
    const week1 = new Date(tempDate.getFullYear(), 0, 4);
    return 1 + Math.round(((tempDate - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
}



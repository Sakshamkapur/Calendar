var days=function(index){
 return ["Sun","Mon","Tue","Fri","Sat"][index];
}
var months=function(monindex){
	return ["Jan","Feb","March","April","May","June","July","August","September","October","November","December"][monindex];
}

//shows current month
var date=new Date();
var shiftmonth=document.getElementById('monthspan');
txt = document.createTextNode(months(date.getMonth()));
shiftmonth.innerText = txt.textContent;


//shows current year
var shiftyear=document.getElementById('yearspan');
txt = document.createTextNode(date.getFullYear());
shiftyear.innerText = txt.textContent;

forfirstmonth();

function shiftmonthback(){
 currentmonth=shiftmonth.innerText;
 if (currentmonth=="Jan") {
 	shiftyearback();
 	currentmonth="December";
 	txt = document.createTextNode(currentmonth);
    shiftmonth.innerText = txt.textContent;
 }
 else{
        for(var i=0;i<12;i++){
 	       if(months(i)==currentmonth){
              txt = document.createTextNode(months(i-1));
              shiftmonth.innerText = txt.textContent;      
           }      
        }
     }  
     clearCalendar();
     createdays(); 
}

function shiftmonthforward(){
 currentmonth=shiftmonth.innerText;
 if (currentmonth=="December") {
 	shiftyearforward();
 	currentmonth="Jan";
	txt = document.createTextNode(currentmonth);
    shiftmonth.innerText = txt.textContent;
 }
 else{
        for(var i=0;i<12;i++){
 	      if(months(i)==currentmonth){

             txt = document.createTextNode(months(i+1));
             shiftmonth.innerText = txt.textContent;     
          }     
        }
     }   
    clearCalendar();
     createdays();    
}

function shiftyearback(){
  currentyear=shiftyear.innerText;
  txt = document.createTextNode((currentyear-0)-1);
  shiftyear.innerText = txt.textContent;  
    clearCalendar();
     createdays();       
}      

function shiftyearforward(){
  currentyear=shiftyear.innerText;
  txt = document.createTextNode((currentyear-0)+1);
  shiftyear.innerText = txt.textContent;
      clearCalendar();
     createdays();       
} 

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
function getfirstday(month,year){
return new Date(month+ '1'+','+ year).getDay();
}
function giveflag(n){
 currentmonth=shiftmonth.innerText;
 currentyear=shiftyear.innerText;
 weekday=getfirstday(currentmonth,currentyear);
   if(n<weekday){return 0;}
   else
    {return 1;}
 
}
function nummonth(month){
	for(i=0;i<12;i++){
		if(months(i)==month){
          return i+1;
		}
	}
}
function createdays(){
  var count=0;
   currentmonth=shiftmonth.innerText;
 currentyear=shiftyear.innerText;
	dayys=daysInMonth(nummonth(currentmonth),currentyear); 
   clearCalendar();
    for(i=0;i<dayys+count;i++){
     flag=giveflag(i);
      if(flag==0){
         createCalendarDay('-');
        count+=1; 
      }
      else if (flag==1) {
      	var a=i-(count-1);
        createCalendarDay(a); 
      }
}
}
function createCalendarDay(num) {
  var currentCalendar = document.getElementById("calendar");
  var newDay = document.createElement("div");
  var date = document.createElement("p");
  date.innerText = num;

  newDay.className = "calendar-day";

  newDay.appendChild(date);

  currentCalendar.appendChild(newDay);
}
function clearCalendar() {
  var currentCalendar = document.getElementById('calendar');
  currentCalendar.innerHTML="";
}
function forfirstmonth(){  
  var c=0;
  dayys=daysInMonth(date.getMonth(),date.getFullYear()); 
   clearCalendar();
    for(i=0;i<dayys+c;i++){
     flag=giveflag(i);
      if(flag==0){
        createCalendarDay('-');
        c+=1; 
      }
      else if (flag==1) {
        var a=i-(c-1);
        createCalendarDay(a); 
      }
    }
}    
// var date = new Date();
// document.body.innerHTML = "<h1> Today is :" + date + "</h1>";
// function logScope () {
//     var localVar = 2;
//     if (localVar){
//         let localVar = "I'm different!";
//         console.log("nested localVar :", localVar);
//     }
//     console.log("logScope localVar:", localVar);
// }
// logScope();


// var course = new Object();

// // course.title = "javaScript Essential Training";
// // course.instructor =" Morten Rand-Rendriksen";
// // course.level = "1";
// // course.published = "true";
// // course.views = "0";

// var course = {
//     title : "javaScript Essential Training",
//     instructor: " Morten R$and-Hendriksen",
//     level: 1,
//     published: true,
//     views : 0,
//     updateViews: function (){
//      return ++course.views;   
//     } 

// }
// console.log (course.views);
// course.updateViews();
// console.log(course.views);

// function Course(title,instructor,level,published,views){
//    this.title = title;
//    this.instructor = instructor;
//    this.level = level;
//    this.published = published;
//    this.views = views;
//    this.updateViews = function(){
//        return ++this.views;
//    };
// }

// var courses = [
//     new Course (" JavaScript Esential Training", "Morten Rand-Hendriksen", 1,true , 0),
//     new Course (" Up and Running wich ECMAScript 6"," Eve Porcello", 1, true, 123456)
// ];

// console.log(courses[1].updateViews());

// function doSomeMath(){
//     var a = 5;
//     var b = 4;
   
//     function multiply() {
//         var result = a*b;
//         return result;
//     }
//     return multiply;
// }
// var theResult = doSomeMath();

// console.log ("The result:", theResult());


// function giveMeEms (pixels) {
//     var baseValue = 16 ;

//     function doTheMath() {
//         return pixels/baseValue;
//     }
// return doTheMath;

// }
// var smallSize = giveMeEms(12);
// var mediumSize = igveMeEms(18)
// var largeSize = giveMeEms(24));

// console.log("Small size: ", sm;
// var xlargeSize = giveMeEms(32allSize() );
// console.log("Medium size: ", mediumSize() );
// console.log("Large size: ", largeSize( xlargeSize() );
// /
// console.log("Extra large size: ",

// const CTAELEMENT = document.querySelector(".cta a");

// if ( CTAELEMENT.hasAttribute("target") ) {
//     console.log( CTAELEMENT.getAttribute("target"));
// } else {
//     CTAELEMENT.setAttribute("target", "_blank");
// }

// console.log (CTAELEMENT.attributes );

// const HOURHAND = document.querySelector("#hour");
// const MINUTEHAND = document.querySelector("#minute");
// const SECONDHAND = document.querySelector("#second");

// let hrPosition = 20;
// let minPosition = 130;
// let secPosition = 267;



// var date = new Date();
// console.log(date);
// let hr = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();
// console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

// // let hrPosition = (hr*360/12)+(min*(360/60)/12);
// // let minPosition = (min*360/60)+(sec*(360/60)/60);
// // let secPosition = sec*360/60;

// function runtheclock() {


// hrPosition = hrPosition+(3/360);
// minPosition = minPosition+ (6/60);
// secPosition = secPosition+6;


// HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
// MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
// SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
// }
// var interval = setInterval(runtheclock , 1000);



// const CSA = document.querySelector(".cta a");
// const ALERT = document.querySelector("#bookink-alert");

// CTA.classlist.revome("hide");
// ALERT>classlist.add("hide");

// function reveal() {
//     CTA.classlist.toggle("hide");
//     ALERT.classlist.toggle("hide");
// }

// CTA.oneclick = reveal;
























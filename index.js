// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple form submit message
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
});

// console.log ('hello, world!');
// console.log(Character)
// console.log("executed......")



// const character = "a"
// switch (character) {
//     case "a"
//     case "e"
//     case "i"
//     case "o"
//     case "u"



// console .log ("vowels") break;
//  default;
//  console. log ("consonants")
// }




//   what is Object

//    const person1 = {
//        name "renuga",
//        age ;23'
//        Address;"chennai 23",
//        is Married  

//    }



// const users= 1
//   [
//    { name:"renuga",
//      age: 23,
//      City:"india"
//    } ,
//     {
//       name:"gomathi",
//       age: 36,
//       City:"india"
//     },

//     { name:"sathiya",
//       age: 31,
//       City:"india"
//     }
// ]
    
  
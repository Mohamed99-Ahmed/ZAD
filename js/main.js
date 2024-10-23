// // constructor function
//     // 1 - bad syntax
// function MoviesF (name , rate){
//     this.name = name;
//     this.rate = rate;
//     this.frate = ()=>{console.log(this.rate  )}
// }

// let mmovie1 = new MoviesF('Runnver', 4.5);
// console.log(mmovie1)

// // 2-  Constructor func
// function MoviesC(name, rate) {
    
//         this.name = name;
//         this.rate = rate;

    
//     }
// MoviesC.prototype.frate = function() {console.log(this.rate) }
// let mmovie2 = new MoviesC('Runnver', 4.5);
// mmovie2.frate()
// // 3 - class way
// class MoviesCL {
//     constructor(name, rate){
//         this.name = name;
//         this.rate = rate;
//     }
//     frate(){console.log(this.rate)}
// }
// let movie3 = new MoviesCL("runn", 2,3)
// console.log(movie3.__proto__.__proto__.__proto__ )
// let num = 4;
// console.log(num.__proto__.__proto__.__proto__)



// // inherites 
  

//         //? 1- construc func inherites
        
// function Human(name, age){
//     this.name = name;
//     this.age = age;
// }
// Human.prototype.printName = function(){return this.name};

// function Man(name, age, work){
//     Human.call(this, name, age);
//     this.work = work;

// }
// let man1 = new Man("Mohamed",23, "sales Rep");
// Object.setPrototypeOf(Man.prototype, Human.prototype)
// console.log(man1.printName())

//    //? class inherties
// class Human2{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     printName(){return this.name}
// }
// class Man2 extends Human2{    //extends =  object.setPrototypeOf(Man2.prototype, Human.prototype)
//     constructor(name, age, work){
//         super(name, age);   //Person.call(this,name,age)
//         this.work = work;
//     }
    
// }
// let man2 =  new Man2("ahmed",22,"hlag");
// /// man2 -- man2 prototype -- Human prototype -- object prototype -- null
// console.log(man2)



//start global variable 
const toggler = document.querySelector('.navbar-toggler')
const navBar = document.querySelector('#navbar');
const listNav = document.querySelector('.navbar-collapse')
const sections = document.querySelectorAll('.contact,.about');
const options = 
  {
    root:null, 
    // increase the root of bottom so before section come into veiw by 10px it will add active class
     rootMargin:'0px 0px 10px 0px',
     threshold:0.3
   };
    
// when  click on toogle show navbar
toggler.addEventListener('click', (e)=>{navBar.classList.toggle('show');
});
listNav.addEventListener('click', ()=>{navBar.classList.remove('show')
} )
// observer cb function
const observer = new IntersectionObserver(entries => {
    //  select thae anchors
    entries.forEach(entry => {
        //if the entry is intersection
        if (entry.isIntersecting) {
            entry.target.classList.add('active-sec');
        }
        // if the entry is not intersection  remove active class from section 
        else {
            if (entry.target.classList.contains('active-sec')) {
                entry.target.classList.remove('active-sec')
            }
        }
    }
    )
}, options);
// for loop  section  observe it
sections.forEach((sec) => observer.observe(sec));

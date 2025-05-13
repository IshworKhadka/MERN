
//Lecture Date: 30th Sep 2024
let person = {
    'full name': 'Ishwor Khadka',    //Keys with muti word should be within quotes,
    age: 34,                            //Single word keys can be with/without quotes
    'address': 'Galkot'
}
console.log(person)



//--------------LESSON: ACCESS OBJECT FIELDS--------------------------
//access object properties using key
console.log(person.age)                     //Returns 34
console.log(person['address'])              //Reeturns Galkot
console.log(person["full name"])            //multiple word keys can only be used this way



//------------LESSON: LOOPING IN OBJECT FIELDS-------------------
//Loops within object
for(let k in person){      
    console.log(k, person[k])  //Gives key value pair in object
}



//--------------LESSON: CHECK IF KEY EXISTS IN OBJECT---------------------
//Checks if a key exists in object
console.log(person.hasOwnProperty('age'))  //Returns true
console.log(person.hasOwnProperty('contact'))   //Returns false

console.log('age' in person)                //Returns true
console.log('contact' in person)                //Returns false



//--------------LESSON: COPYING OBJECT------------------------------
//Copying object to another
//Using nested object
let student = {
    info: person,
    subjects: ['JS', 'Node', 'React'],
    dob: '1990-06-11'
}
console.log(student)
//Accessing nested properties
console.log(student.info["full name"])   //Returns Ishwor Khadka
console.log(student['info'].age)          //returns 34


let studentB = {
    person,        //Can be used in place of person: person, where key and value has same name
    subjects: ['JS', 'Node', 'React'],
    dob: '1990-06-11'
}

console.log(studentB)   //{
                        //     person: { 'full name': 'Ishwor Khadka', age: 34, address: 'Galkot' },
                        //     subjects: [ 'JS', 'Node', 'React' ],
                        //     dob: '1990-06-11'
                        //   } 
//NOTE the name of key and variable returned in above example of object




//---------------------------LESSON: SPREAD OPERATOR-----------------------------------
//We can use spread (...) operator to MERGE object fields
let studentC = {
    ...person,
    subjects: ['Physics', 'Maths', 'C Programming']
}
console.log(studentC)       //{
                            //     'full name': 'Ishwor Khadka',     
                            //     age: 34,
                            //     address: 'Galkot',
                            //     subjects: [ 'Physics', 'Maths', 'C Programming' ]
                            // }
console.log(studentC["full name"])  //Returns Ishwor Khadka
//NOTE how this field was accessed while COPYING console.log(student.info["full name"])





//----------------------- LESSON: DESTRUCTURING -------------
//Destructuring variable from object. Reverse of copying using same key and variable 
const { age } = studentC
console.log(age)           // Returns 34


//-------------------LESSON: REST OPERATOR
//Gives remaining fields after destructuring. Use rest operator (...)
const { subjects, address, ...remaining } = studentC
console.log(subjects)       // Returns[ 'Physics', 'Maths', 'C Programming' ]
console.log(address)            //Returns Galkot

console.log(remaining)          //{ 
                                // 'full name': 'Ishwor Khadka', 
                                // age:  34 
                                //}





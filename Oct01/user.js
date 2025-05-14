
class User {
    constructor(name, age, address){
        this.name = name,
        this.age = age,
        this.address = address
    }

    getInfo = () => {
        return {
            name: this.name,
            age: this.age,
            address: this.address
        }

    }
}

///Export the class from here so it is accessible externally
//Export using CJS 
module.exports = User

//Export using ESModule standard
export default User    //default for single property
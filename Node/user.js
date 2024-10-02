
class User{
    constructor(name, age, address){
        this.name = name
        this.age = age
        this.address = address
    }

    getInfo = () => {
        return{
            name: this.name,
            age: this.age,
            address: this.address
        }
    }
}

//export using Common JS : CJS
// module.exports = User

//expoer using ES moddule or ESM
export default User    //can use default in case of single property
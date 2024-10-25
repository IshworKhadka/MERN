
import { MongoClient } from "mongodb"

const url = "mongodb+srv://sa:10Awilson@cluster-first.kii9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-first"

const client = new MongoClient(url)

const database = client.db("sample_mflix")

// const collection = database.collection("movies")

// const result = collection.find({title: "Titanic", year: 1997})

// result.toArray()
//     .then(data => console.log(data))
//     .catch(error => console.log('Error', error))
//     .finally(() => client.close())


const personCollection = database.collection("tblPerson")

personCollection.insertOne({
    name: "Ishwor",
    country: "Nepal"
})
.then(() => {
    const result = personCollection.find()
    return result.toArray()      //instead of handling promise again, can return it and handle using chaining
})
.then(data => console.log(data))
.catch(error => console.log('Error', error))
.finally(() => client.close())


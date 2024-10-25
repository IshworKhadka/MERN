/*
    Create a server that responds to diff endpoint with data
    from diff database table
*/
const { MongoClient } = require('mongodb')
const http = require('node:http')

const server = http.createServer((req, res) => {
    const client = new MongoClient('mongodb+srv://sa:10Awilson@cluster-first.kii9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-first')
    const db = client.db('sample_mflix')

    if(req.url == '/movies'){
        db.collection('movies').find().toArray()
            .then(data => {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(data))
            })
            .catch(error => {
                console.log(error)
                res.end('Error while fetching movie data')
            })


    }else if (req.url == '/users'){
        db.collection('users').find().toArray()
        .then(data => {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data))
        })
            .catch(error => {
                console.log(error)
                res.end('Error while fetching user data')
            })

    }else if (req.url == '/theaters'){
        db.collection('theaters').find().toArray()
        .then(data => {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data))
        })
            .catch(error => {
                console.log(error)
                res.end('Error while fetching theater data')
            })

    }else{
        res.end('URL not found')
    }
})

server.listen(5000, () => {
    console.log('Server starting at http://localhost:5000')
    console.log('Press Ctrl + C to stop........')
})
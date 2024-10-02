
const funcA = () => 'in A'

const funcB = () => 'in B'

const funcC = () => 'in C'

const funcD = () => 'in D'

const funcE = () => 'in E'

const funcF = () => 'in F'

//exporting multiple properties
// module.exports = {funcA, funcB, funcC, funcD, funcE, funcF}

//when exporting multiple properties using ES Module, it is called named export. 2 ways

// module.exports = {funcA, funcB, funcC, funcD, funcE, funcF}
export {funcA, funcB, funcC, funcD, funcE, funcF}
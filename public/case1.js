const fruits = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150
  }
]
// declare needed variables
let importedFruits = []
let localsFruits = []
let stockImport = 0
let stockLocal = 0

const andisFruitsFunction = (data) => {
  let andisFruits = []                                                      // declare empty array for vessel
  data.forEach((element) => {                                               // make a loop for each element
    if (!andisFruits.includes(element.fruitName.toLowerCase())) {           // check if the array already contain the fruit name
      andisFruits.push(element.fruitName.toLowerCase())                     // push the fruit name into the array
    }
  })
  return andisFruits.sort()                                                 // return the sorted array 
}
const andisFruitsByType = (data) => {
  // declare empty array for vessel
  let importFruits = []
  let localFruits = []
  data.forEach((element) => {                                               // make a loop for each element
    if (element.fruitType === 'IMPORT') {                                   // check if fruitType is IMPORT
      importFruits.push(element)                                            // push the element into importFruits array variable
    } else {
      localFruits.push(element)                                             // push the element into localFruits array variable
    }
  })
  return {                                                                  // return object
    import: importFruits,
    local: localFruits
  }
}

andisFruitsByType(fruits).import.forEach((element) => {                     // make a loop for element in import key
  stockImport += element.stock                                              // plus the stock of importfruit
  if (!importedFruits.includes(element.fruitName.toLowerCase())) {          // check if the array already contain the fruit name
    importedFruits.push(element.fruitName.toLowerCase())                    // push the fruit name
  }
})

andisFruitsByType(fruits).local.forEach((element) => {                      // same as above
  stockLocal += element.stock
  if (!localsFruits.includes(element.fruitName.toLowerCase())) {
    localsFruits.push(element.fruitName.toLowerCase())
  }
})

let result = {
  andisFruits: andisFruitsFunction(fruits),
  vesselCount: Object.keys(andisFruitsByType(fruits)).length,               // count how many keys so that return number 
  importedFruits: importedFruits.sort(),
  localsFruits: localsFruits.sort(),
  stockImport,
  stockLocal,
  comment: "Terdapat nama buah yang sama namun ada perbedaan besar kecil huruf"
}

console.log(result)
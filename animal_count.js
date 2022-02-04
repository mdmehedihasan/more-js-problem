//first 10km=10; 20km=15  30km=20
function animalCount(totalKm) {
    //let firstAnimal10;
    if (totalKm <= 10) {
        const totalAnimal = totalKm * 10;
        return totalAnimal;
    }
    else if (totalKm <= 20) {
        const first10miles = 10 * 10;
        let restMiles = (totalKm - 10) * 15;
        const totalAnimal = first10miles + restMiles;
        return totalAnimal;
    }
    else {
        const first10miles = 10 * 10;
        let second10Miles = (20 - 10) * 15;
        let restMiles = (totalKm - 20) * 20;
        const totalAnimal = first10miles + second10Miles + restMiles;
        return totalAnimal;
    }
}

const allAnimal = animalCount(23);
console.log(allAnimal);
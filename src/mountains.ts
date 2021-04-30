export interface Mountain  {
    name: string;
    height: number;
}

const mountains: Mountain[] = [];
mountains.push({name: "Kilimanjaro", height: 19341});
mountains.push({name: "Everest", height: 29029});
mountains.push({name: "Denali", height: 20310});

export function findNameOfTallestMountain(mountainsArray: Mountain[]):string {
    if (mountainsArray.length === 0){
        return "";
    } else {
        let highestHeight:number = 0;
        let highestMountain:Mountain = mountainsArray[0];
        for (let mountain of mountainsArray) {
            if (mountain.height > highestHeight) {
                highestHeight = mountain.height
                highestMountain = mountain;
            }
        }      
        return `${highestMountain.name}`;
    }
}

let tallest:string = findNameOfTallestMountain(mountains);
console.log(tallest);

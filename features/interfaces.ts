interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const drinkCola = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Cola has ${this.sugar} grams of sugar`;
  },
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

const printVehicle2 = (vehicle: Vehicle): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printVehicle(oldCivic);
printVehicle2(oldCivic);
printSummary(oldCivic);
printSummary(drinkCola);

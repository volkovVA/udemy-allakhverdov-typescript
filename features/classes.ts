class MyVehicle {
  // public drive(): void {
  //   console.log(`I'm driving`);
  // }

  // color: string = 'red';

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  public stop(): void {
    console.log(`I've stopped!`);
  }

  protected beep(): void {
    console.log(`Beeeep!`);
  }
}

class MyCar extends MyVehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log(`I'm a car and I'm driving`);
  }

  startDrivingProcess(): void {
    this.drive();
    this.beep();
  }
}

const myVehicle = new MyVehicle('black');
console.log(myVehicle.color);
// myVehicle.drive();
// myVehicle.stop();

const myCar = new MyCar(4, 'silver');
// myCar.startDrivingProcess();
// myCar.stop();

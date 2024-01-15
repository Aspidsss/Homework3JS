class ElectricAppliance {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.pluggedIn = false;
    }
  
    plugIn() {
      this.pluggedIn = true;
      console.log(`${this.name} включен(а) в розетку`);
    }
  
    unplug() {
      this.pluggedIn = false;
      console.log(`${this.name} выключен(а) из розетки`);
    }
  }
  
  class Lamp extends ElectricAppliance {
    constructor(name, power, brightness) {
      super(name, power);
      this.brightness = brightness;
    }
  
    changeBrightness(newBrightness) {
      if (this.pluggedIn) {
        console.log(`Яркость лампы ${this.name} изменена на ${newBrightness}`);
        this.brightness = newBrightness;
      } else {
        console.log(`Сначала нужно включить лампу ${this.name} в розетку`);
      }
    }
  }
  
  class Computer extends ElectricAppliance {
    constructor(name, power, brand) {
      super(name, power);
      this.brand = brand;
    }
  
    start() {
      if (this.pluggedIn) {
        console.log(`Компьютер ${this.name} запущен`);
      } else {
        console.log(`Сначала нужно включить компьютер ${this.name} в розетку`);
      }
    }
  }
  
  function calculateTotalPowerConsumption(...appliances) {
    let totalPower = 0;
    for (let appliance of appliances) {
      if (appliance.pluggedIn) {
        totalPower += appliance.power;
      }
    }
    return totalPower;
  }
  
  const lamp = new Lamp('Настольная лампа', 60, 100);
  const computer = new Computer('Ноутбук', 45, 'Lenovo');
  
  lamp.plugIn();
  computer.plugIn();
  
  lamp.changeBrightness(50);
  computer.start();
  
  const totalPowerConsumption = calculateTotalPowerConsumption(lamp, computer);
  console.log(`Суммарная потребляемая мощность всех включенных приборов: ${totalPowerConsumption} Вт`);
  
// Родительская функция-конструктор
function ElectricAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

// Методы для включения/выключения прибора
ElectricAppliance.prototype.plugIn = function() {
  this.pluggedIn = true;
  console.log(`${this.name} включен(а) в розетку`);
}

ElectricAppliance.prototype.unplug = function() {
  this.pluggedIn = false;
  console.log(`${this.name} выключен(а) из розетки`);
}

// Дочерние функции-конструкторы
function Lamp(name, power, brightness) {
  ElectricAppliance.call(this, name, power);
  this.brightness = brightness;
}

function Computer(name, power, brand) {
  ElectricAppliance.call(this, name, power);
  this.brand = brand;
}

// Наследование прототипа от родительской функции-конструктора
Lamp.prototype = Object.create(ElectricAppliance.prototype);
Computer.prototype = Object.create(ElectricAppliance.prototype);

// Добавление собственных методов и свойств для каждого прибора
Lamp.prototype.changeBrightness = function(newBrightness) {
  if (this.pluggedIn) {
    console.log(`Яркость лампы ${this.name} изменена на ${newBrightness}`);
    this.brightness = newBrightness;
  } else {
    console.log(`Сначала нужно включить лампу ${this.name} в розетку`);
  }
}

Computer.prototype.start = function() {
  if (this.pluggedIn) {
    console.log(`Компьютер ${this.name} запущен`);
  } else {
    console.log(`Сначала нужно включить компьютер ${this.name} в розетку`);
  }
}

// Создание экземпляров приборов
const lamp = new Lamp('Настольная лампа', 60, 100);
const computer = new Computer('Ноутбук', 45, 'Lenovo');

// Включение приборов в розетку
lamp.plugIn();
computer.plugIn();

// Использование методов и свойств каждого прибора
lamp.changeBrightness(50);
computer.start();

// Подсчет суммарной потребляемой мощности всех включенных приборов
function calculateTotalPowerConsumption(...appliances) {
  let totalPower = 0;
  for (let appliance of appliances) {
    if (appliance.pluggedIn) {
      totalPower += appliance.power;
    }
  }
  return totalPower;
}

const totalPowerConsumption = calculateTotalPowerConsumption(lamp, computer);
console.log(`Суммарная потребляемая мощность всех включенных приборов: ${totalPowerConsumption} Вт`);
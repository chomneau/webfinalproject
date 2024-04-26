// Define constants
const ROAD_LENGTH = 1000; // Length of the road
const NUM_CARS = 10; // Number of cars on the road
const MAX_SPEED = 5; // Maximum speed a car can travel
const MIN_CAR_DISTANCE = 10; // Minimum distance between two cars
const BRAKE_DISTANCE = 20; // Distance at which cars start to decelerate
const TRAFFIC_LIGHT_DISTANCE = 400; // Distance of traffic light from the start of the road
const RED_LIGHT_DURATION = 5; // Duration of red light in seconds

// Define car class
class Car {
  constructor(speed, position) {
    this.speed = speed;
    this.position = position;
  }

  accelerate() {
    this.speed = Math.min(this.speed + 1, MAX_SPEED);
  }

  decelerate() {
    this.speed = Math.max(this.speed - 1, 0);
  }

  move() {
    this.position += this.speed;
  }
}

// Initialize cars on the road
let cars = [];
for (let i = 0; i < NUM_CARS; i++) {
  cars.push(new Car(Math.floor(Math.random() * MAX_SPEED) + 1, i * (ROAD_LENGTH / NUM_CARS)));
}

// Simulate traffic
function simulateTraffic() {
  for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    // Check for traffic lights
    if (car.position >= TRAFFIC_LIGHT_DISTANCE && car.position <= TRAFFIC_LIGHT_DISTANCE + RED_LIGHT_DURATION * MAX_SPEED) {
      car.decelerate();
    } else {
      // Check for other cars
      for (let j = i + 1; j < cars.length; j++) {
        let distance = cars[j].position - car.position;
        if (distance < MIN_CAR_DISTANCE) {
          car.decelerate();
          break;
        }
      }
      // Check for brake distance
      if (car.speed > 0 && car.position + BRAKE_DISTANCE >= cars[i + 1]?.position) {
        car.decelerate();
      } else {
        car.accelerate();
      }
    }
    car.move();
  }
}

// Run simulation
function runSimulation() {
  for (let t = 0; t < 100; t++) {
    console.log(`Time: ${t}`);
    simulateTraffic();
    for (let i = 0; i < cars.length; i++) {
      console.log(`Car ${i + 1}: Position: ${cars[i].position}, Speed: ${cars[i].speed}`);
    }
  }
}

runSimulation();

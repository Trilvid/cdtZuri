//1.) First Create a class to represent the Detector module

class ObstructionDetector {
    constructor(speed, distance, expectedTime) {
      // To get the speed of the machine in miles per minute
      this.speed = speed; 
      // To get the distance between point A and point B in miles
      this.distance = distance;
      // To get the expected time calculated using speed and distance
      this.expectedTime = expectedTime; 
    }
  
    //2.) Created a method to simulate the time duration for the  module's result
    simulateTimeDuration() {
      return Math.floor(this.distance / this.speed);
    }
  
    //3.) Created another method to determine if there is an obstruction and if it's impenetrable
    hasImpenetrableObstruction() {
      const actualTime = this.simulateTimeDuration();
  
      // Checked if the actual time exceeded the expected time by 60 minutes
      if (actualTime > this.expectedTime + 60) {
        return true; // There is an impenetrable obstruction
      } else {
        return false; // No obstruction
      }
    }
  }
  
  //4.) Testing the module
  const pointA = [53.5872, -2.4138];
  const pointB = [53.474, -2.2388];
  
  // Simulated speed in miles per minute
  const speed = 0.5;
   // Some function to calculate distance
  const distance = calculateDistance(pointA, pointB);
  // Some function to calculate expected time
  const expectedTime = calculateExpectedTime(speed, distance); 
  
  // Create an instance of ObstructionDetector
  const obstructionDetector = new ObstructionDetector(speed, distance, expectedTime);
  
  //5.) Check for obstructions and their penetrability
  const hasImpenetrableObstruction = obstructionDetector.hasImpenetrableObstruction();
  if (hasImpenetrableObstruction) {
    console.log("There is an impenetrable obstruction.");
  } else {
    console.log("No obstruction or obstruction is penetrable.");
  }
  
  
  
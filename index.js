// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function (driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, location){
  drivers.filter( function (driver){
    driver.hometown === location 
  }).forEach( function (driver){
    console.log(driver.name)
  })
}
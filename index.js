// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function (driver){
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function (driver){
    if (driver.hometown === location){
    console.log(driver.name)
  }})
}

const driversByRevenue = function(drivers){
  return drivers.slice().sort( function (driverOne, driverTwo){
    return driverOne.revenue - driverTwo.revenue;
  })
}

const driversByName = function(drivers){
  return drivers.slice().sort( function (driverOne, driverTwo){
    return driverOne.name.localeCompare(driverTwo.name);
  })
}

const totalRevenue = function(drivers){
  return drivers.reduce( function (total, driver){
    return driver.revenue + total
  }, 0);
}

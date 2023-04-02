"use strict";

const Trips = (function() {
  const _trips = [];

  function push(trip) {
    if (trip instanceof Trip) {
      _trips.push(trip);
    }
  }

  function totalKml() {
    let totalKm = 0;
    let totalLitres = 0;
    for (let trip of _trips) {
      totalKm += trip.km;
      totalLitres += trip.litres;
    }
    return totalKm / totalLitres;
  }

  function toString() {
    let str = "";
    for (let trip of _trips) {
      str += trip.toString() + "\n";
    }
    str += "\nCumulative KML: " + totalKml().toFixed(1);
    return str;
  }

  return {
    push,
    totalKml,
    toString
  };
})();


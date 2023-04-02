"use strict";
class Trip {
    constructor(destination, km, litres) {
      this.destination = destination;
      this.km = parseFloat(km);
      this.litres = parseFloat(litres);
    }
  
    get isValid() {
      return (this.destination && this.km && this.litres && this.km > 0 && this.litres > 0);
    }
  
    toString() {
      return `${this.destination} (${this.km} km, ${this.litres} litres)`;
    }
  }
  
$(document).ready( () => {
  const trips = Trips;

  $("#add_trip").click( () => {
    const trip = new Trip(
      $("#destination").val(), $("#km").val(), $("#litres").val());

    if (trip.isValid) {
      trips.push(trip);
      $("#trip_list").val(trips.toString());

      $("#destination").val("");
      $("#km").val("");
      $("#litres").val("");

      $("#destination").focus();
    }
    else {
      alert("Please complete all fields.\nKilometers and litres "
          + "must be numeric and greater than zero.");
      $("#destination").select();
    }
  });

  $("#destination").focus();
});

'use strict';
import './assets/scss/app.scss';
import mapboxgl from 'mapbox-gl';
import Papa from 'papaparse';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NleWZmZXJ0IiwiYSI6ImNqMGtidmhwZzAwOGUycWxrYjQwNXdrbTIifQ.689MKXg8FAe4_Gpgta3Diw';

const mainMap = new mapboxgl.Map({
  container: 'main-map',
  style:     'mapbox://styles/mapbox/light-v9?optimize=true',
  minZoom:   3.75,
  // maxZoom:   15, // Arbitrary
  center:    [ -95.7129, 37.0902 ], // Center of the USA
  // maxBounds:    [
  //   [ -172.7452398807572, 12.57828546005527, ],
  //   [ -58.76160721351644, 71.61645111692806, ]
  // ]
  // maxBounds: [
  //   [ 10.015517031448013, 73.50074445022241 ],
  //   [ -195.9362410702109, 9.542552999544242 ]
  // ]
});

const alaskaMap = new mapboxgl.Map({
  container: 'alaska',
  style:     'mapbox://styles/mapbox/light-v9?optimize=true',
  // minZoom:   2.8,
  // maxZoom:   15, // Arbitrary
  // center:    [ -95.7129, 37.0902 ], // Center of the USA
  // maxBounds:    [
  //   [ -172.7452398807572, 12.57828546005527, ],
  //   [ -58.76160721351644, 71.61645111692806, ]
  // ]
  // maxBounds: [
  //   [ 10.015517031448013, 73.50074445022241 ],
  //   [ -195.9362410702109, 9.542552999544242 ]
  // ]
});

const hawaiiMap = new mapboxgl.Map({
  container: 'hawaii',
  style:     'mapbox://styles/mapbox/light-v9?optimize=true',
  // minZoom:   2.8,
  // maxZoom:   15, // Arbitrary
  // center:    [ -95.7129, 37.0902 ], // Center of the USA
  // maxBounds:    [
  //   [ -172.7452398807572, 12.57828546005527, ],
  //   [ -58.76160721351644, 71.61645111692806, ]
  // ]
  // maxBounds: [
  //   [ 10.015517031448013, 73.50074445022241 ],
  //   [ -195.9362410702109, 9.542552999544242 ]
  // ]
});

const downloadCSVs = () => {
  const main = new Promise((resolve, reject) => {
    Papa.parse('./data/Behavioral_Health_Treament_Facilities.csv', {
      download: true,
      header: true,
      complete: (results) => {
        resolve(results);
      },
      error: (err) => reject(err)
    });
  });

  const ref = new Promise((resolve, reject) => {
    Papa.parse('./data/Behavioral_Health_Treament_Facilities_Service_Code_Reference.csv', {
      download: true,
      header: true,
      complete: (results) => {
        resolve(results);
      },
      error: (err) => reject(err)
    });
  });
  
  return Promise.all([main, ref]);
}

downloadCSVs()
  .then((data) => {
    const main = data[0];
    console.log('Main', main);
    const reference_codes = data[1];
    console.log('Reference Codes', reference_codes);
  })
  .catch((error) => console.log(error));

mainMap.on('zoom', (event) => {
  console.log(event);
});
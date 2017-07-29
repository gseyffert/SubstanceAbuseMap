'use strict';
import './assets/scss/app.scss';
import mapboxgl from 'mapbox-gl';
import Papa from 'papaparse';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NleWZmZXJ0IiwiYSI6ImNqMGtidmhwZzAwOGUycWxrYjQwNXdrbTIifQ.689MKXg8FAe4_Gpgta3Diw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9'
});

console.time('ref');
Papa.parse('./data/Behavioral_Health_Treament_Facilities_Service_Code_Reference.csv', {
  download: true,
  header: true,
	complete: function(results) {
    console.timeEnd('ref');
    console.log(results);
  }
});

console.time('main');
Papa.parse('./data/Behavioral_Health_Treament_Facilities.csv', {
  download: true,
  header: true,
	complete: function(results) {
    console.timeEnd('main')
    console.log(results);
  }
});
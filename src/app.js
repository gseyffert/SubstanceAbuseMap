'use strict';
import './assets/scss/app.scss';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NleWZmZXJ0IiwiYSI6ImNqMGtidmhwZzAwOGUycWxrYjQwNXdrbTIifQ.689MKXg8FAe4_Gpgta3Diw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9'
});


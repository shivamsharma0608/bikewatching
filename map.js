// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';
import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';

// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hzMDc3IiwiYSI6ImNtcDYycnRsZTA3ejIyeG9qazVnaHp2ZXYifQ.Fm9sKFOf3goNyx3mmmdNxw';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/shs077/cmp647qr1003s01sncskpcocf',
  center: [-71.09415, 42.36027],
  zoom: 12,
  minZoom: 5,
  maxZoom: 18,
});

console.log('Mapbox GL JS Loaded:', mapboxgl);
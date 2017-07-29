'use strict';

const Papa = require('papaparse');
const fs = require('fs');

const write = (data) => {
  fs.writeFileSync(
    './data/Behavioral_Health_Treament_Facilities.json',
    JSON.stringify(data, null, 2)
  );
}

const file = fs.readFileSync('./data/Behavioral_Health_Treament_Facilities.csv');
console.time('parse');
Papa.parse(file.toString(), {
  header: true,
	complete: (results) => {
    write(results.data);
  }
});
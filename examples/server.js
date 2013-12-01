/*
  Simple example that start the http interface 
  (Working configuration for RaspberryPi)
  
  usage: node server.js 
  
*/

// AVR265 module
var model 		= '265';

// webservice port configuration
var servicePort 	= 8265;

// Raspberry configuration 
var serialInterface 	= '/dev/ttyAMA0';
var serialOption 	= {
			    baudrate: 57600,
			    databits: 8,
			    parity: "none",
			    stopbits: 1,
			    flowControl: false
			};

// initialisation
var server = require('hkavr');
server.avr(model,servicePort,serialInterface,serialOption);

// hkavr.js
"use strict" 

// Copyright 2013 Vincent Laag <vincent@stationweb.fr>

var http 	= require('http');
var url 	= require('url');
var SerialPort 	= require('serialport').SerialPort;
require('buffertools');

var avr = function(model,servicePort,serialInterface,serialOptions) {
  
	var AVR 		= require('./lib/avr'+model);
	var pcsend 		= '504353454E44';
	var pcdatatype 		= '02';
	var pcdatalength 	= '04';
	var serialPort 		= new SerialPort(serialInterface, serialOptions);

	serialPort.on("open", function () {
	  /* log AVR output */
	  serialPort.on('data', function(data) {
	    var buf = new Buffer(data);
	    console.log('test buf outils:'+ buf.toHex());
	  });
	  var bufSend = new Buffer( pcsend + pcdatatype + pcdatalength + AVR.avrCommand('PowerOn') ).fromHex();
	  serialPort.write(bufSend);
	});
	
	var server = http.createServer(function(req, res) {
	    var page = url.parse(req.url).pathname;
	    var cmd = page.split('/');
	    if(cmd[1] == 'avr' && cmd[2] !== undefined) {
		if(cmd[3] !== undefined) {
		  var hexaCmd = AVR.avrCommandValue(cmd[2],cmd[3]);
		} else {
		  var hexaCmd = AVR.avrCommand(cmd[2]);
		}
		if ( hexaCmd !== false) {
		  var bufSend = new Buffer( pcsend + pcdatatype + pcdatalength + hexaCmd ).fromHex();
		  serialPort.write(bufSend); 
		}
	    }
	    res.end();  
	});
	server.listen(servicePort);
	
}
exports.avr 	= avr;
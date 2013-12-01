# hkavr

Harmann & Kardon Audio/Video Receiver (AVR) RS232 driver.

## Installing the module

Easy! With [npm](http://npmjs.org/):

	npm install hkavr

Now you can include the module in your project.

	// AVR265 module
	var model 		= '265';

	// webservice port configuration
	var servicePort 	= 8265;

	// Raspberry configuration for SerialPort
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

## Note

Still in development.

Available(s) driver(s) for the following serie(s):

* AVR265 

* need good user permissions on the port

## Use

The module start a simple HTTP webservice on the Raspberry connected to the AVR RS232 port.

## Manual

http://stationweb.fr/node-hkavr

## Development in progress & todo

* Finish command 
  - treble
  - bass
  - station frequency
* Humanize AVR response and send response 
* Extend with socket
* Add configuration option object at start 
  - http server or direct command
* Extend module for other series (AVR 2650, AVR 365, AVR 3650, AVR 635, AVR 630 , AVR 435 ,AVR 430)

## License

Copyright (c) 2013 Vincent Laag <vincent@stationweb.fr>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

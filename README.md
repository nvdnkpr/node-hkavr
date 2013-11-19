# hkavr

Harmann & Kardon Audio/Video Receiver (AVR) RS232 driver.

## Installing the module

Easy! With [npm](http://npmjs.org/):

	npm install hkavr

Now you can include the module in your project.

	var avrServer = require('hkavr');
	avrServer.avr('265');

## Note

Still in development.

Available(s) driver(s) for the following serie(s):

* AVR265 

Usable only on Raspberry Pi with:

* serial port on /dev/ttyAMA0
* need good user permissions on the port

## Use

The module start a simple HTTP webservice on the Raspberry connected to the AVR RS232 port.

### Simple HTTP commands

All the commands below are working like this:

	http://[IP]:8265/avr/[COMMAND]

So to Power On:

	http://[IP]:8265/avr/PowerOn

* PowerOn
* PowerOff
* PowerToggle
* GetPowerStatus
* VolumeUp
* VolumeDown
* GetVolume
* GetBassValue
* BassUp
* BassDown
* GetTrebleValue
* TrebleUp
* TrebleDown
* MuteToggle
* GetMuteStatus
* MultiZoneOn
* MultiZoneOff
* RDS
* GetSiriusInfo
* TuneUp
* TuneDown
* PresetUp
* PresetDown
* GetCurrentStation
* Zone2VolumeUp
* Zone2VolumeDown
* Zone2MuteToggle
* Zone1Menu
* Zone1Up
* Zone1Down
* Zone1Left
* Zone1Right
* Zone1Ok
* Zone1Button0
* Zone1Button1
* Zone1Button2
* Zone1Button3
* Zone1Button4
* Zone1Button5
* Zone1Button6
* Zone1Button7
* Zone1Button8
* Zone1Button9
* Zone2Menu
* Zone2Up
* Zone2Down
* Zone2Left
* Zone2Right
* Zone2Ok
* Zone2Button0
* Zone2Button1
* Zone2Button2
* Zone2Button3
* Zone2Button4
* Zone2Button5
* Zone2Button6
* Zone2Button7
* Zone2Button8
* Zone2Button9

### HTTP commands with param

DiscreteVolume

*  -90 to +10 > 218 to 118

	http://[IP]:8265/avr/DiscreteVolume/218 for -90dB level
	http://[IP]:8265/avr/DiscreteVolume/178 for -50dB level
	http://[IP]:8265/avr/DiscreteVolume/118 for +10dB level

DiscreteBass

DiscreteTreble

DiscreteInputSelection

*  1: Cable/Sat - 2: BLu-Ray - 3: Bridge - 4: DVR - 5: USB
*  6: SIRIUS Radio - 7: FM Radio - 8: AM Radio - 9: TV - 10: Game
*  11: Media Server - 12: AUX - 13: Internet Radio - 14: Network
*  15: Source A - 16: Source B - 17: Source C - 18: Source D

	http://[IP]:8265/avr/DiscreteInputSelection/17 for Source C selection

MP3PlayerRepeat
- 1: Repeat All - 2: Repeat one - 3: Repeat Off

	http://[IP]:8265/avr/MP3PlayerRepeat/3 for Repeat Off

MP3PlayerShuffle
- 1: Shuffle On - 2: Shuffle Off

	http://[IP]:8265/avr/MP3PlayerShuffle/2 for huffle Off

GetMP3Metadata
- 1: Title - 2: Artist - 3: Album

	http://[IP]:8265/avr/GetMP3Metadata/2 for Artist

GetSiriusMetadata
- 1: Song - 2: Artist - 3: Category

	http://[IP]:8265/avr/GetSiriusMetadata/2 for Artist

DirectBandSelection
- 1: AM - 2: FM - 3: SIRIUS

	http://[IP]:8265/avr/DirectBandSelection/2 for FM

DirectPresetSelection
- 1 ~ 99

	http://[IP]:8265/avr/DirectPresetSelection/2 for Preset Selection 2

SetCurrentStationFM

SetCurrentStationAM

Zone2DiscreteInput

*  1: Cable/Sat - 2: BLu-Ray - 3: Bridge - 4: DVR - 5: USB
*  6: SIRIUS Radio - 7: FM Radio - 8: AM Radio - 9: TV - 10: Game
*  11: Media Server - 12: AUX - 13: Internet Radio - 14: Network
*  15: Source A - 16: Source B - 17: Source C - 18: Source D

	http://[IP]:8265/avr/Zone2DiscreteInput/2 for BLu-Ray

Zone2SetVolume

*  -90 to +10 > 218 to 118

	http://[IP]:8265/avr/Zone2SetVolume/178 for -50dB level

### AVR Responses

Coming soon.

## Development in progress & todo

* Finish command 
  - treble
  - bass
  - station frequency
* Humanize AVR response and send response 
* Extend with socket
* Add configuration option object at start 
  - http server or direct command
  - serial port configuration for other *nux,*nix
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

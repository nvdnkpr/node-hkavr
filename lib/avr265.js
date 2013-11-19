// avr265.js
"use strict" 

// Copyright 2013 Vincent Laag <vincent@stationweb.fr>

var listCmd = {
  "PowerOn"			: "8070C03F404F",
  "PowerOff"			: "80709F601F10",
  "PowerToggle"			: "807000000100",
  "GetPowerStatus"		: "807000003600",
  "VolumeUp"			: "8070C7384748",
  "VolumeDown"			: "8070C8374847",
  "GetVolume"			: "807000003700",
  "GetBassValue"		: "807000003800",
  "BassUp"			: "807000000400",
  "BassDown"			: "807000000500",
  "GetTrebleValue"		: "807000003900",
  "TrebleUp"			: "807000000700",
  "TrebleDown"			: "807000000800",
  "MuteToggle"			: "8070C13E414E",
  "GetMuteStatus"		: "807000003A00",
  "MultiZoneOn"			: "807000000A00",
  "MultiZoneOff"		: "807000000B00",
  "RDS"				: "807000000D00",
  "GetSiriusInfo"		: "807000003100",
  "TuneUp"			: "807000003200",
  "TuneDown"			: "807000003300",
  "PresetUp"			: "807000001900",
  "PresetDown"			: "807000001A00",
  "GetCurrentStation"		: "807000003400",
  "Zone2VolumeUp"		: "86762BD4ADA2",
  "Zone2VolumeDown"		: "86762CD3AAA5",
  "Zone2MuteToggle"		: "86762AD5ACA3",
  "Zone1Menu" 			: "807000002100",
  "Zone1Up" 			: "807000002200",
  "Zone1Down" 			: "807000002300",
  "Zone1Left" 			: "807000002400",
  "Zone1Right" 			: "807000002500",
  "Zone1Ok" 			: "807000002600",
  "Zone1Button0" 		: "807000003C00",
  "Zone1Button1" 		: "807000003D00",
  "Zone1Button2" 		: "807000003E00",
  "Zone1Button3" 		: "807000003F00",
  "Zone1Button4" 		: "807000004000",
  "Zone1Button5" 		: "807000004100",
  "Zone1Button6" 		: "807000004200",
  "Zone1Button7" 		: "807000004300",
  "Zone1Button8" 		: "807000004400",
  "Zone1Button9" 		: "807000004500",
  "Zone2Menu" 			: "807000002700",
  "Zone2Up" 			: "807000002800",
  "Zone2Down" 			: "807000002900",
  "Zone2Left" 			: "807000002A00",
  "Zone2Right" 			: "807000002B00",
  "Zone2Ok" 			: "807000002C00",
  "Zone2Button0" 		: "807000004600",
  "Zone2Button1" 		: "807000004700",
  "Zone2Button2" 		: "807000004800",
  "Zone2Button3" 		: "807000004900",
  "Zone2Button4" 		: "807000004A00",
  "Zone2Button5" 		: "807000004B00",
  "Zone2Button6" 		: "807000004C00",
  "Zone2Button7" 		: "807000004D00",
  "Zone2Button8" 		: "807000004E00",
  "Zone2Button9" 		: "807000004F00"
}

var listCmdValue = {
  "DiscreteVolume"		: "8070000002",
  "DiscreteBass"		: "8070000003",
  "DiscreteTreble"		: "8070000006",
  "DiscreteInputSelection"	: "8070000009",
  "MP3PlayerRepeat"		: "807000000E",
  "MP3PlayerShuffle"		: "807000010E",
  "GetMP3Metadata"		: "807000000F",
  "GetSiriusMetadata"		: "8070000011",
  "DirectBandSelection"		: "8070000012",
  "DirectPresetSelection"	: "8070000018",
  "SetCurrentStationFM"		: "807000003501",
  "SetCurrentStationAM"		: "807000003502",
  "Zone2DiscreteInput"		: "867600001B",
  "Zone2SetVolume"		: "807000003B"
}

var listResponse = {
  "41565241434B0201"		: "Power Status",
  "41565241434B0202"		: "Volume Value",
  "41565241434B0311"		: "Volume Zone Value",
  "41565241434B0212"		: "Bass Value",
  "41565241434B0213"		: "Treble Value",
  "41565241434B0203"		: "Mute Toggle",
  "41565241434B0314"		: "Mute Status",
  "41565241434B0204"		: "Discrete Input Selection",
  "41565241434B0208"		: "Zone 2 Discrete Input Selection",
  "41565241434B0209"		: "Zone 2 Volume Value",
  "41565241434B020A"		: "Zone 2 Mute Toggle ACK",
  // "41565241434B00" 		: "RDS info",
  // "41565241434B00" 		: "ipod/usb mp3 metadata",
  // "41565241434B00" 		: "sirus metadata",
  // "41565241434B00" 		: "station name and number",
  // "41565241434B00" 		: "station frequency and preset number",
  // "41565241434B00" 		: "current station frequency",
}

var avrCommand = function(command) {
    if(listCmd[command] !== undefined) {
      return listCmd[command];
    } else {
      return false;
    }
}

var avrCommandValue = function(command,value) {
    if(listCmdValue[command] !== undefined) {
      var ret = listCmdValue[command];
      switch(command)
      {
	case "DiscreteVolume":
	  ret += parseInt(value).toString(16);
	break;
  case "DiscreteBass":
    ret = false;
  break;
  case "DiscreteTreble":
    ret = false;
  break;
	case "DiscreteInputSelection":
	  if(value < 10) {
	    ret += "0" + value;
	  } else {
	    ret += Number(value).toString(16);
	  }
	break;
	case "MP3PlayerRepeat":
	  if(value < 10) {
	    ret += "0" + value;
	  } else {
	    ret += Number(value).toString(16);
	  }
	break;
	case "MP3PlayerShuffle":
	  if(value < 10) {
	    ret += "0" + value;
	  } else {
	    ret += Number(value).toString(16);
	  }
	break;
	case "GetMP3Metadata":
	  if(value < 10) {
	    ret += "0" + value;
	  } else {
	    ret += Number(value).toString(16);
	  }
	break;
	case "GetSiriusMetadata":
	  if(value < 10) {
	    ret += "0" + value;
	  } else {
	    ret += Number(value).toString(16);
	  }
	break;
	case "DirectBandSelection":
	  if(value < 10) {
	    ret += "0" + value;
	  } else {
	    ret += Number(value).toString(16);
	  }
	break;
	case "DirectPresetSelection":
		if(value < 10) {
		  ret += "0" + value;
		} else {
		  ret += Number(value).toString(16);
		}
	break;
  case "SetCurrentStationFM":
    ret = false;
  break;
  case "SetCurrentStationAM":
    ret = false;
  break;
	case "Zone2DiscreteInput":
	  if(value < 10) {
	    ret += "0" + value;
	  } else {
	    ret += Number(value).toString(16);
	  }
	break;
	case "Zone2SetVolume":
	  ret += parseInt(value).toString(16);
	break;
      }
      return ret;
    } else {
      return false;
    }
}

var avrResponse = function(response) {
    if(listResponse[response] !== undefined) {
      var ret = listResponse[response];
      switch(ret)
      {
	case "Power Status":
	  ret += '';
	break;
	case "Volume Value":
	  ret += '';
	break;
	case "Volume Zone Value":
	  ret += '';
	break;
	case "Bass Value":
	  ret += '';
	break;
	case "Treble Value":
	  ret += '';
	break;
	case "Mute Toggle":
	  ret += ''; 
	break;
	case "Mute Status":
	  ret += '';
	break;
	case "Discrete Input Selection":
	  ret += '';
	break;
	case "Zone 2 Discrete Input Selection":
	  ret += '';
	break;
	case "Zone 2 Volume Value":
	  ret += '';
	break;
	case "Zone 2 Mute Toggle ACK":
	  ret += '';
	break;
      }
      return ret;
    } else {
      return false;
    }
}

exports.avrCommand 	= avrCommand;
exports.avrCommandValue = avrCommandValue;
exports.avrResponse 	= avrResponse;
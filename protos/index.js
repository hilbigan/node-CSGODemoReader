const ProtoBuf = require('./../src/Protobuf');
let proto = new ProtoBuf();

proto.require(null, null);
//proto.require('../protos/Common.js', 'Common');
//proto.require('../protos/GCMessages', 'GCMessages');
//proto.require('../protos/NetMessages', 'NetMessages');
//proto.require('../protos/UserMessages', 'UserMessages');

module.exports = proto;

const mongoose = require('mongoose');
const { Schema } = mongoose;


const treeSchema = new Schema({
	_id     : { type : String, required : true, trim : true },
    parent  : { type : String, required : true, trim : true },
    text    : { type : String, required : true, trim : true },
    icon    : { type : String, trim : true },
    state   : { opened    : { type : Boolean },         
				disabled  : { type : Boolean },        
                selected  : { type : Boolean } },
    li_attr : { },
    a_attr  : { },
    nodeInfo : { },
    adnInfo : {},
    aeInfo : {},
});

const userSchema = new Schema({
	userId: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    name: {type: String, require: true},
    company: {type: String},
    email: {type: String},
    phone: {type: String},
    created: {type: Date, default: Date.now}

});


const siteSchema = new Schema(
    [treeSchema],[userSchema], { versionKey: false }
);
module.exports = mongoose.model('Site', siteSchema);






////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/**
const nodeInfoSchema = new Schema( {
  
});
const aeSchema = new Schema({
    treeInfo      : treeSchema, 
});

const adnSchema = new Schema({
    treeInfo      : treeSchema, 
});


const stationSchema = new Schema({
    treeInfo      : treeSchema, 
});


const lineSchema = new Schema({
    treeInfo      : treeSchema, 
});

const siteSchema = new Schema({
    treeInfo        : [treeSchema] 
});
const siteSchema = new Schema(
    [treeSchema], [],{ versionKey: false }
);


**************************************/

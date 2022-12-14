const { default: mongoose } = require("mongoose");
const mongodb = require("mongoose");
const schema = mongodb.Schema({
    name:{
        type: String,
        require: [true, "Contact name is required"],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
    },
    address: String,
    phone: String,
    favorite: Boolean,
    },
    { timestamps:true}
);
schema.method("toJSON", function(){
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model("contact", schema);

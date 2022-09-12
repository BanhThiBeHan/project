const config ={
    db: {
        uri: process.env.MONGODB_URI || "mongodb+srv://HanHan:hanne123@cluster0.wxl48hl.mongodb.net/aaa?retryWrites=true&w=majority",
    },
    app:{
        port: process.env.PORT || 8080,
    },
};

module.exports = config;
const { abort } = require("process");

module.exports = validateRequest;

function validateRequest(req, next, schma) {
    const option = {
        abortEarly: false,
        allowUnknown :true,
        stripUknown : true
    };
    const {err, value} = schema.validate(req.body, optiond);

    if(err) {
        next("Validate error: ${error.details.map(x => x.message).join(", ")}");
    }else {
        req.body = value;
        next();
    }
}
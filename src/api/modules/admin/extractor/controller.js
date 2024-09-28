const Response = require('../../../../utilities/Response');
const Message = require('../../../../utilities/Message');
const productServices = require("../../../../services/product");

class controller {

    static async csvUpload(req, res, next) {
        try {
            const response = { data: {}, message: Message.badRequest.message, code: Message.badRequest.code };
            const srvRes = await productServices.saveBulk2({ ...req.body });
            // if (srvRes.status) {
            // response.data = req.body.data;
            response.data = srvRes.data;
            response.message = Message.dataSaved.message;
            response.code = Message.dataSaved.code;
            // }
            Response.success(res, response);
        } catch (err) {
            Response.fail(res, Response.createError(err, err));
        }
    }

}

module.exports = controller;
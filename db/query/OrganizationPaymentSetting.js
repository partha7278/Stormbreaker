

/**
 * - Select one record with id attribute
 * @param  {object} req - request object
 * @param  {object} where - update condition
 * @return {object} - return object with status, statusCode, message & data
 */
async function selectIdPaymentSettingOne(req, where) {
    
    try {
        /** Tracer Start*/
        tracer.trace(req);
        let PaymentSetting = await db.OrganizationPaymentSetting.findOne({ where, attributes:["id"] });
        /** Tracer End*/
        tracer.trace(req);
        
        return {'statusCode':200,'status':'SUCCESS','message':'','data':PaymentSetting};
    }
    catch(ex) {
        return handleError(new CustomError(ex.name, ex.message, ex.parent), req.user);
    }
}




/**
 * - Select one record with all attribute
 * @param  {object} req - request object
 * @param  {object} where - update condition
 * @return {object} - return object with status, statusCode, message & data
 */
async function selectPaymentSettingOne(req, where) {
    
    try {
        /** Tracer Start*/
        tracer.trace(req);
        let PaymentSetting = await db.OrganizationPaymentSetting.findOne({ where });
        /** Tracer End*/
        tracer.trace(req);
        
        return {'statusCode':200,'status':'SUCCESS','message':'','data':PaymentSetting};
    }
    catch(ex) {
        return handleError(new CustomError(ex.name, ex.message, ex.parent), req.user);
    }
}





module.exports = {
    selectIdPaymentSettingOne,
    selectPaymentSettingOne
}
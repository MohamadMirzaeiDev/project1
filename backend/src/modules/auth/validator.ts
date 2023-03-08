import { check, ValidationChain } from "express-validator";

export function phoneNumber_validate():ValidationChain[]{
    return [
        check('phone_number')
            .notEmpty().withMessage('phoneNumber is Required')
            .isLength({max : 11 , min : 11}).withMessage('phoneNumber is invalid')
    ]
}


export function phoneNumberVerify_validate():ValidationChain[]{
    return [
        check('phone_number')
            .notEmpty().withMessage('phoneNumber is reuqired')
            .isLength({max : 11 , min : 11}).withMessage('phoneNumber is invalid')
        ,
        check('otp_code')
            .notEmpty().withMessage('otp_code is reuqired')
    ]
}
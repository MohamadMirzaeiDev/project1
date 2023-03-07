import { check, ValidationChain } from "express-validator";

export function phoneNumber_validate():ValidationChain[]{
    return [
        check('phoneNumber')
            .notEmpty().withMessage('phoneNumber is Required')
            .isLength({max : 11 , min : 11}).withMessage('phoneNumber is invalid')
    ]
}
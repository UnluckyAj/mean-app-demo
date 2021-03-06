export default class CommonConstants {
     constructor() {
        /**
         * Static Codes
         */
        this.UNAUTHORIZED_ERROR_CODE = 401;
        this.INTERNAL_SERVER_ERROR_CODE = 500;
        this.OK = 200;
        /**
         * Static Message
         */
        this.INTERNAL_SERVER_ERROR = 'Error Occured';
        this.USER_NOT_FOUND = 'User Not Found';
        this.UNAUTHORIZED_ERROR = 'Unauthorized Access';
        this.USER_USER_TYPE = 'user';
        this.ADMIN_USER_TYPE = 'admin';

        /**
         * Error Constants here
         */

         this.MongoValidationError = 'ValidatorError';
         this.MongoError = 'MongoError';
        }
}

export const commonConstantsInst = new CommonConstants();
// export default CommonConstants;

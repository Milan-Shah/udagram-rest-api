"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    "dev": {
        "username": process.env.UDAGRAM_USERNAME,
        "password": process.env.UDAGRAM_PASSWORD,
        "database": process.env.UDAGRAM_DATABASE,
        "host": process.env.UDAGRAM_HOST,
        "dialect": "postgres",
        "aws_region": process.env.UDAGRAM_AWS_REGION,
        "aws_profile": process.env.UDAGRAM_AWS_PROFILE,
        "aws_media_bucket": process.env.UDAGRAM_AWS_MEDIA_BUCKET
    }
};
process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error);
});
//# sourceMappingURL=config.js.map
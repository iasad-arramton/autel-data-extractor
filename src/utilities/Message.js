const HttpStatus = require('http-status-codes');

module.exports = {
	accountBlocked: {
		name: 'Authorization error',
		message: 'Your account is blocked. Contact Admin!!',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},
	accountInactive: {
		name: 'Authorization error',
		message: 'Your account is inactive. Contact Admin',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},
	otpExpired: {
		name: 'Authorization error',
		message: 'OTP expired',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},
	invalidToken: {
		name: 'Authorization error',
		message: 'Invalid token',
		code: HttpStatus.StatusCodes.UNAUTHORIZED
	},
	forgetPassword: {
		name: 'Email Sent',
		message: 'A reset password link has been sent to your email. Please check and reset your password.',
		code: HttpStatus.StatusCodes.OK
	},
	profileUpdateError: {
		name: 'Profile updation error',
		message: 'Error while updating profile',
		code: HttpStatus.StatusCodes.NOT_IMPLEMENTED
	},
	profileUpdate: {
		name: 'Profile updation success',
		message: 'Profile updated',
		code: HttpStatus.StatusCodes.OK
	},

	dataFound: {
		name: 'Data found',
		message: 'Data fetched',
		code: HttpStatus.StatusCodes.OK
	},

	noContent: {
		name: 'Data not found',
		message: 'Data not found',
		code: HttpStatus.StatusCodes.OK
	},

	dataSaved: {
		message: 'Data saved successfully',
		code: HttpStatus.StatusCodes.OK
	},
	querySaved: {
		message: 'Your query has been successfully saved.',
		code: HttpStatus.StatusCodes.OK
	},
	cartSaved: {
		message: 'Item added to cart',
		code: HttpStatus.StatusCodes.OK
	},
	dataNotSaved: {
		message: 'Failed to save data in DB.',
		code: HttpStatus.StatusCodes.OK
	},

	fileUploaded: {
		message: 'File uploaded successfully',
		code: HttpStatus.StatusCodes.OK
	},

	dataDeleted: {
		message: 'Data deleted successfully',
		code: HttpStatus.StatusCodes.OK
	},

	cartItemDelete: {
		message: 'Item deleted from cart.',
		code: HttpStatus.StatusCodes.OK
	},

	dataFetchingError: {
		name: 'Error while data fetchinh',
		message: 'Internal server error',
		code: HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR
	},

	dataSavingError: {
		name: 'Error while saving data',
		message: 'Internal server error',
		code: HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR
	},

	dataDeletionError: {
		name: 'Error while deleting data',
		message: 'Internal server error',
		code: HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR
	},
	infoSaved: {
		name: 'Info saved',
		message: 'Info saved',
		code: HttpStatus.StatusCodes.OK
	},

	internalServerError: {
		name: 'Internal server error',
		message: 'Internal server error',
		code: HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR
	},

	dataNotFound: {
		name: 'Data not found',
		message: 'Data not found',
		code: HttpStatus.StatusCodes.NOT_FOUND
	},
	badRequest: {
		name: 'Bad Request',
		message: 'Bad Request',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},
	validationError: {
		name: 'Validation Error',
		message: 'Request Body Validation failed.',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},
	otpSent: {
		name: 'OtpSent',
		message: 'Otp sent',
		code: HttpStatus.StatusCodes.OK
	},
	otpValidateLogin: {
		name: 'otpValidateLogin',
		message: 'Otp Validate Successfully',
		code: HttpStatus.StatusCodes.OK
	},

	alreadySaved: {
		message: "Already Saved!",
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},
	unSaved: {
		message: " Unsaved successfully",
		code: HttpStatus.StatusCodes.OK
	},
	disLiked: {
		message: " Disliked successfully",
		code: HttpStatus.StatusCodes.OK
	},
	msgOk: {
		message: "ok",
		code: HttpStatus.StatusCodes.OK
	},
	orderInitiated: {
		message: "Order Created Successfully",
		code: HttpStatus.StatusCodes.OK
	},
	orderPlaced: {
		message: "Order Placed Successfully",
		code: HttpStatus.StatusCodes.OK
	},
	couponNotFound: {
		name: 'Coupon is not available',
		message: 'Coupon is not available',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},
	termsNotAccepted: {
		name: 'Terms & Condition not accepted.',
		message: 'Please accept terms & condition before registering.',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},
	planNotPurchased: {
		name: 'Please purchase an appropiate plan.',
		message: 'Please puchase an appropiate plan to use this feature.',
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},
	featureNotInPlan: {
		name: "This feature not exist's in your current plan.",
		message: "This feature not exist's in your current plan. Please upgrade your plan to use it",
		code: HttpStatus.StatusCodes.BAD_REQUEST
	},

}
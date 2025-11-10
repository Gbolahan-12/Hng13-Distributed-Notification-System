export const success = (data: any, message = "Success") => ({ success: true, message, data });
export const failure = (error: any, message = "Error") => ({ success: false, message, error });
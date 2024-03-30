const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    // options for cookie
    const options = {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'None',
        secure: true,
    };

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
        token,
    })
}
export default sendToken;
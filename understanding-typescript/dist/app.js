"use strict";
alert("Hello");
function generateErro(message, code) {
    throw { message: message, errorCode: code };
}
generateErro("An Error Occured!", 504);
//# sourceMappingURL=app.js.map
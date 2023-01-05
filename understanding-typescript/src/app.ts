alert("Hello");

function generateErro(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateErro("An Error Occured!", 504);

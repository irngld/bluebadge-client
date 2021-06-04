const verifyPassword = (pwd) => {

    let n = 1;
    // let constructedRegEx = "^(?=(?:.*[0-9]){" + n + ",})(?=(?:.*[a-z]){" + n + ",})(?=(?:.*[A-Z]){" + n + ",})(?=(?:.*[[!@#$%^&*()_+]){" + n + ",}).+$";
    let constructedRegEx = "^(?=(?:.*[a-z]){" + n + ",})(?=(?:.*[A-Z]){" + n + ",})((?=(?:.*[[!@#$%^&*()_+]){" + n + ",})|(?=(?:.*[0-9]){" + n + ",})).+$";
    let PasswordRegEx = new RegExp(constructedRegEx, 'm');
    
    // console.log(PasswordRegEx.test('@Al1#a2B'));
    // console.log(PasswordRegEx.test('@Al1#a2'));
    // console.log(PasswordRegEx.test('pAhjhklai!'));

    return PasswordRegEx.test(pwd);
}

export { verifyPassword };
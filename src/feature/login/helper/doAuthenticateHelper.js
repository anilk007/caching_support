const doAuthenticateHelper = (username, password) => {

    let isAthenticated = false;


    if (username === "quick" && password === "quickpass") {
        isAthenticated = true;
    }

    return isAthenticated;

}
export default doAuthenticateHelper


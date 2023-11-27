import axios from 'axios';

const connectAPIHelper = (URL, apiMethod, reqBody) => {

    return new Promise(function (resolve, reject) {

        console.log("connectAPIHelper reqBody : ", reqBody);

        axios({
            "method": apiMethod,
            "url": URL,
            data: JSON.stringify(reqBody),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => {
                console.log("response :");
                console.log(response);

                console.log("response.data :");
                console.log(response.data);
                resolve(response.data);
            })
            .catch((error) => {
                console.log("error :")
                console.log(error)
                reject(error);
            })

    });//promise


}

export default connectAPIHelper;
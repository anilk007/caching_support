import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import connectAPIHelper from './../../../common/api_call/connectAPIHelper';

const ViewCourse = (props) => {

    const { id } = useParams();
    const [responseData, setResponseData] = useState(null);

    console.log("id ");
    console.log(id);

    const fetchCourse = React.useCallback(() => {

        let URL = "http://localhost:3004/courses/" + id;
        const apiMethod = "get"

        let reqBody = null;

        connectAPIHelper(URL, apiMethod, reqBody).then(function (apiResponse) {
            console.log("courselist apiResponse -> ", apiResponse);
            setResponseData(apiResponse);
        })

    }, [id])

    //======================
    useEffect(() => {
        fetchCourse();
    }, [fetchCourse])









    return (<>


        <div className="row mt-4 p-2 ">

            {responseData &&


                <>
                    <div> {responseData.id} </div>
                    <div> {responseData.title} </div>
                    <div> {responseData.slug} </div>
                    <div> {responseData.authorId} </div>
                    <div> {responseData.category} </div>
                </>

            }




        </div>

    </>);
}


export default ViewCourse;
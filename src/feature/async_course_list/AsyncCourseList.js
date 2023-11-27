import React, {useContext, useState} from "react";
import { Link } from 'react-router-dom';

import connectAPIHelper from './../../common/api_call/connectAPIHelper';



import { useLocation } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthContext from './../../common/context/auth-context';

const AsyncCourseList = () => {

    let [responseData, setResponseData] = React.useState([]);
    let [message, setMessage] = useState(null);
    let [isLoading, setIsLoading] = useState(false);

    const search = useLocation().search;

    let authCtx = useContext(AuthContext);
    console.log("authCtx.isLoggedIn");
    console.log(authCtx.isLoggedIn);

    const notifyAddEditCourse = React.useCallback(() => {
        console.log("courselist notifyAddEditCourse  message -> ", message);
        toast(message);

    }, [message])

    const fetchCourses = async () => {
        setIsLoading(true);
        let URL = "http://localhost:3004/courses";
        const apiMethod = "get";
        const reqBody = null;
        let apiResponse = await connectAPIHelper(URL, apiMethod, reqBody);
        setResponseData(apiResponse);
        setIsLoading(false);
        
    }

      //============================

      const readParams = React.useCallback(() => {

        const paramMessage = new URLSearchParams(search).get("message");
        console.log("paramMessage", paramMessage);

        if (paramMessage !== null) {
            setMessage(paramMessage);
        }

    }, [search])


    React.useEffect(() => {
        readParams();
        fetchCourses();

        if (message !== null) {
            notifyAddEditCourse();
        }

    }, [message, notifyAddEditCourse, readParams])

    //=================================================


  


    return (<>

        <div className="mb-5">Course List</div>

        <div>
        <ToastContainer />
        </div>


        {responseData.length}


        {isLoading ? <div>Loading...</div> :null}

        <table className="table">

            <thead>

                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Slug</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>

            </thead>
            <tbody>

                {responseData && responseData.map((course) => {
                    return (


                        <tr key={course.id} className='list'>



                            <td><Link to={`/view_course/${course.id}`}>{course.id}</Link></td>
                            <td><Link to={`/view_course/${course.id}`}>{course.title} </Link> </td>
                            <td><Link to={`/view_course/${course.id}`}>{course.slug} </Link> </td>
                            <td>{course.authorId} </td>
                            <td>{course.category} </td>
                         


                        </tr>

                    );
                }
                )

                }
            </tbody>
        </table>
    </>);
}


export default AsyncCourseList;
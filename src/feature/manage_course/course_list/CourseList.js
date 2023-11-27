import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';

import connectAPIHelper from './../../../common/api_call/connectAPIHelper';

import { useNavigate } from 'react-router-dom'

import { useLocation } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthContext from './../../../common/context/auth-context';

const CourseList = (props) => {

    let [responseData, setResponseData] = React.useState([]);
    let [message, setMessage] = useState(null);
    let [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const search = useLocation().search;

    let authCtx = useContext(AuthContext);
    console.log("authCtx.isLoggedIn");
    console.log(authCtx.isLoggedIn);

    const notifyAddEditCourse = React.useCallback(() => {
        console.log("courselist notifyAddEditCourse  message -> ", message);
        toast(message);

    }, [message])

    const fetchCourses = () => {
        setIsLoading(true);
        let URL = "http://localhost:3004/courses";
        const apiMethod = "get";
        const reqBody = null;

        connectAPIHelper(URL, apiMethod, reqBody).then(function (apiResponse) {
            console.log("courselist apiResponse -> ", apiResponse);
            setResponseData(apiResponse);
            setIsLoading(false);
        })

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

    const editCourseFormHandler = (id, title, slug, authorID, category) => {
        console.log("editCourseFormHandler is called");

        navigate("/edit_course/" + id + "?title=" + title +
            "&slug=" + slug + "&authorID=" + authorID + "&category=" + category);

    }



    return (<>

        <div className="mb-5">Course List</div>

        <div>
            <ToastContainer />
        </div>


        {responseData.length}


        {isLoading ? <div>Loading...</div> : null}

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
                            <td>  <button className="btn btn-primary text-start"
                                type="button" onClick={() => editCourseFormHandler(course.id,
                                    course.title, course.slug, course.authorId, course.category)}>
                                Edit Course
                            </button>


                                <button className="btn btn-primary text-start"
                                    type="button" onClick={() => props.openCartArea(course.id,
                                        course.title, course.slug, course.authorId, course.category)}>
                                    Add to cart
                                </button>

                            </td>




                        </tr>

                    );
                }
                )

                }
            </tbody>
        </table>
    </>);
}


export default CourseList;
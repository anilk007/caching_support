import React, { useContext, useState, useEffect, useMemo } from "react";

import connectAPIHelper from "./../../../common/api_call/connectAPIHelper";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./../../../common/context/auth-context";

const CachingSupportCourseList = (props) => {
  const [responseData, setResponseData] = useState([]);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();
  const search = useLocation().search;

  let authCtx = useContext(AuthContext);
  console.log("authCtx.isLoggedIn");
  console.log(authCtx.isLoggedIn);

  const notifyAddEditCourse = React.useCallback(() => {
    console.log("courselist notifyAddEditCourse  message -> ", message);
    toast(message);
  }, [message]);

  const fetchCourses = () => {
    setIsLoading(true);
    let URL = "http://localhost:3004/courses";
    const apiMethod = "get";
    const reqBody = null;

    return connectAPIHelper(URL, apiMethod, reqBody).then(function (apiResponse) {
      console.log("courselist apiResponse -> ", apiResponse);
      setResponseData(apiResponse);
      setIsLoading(false);
    });
  };

  // Use useMemo to cache the result of fetchCourses
  const cachedCourses = useMemo(() => {
    return fetchCourses();
  }, [refresh]);

  const handleRefresh = () => {
    // Trigger a refresh by toggling the refresh state
    setRefresh((prevRefresh) => !prevRefresh);
  };

  const readParams = React.useCallback(() => {
    const paramMessage = new URLSearchParams(search).get("message");
    console.log("paramMessage", paramMessage);

    if (paramMessage !== null) {
      setMessage(paramMessage);
    }
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      readParams();
      // Fetch courses only if there's no cached data or if the user clicks "Refresh Data"
      if (!responseData.length || refresh) {
        await cachedCourses;
        if (message !== null) {
          notifyAddEditCourse();
        }
      }
    };

    fetchData();
  }, [cachedCourses, message, notifyAddEditCourse, readParams, refresh, responseData]);

  const editCourseFormHandler = (id, title, slug, authorID, category) => {
    console.log("editCourseFormHandler is called");

    navigate(
      "/edit_course/" +
        id +
        "?title=" +
        title +
        "&slug=" +
        slug +
        "&authorID=" +
        authorID +
        "&category=" +
        category
    );
  };

  return (
    <>
      <div className="mb-5">Caching Support Course List </div>
      <div>
        <button onClick={handleRefresh}>Refresh Data</button>
      </div>
      <div>
        <ToastContainer />
      </div>

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
          {responseData &&
            responseData.map((course) => {
              return (
                <tr key={course.id} className="list">
                  {/* ... (rest of the code remains unchanged) */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default CachingSupportCourseList;


import CourseList from "./course_list/CourseList";

import { useNavigate } from 'react-router-dom'

// import ModalOverlay from './../../common/ui/modal/ModalOverlay'

import OpenCartArea from "../manage_cart/open_cart_area/OpenCartArea";


import { useState } from "react";

const ManageCourse = () => {

    const navigate = useNavigate();

    const [openCart, setOpenCart ] = useState(false);

    const [courseData, setCourseData ] = useState({});

    const openCartArea = (id,
        title, slug, authorId, category) => {
        setOpenCart(true);

        let courseData = {
            id : id,
            title : title,
            slug : slug,
            authorId : authorId,
            category : category
        }
    
        setCourseData(courseData);
    
    }

    const addCourseHandler = () => {
        console.log("addCourseHandler is called");
        navigate("/add_course");
    }

    return (
        <>
            <button className="btn btn-primary text-start"
                type="button" onClick={() => addCourseHandler()}>
                Add Course
            </button>

            {
                (openCart ?
                    <OpenCartArea courseData={courseData}>
                    </OpenCartArea>
                    : null
                )
            }

            <CourseList openCartArea={openCartArea}/>
        </>
    );


}

export default ManageCourse;
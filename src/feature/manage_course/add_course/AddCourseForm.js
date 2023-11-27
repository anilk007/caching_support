import React, { useState } from "react";

import connectAPIHelper from './../../../common/api_call/connectAPIHelper';

import {useNavigate } from 'react-router-dom'

import './AddCourseForm.css';


const AddCourseForm = (props) => {

    const [title, setTitle] = useState(null);
    const [slug, setSlug] = useState(null);
    const [authorID, setAuthorID] = useState(null);
    const [category, setCategory] = useState(null);

    const navigate = useNavigate();

    const handleSaveCourse = (e) => {
        e.preventDefault();
        console.log("handleSaveCourse is called e -> ", e);


        console.log("handleSaveCourse title -> ", title);
        console.log("handleSaveCourse slug -> ", slug);
        console.log("handleSaveCourse authorID -> ", authorID);
        console.log("handleSaveCourse category -> ", category);

        let URL = "http://localhost:3004/courses";
        const apiMethod = "post";
        const reqBody = {
            title: title,
            slug: slug,
            authorId: parseInt(authorID),
            category: category
        };

        connectAPIHelper(URL, apiMethod, reqBody).then(function (apiResponse) {
            console.log("courselist apiResponse -> ", apiResponse);
            // setResponseData(apiResponse);

            const message = "Course is added successfully"
            navigate("/courses?message=" + message); 

            

        }).catch((err) => {
            console.log(err);
        });



    }



    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSlugChange = (e) => {
        setSlug(e.target.value);
    }

    const handleAuthorIDChange = (e) => {
        setAuthorID(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }







    return (<>


        <div>

            <form className="border border-primary p-3 rounded border-2 w-50 "
                onSubmit={handleSaveCourse}  >
                <div className="mb-5">Add Course</div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="title">Title
                        <span className="p-1 text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" name="title"
                        value={title} placeholder="Enter Title"
                        onChange={handleTitleChange} />
                </div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="slug">Slug
                        <span className="p-1 text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" name="slug"
                        value={slug} placeholder="Enter Slug"
                        onChange={handleSlugChange} />
                </div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="authorID">authorID
                        <span className="p-1 text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" name="authorID"
                        value={authorID} placeholder="Enter authorID"
                        onChange={handleAuthorIDChange} />
                </div>

                <div className="form-group mt-2">
                    <label className="form-label" htmlFor="category">category
                        <span className="p-1 text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" name="category"
                        value={category} placeholder="Enter category"
                        onChange={handleCategoryChange} />
                </div>


                <div className="form-group mt-4 float-end">
                    <button className="btn btn-primary" type="submit"

                    >Submit</button>
                </div>
            </form>
        </div>

        




    </>);
}


export default AddCourseForm;
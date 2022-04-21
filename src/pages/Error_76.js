import React from "react";
import { Link } from "react-router-dom";

const Error_76 = () => {
    return (
        <section className='error-page section'>
            <div className='error-container'>
                <h1>Oops! Its a dead end</h1>
                <Link to href='/' className='btn btn-primary'>
                    Back Home
                </Link>
            </div>
        </section>
    );
};

export default Error_76;

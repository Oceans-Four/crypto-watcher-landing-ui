import React from 'react';
import {Link} from 'react-router-dom';

import PageLayout from '../layouts/PageLayout';
import BlogSidebar from '../components/Blog/BlogSidebar';
//images
import blog1 from './../assets/images/blog/pic1.jpg';
import blog2 from './../assets/images/blog/pic2.jpg';
import blog3 from './../assets/images/blog/pic3.jpg';
import blog4 from './../assets/images/blog/pic4.jpg';
import avatar1 from './../assets/images/avatar/avatar1.jpg';
import avatar2 from './../assets/images/avatar/avatar2.jpg';
import avatar3 from './../assets/images/avatar/avatar3.jpg';

const blocardList = [
    {image: blog1, image2: avatar1, title:'Five Things To Avoid In Cryptocurrency'},
    {image: blog2, image2: avatar2, title:'Things That Make You Love Cryptocurrency'},
    {image: blog3, image2: avatar3, title:'Why You Should Not Go To crypto currency.'},
    {image: blog4, image2: avatar1, title:'14 Days To A Better Crypto Currency.'},
];

function BlogList(){
    return(
        <>
            <div className="page-content">
                <PageLayout pageTitle="Blog List Sidebar" />
                <section className="content-inner bg-white">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-8 col-lg-8">
                                <div className="row">
                                    {blocardList.map((item, index)=>(
                                        <div className="col-lg-12 m-b40" key={index}>
                                            <div className="dz-card style-1 blog-half">
                                                <div className="dz-media">
                                                    <Link to={"/blog-details"}><img src={item.image} alt="" /></Link>
                                                    <ul className="dz-badge-list">
                                                        <li><Link to={"#"} className="dz-badge">14 Fan 2022</Link></li>
                                                    </ul>
                                                    <Link to={"/blog-details"} className="btn btn-secondary">Read More</Link>
                                                </div>
                                                <div className="dz-info">
                                                    <div className="dz-meta">
                                                        <ul>
                                                            <li className="post-author">
                                                                <Link to={"#"}>
                                                                    <img src={item.image2} alt="" className="me-2"/>
                                                                    <span>By Noare</span>
                                                                </Link>
                                                            </li>
                                                            <li className="post-date"><Link to={"#"}>12 May 2022</Link></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="dz-title"><Link to={"/blog-details"}>{item.title}</Link></h4>
                                                    <p className="m-b0">Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="col-xl-12 col-lg-12 m-b30 m-t30 m-lg-t10">
                                        <nav aria-label="Blog Pagination">
                                            <ul className="pagination style-1 text-center">
                                                <li className="page-item"><Link to={"#"} className="page-link prev"><i className="fas fa-chevron-left"></i></Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link active">1</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link">2</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
                                                <li className="page-item"><Link to={"#"} className="page-link next"><i className="fas fa-chevron-right"></i></Link></li>
                                            </ul>
                                        </nav>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default BlogList;
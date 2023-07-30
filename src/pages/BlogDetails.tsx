import React from 'react';
import {Link} from 'react-router-dom'

import PageLayout from '../layouts/PageLayout';
import BlogSidebar from '../components/Blog/BlogSidebar';

//images
import blog from './../assets/images/blog/blog-detaills-1.jpg';
import avat3 from './../assets/images/avatar/avatar3.jpg';
import avat2 from './../assets/images/avatar/avatar2.jpg';
import avat1 from './../assets/images/avatar/avatar1.jpg';
import pic4 from './../assets/images/blog/pic4.jpg';
import pic5 from './../assets/images/blog/pic5.jpg';

const relatedBlog = [
    { image1: pic4, image2: avat2, title:'Why You Should Not Go To Cryptocurrency.'},
    { image1: pic5, image2: avat3, title:'Five Easy Rules Of bitcoin.'},
];

const CommentBlog = ({image, title}) =>{
    return(
        <>
            <div className="comment-body">
                <div className="comment-author vcard"> 
                    <img className="avatar photo" src={image} alt="" /> 
                </div>
                <div className="comment-info">
                    <div className="title">
                        <cite className="fn">{title}</cite>
                        <span>07 March, 2022</span>
                    </div>
                    <p>Integer consectetur diam vitae imperdiet iaculis. In faucibus, sem sit amet tincidunt egestas, magna ligula interdum leo.</p>
                    <div className="reply"> 
                        <Link to={"#"} className="comment-reply-link"><span><i className="fa-solid fa-share"></i>REPLY</span></Link> 
                    </div>
                </div>
            </div>
        </>
    )
}

function BlogDetails(){
    return(
        <>
            <div className="page-content">
                <PageLayout desc={false} pageTitle="Blog Details " />
                <section className="content-inner" style={{background: "white"}}>
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-8 col-lg-8">
                                <div className="blog-single dz-card sidebar">
                                    <div className="dz-media dz-media-rounded">
                                        <img src={blog} alt="" />
                                    </div>
                                    <div className="dz-info m-b30">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-author">
                                                    <Link to={"#"}>
                                                        <img src={avat3} alt="" /> 
                                                        <span>By Jone Doe</span>
                                                    </Link>
                                                </li>
                                                <li className="post-date"><Link to={"#"}> 17 May 2022</Link></li>
                                                <li className="post-comment"><Link to={"#"}>3 comment</Link></li>
                                            </ul>
                                        </div>
                                        <h3 className="dz-title">15 Advantages Of Cryptocurrency And How You Can Make Full Use Of It.</h3>
                                        <div className="dz-post-text">
                                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy</p>
                                            <p>For the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into.</p>
                                            <blockquote className="wp-block-quote">
                                                <p>“ A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm. ”.</p>
                                                <cite> William Son </cite>
                                            </blockquote>
                                            <p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>
                                            <ul className="m-b30">
                                                <li>A wonderful serenity has taken possession.</li>
                                                <li>Of my entire soul, like these sweet mornings of spring which.</li>
                                                <li>I enjoy with my whole heart.</li>
                                                <li>This spot, which was created For the bliss of souls like mine.</li>
                                            </ul>
                                            <p>The inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty.</p>
                                        </div>
                                        <div className="dz-share-post">
                                            <div className="post-tags">
                                            <h6 className="m-b0 m-r10 d-inline">Tags:</h6>
                                                <Link to={"#"}><span>Corporate</span></Link>
                                                <Link to={"#"}><span>Blog</span></Link>
                                                <Link to={"#"}><span>Marketing</span></Link>
                                            </div>
                                            <div className="dz-social-icon dark">
                                                <ul>
                                                    <li><a target="_blank" className="fab fa-facebook-f" href="https://www.facebook.com/"></a></li>
                                                    <li><a target="_blank" className="fab fa-instagram" href="https://www.instagram.com/"></a></li>
                                                    <li><a target="_blank" className="fab fa-twitter" href="https://twitter.com/"></a></li>
                                                    <li><a target="_blank" className="fab fa-youtube" href="https://www.youtube.com/"></a></li>
                                                </ul>
                                            </div>									
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-title">
                                    <h4 className="title">Related Blog</h4>
                                </div>
                                <div className="row m-b30 m-sm-b10">
                                    {relatedBlog.map((item, ind)=>(
                                        <div className="col-md-6 m-b30" key={ind}>
                                            <div className="dz-card style-1  blog-lg overlay-shine ">
                                                <div className="dz-media ">
                                                    <Link to={"/blog-details"}><img src={item.image1} alt="" /></Link>
                                                </div>
                                                <div className="dz-info">
                                                    <div className="dz-meta">
                                                        <ul>
                                                            <li className="post-author">
                                                                <Link to={"#"}>
                                                                    <img src={item.image2} alt="" />
                                                                    <span>By Jemmy</span>
                                                                </Link>
                                                            </li>
                                                            <li className="post-date"><Link to={"#"}> 24 May 2022</Link></li>
                                                        </ul>
                                                    </div>
                                                    <h4 className="dz-title"><Link to={"/blog-details"}>{item.title}</Link></h4>
                                                    <p>A wonderful serenity has taken of my entire soul, like these.</p>
                                                    <Link to={"/blog-details"} className="btn btn-primary">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}                                   
                                </div>
                                <div className="clear" id="comment-list">
                                    <div className="comments-area style-1 clearfix" id="comments">
                                        <div className="widget-title">
                                            <h4 className="title">Comments</h4>
                                        </div>
                                        <div className="clearfix">
                                            <ol className="comment-list">
                                                <li className="comment">
                                                    <CommentBlog image={avat1} title="Lillian Walsh"/>
                                                    <ol className="children">
                                                        <li className="comment">
                                                            <CommentBlog image={avat2} title="Walsh Nehan"/>
                                                        </li>
                                                    </ol>
                                                </li>
                                                <li className="comment">
                                                    <CommentBlog image={avat3} title="Boni Joye"/>
                                                </li>
                                            </ol>                                            
                                        </div>
                                        
                                        <div className="widget-title">
                                            <h4 className="title">Leave A Reply</h4>
                                        </div>
                                        <div className="clearfix">
                                            
                                            <div className="default-form comment-respond style-1" id="respond">
                                                <form className="comment-form" id="commentform" method="post">
                                                    <p className="">
                                                        <label>Name <span className="required">*</span></label>
                                                        <input type="text" name="FirstName" placeholder="First Name" id="FirstName" className="form-control" />
                                                    </p>
                                                    <p className="">
                                                        <label>Email <span className="required">*</span></label>
                                                        <input type="text" placeholder="Email" name="email" id="email" className="form-control" />
                                                    </p>
                                                    <p className="comment-form-comment">
                                                        <label>Message</label>
                                                        <textarea rows="8" name="Message" placeholder="Message" id="Message" className="form-control"></textarea>
                                                    </p>
                                                    <p className="form-submit">
                                                        <button type="submit" className="btn btn-primary btn-skew btn-icon" id="submit"><span>Submit Now</span></button>
                                                    </p>
                                                </form>
                                            </div>
                                            
                                        </div>
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
export default BlogDetails;
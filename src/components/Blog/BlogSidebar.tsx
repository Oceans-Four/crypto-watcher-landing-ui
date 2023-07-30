import React from 'react';
import {Link} from 'react-router-dom';

import pic1 from './../../assets/images/blog/small/pic1.jpg';
import pic2 from './../../assets/images/blog/small/pic2.jpg';
import pic3 from './../../assets/images/blog/small/pic3.jpg';


const categories = [
    {title:'Business(10)'}, {title:'Case Study (13)'},
    {title:'Insights (9)'}, {title:'World (3)'},
    {title:'Tax Solutions (12)'}, {title:'Creative (6)'}
];
const postData = [
    {image: pic1, title:'Things That Make You Love Cryptocurrency', date:'01 Jan 2023'},
    {image: pic2, title:'7 Ingenious Ways You Can Do With Cryptocurrency.', date:'10 Jan 2023'},
    {image: pic3, title:'14 Days To A Better Crypto Currency.', date:'15 Jan 2023'},
];
const tagData = [
    {title:'Business'},{title:'Corporate'},
    {title:'Blog'},{title:'Marketing'},
    {title:'Creative'},{title:'Web'},
    {title:'Workers'},{title:'Modern'},
];

const BlogSidebar = () =>{
    return(
        <>
            <aside className="side-bar sticky-top right">
                <div className="widget">
                    <div className="widget-title">
                        <h4 className="title">Search</h4>
                    </div>
                    <div className="search-bx">
                        <form role="search" method="post">
                            <div className="input-group">
                                <div className="input-skew">
                                    <input name="text" className="form-control" placeholder="Search.." type="text" />
                                </div>
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-primary sharp radius-no"><i className="fa-solid fa-magnifying-glass scale3"></i></button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="widget widget_categories">
                    <div className="widget-title">
                        <h4 className="title">Categories</h4>
                    </div>
                    <ul>
                        {categories.map((data, ind)=>(
                            <li className="cat-item" key={ind}>
                                <Link to={"#"}>{data.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="widget recent-posts-entry">
                    <div className="widget-title">
                        <h4 className="title">Recent Post</h4>
                    </div>
                    <div className="widget-post-bx">
                        {postData.map((item, ind)=>(
                            <div className="widget-post clearfix" key={ind}>
                                <div className="dz-media">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="dz-info">
                                    <h6 className="title"><Link to={"/blog-details"}>{item.title}</Link></h6>
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"><Link to={"#"}> {item.date}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>                                    
                        ))}
                    </div>
                </div>

                <div className="widget widget_tag_cloud">
                    <div className="widget-title">
                        <h4 className="title">Popular Tags</h4>
                    </div>
                    <div className="tagcloud">
                        {tagData.map((data, index)=>(
                            <Link to={"#"} key={index}>{data.title}</Link>
                        ))}
                        
                    </div>
                </div>
            </aside>            
        </>
    )
}
export default BlogSidebar;
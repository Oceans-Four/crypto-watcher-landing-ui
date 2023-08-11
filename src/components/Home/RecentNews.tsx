import React from 'react';
import {Link} from 'react-router-dom';
//Images
import blog1 from './../../assets/images/blog/pic1.jpg';
import blog2 from './../../assets/images/blog/pic2.jpg';
import avatar1 from './../../assets/images/avatar/avatar1.jpg';
import avatar2 from './../../assets/images/avatar/avatar2.jpg';

const updatesBlog = [
    {image1: blog1, image2: avatar1, title:'Adding a landing page using React.'},
    // {image1: blog2, image2: avatar2 , title:'Things That Make You Love Cryptocurrency.'},
    
];

const RecentNews = () => {
    return(
        <>
            {updatesBlog.map((data, ind)=>(
                <div className="dz-card style-1 blog-half m-b30" key={ind}>
                    <div className="dz-media">
                        <Link to={"https://github.com/Oceans-Four/crypto-watcher-landing-ui"}><img src={data.image1} alt="" /></Link>
                        <ul className="dz-badge-list">
                            <li><Link to={"#"} className="dz-badge">14 Fan 2022</Link></li>
                        </ul>
                        <Link to={"https://github.com/Oceans-Four/crypto-watcher-landing-ui"} className="btn btn-secondary">Visit GitHub</Link>
                    </div>
                    <div className="dz-info">
                        <div className="dz-meta">
                            <ul>
                                <li className="post-author">
                                    <Link to={"#"}>
                                        <img src={data.image2} alt=""  className="me-2"/>
                                        <span>By radixpoint</span>
                                    </Link>
                                </li>
                                <li className="post-date"><Link to={"#"}> 5 Aug 2023</Link></li>
                            </ul>
                        </div>
                        <h4 className="dz-title"><Link to={"https://github.com/Oceans-Four/crypto-watcher-landing-ui"}>{data.title}</Link></h4>
                        <p className="m-b0">A new version for Crypto Watcher is in the making with the use of ReactJS + Typescript over Angular to speed up development and focus on the back-end.</p>
                    </div>
                </div>
            ))}
        </>
    )
}
export default RecentNews;
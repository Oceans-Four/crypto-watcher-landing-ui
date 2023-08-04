import React from 'react';
import { Link } from 'react-router-dom';

//components
import BannerCard from '../components/Home/BannerCard';
import OneStop from '../components/Home/OneStop';
import RecentNews from '../components/Home/RecentNews';

//images
import baner1 from './../assets/images/home-banner/img1.png';
import baner2 from './../assets/images/home-banner/img2.png';
import Shape1 from './../assets/images/home-banner/shape1.png';
import Shape3 from './../assets/images/home-banner/shape3.png';
import wallet from './../assets/images/icons/wallet.svg';
import friend from './../assets/images/icons/friend.svg';

import bloglg from './../assets/images/blog/blog-ig.png';
import avatar3 from './../assets/images/avatar/avatar3.jpg';
// import FillOutForm from '../components/Home/FillOutForm';


const trustBlog = [
	{ image: wallet, title: 'Buy Cryptocurrency with cash' },
	{ image: friend, title: 'Cryptocurrency Consultancy' },
];

const Home = () => {
	return (
		<>
			<div className="page-content">
				<div className="main-bnr style-1">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-12 text-center">
								<h1 className="" >A Dashboard for tracking <br />Cryptocurrencies</h1>
								<p className="text text-primary " > Track your holdings over time with visual tools, <br /> add watchlists and gain a competitive edge!</p>
								<Link to={"/about-us"} className="btn space-lg btn-gradient btn-shadow btn-primary " >Get Started</Link>
								<ul className="image-before">
									<li className="left-img"><img src={baner1} alt="" /></li>
									<li className="right-img"><img src={baner2} alt="" /></li>
								</ul>
							</div>
						</div>
					</div>
					<img className="bg-shape1" src={Shape1} alt="" />
					<img className="bg-shape2" src={Shape1} alt="" />
					<img className="bg-shape3" src={Shape3} alt="" />
					<img className="bg-shape4" src={Shape3} alt="" />
				</div>
				<div className="clearfix bg-primary-light">
					<div className="container">
						<div className="currancy-wrapper">
							<div className="row justify-content-center">
								<BannerCard />
							</div>
						</div>
					</div>
				</div>
				<section className="clearfix section-wrapper1 bg-primary-light">
					<div className="container">
						<div className="content-inner-1">
							<div className="section-head text-center">
								<h2 className="title">Why Use Us?</h2>
								<p>Convenience at your fingertips for tracking Cryptocurrency prices, and many other features available with a free account.</p>
							</div>
							<div className="row">
								{trustBlog.map((data, ind) => (
									<div className="col-lg-6 m-b30" key={ind}>
										<div className="icon-bx-wrapper style-2">
											<div className="icon-media">
												<img src={data.image} alt="" />
											</div>
											<div className="icon-content">
												<h4 className="title">{data.title}</h4>
												<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
												<Link className="btn btn-primary btn-gradient btn-shadow" to={"/about-us"}>Read More</Link>
											</div>
										</div>
									</div>
								))}

							</div>
						</div>
					</div>

					{/* <FillOutForm /> */}

					<img className="bg-shape1" src={Shape1} alt="" />
				</section>
				<section className="content-inner bg-light icon-section section-wrapper2">
					<div className="container">
						<div className="section-head text-center">
							<h2 className="title">One-stop solution to monitor and track <span className="text-primary"> Cryptocurrencies </span> - for free </h2>
						</div>
						<div className="row sp60">
							<OneStop />
						</div>
					</div>
					<img className="bg-shape1" src={Shape1} alt="" />
				</section>
			</div>
		</>
	)
}
export default Home;
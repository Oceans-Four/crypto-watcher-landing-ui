import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollToTop from '../layouts/ScrollToTop';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import Pricing from './Pricing.tsx';
import BlogList from './BlogList';
import BlogGrid from './BlogGrid';
import BlogDetails from './BlogDetails';
import ContactUs from './ContactUs';

function Index() {
	return (
		<BrowserRouter basename="/">
			<div className="page-wraper">
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about-us' element={<AboutUs />} />
					<Route path='/pricing' element={<Pricing />} />
					<Route path='/blog-list' element={<BlogList />} />
					<Route path='/blog-grid' element={<BlogGrid />} />
					<Route path='/blog-details' element={<BlogDetails />} />
					<Route path='/contact-us' element={<ContactUs />} />
				</Routes>
				<Footer />
				<ScrollToTop />
			</div>
		</BrowserRouter>
	)
}
export default Index;
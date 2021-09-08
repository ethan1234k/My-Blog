import React from 'react'
import './SingleArticleScreen.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BlogArticleItem from '../../components/BlogArticleItem/BlogArticleItem';

const SingleArticleScreen = () => {
    return (
        <div>
            <Header />
            <BlogArticleItem />
            <Footer />
        </div>
    )
}

export default SingleArticleScreen

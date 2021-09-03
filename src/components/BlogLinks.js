import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import HeaderText from '../components/HeaderText'
import Container from '../components/Container'


const Image = styled.img`
margin: auto;
`
const BlogTop = styled.div`
padding-bottom: 2em;
`


const PostList = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-auto-rows: minmax(10px, auto);
grid-gap: 2em;
a {
    text-decoration: none;
    color: ${props => props.theme.colors.chartreuse};
}
div {
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
    padding: 1em;
    border-radius: .2em;
    &:hover {
        border: .2em solid ${props => props.theme.colors.chartreuse};
        transform: scale(1.02);
        transition: all .1s ease-in;
    }
}

.linkList {
    .bold {
        font-weight: 700;
        color: ${props => props.theme.colors.chartreuse};
    }
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    p {
        justify-self: start;
        margin: 0;
    }
    .imageContainer {
        width: 100%;
        height: 10em;
        position-self: end;
        display: grid;
        overflow: hidden;
        img {
            position-self: justify;
            height: 10em;
            width: auto;
        }
    }
}
@media (min-width: ${props => props.theme.responsive.small}) {
    text-align: center;
    grid-template-columns: 1fr 1fr;
    .linkList {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 5em 12em;
        align-content: center;
        justify-content: center;
    }


}
@media (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr 1fr 1fr;
    .linkList {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 7em 10em;
        align-content: center;
        justify-content: center;
    }
}

`

const BlogLinks = props => {
    
    return (
        <Container>
        <HeaderText><h1>Blog Posts</h1></HeaderText>
        <BlogTop>
        <p>
        Howdy! Below is a collection of my blog posts, all {props.totalCount} of them! They're presented in reverse chronological order, with the most recent posts at the top.
        </p> 
        </BlogTop>
        <PostList>
        {props.blogPost.map(({node}) => (
            <div key={node.slug}>
            <Link 
            className="linkList" 
            to={`${node.slug}/`}>
            <span>
            <p>{node.publishDate}</p>
            <p className='bold'>{node.title}</p>
            </span>
            <span className="imageContainer">
            <Image src={node.heroImage.file.url}/>
            </span>
            
            </Link>
            </div>
            ))}
            </PostList>  
            
            </Container>
            )
        }
        
        export default BlogLinks
        
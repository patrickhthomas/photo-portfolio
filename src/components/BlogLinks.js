import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import HeaderText from '../components/HeaderText'


const Image = styled.img`
width: 80%;
`

const Wrapper = styled.div`
margin: -2em 0 0 0;
padding: 0 1.5em 2em;
text-align: left;
.blogTop {
    padding-bottom: 1em;
}
`
const PostList = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-auto-rows: minmax(10px, auto);
grid-gap: 2em;
a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
}
div {
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 0px 4px 0px rgba(30, 30, 42, .4);
    padding: 1em;
    border-radius: .2em;
    &:hover {
        border: .2em solid ${props => props.theme.colors.highlight};
        transform: scale(1.02);
        transition: all .1s ease-in;
    }
}

.linkList {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: .5em;
    p {
        justify-self: start;
        margin: 0;
    }
    
    img {
        position: absolute;
        width: 200%;
        margin: auto;
        bottom: 0%;
        justify-self: end;
    }
    .imageContainer {
        position: relative;
        width: 100%;
        height: 10em;
        overflow: hidden;
        border-radius: .5em;
        justify-self: end;
    }
}
@media (min-width: ${props => props.theme.responsive.small}) {
    text-align: center;
    grid-template-columns: 1fr 1fr;
    .linkList {
        display: flex;
        flex-flow: column nowrap;
        align-content: center;
        justify-content: center;
    }
    .imageContainer {
        width: 100%;
        
    }
}
@media (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr 1fr 1fr;
    .linkList {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
}

`

const BlogLinks = props => {
    
    return (
        <Wrapper>
        <HeaderText><h1>Blog Posts</h1></HeaderText>
        <div className="blogTop">
        <p>
        Howdy! Below is a collection of my blog posts, all {props.totalCount} of them! They're presented in reverse chronological order, with the most recent posts at the top.
        </p> 
        </div>
        <PostList>
        {props.blogPost.map(({node}) => (
            <div key={node.slug}>
            <Link 
            className="linkList" 
            to={`${node.slug}/`}>
            <span>
            <p>{node.publishDate}</p>
            <p>{node.title}</p>
            </span>
            <span class="imageContainer">
            <Image src={node.heroImage.file.url}/>
            </span>
            
            </Link>
            </div>
            ))}
            </PostList>  
            
            </Wrapper>
            )
        }
        
        export default BlogLinks
        
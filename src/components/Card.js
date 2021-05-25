import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness></MdBusiness>
          {company}
        </p>
        <p>
          <MdLocationOn></MdLocationOn>
          {location}
        </p>
        <a href={blog}>
          <MdLink></MdLink>
          {blog}
        </a>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: #fff;
  padding: 1.5rem 2rem;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  position: relative;
  &::before {
    content: "user";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: #fff;
    color: hsl(210, 22%, 49%);
    border-top-right-radius: 0.25rem;
    border-top-left-radius: var0.25rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: 0.1rem;
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      color: hsl(185, 62%, 45%);
      border: 1px solid hsl(185, 62%, 45%);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      transition: all 0.3s linear;
      cursor: pointer;
      &:hover {
        background: hsl(185, 62%, 45%);
        color: #fff;
      }
    }
  }
  .bio {
    color: hsl(209, 34%, 30%);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: hsl(185, 62%, 45%);
      }
      &:hover {
        color: hsl(185, 81%, 29%);
      }
    }
  }
`;
export default Card;

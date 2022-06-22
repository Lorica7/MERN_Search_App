import React from 'react';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import styled from 'styled-components';

function Landing () {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job Tracking App
          </h1>
          <p>
            Banh mi kitsch laborum cray shoreditch kale chips hammock you probably haven't heard of them. Enim brunch marfa chartreuse before they sold out, fixie offal gastropub paleo
            consectetur. Hexagon pug hot chicken deserunt prism wayfarers artisan dolor commodo.
            Id portland taxidermy velit four loko.
          </p>
          <button className="btn btn-hero">
            Login / Register
          </button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
}

const Wraper = styled.main`
nav{
  width: var(--fluid-width);
  width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
}
.page{
  min-height: clc(100vh - var(--nav-height));
  display: grid;
  align-items: center;
  margin-top: -3rem;
}
h1{
  font-weight: 700;
  span{
    color: var (--primary-600);
  }
}
p{
  color: var(--grey-500)
}
.main-img {
  display: none;
}
@media (min-width: 992px){
  .page{
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
}
`;

export default Landing;

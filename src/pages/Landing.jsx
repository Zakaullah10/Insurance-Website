import React from 'react';
import { Layout } from '../layout';
import "../App.css"
import { LandingHeader } from '../component/landing/LandingHeader';
import { LandingMiddle } from '../component/landing/LandingMiddle';

export const Landing = () => {
  return (
    <Layout>
      <div>
      <div className='w-3/4 h-full bg-fixed-landing'>
        <LandingHeader  />
        <LandingMiddle  />
      </div>
      </div>
    </Layout>
  );
};

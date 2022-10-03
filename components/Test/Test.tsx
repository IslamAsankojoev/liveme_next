import { GetServerSideComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { useComponentProps, ComponentRendering, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import axios from 'axios';
import React from 'react';

export const getServerSideProps: GetServerSideComponentProps = async (rendering, layoutData) => {
  const post = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return post;
};
type ComponentData = {
  rendering: ComponentRendering;
  fields: {
    Title: Field<string>;
    SessionizeURL: Field<string>;
  };
};

const Test = (props: ComponentData): JSX.Element => {

  return (
    <div>
    </div>
  );
};

export default Test;
import { Body1, Title1, Title2 } from '../components/Typography';
import React from 'react';

const PlaygroundPage: React.FC = () => {
  return (
    <div>
      PlaygroundPage
      <Title1 sansita color="blue_100">
        Title 1
      </Title1>
      <Title2 color="gray_400">Title 2</Title2>
      <Body1>Body 1</Body1>
    </div>
  );
};

export default PlaygroundPage;

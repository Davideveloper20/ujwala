import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface BlogPostMainProps{
    title:string;
    content:string;
}

const BlogPostMain = ({ title, content } : BlogPostMainProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPostMain;

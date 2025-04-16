import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

const tabsData = [
  {
    label: 'Text to Image',
    image: '/img/homeblackbox/step1.f769c528b4917fae19c1.webp',
    title: 'Text to Image',
    content: `A text-to-image generator converts written descriptions into visual images using AI. 
              It's a powerful tool for artists, designers, and content creators to quickly bring ideas to life.`
  },
  {
    label: 'Image to Image',
    image: '/img/homeblackbox/step2.72f2bc7f8b9876de21d0.png',
    title: 'Image to Image',
    content: `An image-to-image AI generator transforms input images into enhanced or altered versions using 
              advanced machine learning algorithms, offering versatile applications in visual editing and content creation.`
  },
  {
    label: 'Upscale Your Image',
    image: '/img/homeblackbox/step3.ef46550f2c121eeb3ba9.png',
    title: 'Upscale Your Image',
    content: `Upscale your images without losing quality using AI. This is ideal for printing, presentation, 
              or improving low-resolution images.`
  }
];

export const HomeBlackBox = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ width: '100%', bgcolor: 'black', color: 'white', py: 5 }}>
     <Typography
  variant="h4"
  align="center"
  fontWeight={500}
  gutterBottom
  sx={{
    px: 2,
    fontSize: {
      xs: '1.4rem',  // Smaller font on mobile
      sm: '1.8rem',
      md: '2rem',
    },
    wordBreak: 'break-word', // Wrap long words
  }}
>
  Turn Your Ideas Into Visual Artwork With Dall-E Free
</Typography>


<Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    mt: 2,
  }}
>
  <Box
    sx={{
      width: {
        xs: '100%',
        md: '80%',
      }
    }}
  >
    <Tabs
      value={activeTab}
      onChange={(e, newValue) => setActiveTab(newValue)}
      centered
      textColor="inherit"
      indicatorColor="secondary"
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
    >
      {tabsData.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          sx={{
            fontSize: {
              xs: '0.8rem',
              sm: '1rem',
            },
            whiteSpace: 'normal',
            textAlign: 'center',
            lineHeight: 1.2,
            px: 1.5
          }}
        />
      ))}
    </Tabs>
  </Box>
</Box>



      <Box
        sx={{
          display: 'flex',
          mt: 4,
          px: 2,
          justifyContent: 'center',
        }}
      >
        {/* Content wrapper */}
        <Box
          sx={{
            width: { xs: '100%', md: '80%' },
            p: { xs: 2, md: 4 },
            borderRadius: 2,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            bgcolor: 'rgba(255,255,255,0.05)',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Image box */}
          <Box
            sx={{
              width: { xs: '100%', md: '60%' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={tabsData[activeTab].image}
              alt="Detailed"
              style={{ width: '100%', borderRadius: 10, 
                // maxWidth: 500
             }}
            />
          </Box>

          {/* Text box */}
          <Box
            sx={{
              width: { xs: '100%', md: '40%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h5" fontWeight={500} gutterBottom>
              {tabsData[activeTab].title}
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              {tabsData[activeTab].content}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

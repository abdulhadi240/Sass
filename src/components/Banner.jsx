'use client'
import Image from 'next/image';
import React, { use, useState } from 'react';
import  useApiStore  from '@/components/useApiStore';
const Banner = () => {
  const [profile, setProfile] = useState('https://res.cloudinary.com/dfkn6xcg4/image/upload/v1709453196/2_mj13hg.jpg');
  const [banner, setBanner] = useState('https://res.cloudinary.com/dfkn6xcg4/image/upload/v1709367740/1704587928601_t90lck.jpg'); 
  const [isHovered, setIsHovered] = useState(false);

  const fetchData = async () => {
    try {
      const url = 'https://linkedin-api-d02y.onrender.com/api/banner';
      const token = 'Abdulhadi123456789'; // Replace 'YOUR_XTTS_TOKEN' with your actual token
  
      const requestBody = {
        image_url: banner, // Replace 'YOUR_IMAGE_URL' with the actual image URL
      };
      useApiStore.setState({ clicked: true })
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xtts-token': token,
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const responseData = await response.json();
      useApiStore.setState({ responseData }); // Update Zustand store with API response

      console.log('Response:', responseData);
      // Handle the response data as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };
  


  return (
    <div className='relative bg-white' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className='flex relative'>
          <Image src={banner} width={600} height={600} alt='banner' className='rounded-xl'/>
          {isHovered && <div onClick={()=>{fetchData()}} className="overlay rounded-xl absolute top-0 left-0 w-full h-full justify-center flex items-center text-white bg-black opacity-90 transition-all">Click To Activate AI</div>}
        </div>
      <div className="profile absolute top-24 left-0 bg-transparent">
        <Image src={profile} width={100} height={100} alt='profile' className='rounded-full border-4 border-white'/>
      </div>
    </div>
  );
};

export default Banner;

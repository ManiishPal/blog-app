'use client'
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {

    const [data, setData] = useState(null);
    const params = useParams();

    const fetchBlogData = async() => {
        const response = await axios.get('/api/blog', {
            params: {
                id:params.id
            }
        })
        setData(response.data)
    }

    useEffect(() => {
        fetchBlogData();
    }, [])

  return ( 
    data ? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Link href='/'>
            <Image alt='' src={assets.logo} className='w-[130px] h-[50px] sm:w-auto ' />
            </Link>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000]'>
                Get Started <Image src={assets.arrow} alt='' />
            </button>
        </div>
        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto '>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-white rounded-full' src={data.authorImg} width={60} height={60} alt='' />
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto '>{data.author}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 '> 
        
        <Image className='border-4 border-white' src={data.image} alt='' width={1280} height={720} />
        
        <h1 className='my-8 text-[26px] font-semibold '>Introduction :</h1>
        <p>{data.description}</p>
        <h3 className='my-5 text-[18px] font-semibold '>Step 1: Self Reflection and Goal Setting</h3>
        <p className='my-3'>Identify what areas of your life you want to improve, such as diet, exercise, mental health, or time management. Use the SMART goal-setting method to create specific, measurable, achievable, relevant, and time-bound goals.</p>
        <p className='my-3'>For example, instead of saying "I want to be more organized," set a goal like "I want to declutter my closet by the end of the month." </p>
        <h3 className='my-5 text-[15px] font-semibold '>Step 2: Create a personal development plan: </h3>
        <p className='my-3'>Design a roadmap that outlines the steps you need to take to achieve your goals. This plan should include both short-term and long-term objectives, and it should be reviewed regularly to ensure you are on track.</p>
        <p className='my-3'>Develop a daily routine that includes time for work, exercise, relaxation, and other important activities. Use tools like calendars, planners, or apps to schedule your tasks and set reminders. This will help you stay focused and productive.</p>
        <h3 className='my-5 text-[15px] font-semibold '>Step 3: Improve your mental health:</h3>
        <p className='my-3'>Prioritize your mental well-being by practicing positive self-talk, seeking professional support if needed, and engaging in activities that bring you joy. Mental health is a crucial component of a healthy lifestyle, and it can significantly impact your overall well-being.</p>
        <p className='my-3'>Focus on making small, sustainable changes to your diet and exercise habits. For example, you can start by eating more vegetables, drinking more water, and incorporating regular physical activity into your daily routine. These changes can lead to long-term improvements in your health</p>
        <h3 className='my-5 text-[15px] font-semibold '>Conclusion: </h3>
        <p className='my-3'>By following these steps, you can effectively manage your lifestyle and achieve a healthier, more balanced life. Remember that consistency and patience are key to making lasting changes.</p>
        <div className='my-24'>
            <p className='text-black font font-semibold my-4 '>Share this article on social media</p>
            <div className='flex'>
                <Image src={assets.facebook_icon} width={50} alt='' />
                <Image src={assets.twitter_icon} width={50} alt='' />
                <Image src={assets.googleplus_icon} width={50} alt='' />
            </div>
        </div>
    </div>
    <Footer />
    </> : <></>
  )
}

export default page
import React, { useRef, useState } from 'react';
import { FaTelegram } from "react-icons/fa"

export default function Home() {
    const videoRef = useRef(null);
    const [show, setShow] = useState(true)

    const handlePlayWithSound = () => {
        if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.play();
        }
    };

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const toggle = () => {
        handlePlayVideo()
        handlePlayWithSound()
        setShow(false)
    }


    return (
        <div>
            {show && (
                <div className="wrap bg-black fixed top-0 bottom-0 left-0 right-0 z-[1000] flex justify-center items-center px-5">
                    <div className="wrap flex flex-col justify-around items-center h-full ">
                        <div className="img-wrap lg:w-[400px] lg:h-[400px] w-[150px] flex justify-center items-center">
                            <div className="wrap">
                                <img src="/tt1.png" alt="TonTardz" />
                                <h1 className='text-white text-5xl font-extrabold text-center'>TonTardz</h1>
                            </div>
                        </div>
                        <div className="wrap text-white font-extrabold text-center">
                            <p className='text-2xl'>Join The TONTOARDZZZ?????????</p>
                            <div className="img-wrap w-[400px] flex justify-between items-center mt-5">
                                <button className='old-btn bg-red-500  text-white px-3 lg:text-lg border-separate border- border-[8px]'>NO, I'M A LOSERRR</button>
                                <button className='old-btn  text-white bg-[#1E2337] px-3 lg:text-lg border-separate border- border-[8px]' onClick={toggle}>YESSSS</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <div className='relative h-[100vh] w-[100vw] flex justify-center items-center overflow-clip lg:py-16 py-10'>
                <div className="wrap relative z-30 flex flex-col items-center justify-between h-full ">
                    <div className="img-wrap lg:w-[400px] lg:h-[400px] w-[150px] lg:bg-[#1E2337] flex justify-center items-center">
                        <div className="wrap">
                            <img src="/tt1.png" alt="TonTardz" />
                            <h1 className='text-white lg:text-5xl font-extrabold text-center'>TonTardz</h1>
                        </div>
                    </div>
                    <div className="btn-wrap flex justify-center gap-10">
                        <button className='old-btn bg-red-500 text-white px-3 lg:text-2xl border-separate border- border-[8px]'>Mint now</button>
                        <button className='old-btn bg-gray-900 text-white px-3 lg:text-2xl border-separate border- border-[8px]'>X</button>
                        <button className='old-btn bg-blue-500 text-white px-3 lg:text-2xl border-separate border- border-[8px] flex gap-2 items-center'>Telegram <FaTelegram /></button>
                    </div>
                </div>
                <video
                    ref={videoRef}
                    src="/tontardz.mp4"
                    muted
                    loop
                    // style={{ width: '100vw', height: 'auto' }}
                    className='fixed lg:w-[100vw] lg:h-[auto] h-[50000px] '
                />
            </div>
        </div>
    );
}

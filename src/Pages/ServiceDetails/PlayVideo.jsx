import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import ReactPlayer from 'react-player/youtube';
import "./PlayVideo.css";
const PlayVideo = ({ closeVideo }) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden"
        return () => {
            document.body.style.overflowY = "scroll"
        }
    }, [])

    return <>
        <div className='modal-wrapper' onClick={closeVideo}>
            <div className='modal-container'>
                <div className='relative '>
                    <div className='w-[400px] h-[300px] md:w-[650px] md:h-[400px] lg:w-[800px] lg:h-[450px] px-8'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=DF3XjEhJ40Y'
                            controls={true}
                            playing={true}
                            width='100%'
                            height='100%'

                        />
                    </div>

                    {/* <iframe className='w-[800px] h-[450px]' src="https://www.youtube.com/embed/DF3XjEhJ40Y?si=YPpwMMUtDVmfSZY5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <button className='absolute top-0 right-0 -translate-x-6 -translate-y-8 md:-translate-y-10 md:-translate-x-3 lg:translate-x-4 lg:-translate-y-3 customCursor' onClick={closeVideo}>
                        <IoCloseOutline className='text-4xl md:text-5xl text-white'></IoCloseOutline>
                    </button>
                </div>
            </div>


        </div>

    </>
}
PlayVideo.propTypes = {
    closeVideo: PropTypes.func.isRequired
}
export default PlayVideo
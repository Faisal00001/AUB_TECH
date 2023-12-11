import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";
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
                <div className='relative modal-container'>
                    <iframe className='w-[800px] h-[450px]' src="https://www.youtube.com/embed/DF3XjEhJ40Y?si=YPpwMMUtDVmfSZY5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    <button className="absolute top-0 right-0 -translate-y-3 translate-x-12" onClick={closeVideo}>
                        <IoCloseOutline className='text-5xl text-white'></IoCloseOutline>
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
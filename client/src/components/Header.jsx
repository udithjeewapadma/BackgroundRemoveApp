import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className=' flex items-center justify-between max-sm:flex-col-reverse
     gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
        {/*-----Left side------*/}
        <div>
           <h1 className=' text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
            Remove the <br className=' max-md:hidden' /> 
            <span className=' bg-gradient-to-r from-violet-400 to-fuchsia-600 bg-clip-text text-transparent'>
            background</span> from <br className=' max-md:hidden' /> images for free.
           </h1>
           <p className=' my-3 text-[15px] text-gray-500'>
           Our Image Background Removal app makes it easy to  instantly remove backgrounds <br className=' max-sm:hidden' /> from any photo
           With just one click, you can achieve a clean,  professional look<br className=' max-sm:hidden' /> for your images,
           no design skills required.
           </p>
 
           <div>
            <input type="file" name="" id="upload1" hidden />
            <label className=' inline-flex gap-3 px-5 py-2.5 rounded-full cursor-pointer
             bg-gradient-to-r from-violet-400 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
                <img width={20} src={assets.upload_btn_icon} alt="" />
                <p className=' text-white text-sm'>upload image</p>
            </label>
           </div>
        </div>

        {/*-----Right side------*/}
        <div className=' w-full max-w-md'>
            <img src={assets.header_img} alt="" />
        </div>
    </div>
  )
}

export default Header
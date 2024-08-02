import React from 'react';

const Header = () => {
  return (
    <div className="relative h-[36vw] my-8 mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain">
      <div className='absolute animate-fade rounded-lg flex flex-col items-start gap-[1.5vw] max-w-[75%] md:max-w-[50%] bottom-[10%] left-[6vw]'>
        <h2 style={{ fontSize: 'max(4.5vw, 22px)' }} className='font-bold text-neutral-200'>Order your favourite food here</h2>
        <p className='text-neutral-200 backdrop-blur-sm rounded-lg hidden sm:block text-[1.4vw]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button onClick={() => location.href = "#explore-menu" } style={{ fontSize: 'max(1vw, 13px)' }} className='bg-neutral-200 py-[1vw] px-[2.3vw] rounded-full hover:bg-neutral-300'>View Menu</button>
      </div>
    </div>
  );
}

export default Header;

import React from 'react'
import imgNft from '../../assets/backgroundNft.png'
import ButtonRegular from '../ButtonRegular/indx'
import ButtonRegularV2 from '../ButtonRegularV2/indx'
import Stats from '../Stats'
export default function index() {
return (
<div className=' text-white container  mx-auto flex mt-24 md:mb-40'>
    <div className=' md:w-1/2 pl-6 z-10'>
        <h2 className='text-5xl font-Poppins font-semibold text-white lg:text-7xl md:text-5xl'>
            Discover collect, & sell
            <h2
                className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1]'>
                Extraordinary</h2>
            NFTs
        </h2>
        <p className='pr-6 mt-10 mb-5 md:text-lg md:max-w-[28rem]'>the leading NFT Marketplace on EthereumHome to the next generation of digital
            creators.Discover the best NFT collections.</p>
        <div className='flex flex-wrap  md:flex-row sm:w-[16rem] lg:w-[27rem] md:justify-between'>
            <ButtonRegular class=" w-52 mb-2">
                Explore
            </ButtonRegular>
            <ButtonRegularV2 class="w-52 mb-2">
                Create
            </ButtonRegularV2>
        </div>
        {/* Stats */}
        <div>
            <Stats /> 
        </div>
    </div>
    <div className=' w-1/2 md:flex justify-center hidden'>
        <img src={imgNft} alt="dd" className=' w-full object-contain' />
    </div>
</div>
)
}
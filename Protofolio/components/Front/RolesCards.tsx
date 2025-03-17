import React from 'react';
import Image from 'next/image';

type Props={
    image : string,
    title : string
}

const RolesCards = ({image,title}:Props) => {
  return (
    <div>
      <Image src={image} width={200} height={200} alt='image' className='mx-auto'/>
      <h1 className='mt-6 text-center text-gray-900 font-medium text-lg'>{title}</h1>
      <p className='mt-2 text-center text-xs font-medium text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat recusandae voluptatum adipisci ipsam, 
        temporibus ducimus reiciendis laboriosam consectetur cumque similique reprehenderit magni iure!
         Nemo quaerat cupiditate eos in laborum veritatis?</p>
    </div>
  )
}

export default RolesCards

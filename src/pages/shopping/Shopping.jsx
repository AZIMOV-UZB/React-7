import React from 'react'

const Shopping = () => {
  return (
    <div className=''>
    <div className=' container flex-col-reverse	 '>
<input required className='block	 outline-none	 mx-3 mt-6 text-xl font-normal'  type="text"  placeholder='maxsulot nom '/>
<input required className='block	 outline-none	 mx-3 mt-6 text-xl font-normal' type="number" placeholder='maxsulotga bergan baxoyingiz ' />
<input required className='block	 outline-none	 mx-3 mt-6 text-xl font-normal' type="text" placeholder="to'lv tur"/>  


<button>Submit</button>
    </div>
    </div>
  )
}

export default Shopping
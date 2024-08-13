import React from 'react'

const Shopping = () => {
  return (
    <div className=' container'>
    <div className=' justify-center m-auto'>
      <div className='flex  my-3'>
      <label htmlFor="">NAME :</label>
<input required className='items-center  -mt-	outline-none	 mx-3  text-xl font-light	'  type="text"  placeholder='Name '/>
</div>
      <div className='flex my-3'>
      <label htmlFor="">Lastname :</label>
<input required className='	 outline-none -mt-	 mx-3  text-xl font-light	'  type="text"  placeholder='Lastname'/>
      </div>

      <div className='flex my-3'>
      <label htmlFor="">Email</label>
<input required className='	 outline-none -mt-	 mx-3  text-xl font-light	'  type="text"  placeholder='********@gmail.com '/>
      </div>

      <div className='flex my-3'>
      <label htmlFor="">Phone nomber</label>
<input required className='	 outline-none -mt-	 mx-3  text-xl font-light	'  type="number"  placeholder='998-**-***-**'/>
      </div>

      <div className='flex my-3'>
      <label htmlFor="">Maxsulot nomi</label>
<input required className='	 outline-none -mt-	 mx-3  text-xl font-light	'  type="text"  placeholder='Maxsulot nom '/>
      </div>

      <div className='flex my-3'>
      <label htmlFor="">Maxsulotn baxolang </label>
<input required className='	 outline-none -mt-	 mx-3  text-xl font-light	' type="number" placeholder='Maxsulotga bergan baxoyingiz ' />
      </div>

      <div className=' my-3'>
      <label className='block	' htmlFor="">To'lov ko'rinish</label>
      <label htmlFor="">Naqt</label>
      <input className='mx-2 ' type="radio" name="rb" id="" />
      <label htmlFor="">Card</label>
      <input className='mx-2 ' type="radio" name="rb" id="" />

      </div>

<button className='px-11 py-2 my-6 rounded-xl	 text-xl bg-lime-400'>Submit</button>
    </div>
    </div>
  )
}

export default Shopping
import star from '../../../src/assets/icons8-star-48.png'

const Rating = ({rating}) => {
  const looper = Array.from({length:rating})

  return (
    <div className='flex gap-1 '>
    <span className='text-xs'>RATING:</span>
    {looper.map((e,index)=>(<img className='w-3 h-3 mt-1' key={index} src={star} alt = {`star ${index+1}`}/>))}
    </div>
  )
}

export default Rating
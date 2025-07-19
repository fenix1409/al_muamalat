import heroImage from '../../assets/header-banner.jpg'
const Hero = () => {
  return (
    <section className='px-[130px]'>
        <img src={heroImage} alt='image' width={450} height={450} className='!w-full mb-[40px]'/>
    </section>
  )
}

export default Hero
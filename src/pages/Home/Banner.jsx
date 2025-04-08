import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
        <div className="w-full md:w-1/2 flex items-center md:justify-end">
          <img src={bannerImg} alt="banner image" />
        </div>
        
        <div className="w-full md:w-1/2">
            <h1 className='text-2xl md:text-5xl font-medium mb-7'>New Releases This Week</h1>
            <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
        
            <button className='btn-primary'>Subscribe</button>
        </div>

        
    </div>
  )
}

export default Banner
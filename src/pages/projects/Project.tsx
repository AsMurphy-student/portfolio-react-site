import AppBarCustom from '../../components/navigation/AppBar'

function Project() {
  return (
    <>
      <AppBarCustom />
      {/* Body Div */}
      <div className='grid grid-cols-2 mt-10'>
        {/* Project Image and Skills Left Aligned */}
        <div className='grid grid-cols-1 gap-5'>
          <h1 className='text-center text-6xl'>Project 1</h1>
          <img src='https://placehold.co/1920x1080' alt="" className='rounded-xl' />

          <div className='grid md:grid-cols-2 xl:grid-cols-6 gap-x-4'>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>HTML5 Developer</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>React Expert</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>UI Designer</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>SQL Pro</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Agile Practitioner</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Network Admin</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Cloud Computing</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Cybersecurity</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Data Analyst</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>DevOps Engineer</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Full Stack Developer</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Java Programmer</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Kubernetes</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Machine Learning</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Microsoft Office</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Network Security</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Python Developer</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Ruby on Rails</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>Software Tester</p>
            <p className='bg-cyan-500 rounded-md text-left m-2 p-1 border-2 border-solid'>UX Designer</p>
          </div>
        </div>
        {/* Project Description and Site Linked with Repo */}
        <div className='flex items-center flex-col mt-40'>
          <div className='flex items-center'>
            <p className='text-center text-3xl/12 p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate sem sed nisl hendrerit varius. Suspendisse varius dui ac faucibus gravida. Sed varius eu turpis nec hendrerit. Nulla justo tortor, auctor quis efficitur at, dignissim ut ex. Praesent efficitur dolor vel lacus lacinia gravida nec ac leo. Donec quis lorem eleifend, ultricies augue ut, auctor mauris. Pellentesque non nunc luctus, malesuada orci at, faucibus libero. Suspendisse potenti. Quisque ut eros ut sem porta laoreet non ut nulla. </p>
          </div>
          <div className='grid grid-cols-2 gap-10'>
            <button className='bg-black rounded-md p-2'>View Website</button>
            <button className='bg-black rounded-md p-2'>View on Github</button>
          </div>
        </div>
      </div>
      {/* Project Images Grid */}
      <h1 className='text-center text-6xl mt-5'>Project Images</h1>
      <div
          className={`mx-auto mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
        >
         {Array.from({ length: 10 }, () => (
            <div className='bg-black rounded-lg'>
              <img src='https://placehold.co/1920x1080' alt="" className='p-2 rounded-xl'/>
              <p className='my-2'>Caption</p>
            </div>
          ))}
        </div>
    </>
  )
}

export default Project
const BioContent = () => {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-16'>
          
          <div>
            <img 
            src="../../../portfolio-react-site/assets/images/bio-pic.jpg" alt="" 
            className='rounded-xl mx-auto' />
          </div>
          <div className="flex items-center">
            <p className='text-center text-3xl/12 p-4'>
              My name is Ashton Murphy, and I am a up and coming Web Developer, 
              graduating RIT (Rochester Institute of Technology). My proficiencies 
              include traditional web development (html, css, javascript/typescript), React Native 
              with Typescript, Flutter, along with backend tools such as Node.js and Express.js. 
              
            </p>
          </div>

        </div>
    );
}

export default BioContent;
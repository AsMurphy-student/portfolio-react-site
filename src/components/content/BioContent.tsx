import './BioContent.css';

const BioContent = () => {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-16'>
          
          <div>
            <img 
            src="src/assets/images/bio-pic.jpg" alt="" 
            className='rounded-xl mx-auto' />
          </div>
          <div>
            <p className='text-center text-3xl/12'>
              As I prepare to graduate from college, I'm excited to bring my passion for innovative technology 
              solutions to the forefront. With expertise in building dynamic user interfaces using React and 
              leveraging the power of TypeScript for scalable and maintainable codebases, I've developed a 
              strong foundation in modern front-end development. Additionally, my proficiency in traditional 
              web technologies such as HTML, CSS, and JavaScript enables me to craft visually appealing and 
              responsive experiences that engage users. On the backend, I'm well-versed in Node.js, utilizing 
              its event-driven, non-blocking architecture to create efficient and scalable server-side 
              applications. Furthermore, my understanding of SQL databases allows me to design and implement 
              robust data models that support complex queries and analytics. With a strong foundation in these 
              technologies, I'm eager to collaborate with like-minded individuals and organizations to drive 
              innovation and deliver exceptional results.
            </p>
          </div>

        </div>
    );
}

export default BioContent;
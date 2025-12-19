import BioPic from "../../assets/images/bio-pic-transparent.png";

const BioContent = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
      <div>
        <img src={BioPic} alt="" className="rounded-xl mx-auto" />
      </div>
      <div className="flex items-center">
        <p className="text-center text-3xl/12">
          My name is <u>Ashton Murphy</u>, and I am an up and coming Web
          Developer, graduating RIT (Rochester Institute of Technology). My
          proficiencies include <u>traditional web development</u> (HTML, CSS,
          Javascript/Typescript), <u>React with Typescript</u>, <u>Flutter</u>,
          along with backend tools such as <u>Node.js</u> and <u>Express.js</u>.
          I also have experience with <u>MongoDB</u> and <u>NoSQL</u>.
        </p>
      </div>
    </div>
  );
};

export default BioContent;

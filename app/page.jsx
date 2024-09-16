import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share    
            <br className="max-md:hidden" />
            <span className="text-primary-orange text-center"> AI-Powered Prompts </span>
        </h1>
        <p className="desc text-center">
            <span className="text-primary-orange text-center font-bold">
                Arifa </span> 
                 is an open-source <span className="text-primary-orange text-center font-bold">
                 AI prompt-sharing tool
            </span> in the modern world used to discover, create, and share creative prompts. <br /> 
            <span className="text-primary-orange text-center text-sm font-bold">
                Useful prompts for generative AI like chatGPT and Gemini.
            </span>  
        </p>
        <Feed />
    </section>  
    )
}

export default Home;
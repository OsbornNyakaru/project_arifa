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
            Arifa is an open-source AI prompt-sharing tool in the modern world used to discover, create, and share creative prompts. <br /> 
            It's basically your personal assistant prompt engineer.  
        </p>
        <Feed />
    </section>  
    )
}

export default Home;
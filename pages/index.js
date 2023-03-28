import Head from "next/head";
import Hero from "../components/Home/Hero";
import Operation from "../components/Home/Operation";
import Services from "../components/Home/Services";
import WhyKeyboarda from "../components/Home/WhyKeyboarda";
import Projects from "../components/Home/Projects";
import Skills from "../components/Home/Skills";
import Reviews from "../components/Home/Reviews";
import Technologies from "../components/Home/Technologies";
import Consultation from "../components/Home/Consultation";
import { boxes, operationData, projects ,skills} from "../data";

export default function Home({ setShowModal }) {
  return (
    <div>
      <Head>
        <title>
          طراحی وب سایت و فروشگاه اینترنتی | تیم برنامه نویسی کیبورد
        </title>
        <meta
          name="description"
          content="تیم برنامه نویسان کیبوردا ، مجموعه ای از افراد خلاق ، ایده پرداز ، متخصص و متعهد است تا هر ایده ای در دنیای وب و اپلیکیشن را به محصولی منحصر به فرد تبدیل کند."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Hero />
        <Services boxesData={boxes} />
        <Operation operationData={operationData} />
        <Projects projectsData={projects} />
        <Skills skillsData = {skills}/>
        <WhyKeyboarda />
        <Reviews />
        <Consultation setShowModal={setShowModal} />
        <Technologies />
      </main>
    </div>
  );
}

import Head from "next/head";
import styles from "../styles/Cv.module.scss";
import Header from "../components/cv/Header";
import TitleText from "../components/cv/TitleText";
import SectionDescription from "../components/cv/SectionDescription";
import NumberLiList from "../components/cv/NumberLiList";
import NumberTitleDescription from "../components/cv/NumberTitleDescription";

const usingTechnologiesList = [
  "Html (2.5 years)",
  "Css (2.5 years)",
  "Bootstrap (2.5 years)",
  "JavaScript (2 years)",
  "Node.js, Rest Api (1 year)",
  "Sass, Scss (8 months)",
  "React.js, Styled Components, Context Api (6 months)"
]

const usedTechnologiesList = [
  "ASP.NET MVC (3 months)",
  "PHP (1 year)",
]

const doList = [
  "Pixel Perfect conversion. Creating website templates from scratch. (PSD->HTML,CSS,JS->JSX)",
  "Careful on UI/UX issues.",
  "Coding by considiring SEO rules. (Importance of html tags)",
  "Fully responsive designs with all devices."
]

const goalsList = [
  "Become an expert of React. (Main goal)",
  "Develop mobile apps on React Native. (To support website already created)",
  "Develop games for mobile and desktop platforms on Unity. (Personal entertainment)"
]

const hobbiesList = [
  "I play chess. It helps me to make my steps better in the future.",
  "I watch Formula 1. It is very interesting for me to see what engineers can make and how race engineers can set a plan in diffirent situations."
]

const languagesList = [
  "Turkish: Native",
  "English: B2",
  "Russian: B1"
]

const titleAndDescriptionList = [
  {title: "Narcade", description: "I have worked in this one of most important mobile game company in Turkey as a Software Developer. The best thing I do in this company is a software which calls Info Transfer. Thanks to this software, an employee can finish the job in 1 minute instead of 3 or more work days."},
  {title: "Global Ekspress", description: "I have worked in this C2C E-Commerce Parketplace as a Junior Frontend Web Developer. I’ve designed lots of website parts and elements. This was the first company that I worked in which works about web technologies. I improved my Pixel Perfect design skill here."},
  {title: "Blacks Creative", description: "I've worked in this web agency as a Frontend Web Developer. I designed a lot of web templates. My best achievement in this company is designing an e-commerce web template in only a day. I have improved my fast coding skills here."},
  {title: "Melexsoft", description: I have worked in this NFT and BlockChain creator company as a Frontend Web Developer. I've designed huge websites and web templates from scratch. I've improved my JS skills here."}
]

export default function Home() {
  return (
    <>
      <Head>
        <title>CV (Resume) - Yusuf Code</title>
        <meta name="description" content="Hello! I'm Yusuf. I develop Full-Stack websites for over 2.5 years but more dominant on Front-End."/>
        <meta name="keywords" content="yusufcode, yusuf code, web developer, full stack web developer, freelance web developer, cv, resume"/>
      </Head>

      <div className={styles.section}>
        <Header title="Personal Info" />

        <div className={styles.sectionBody}>
          <TitleText title="Full Name" text="Yusuf Akbaba" />
          <TitleText title="Age" text="22" />
        </div>
      </div>

      <div className={styles.section}>
        <Header title="About Me" />

        <div className={styles.sectionBody}>
          <SectionDescription text="I develop Full-Stack websites for over 2.5 years but more dominant on Front-End."/>

          <NumberLiList title="Technologies I Use" liArray={usingTechnologiesList}/>
          <NumberLiList title="Technologies I Used" liArray={usedTechnologiesList}/>
          <NumberLiList title="What I Do" liArray={doList}/>
          <NumberLiList title="Goals" liArray={goalsList}/>
          <NumberLiList title="Hobbies" liArray={hobbiesList}/>
          <NumberLiList title="Languages" liArray={languagesList}/>

        </div>
      </div>

      <div className={styles.section}>
        <Header title="Experience" />

        <div className={styles.sectionBody}>
          
          <NumberTitleDescription titlesAndDescription={titleAndDescriptionList} />

        </div>
      </div>

      <div className={styles.section}>
        <Header title="Contact" />

        <div className={styles.sectionBody}>
          <TitleText title="Mail" text="yusuf1code@gmail.com" link="mailto:yusuf1code@gmail.com"/>
          <TitleText title="Phone" text="It's not your lucky day :)"/>
          <TitleText title="LinkedIn" text="yusufakbaba" link="https://www.linkedin.com/in/yusufakbaba"/>
          <TitleText title="GitHub" text="yusufcode" link="https://www.github.com/yusufcode"/>
        </div>
      </div>
      
    </>
  );
}

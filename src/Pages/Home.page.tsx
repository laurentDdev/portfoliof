import SocialBtn from "../components/SocialBtn";
import Logo from "../assets/profile.png";
import { useSpring, animated } from "@react-spring/web";

const Home = () => {
  const spring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  return (
    <animated.div className="h-full py-12 2xl:px-12" style={{ overflow: "hidden" , ...spring}}>
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:items-center">
        <img
          className="hidden xl:block xl:justify-self-center w-1/2"
          src={Logo}
          alt=""
        />
        <div>
          <h1
            className="font-league font-bold text-mydark dark:text-myligth text-6xl sm:text-8xl xl:text-8xl"
          >
            DESSY <br />
            <span className="text-myorange">LAURENT</span>
          </h1>
          <p className="font-poppins sm:text-2xl text-mydark dark:text-myligth xl:text-2xl 2xl:text-2xl 2xl:mt-14 2xl:mb-14">
            Bonjour, je m'appelle Laurent, j'ai 21 ans et je suis passionné par
            le développement sous toutes ses formes. Pendant un bon moment, j'ai
            appris de manière autodidacte, ce qui m'a permis d'explorer divers
            domaines du développement informatique. Actuellement, je suis
            étudiant à l'école 19 (42 network), où je continue à développer mes
            compétences et à relever de nouveaux défis passionnants dans le
            monde du développement. Mon objectif est de contribuer de manière
            significative à des projets innovants tout en continuant à apprendre
            et à évoluer en tant que développeur.
          </p>
        </div>
      </div>
      <SocialBtn />
    </animated.div>
  );
};

export default Home;

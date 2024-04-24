import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas , Socials} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-grey'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Socials />
      </div>
    </BrowserRouter>
  );
}

export default App;

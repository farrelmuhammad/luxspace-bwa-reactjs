import React from "react";
import Logo1 from '../../assets/images/content/logo-adobe.svg';
import Logo2 from '../../assets/images/content/logo-ikea.svg';
import Logo3 from '../../assets/images/content/logo-hermanmiller.svg';

const Clients = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-center flex-wrap">
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={Logo1} alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src="./images/content/logo-ikea.svg" alt="" className="mx-auto" />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img
            src={Logo2}
            alt=""
            className="mx-auto"
          />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={Logo3} alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Clients;

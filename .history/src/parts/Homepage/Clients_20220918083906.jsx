import React from "react";
import Logo1 from '../../assets/images/content/logo-adobe.svg';
import Logo2 from '../../assets/images/content/logo-ikea.svg';
import Logo3 from '../../assets/images/content/logo-hermanmiller.svg';

const Clients = () => {
  return (
    <section class="container mx-auto">
      <div class="flex justify-center flex-wrap">
        <div class="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={Logo1} alt="" class="mx-auto" />
        </div>
        <div class="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src="./images/content/logo-ikea.svg" alt="" class="mx-auto" />
        </div>
        <div class="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img
            src={Logo2}
            alt=""
            class="mx-auto"
          />
        </div>
        <div class="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img src={Logo3} alt="" class="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Clients;

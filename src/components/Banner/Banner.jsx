import React from 'react';

const Banner = () => {
    return (
<div
  className="hero min-h-screen"
      style={{
        backgroundImage: "url('/images/Banner-min.jpg')"
      }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content grid grid-cols-2 gap 5 lg:flex-row-reverse">
      <div className="hero-content text-neutral-content text-left">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items Around the World</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
    <div>

    </div>
  </div>

</div>
    );
};

export default Banner;
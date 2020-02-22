import React from 'react';
import Aux from './../../../../../hoc/Aux/Aux';

const popularBrands = (props) => {
    return(
        <Aux>
          <section className="bg-faded padding-top-3x padding-bottom-3x">
            <div className="container">
              <h3 className="text-center mb-30 pb-2">Popular Brands</h3>
              <div className="owl-carousel" data-owl-carousel="{ &quot;nav&quot;: false, &quot;dots&quot;: false, &quot;loop&quot;: true, &quot;autoplay&quot;: true, &quot;autoplayTimeout&quot;: 4000, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:2}, &quot;470&quot;:{&quot;items&quot;:3},&quot;630&quot;:{&quot;items&quot;:4},&quot;991&quot;:{&quot;items&quot;:5},&quot;1200&quot;:{&quot;items&quot;:6}} }">
                <img className="d-block w-110 opacity-75 m-auto" src="img/brands/01.png" alt="Adidas" />
                <img className="d-block w-110 opacity-75 m-auto" src="img/brands/02.png" alt="Brooks" />
                <img className="d-block w-110 opacity-75 m-auto" src="img/brands/03.png" alt="Valentino" />
                <img className="d-block w-110 opacity-75 m-auto" src="img/brands/04.png" alt="Nike" />
                <img className="d-block w-110 opacity-75 m-auto" src="img/brands/05.png" alt="Puma" />
                <img className="d-block w-110 opacity-75 m-auto" src="img/brands/06.png" alt="New Balance" />
                <img className="d-block w-110 opacity-75 m-auto" src="img/brands/07.png" alt="Dior" />
              </div>
            </div>
        </section>
        </Aux>
    )
}
export default popularBrands;
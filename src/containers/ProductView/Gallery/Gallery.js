import React from 'react';
import Aux from './../../../hoc/Aux/Aux'

const gallery = (props) => {
    return(
            <Aux>
                <div className="col-md-6">
                    <div className="product-gallery">
                        <span className="product-badge text-danger">30% Off</span>
                        <div class="gallery-item video-btn text-center"><a href="#" data-toggle="tooltip" data-type="video" data-video="<div class=&quot;wrapper&quot;><div class=&quot;video-wrapper&quot;><iframe class=&quot;pswp__video&quot; width=&quot;960&quot; height=&quot;640&quot; src=&quot;//www.youtube.com/embed/B81qd2v6alw?rel=0&quot; frameborder=&quot;0&quot; allowfullscreen></iframe></div></div>" title="" data-original-title="Watch video"></a></div>
                        {props.children}
                    </div>
                </div>
            </Aux>
    );
}
export default gallery;
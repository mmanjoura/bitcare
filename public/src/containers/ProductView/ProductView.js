import React, {Component} from 'react';
import axios from '../../axios-instance';
import Image from './ProductImages/ProductImage/ProductImage';



class ProductView extends Component {
    state = {
        products: [],
        product: {},
        ID: 7
    }

    componentDidMount(){
        if(this.state.ID){
            axios.get('contents?type=Product')
            .then(response => {
                this.setState({
                    products: response.data.data,
                    //product: response.data.data[0]
                    
                });
                console.log("Products", this.state.product.image);
  
                // const product = this.state.products.filter(product => {
                //     return product.ID === this.state.ID
                // })

            });
        }
    }
    
    render(){

        if(this.state.products.length === 0){
            return <p>Loading?</p>
        }else{
            const productImages = this.state.products.map(
                product => {
                    console.log("product: ", product)
                    return <Image key={product.id} dataimage={"http://localhost:8080/" + product.image[0]} datazoomimage={"http://localhost:8080/" + product.image[0]} image={"http://localhost:8080/" + product.image[0]}/>
                }
            )
         console.log("finding out where is the product:", this.state.products)
            const validProduct = (
                /*
                <section className="content">
                <div className="container">
                <div className="row product-info-outer">
                    <div className="col-sm-4 col-md-4 col-lg-5 hidden-xs">
                    <div className="product-main-image">
                        <div className="product-main-image__item">
                        <img className="product-zoom" 
                        src={"http://localhost:8080/" +this.state.products[0].image[0] } 
                        data-zoom-image={"http://localhost:8080/" + this.state.products[0].image[0]} 
                        />
                    </div>
                        <div className="product-main-image__zoom" />
                    </div>
                    <div className="product-images-carousel">
                        <ul id="smallGallery">
                            {
                                productImages
                            }
                        </ul>
                    </div>
                    </div>
                    <div className="product-info col-sm-8 col-md-4 col-lg-4">
                    <div className="product-info__title">
                        <h2>
                            {this.state.product.name}
                        </h2>
                        <div className="rating product-info__rating visible-xs">
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                        <span className="icon-star" />
                    </div>
                    </div>
                    <div className="product-info__sku pull-right">SKU: 00065 &nbsp;&nbsp;
                    <span className="label label-success">IN STOCK</span></div>
                    <ul id="singleGallery" className="visible-xs">
                        <li><img src="images/products/product-big-1.jpg"  /></li>
                        <li><img src="images/products/product-big-2.jpg"  /></li>
                        <li><img src="images/products/product-big-3.jpg"  /></li>
                        <li><img src="images/products/product-big-4.jpg"  /></li>
                        <li><img src="images/products/product-big-5.jpg"  /></li>
                    </ul>
                    <div className="price-box product-info__price">
                    <span className="price-box__new">${this.state.product.price}</span> 
                    <span className="price-box__old">${this.state.product.price - 10}</span></div>
                    <div className="rating product-info__rating hidden-xs"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /></div>
                    <div className="divider divider--xs product-info__divider" />
                    <div className="product-info__description"> 
                    {this.state.product.description}
                    </div>
                    <div className="divider divider--xs product-info__divider" />
                    <div className="row">
                        <div className="col-xs-6">
                        <label>Size:</label>
                        <select className="selectpicker" data-style="select--wd" data-width="100%">
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                        </div>
                        <div className="col-xs-6">
                        <label>Color:</label>
                        <select className="selectpicker" data-style="select--wd" data-width="100%">
                            <option>White</option>
                            <option>Blue</option>
                            <option>Grey</option>
                        </select>
                        </div>
                    </div>
                    <div className="divider divider--sm" />
                    <label>Quantity:</label>
                    <div className="outer">
                        <div className="input-group-qty pull-left"> <span className="pull-left"> </span>
                        <input type="text" name="quant[1]" className="input-number input--wd input-qty pull-left" defaultValue={1} min={1} max={100} />
                        <span className="pull-left btn-number-container">
                            <button type="button" className="btn btn-number btn-number--plus" data-type="plus" data-field="quant[1]"> + </button>
                            <button type="button" className="btn btn-number btn-number--minus" disabled="disabled" data-type="minus" data-field="quant[1]"> – </button>
                        </span> </div>
                        <div className="pull-left">
                        <button className="btn btn--wd text-uppercase">Add to Cart</button>
                        </div>
                        <div className="social-links social-links--colorize social-links--invert social-links--padding pull-right">
                        <ul>
                            <li className="social-links__item"><a className="icon icon-facebook tooltip-link" href="#" data-placement="top" data-toggle="tooltip" data-original-title="Share on facebook" /></li>
                            <li className="social-links__item"><a className="icon icon-twitter tooltip-link" href="#" data-placement="top" data-toggle="tooltip" data-original-title="Share on twitter" /></li>
                            <li className="social-links__item"><a className="icon icon-google tooltip-link" href="#" data-placement="top" data-toggle="tooltip" data-original-title="Share on google" /></li>
                            <li className="social-links__item"><a className="icon icon-pinterest tooltip-link" href="#" data-placement="top" data-toggle="tooltip" data-original-title="Share on pinterest" /></li>
                        </ul>
                        </div>
                    </div>
                    <div className="divider divider--xs" />
                    <ul className="product-links product-links--inline">
                        <li><a href="#"><span className="icon icon-bars" />Add to compare</a></li>
                        <li><a href="#"><span className="icon icon-favorite" />Add to wishlist</a></li>
                        <li><a href="#"><span className="icon icon-mail-fill" />Email to friend</a></li>
                    </ul>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-3">
                    <h4>CUSTOM HTML BLOCK</h4>
                    <div className="card">
                        <div className="card__row"> You can add your content here, like promotions or some additional info </div>
                        <a href="#" className="card__row card__row--icon">
                        <div className="card__row--icon__icon"> <span className="icon icon-shop-label" /></div>
                        <div className="card__row--icon__text">
                            <div className="card__row__title">Special offer: 1+1=3</div>
                            Get a gift!</div>
                        </a> <a href="#" className="card__row card__row--icon">
                        <div className="card__row--icon__icon"> <span className="icon icon-money" /></div>
                        <div className="card__row--icon__text">
                            <div className="card__row__title">Free Reward Card</div>
                            Worth $10, $50, $100. <br />
                        </div>
                        </a> <a href="#" className="card__row card__row--icon">
                        <div className="card__row--icon__icon"> <span className="icon icon-identification-" /></div>
                        <div className="card__row--icon__text">
                            <div className="card__row__title">Join to our Club</div>
                        </div>
                        </a> <a className="card__row card__row--icon">
                        <div className="card__row--icon__icon"> <span className="icon icon-truck" /></div>
                        <div className="card__row--icon__text">
                            <div className="card__row__title">Free shipping</div>
                        </div>
                        </a> </div>
                    </div>
                </div>
                </div>
            </section>
    */
   <div>
   <section className="content">
     <div className="container">
       <div className="row product-info-outer">
         <div className="col-sm-4 col-md-4 col-lg-5 hidden-xs">
           <div className="product-main-image">
             <div className="product-main-image__item">
               <img className="product-zoom" src="images/products/product-big-1.jpg" data-zoom-image="images/products/product-big-1-zoom.jpg" /></div>
             <div className="product-main-image__zoom" />
           </div>
           <div className="product-images-carousel">
             <ul id="smallGallery">
               <li><a href="#" data-image="images/products/product-big-1.jpg" data-zoom-image="images/products/product-big-1-zoom.jpg"><img src="images/products/product-small-1.jpg" alt /></a></li>
               <li><a href="#" data-image="images/products/product-big-2.jpg" data-zoom-image="images/products/product-big-2-zoom.jpg"><img src="images/products/product-small-2.jpg" alt /></a></li>
               <li><a href="#" data-image="images/products/product-big-3.jpg" data-zoom-image="images/products/product-big-3-zoom.jpg"><img src="images/products/product-small-3.jpg" alt /></a></li>
               <li><a href="#" data-image="images/products/product-big-4.jpg" data-zoom-image="images/products/product-big-4-zoom.jpg"><img src="images/products/product-small-4.jpg" alt /></a></li>
               <li><a href="#" data-image="images/products/product-big-5.jpg" data-zoom-image="images/products/product-big-5-zoom.jpg"><img src="images/products/product-small-5.jpg" alt /></a></li>
               <li><a href="http://www.youtube.com/watch?v=JW8M32oHTKw" className="video-link"><img src="images/products/product-small-empty.png" alt /></a></li>
             </ul>
           </div>
         </div>
         <div className="product-info col-sm-8 col-md-4 col-lg-4">
           <div className="product-info__title">
             <h2>White Cropped Sweater</h2>
             <div className="rating product-info__rating visible-xs"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /></div>
           </div>
           <div className="product-info__sku pull-right">SKU: 00065 &nbsp;&nbsp;<span className="label label-success">IN STOCK</span></div>
           <ul id="singleGallery" className="visible-xs">
             <li><img src="images/products/product-big-1.jpg" alt /></li>
             <li><img src="images/products/product-big-2.jpg" alt /></li>
             <li><img src="images/products/product-big-3.jpg" alt /></li>
             <li><img src="images/products/product-big-4.jpg" alt /></li>
             <li><img src="images/products/product-big-5.jpg" alt /></li>
           </ul>
           <div className="price-box product-info__price"><span className="price-box__new">$65.00</span> <span className="price-box__old">$84.00</span></div>
           <div className="rating product-info__rating hidden-xs"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /></div>
           <div className="divider divider--xs product-info__divider" />
           <div className="product-info__description"> Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi. Curabitur molestie euismod erat. Proin eros odio, mattis rutrum, pulvinar et, egestas vitae, magna. Integer semper, velit ut interdum malesuada, diam dolor pellentesque lacus, vitae commodo orci nisi et sem. Pellentesque adipiscing nisi. Nulla facilisi. Mauris lacinia lectus sit amet felis. </div>
           <div className="divider divider--xs product-info__divider" />
           <div className="row">
             <div className="col-xs-6">
               <label>Size:</label>
               <select className="selectpicker" data-style="select--wd" data-width="100%">
                 <option>XS</option>
                 <option>S</option>
                 <option>M</option>
                 <option>L</option>
                 <option>XL</option>
               </select>
             </div>
             <div className="col-xs-6">
               <label>Color:</label>
               <select className="selectpicker" data-style="select--wd" data-width="100%">
                 <option>White</option>
                 <option>Blue</option>
                 <option>Grey</option>
               </select>
             </div>
           </div>
           <div className="divider divider--sm" />
           <label>Quantity:</label>
           <div className="outer">
             <div className="input-group-qty pull-left"> <span className="pull-left"> </span>
               <input type="text" name="quant[1]" className="input-number input--wd input-qty pull-left" defaultValue={1} min={1} max={100} />
               <span className="pull-left btn-number-container">
                 <button type="button" className="btn btn-number btn-number--plus" data-type="plus" data-field="quant[1]"> + </button>
                 <button type="button" className="btn btn-number btn-number--minus" disabled="disabled" data-type="minus" data-field="quant[1]"> – </button>
               </span> </div>
             <div className="pull-left">
               <button className="btn btn--wd text-uppercase">Add to Cart</button>
             </div>
             <div className="social-links social-links--colorize social-links--invert social-links--padding pull-right">
               <ul>
                 <li className="social-links__item"><a className="icon icon-facebook tooltip-link" href="#" data-placement="top" data-toggle="tooltip" data-original-title="Share on facebook" /></li>
                 <li className="social-links__item"><a className="icon icon-twitter tooltip-link" href="#" data-placement="top" data-toggle="tooltip" data-original-title="Share on twitter" /></li>
                 <li className="social-links__item"><a className="icon icon-google tooltip-link" href="#" data-placement="top" data-toggle="tooltip" data-original-title="Share on google" /></li>
                 <li className="social-links__item"><a className="icon icon-pinterest tooltip-link" href="#" data-placement="top" data-toggle="tooltip" data-original-title="Share on pinterest" /></li>
               </ul>
             </div>
           </div>
           <div className="divider divider--xs" />
           <ul className="product-links product-links--inline">
             <li><a href="#"><span className="icon icon-bars" />Add to compare</a></li>
             <li><a href="#"><span className="icon icon-favorite" />Add to wishlist</a></li>
             <li><a href="#"><span className="icon icon-mail-fill" />Email to friend</a></li>
           </ul>
         </div>
         <div className="col-sm-12 col-md-4 col-lg-3">
           <h4>CUSTOM HTML BLOCK</h4>
           <div className="card">
             <div className="card__row"> You can add your content here, like promotions or some additional info </div>
             <a href="#" className="card__row card__row--icon">
               <div className="card__row--icon__icon"> <span className="icon icon-shop-label" /></div>
               <div className="card__row--icon__text">
                 <div className="card__row__title">Special offer: 1+1=3</div>
                 Get a gift!</div>
             </a> <a href="#" className="card__row card__row--icon">
               <div className="card__row--icon__icon"> <span className="icon icon-money" /></div>
               <div className="card__row--icon__text">
                 <div className="card__row__title">Free Reward Card</div>
                 Worth $10, $50, $100. <br />
               </div>
             </a> <a href="#" className="card__row card__row--icon">
               <div className="card__row--icon__icon"> <span className="icon icon-identification-alt" /></div>
               <div className="card__row--icon__text">
                 <div className="card__row__title">Join to our Club</div>
               </div>
             </a> <a className="card__row card__row--icon">
               <div className="card__row--icon__icon"> <span className="icon icon-truck" /></div>
               <div className="card__row--icon__text">
                 <div className="card__row__title">Free shipping</div>
               </div>
             </a> </div>
         </div>
       </div>
     </div>
   </section>
   <section className="content content--fill">
     <div className="container"> 
       {/* Nav tabs */}
       <ul className="nav nav-tabs nav-tabs--wd" role="tablist">
         <li className="active"><a href="#Tab1" aria-controls="home" role="tab" data-toggle="tab" className="text-uppercase">DESCRIPTION</a></li>
         <li><a href="#Tab2" role="tab" data-toggle="tab" className="text-uppercase">Reviews</a></li>
         <li><a href="#Tab3" role="tab" data-toggle="tab" className="text-uppercase">Tags</a></li>
         <li><a href="#Tab4" role="tab" data-toggle="tab" className="text-uppercase">CUSTOM TAB</a></li>
         <li><a href="#Tab5" role="tab" data-toggle="tab" className="text-uppercase">Sizing Guide</a></li>
       </ul>
       {/* Tab panes */}
       <div className="tab-content tab-content--wd">
         <div role="tabpanel" className="tab-pane active" id="Tab1">
           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi. Curabitur molestie euismod erat. Proin eros odio, mattis rutrum, pulvinar et, egestas vitae, magna. Integer semper, velit ut nisl. Nam lectus nulla, bibendum pretium, dictum a, mattis nec, dolor. Nullam id justo sed diam aliquam tincidunt. </p>
           <div className="divider divider--xs" />
           <table className="table table-params">
             <tbody>
               <tr>
                 <td className="text-right"><strong>PROOF</strong></td>
                 <td>PDF Proof</td>
               </tr>
               <tr>
                 <td className="text-right"><strong>SAMPLES</strong></td>
                 <td>Digital, Printed</td>
               </tr>
               <tr>
                 <td className="text-right"><strong>WRAPPING</strong></td>
                 <td>Yes,  No</td>
               </tr>
               <tr>
                 <td className="text-right"><strong>UV GLOSS COATING</strong></td>
                 <td>Yes</td>
               </tr>
               <tr>
                 <td className="text-right"><strong>SHRINK WRAPPING</strong></td>
                 <td>No Shrink Wrapping, Shrink in 25s, Shrink in 50s, Shrink in 100s</td>
               </tr>
               <tr>
                 <td className="text-right"><strong>WEIGHT</strong></td>
                 <td>0.05, 0.06, 0.07ess cards</td>
               </tr>
             </tbody>
           </table>
         </div>
         <div role="tabpanel" className="tab-pane" id="Tab2">
           <h6><strong>CUSTOMER REVIEWS 1 ITEM(S)</strong></h6>
           <p> GREAT!</p>
           <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. </p>
           <div className="divider divider--xs" />
           <table className="table table-params">
             <tbody>
               <tr>
                 <td className="text-right"><strong>QUALITY</strong></td>
                 <td><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
               </tr>
               <tr>
                 <td className="text-right"><strong>PRICE</strong></td>
                 <td><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
               </tr>
               <tr>
                 <td className="text-right"><strong>VALUE</strong></td>
                 <td><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
               </tr>
             </tbody>
           </table>
           <p className="color-light">Review by User / (posted on 16/9/2016)</p>
           <div className="divider divider--xs" />
           <h6><strong>WRITE YOUR OWN REVIEW</strong></h6>
           <p>YOU'RE REVIEWING:  Lorem ipsum dolor sit amet conse ctetur</p>
           <p>HOW DO YOU RATE THIS PRODUCT?</p>
           <div className="divider divider--xs" />
           <div className="table-responsive">
             <table className="table table-params">
               <tbody>
                 <tr>
                   <td className="text-right" />
                   <td className="text-center"><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                   <td className="text-center"><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                   <td className="text-center"><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                   <td className="text-center"><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                   <td className="text-center"><div className="rating rating--big"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star empty-star" /></div></td>
                 </tr>
                 <tr>
                   <td className="text-right"><strong>QUALITY</strong></td>
                   <td className="text-center"><span className="icon-enable">●</span></td>
                   <td className="text-center"><span className="icon-disable">●</span></td>
                   <td className="text-center"><span className="icon-disable">●</span></td>
                   <td className="text-center"><span className="icon-disable">●</span></td>
                   <td className="text-center"><span className="icon-disable">●</span></td>
                 </tr>
                 <tr>
                   <td className="text-right"><strong>PRICE</strong></td>
                   <td className="text-center"><span className="icon-disable">●</span></td>
                   <td className="text-center"><span className="icon-disable">●</span></td>
                   <td className="text-center"><span className="icon-enable">●</span></td>
                   <td className="text-center"><span className="icon-disable">●</span></td>
                   <td className="text-center"><span className="icon-disable">●</span></td>
                 </tr>
                 <tr>
                   <td className="text-right"><strong>VALUE</strong></td>
                   <td className="text-center"><span className="icon-disable">●</span></td>
                   <td className="text-center"><span className="icon-disable">●</span></td>
                   <td className="text-center"><span className="icon-disable">●</span></td>
                   <td className="text-center"><span className="icon-enable">●</span></td>
                   <td className="text-center"><span className="icon-disable">●</span></td>
                 </tr>
               </tbody>
             </table>
           </div>
           <div className="divider divider--xs" />
           <form action="#" className="contact-form">
             <label>Nickname<span className="required">*</span></label>
             <input type="text" className="input--wd input--wd--full" />
             <label>Summary of Your Review<span className="required">*</span></label>
             <input type="text" className="input--wd input--wd--full" />
             <label>Review<span className="required">*</span></label>
             <textarea className="textarea--wd input--wd--full" defaultValue={""} />
             <div className="divider divider--xs" />
             <button type="submit" className="btn btn--wd text-uppercase wave">Submit Review</button>
           </form>
         </div>
         <div role="tabpanel" className="tab-pane" id="Tab3">
           <h6><strong>OTHER PEOPLE MARKED THIS PRODUCT WITH THESE TAGS:</strong></h6>
           <p className="color-light">Pattern (1)</p>
           <div className="divider divider--xs" />
           <p className="text-uppercase">Add Your Tags:</p>
           <form action="#" className="contact-form">
             <input type="text" className="input--wd input--wd--full" />
             <p className="color-light">Use spaces to separate tags. Use single quotes (') for phrases.</p>
             <div className="divider divider--xs" />
             <button type="submit" className="btn btn--wd text-uppercase wave">Add Tags</button>
           </form>
         </div>
         <div role="tabpanel" className="tab-pane" id="Tab4">
           <h6><strong>Lorem ipsum dolor sit amet conse ctetur adipisicing elit</strong></h6>
           <div className="divider divider--xs" />
           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem. Vestibulum justo. Nulla mauris ipsum, convallis ut, vestibulum eu, tincidunt vel, nisi. Curabitur molestie euismod erat. Proin eros odio, mattis rutrum, pulvinar et, egestas vitae, magna. Integer semper, velit ut nisl. Nam lectus nulla, bibendum pretium, dictum a, mattis nec, dolor. Nullam id justo sed diam aliquam tincidunt. </p>
           <div className="row">
             <div className="col-sm-6">
               <ul className="simple-list">
                 <li>Lorem ipsum dolor amet</li>
                 <li>Consectetur adipiscing elit </li>
                 <li>Integer molestie lorem massa </li>
                 <li>Facilisis in pretium nisl aliquet</li>
               </ul>
               <div className="divider divider--xs visible-sm visible-xs" />
             </div>
             <div className="col-sm-6">
               <ul className="simple-list">
                 <li>Lorem ipsum dolor amet</li>
                 <li>Consectetur adipiscing elit </li>
                 <li>Integer molestie lorem massa </li>
                 <li>Facilisis in pretium nisl aliquet </li>
               </ul>
             </div>
           </div>
         </div>
         <div role="tabpanel" className="tab-pane" id="Tab5">
           <h6 className="text-uppercase"><strong>Clothing - Single Size Conversion (Continued)</strong></h6>
           <div className="divider divider--xs" />
           <div className="table-responsive">
             <table className="table table-params">
               <tbody>
                 <tr>
                   <td className="text-right"><strong>UK</strong></td>
                   <td><ul className="sizes-row">
                       <li>18</li>
                       <li>20</li>
                       <li>22</li>
                       <li>24</li>
                       <li>26</li>
                     </ul></td>
                 </tr>
                 <tr>
                   <td className="text-right"><strong>European</strong></td>
                   <td><ul className="sizes-row">
                       <li>46</li>
                       <li>48</li>
                       <li>50</li>
                       <li>52</li>
                       <li>54</li>
                     </ul></td>
                 </tr>
                 <tr>
                   <td className="text-right"><strong>US</strong></td>
                   <td><ul className="sizes-row">
                       <li>14</li>
                       <li>16</li>
                       <li>18</li>
                       <li>20</li>
                       <li>22</li>
                     </ul></td>
                 </tr>
                 <tr>
                   <td className="text-right"><strong>Australia</strong></td>
                   <td><ul className="sizes-row">
                       <li>8</li>
                       <li>10</li>
                       <li>12</li>
                       <li>14</li>
                       <li>16</li>
                     </ul></td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
   </section>
   <section className="content">
     <div className="container"> 
       {/* Modal */}
       <div className="modal quick-view zoom" id="quickView" style={{opacity: 1}}>
         <div className="modal-dialog">
           <div className="modal-content"> </div>
         </div>
       </div>
       {/* /.modal */}
       <h2 className="text-center text-uppercase">Upsells Products</h2>
       <div className="row product-carousel mobile-special-arrows animated-arrows product-grid four-in-row">
         <div className="product-preview-wrapper">
           <div className="product-preview">
             <div className="product-preview__image"><a href="product.html"><img src="images/products/product-empty.png" data-lazy="images/products/product-1.jpg" alt /></a></div>
             <div className="product-preview__label product-preview__label--left product-preview__label--new"><span>new</span></div>
             <div className="product-preview__label product-preview__label--right product-preview__label--sale"><span>sale<br />
                 -10%</span></div>
             <div className="product-preview__info text-center">
               <div className="product-preview__info__btns"><a href="#" className="btn btn--round"><span className="icon-ecommerce" /></a> <a href="quick-view.html" className="btn btn--round btn--dark btn-quickview" data-toggle="modal" data-target="#quickView"><span className="icon icon-eye" /></a></div>
               <div className="product-preview__info__title">
                 <h2><a href="#">Fast Seconds Knit White</a></h2>
               </div>
               <div className="rating"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /></div>
               <ul className="options-swatch options-swatch--color">                  <li><a href="#"><span className="swatch-label"><img src="images/colors/blue.png" width={10} height={10} alt /></span></a></li>
                 <li><a href="#"><span className="swatch-label"><img src="images/colors/yellow.png" width={10} height={10} alt /></span></a></li>
                 <li><a href="#"><span className="swatch-label"><img src="images/colors/green.png" width={10} height={10} alt /></span></a></li>
                 <li><a href="#"><span className="swatch-label"><img src="images/colors/dark-grey.png" width={10} height={10} alt /></span></a></li>
                 <li><a href="#"><span className="swatch-label"><img src="images/colors/grey.png" width={10} height={10} alt /></span></a></li>
                 <li><a href="#"><span className="swatch-label"><img src="images/colors/red.png" width={10} height={10} alt /></span></a></li>
                 <li><a href="#"><span className="swatch-label"><img src="images/colors/white.png" width={10} height={10} alt /></span></a></li>
               </ul>
               <div className="price-box "><span className="price-box__new">$65.00</span> <span className="price-box__old">$84.00</span></div>
               <div className="product-preview__info__description">
                 <p>Nulla at mauris leo. Donec quis ex elementum, tincidunt elit quis, cursus tortor. Sed sollicitudin enim metus, ut hendrerit orci dignissim venenatis.</p>
                 <p>Suspendisse consectetur odio diam, ut consequat quam aliquet at.</p>
               </div>
               <div className="product-preview__info__link"><a href="#" className="compare-link"><span className="icon icon-bars" /><span className="product-preview__info__link__text">Add to compare</span></a> <a href="#"><span className="icon icon-favorite" /><span className="product-preview__info__link__text">Add to wishlist</span></a><a href="#" className="btn btn--wd buy-link"><span className="icon icon-ecommerce" /><span className="product-preview__info__link__text">Add to cart</span></a></div>
             </div>
           </div>
         </div>
         <div className="product-preview-wrapper">
           <div className="product-preview">
             <div className="product-preview__image"><a href="product.html"><img src="images/products/product-empty.png" data-lazy="images/products/product-2.jpg" alt /></a></div>
             <div className="product-preview__info text-center">
               <div className="product-preview__info__btns"><a href="#" className="btn btn--round"><span className="icon-ecommerce" /></a> <a href="quick-view.html" className="btn btn--round btn--dark btn-quickview" data-toggle="modal" data-target="#quickView"><span className="icon icon-eye" /></a></div>
               <div className="product-preview__info__title">
                 <h2><a href="#">Fast Seconds Knit White</a></h2>
               </div>
               <div className="rating"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /></div>
               <ul className="options-swatch options-swatch--color">                  <li><a href="#"><span className="swatch-label"><img src="images/colors/blue.png" width={10} height={10} alt /></span></a></li>
                 <li><a href="#"><span className="swatch-label"><img src="images/colors/yellow.png" width={10} height={10} alt /></span></a></li>
                 <li><a href="#"><span className="swatch-label"><img src="images/colors/green.png" width={10} height={10} alt /></span></a></li>
                 <li><a href="#"><span className="swatch-label"><img src="images/colors/dark-grey.png" width={10} height={10} alt /></span></a></li>
                 <li><a href="#"><span className="swatch-label"><img src="images/colors/grey.png" width={10} height={10} alt /></span></a></li>
                 <li><a href="#"><span className="swatch-label"><img src="images/colors/red.png" width={10} height={10} alt /></span></a></li>
                 <li><a href="#"><span className="swatch-label"><img src="images/colors/white.png" width={10} height={10} alt /></span></a></li>
               </ul>
               <div className="price-box"><span className="price-box__new">$65.00</span> <span className="price-box__old">$84.00</span></div>
               <div className="product-preview__info__description">
                 <p>Nulla at mauris leo. Donec quis ex elementum, tincidunt elit quis, cursus tortor. Sed sollicitudin enim metus, ut hendrerit orci dignissim venenatis.</p>
                 <p>Suspendisse consectetur odio diam, ut consequat quam aliquet at.</p>
               </div>
               <div className="product-preview__info__link"><a href="#" className="compare-link"><span className="icon icon-bars" /><span className="product-preview__info__link__text">Add to compare</span></a> <a href="#"><span className="icon icon-favorite" /><span className="product-preview__info__link__text">Add to wishlist</span></a><a href="#" className="btn btn--wd buy-link"><span className="icon icon-ecommerce" /><span className="product-preview__info__link__text">Add to cart</span></a></div>
             </div>
           </div>
         </div>
         <div className="product-preview-wrapper">
           <div className="product-preview">
             <div className="product-preview__image"><a href="product.html"><img src="images/products/product-empty.png" data-lazy="images/products/product-3.jpg" alt /></a></div>
             <div className="product-preview__info text-center">
               <div className="product-preview__info__btns"><a href="#" className="btn btn--round"><span className="icon-ecommerce" /></a> <a href="quick-view.html" className="btn btn--round btn--dark btn-quickview" data-toggle="modal" data-target="#quickView"><span className="icon icon-eye" /></a></div>
               <div className="product-preview__info__title">
                 <h2><a href="#">Fast Seconds Knit White</a></h2>
               </div>
               <div className="rating"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /></div>
               <div className="price-box">$65.00</div>
               <div className="product-preview__info__description">
                 <p>Nulla at mauris leo. Donec quis ex elementum, tincidunt elit quis, cursus tortor. Sed sollicitudin enim metus, ut hendrerit orci dignissim venenatis.</p>
                 <p>Suspendisse consectetur odio diam, ut consequat quam aliquet at.</p>
               </div>
               <div className="product-preview__info__link"><a href="#" className="compare-link"><span className="icon icon-bars" /><span className="product-preview__info__link__text">Add to compare</span></a> <a href="#"><span className="icon icon-favorite" /><span className="product-preview__info__link__text">Add to wishlist</span></a><a href="#" className="btn btn--wd buy-link"><span className="icon icon-ecommerce" /><span className="product-preview__info__link__text">Add to cart</span></a></div>
             </div>
           </div>
         </div>
         <div className="product-preview-wrapper">
           <div className="product-preview">
             <div className="product-preview__image"><a href="product.html"><img src="images/products/product-empty.png" data-lazy="images/products/product-4.jpg" alt /></a></div>
             <div className="product-preview__info text-center">
               <div className="product-preview__info__btns"><a href="#" className="btn btn--round"><span className="icon-ecommerce" /></a> <a href="quick-view.html" className="btn btn--round btn--dark btn-quickview" data-toggle="modal" data-target="#quickView"><span className="icon icon-eye" /></a></div>
               <div className="product-preview__info__title">
                 <h2><a href="#">Fast Seconds Knit White</a></h2>
               </div>
               <div className="rating"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /></div>
               <div className="price-box">$65.00</div>
               <div className="product-preview__info__description">
                 <p>Nulla at mauris leo. Donec quis ex elementum, tincidunt elit quis, cursus tortor. Sed sollicitudin enim metus, ut hendrerit orci dignissim venenatis.</p>
                 <p>Suspendisse consectetur odio diam, ut consequat quam aliquet at.</p>
               </div>
               <div className="product-preview__info__link"><a href="#" className="compare-link"><span className="icon icon-bars" /><span className="product-preview__info__link__text">Add to compare</span></a> <a href="#"><span className="icon icon-favorite" /><span className="product-preview__info__link__text">Add to wishlist</span></a><a href="#" className="btn btn--wd buy-link"><span className="icon icon-ecommerce" /><span className="product-preview__info__link__text">Add to cart</span></a></div>
             </div>
           </div>
         </div>
         <div className="product-preview-wrapper">
           <div className="product-preview">
             <div className="product-preview__image"><a href="product.html"><img src="images/products/product-empty.png" data-lazy="images/products/product-5.jpg" alt /></a></div>
             <div className="product-preview__info text-center">
               <div className="product-preview__info__btns"><a href="#" className="btn btn--round"><span className="icon-ecommerce" /></a> <a href="quick-view.html" className="btn btn--round btn--dark btn-quickview" data-toggle="modal" data-target="#quickView"><span className="icon icon-eye" /></a></div>
               <div className="product-preview__info__title">
                 <h2><a href="#">Fast Seconds Knit White</a></h2>
               </div>
               <div className="rating"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /></div>
               <div className="price-box">$65.00</div>
               <div className="product-preview__info__description">
                 <p>Nulla at mauris leo. Donec quis ex elementum, tincidunt elit quis, cursus tortor. Sed sollicitudin enim metus, ut hendrerit orci dignissim venenatis.</p>
                 <p>Suspendisse consectetur odio diam, ut consequat quam aliquet at.</p>
               </div>
               <div className="product-preview__info__link"><a href="#" className="compare-link"><span className="icon icon-bars" /><span className="product-preview__info__link__text">Add to compare</span></a> <a href="#"><span className="icon icon-favorite" /><span className="product-preview__info__link__text">Add to wishlist</span></a><a href="#" className="btn btn--wd buy-link"><span className="icon icon-ecommerce" /><span className="product-preview__info__link__text">Add to cart</span></a></div>
             </div>
           </div>
         </div>
         <div className="product-preview-wrapper">
           <div className="product-preview">
             <div className="product-preview__image"><a href="product.html"><img src="images/products/product-empty.png" data-lazy="images/products/product-6.jpg" alt /></a></div>
             <div className="product-preview__info text-center">
               <div className="product-preview__info__btns"><a href="#" className="btn btn--round"><span className="icon-ecommerce" /></a> <a href="quick-view.html" className="btn btn--round btn--dark btn-quickview" data-toggle="modal" data-target="#quickView"><span className="icon icon-eye" /></a></div>
               <div className="product-preview__info__title">
                 <h2><a href="#">Fast Seconds Knit White</a></h2>
               </div>
               <div className="rating"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /></div>
               <div className="price-box">$65.00</div>
               <div className="product-preview__info__description">
                 <p>Nulla at mauris leo. Donec quis ex elementum, tincidunt elit quis, cursus tortor. Sed sollicitudin enim metus, ut hendrerit orci dignissim venenatis.</p>
                 <p>Suspendisse consectetur odio diam, ut consequat quam aliquet at.</p>
               </div>
               <div className="product-preview__info__link"><a href="#" className="compare-link"><span className="icon icon-bars" /><span className="product-preview__info__link__text">Add to compare</span></a> <a href="#"><span className="icon icon-favorite" /><span className="product-preview__info__link__text">Add to wishlist</span></a><a href="#" className="btn btn--wd buy-link"><span className="icon icon-ecommerce" /><span className="product-preview__info__link__text">Add to cart</span></a></div>
             </div>
           </div>
         </div>
         <div className="product-preview-wrapper">
           <div className="product-preview">
             <div className="product-preview__image"><a href="product.html"><img src="images/products/product-empty.png" data-lazy="images/products/product-7.jpg" alt /></a></div>
             <div className="product-preview__info text-center">
               <div className="product-preview__info__btns"><a href="#" className="btn btn--round"><span className="icon-ecommerce" /></a> <a href="quick-view.html" className="btn btn--round btn--dark btn-quickview" data-toggle="modal" data-target="#quickView"><span className="icon icon-eye" /></a></div>
               <div className="product-preview__info__title">
                 <h2><a href="#">Fast Seconds Knit White</a></h2>
               </div>
               <div className="rating"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /></div>
               <div className="price-box">$65.00</div>
               <div className="product-preview__info__description">
                 <p>Nulla at mauris leo. Donec quis ex elementum, tincidunt elit quis, cursus tortor. Sed sollicitudin enim metus, ut hendrerit orci dignissim venenatis.</p>
                 <p>Suspendisse consectetur odio diam, ut consequat quam aliquet at.</p>
               </div>
               <div className="product-preview__info__link"><a href="#" className="compare-link"><span className="icon icon-bars" /><span className="product-preview__info__link__text">Add to compare</span></a> <a href="#"><span className="icon icon-favorite" /><span className="product-preview__info__link__text">Add to wishlist</span></a><a href="#" className="btn btn--wd buy-link"><span className="icon icon-ecommerce" /><span className="product-preview__info__link__text">Add to cart</span></a></div>
             </div>
           </div>
         </div>
         <div className="product-preview-wrapper">
           <div className="product-preview">
             <div className="product-preview__image"><a href="product.html"><img src="images/products/product-empty.png" data-lazy="images/products/product-8.jpg" alt /></a></div>
             <div className="product-preview__info text-center">
               <div className="product-preview__info__btns"><a href="#" className="btn btn--round"><span className="icon-ecommerce" /></a> <a href="quick-view.html" className="btn btn--round btn--dark btn-quickview" data-toggle="modal" data-target="#quickView"><span className="icon icon-eye" /></a></div>
               <div className="product-preview__info__title">
                 <h2><a href="#">Fast Seconds Knit White</a></h2>
               </div>
               <div className="rating"><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /><span className="icon-star" /></div>
               <div className="price-box">$65.00</div>
               <div className="product-preview__info__description">
                 <p>Nulla at mauris leo. Donec quis ex elementum, tincidunt elit quis, cursus tortor. Sed sollicitudin enim metus, ut hendrerit orci dignissim venenatis.</p>
                 <p>Suspendisse consectetur odio diam, ut consequat quam aliquet at.</p>
               </div>
               <div className="product-preview__info__link"><a href="#" className="compare-link"><span className="icon icon-bars" /><span className="product-preview__info__link__text">Add to compare</span></a> <a href="#"><span className="icon icon-favorite" /><span className="product-preview__info__link__text">Add to wishlist</span></a><a href="#" className="btn btn--wd buy-link"><span className="icon icon-ecommerce" /><span className="product-preview__info__link__text">Add to cart</span></a></div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 </div>

            )
                return validProduct;
        }
        
    }
}

export default ProductView;
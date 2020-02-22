import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

const reviews = (props) =>{
    return(
        <Aux>
            <div className="row padding-top-3x mb-3">
            <div className="col-lg-10 offset-lg-1">
                <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item"><a className="nav-link active" href="#description" data-toggle="tab" role="tab">Description</a></li>
                <li className="nav-item"><a className="nav-link" href="#reviews" data-toggle="tab" role="tab">Reviews (3)</a></li>
                </ul>
                <div className="tab-content">
                <div className="tab-pane fade show active" id="description" role="tabpanel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error blanditiis a, deserunt magnam pariatur quam suscipit quae. Veniam, deserunt reprehenderit quasi hic recusandae itaque omnis fugiat animi architecto facilis repellendus. Commodi dolorem, eius consectetur. Amet maiores nemo at nobi s aspernatur velit, sequi odio, a veritatis inventore autem esse provident in? Placeat, sunt!</p>
                    <p className="mb-30">Iste assumenda, vitae, aliquam excepturi libero quia ullam quisquam tenetur id sint labore. Pariatur praesentium velit, fugit facere maxime voluptates optio qui? Quidem obcaecati necessitatibus rem aspernatur, mollitia, assumenda explicabo numquam minus eos sapiente totam dicta, laborum dolorum! Vitae distinctio quos non ut fugiat.</p>
                    <div className="row">
                    <div className="col-sm-6">
                        <dl>
                        <dt>Materials:</dt>
                        <dd>Leather, Cotton, Rubber, Foam</dd>
                        <dt>Available Sizes:</dt>
                        <dd>8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5</dd>
                        <dt>Available Colors:</dt>
                        <dd>White/Red/Blue, Black/Orange/Green</dd>
                        </dl>
                    </div>
                    <div className="col-sm-6">
                        <dl>
                        <dt>Model Year:</dt>
                        <dd>2016</dd>
                        <dt>Manufacturer:</dt>
                        <dd>Reebok Inc.</dd>
                        <dt>Made In:</dt>
                        <dd>Taiwan</dd>
                        </dl>
                    </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="reviews" role="tabpanel">
                    {/* Review*/}
                    <div className="comment">
                    <div className="comment-author-ava"><img src="img/reviews/01.jpg" alt="Review author" /></div>
                    <div className="comment-body">
                        <div className="comment-header d-flex flex-wrap justify-content-between">
                        <h4 className="comment-title">Average quality for the price</h4>
                        <div className="mb-2">
                            <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star" /><i className="icon-star" />
                            </div>
                        </div>
                        </div>
                        <p className="comment-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        <div className="comment-footer"><span className="comment-meta">Francis Burton</span></div>
                    </div>
                    </div>
                    {/* Review*/}
                    <div className="comment">
                    <div className="comment-author-ava"><img src="img/reviews/02.jpg" alt="Review author" /></div>
                    <div className="comment-body">
                        <div className="comment-header d-flex flex-wrap justify-content-between">
                        <h4 className="comment-title">My husband love his new...</h4>
                        <div className="mb-2">
                            <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" />
                            </div>
                        </div>
                        </div>
                        <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="comment-footer"><span className="comment-meta">Maggie Scott</span></div>
                    </div>
                    </div>
                    {/* Review*/}
                    <div className="comment">
                    <div className="comment-author-ava"><img src="img/reviews/03.jpg" alt="Review author" /></div>
                    <div className="comment-body">
                        <div className="comment-header d-flex flex-wrap justify-content-between">
                        <h4 className="comment-title">Soft, comfortable, quite durable...</h4>
                        <div className="mb-2">
                            <div className="rating-stars"><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star filled" /><i className="icon-star" />
                            </div>
                        </div>
                        </div>
                        <p className="comment-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <div className="comment-footer"><span className="comment-meta">Jacob Hammond</span></div>
                    </div>
                    </div>
                    {/* Review Form*/}
                    <h5 className="mb-30 padding-top-1x">Leave Review</h5>
                    <form className="row" method="post">
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="review_name">Your Name</label>
                        <input className="form-control form-control-rounded" type="text" id="review_name" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="review_email">Your Email</label>
                        <input className="form-control form-control-rounded" type="email" id="review_email" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="review_subject">Subject</label>
                        <input className="form-control form-control-rounded" type="text" id="review_subject" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                        <label htmlFor="review_rating">Rating</label>
                        <select className="form-control form-control-rounded" id="review_rating">
                            <option>5 Stars</option>
                            <option>4 Stars</option>
                            <option>3 Stars</option>
                            <option>2 Stars</option>
                            <option>1 Star</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                        <label htmlFor="review_text">Review </label>
                        <textarea className="form-control form-control-rounded" id="review_text" rows={8} required defaultValue={""} />
                        </div>
                    </div>
                    <div className="col-12 text-right">
                        <button className="btn btn-outline-primary" type="submit">Submit Review</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </Aux>
    );
}

export default reviews;
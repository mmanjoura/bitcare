import React, {Component} from 'react';

class Checkout extends Component {
    render(){
        return(
            <section className="content">
            <div className="container">
              <h2 className="text-uppercase">Checkout</h2>
              <div className="row">
                <div className="col-md-8 col-lg-9">
                  <div className="panel-group" id="checkout">
                    <div className="panel panel-checkout" role="tablist">
                      <div className="panel-heading active" role="tab">
                        <h4 className="panel-title"> <a role="button" data-toggle="collapse" href="#collapseOne">ESTIMATE SHIPPING AND TAX</a> </h4>
                        <div className="panel-heading__number">1.</div>
                      </div>
                      <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel">
                        <div className="panel-body">
                          <div className="row">
                            <div className="col-sm-6">
                              <h6 className="text-uppercase"><strong>Checkout as a Guest or Register</strong></h6>
                              <p> Register with us for future convenience: </p>
                              <form>
                                <label className="radio">
                                  <input id="radio1" type="radio" name="radios" defaultChecked />
                                  <span className="outer"><span className="inner" /></span>Checkout as Guest</label>
                                <label className="radio">
                                  <input id="radio1" type="radio" name="radios" defaultChecked />
                                  <span className="outer"><span className="inner" /></span>Register</label>
                                <div className="divider divider--xs" />
                                <h6 className="text-uppercase"><strong>Register and save time!</strong></h6>
                                <p> Register with us for future convenience: </p>
                                <ul>
                                  <li><strong>Fast and easy check out</strong></li>
                                  <li><strong> Easy access to your order history and status</strong></li>
                                </ul>
                                <div className="divider divider--xs" />
                                <button className="btn btn--wd" type="submit">CONTINUE</button>
                              </form>
                            </div>
                            <div className="divider divider--sm visible-xs"> </div>
                            <div className="col-sm-6">
                              <h6 className="text-uppercase"><strong>Login</strong></h6>
                              <p><a href="#">Already registered?</a></p>
                              <p>Please log in below: </p>
                              <form action="#">
                                <input className="input--wd input--wd--full" placeholder="E-mail address" />
                                <div className="divider divider--xxs"> </div>
                                <input type="password" className="input--wd input--wd--full" placeholder="Password" />
                                <div className="divider divider--xxs"> </div>
                                <p> <a href="#">Forgot your password? </a></p>
                                <div className="divider divider--sm"> </div>
                                <button className="btn btn--wd" type="submit">LOGIN</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-checkout" role="tablist">
                      <div className="panel-heading" role="tab">
                        <h4 className="panel-title"> <a role="button" data-toggle="collapse" href="#collapseTwo">BILLING INFORMATION</a> </h4>
                        <div className="panel-heading__number">2.</div>
                      </div>
                      <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel">
                        <div className="panel-body">
                          <p>Ad tota labores appellantur vim. Ex erat aeterno diceret mel, at viderer euripidis sea. Autem scripserit vim ne, mel aliquip percipitur ad. Id vix rebum mnesarchum. Duis bonorum ne pro, ex pri quis nonumes voluptua.</p>
                          <p>Populo concludaturque sit cu, his erat viderer ea. Eum ea enim malorum verterem, enim perfecto platonem cum no. Hinc corpora id quo, has justo electram consequuntur ex. Mei detraxit recteque scriptorem in, mei populo tractatos cu, et mei idque quidam expetenda. Eripuit persequeris ut cum. Ei novum inciderint his, ex insolens suavitate per. Habemus fuisset quaestio ius cu.</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-checkout" role="tablist">
                      <div className="panel-heading" role="tab">
                        <h4 className="panel-title"> <a role="button" data-toggle="collapse" href="#collapseThree">SHIPPING INFORMATION</a> </h4>
                        <div className="panel-heading__number">3.</div>
                      </div>
                      <div id="collapseThree" className="panel-collapse collapse" role="tabpanel">
                        <div className="panel-body">
                          <p>Lorem ipsum dolor sit amet, cu dolorum consulatu contentiones mei, ei eos duis solet tollit. Ea vis reque minimum probatus. Te mel mundi lucilius salutatus, ius an idque tollit recusabo. No laudem repudiandae est, duo mollis facilis an. Vim et prima dolore adolescens, simul vitae nominavi et est. </p>
                          <p>Duo ex ancillae dissentiet deterruisset. Ea ius vide accumsan, usu no choro evertitur. Eum sale libris ut, no mollis facilis reprimique sed. Sale dissentias reprehendunt ius no. At dolore forensibus ius, sit cu odio tacimates incorrupte. Ipsum gubergren et eam, laudem aliquam tincidunt nec ad. </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-checkout" role="tablist">
                      <div className="panel-heading" role="tab">
                        <h4 className="panel-title"> <a role="button" data-toggle="collapse" href="#collapseFour">SHIPPING METHOD</a> </h4>
                        <div className="panel-heading__number">4.</div>
                      </div>
                      <div id="collapseFour" className="panel-collapse collapse" role="tabpanel">
                        <div className="panel-body">
                          <p>Populo concludaturque sit cu, his erat viderer ea. Eum ea enim malorum verterem, enim perfecto platonem cum no. Hinc corpora id quo, has justo electram consequuntur ex. Mei detraxit recteque scriptorem in, mei populo tractatos cu, et mei idque quidam expetenda. Eripuit persequeris ut cum. Ei novum inciderint his, ex insolens suavitate per. Habemus fuisset quaestio ius cu.</p>
                          <p>Aliquip facilis reformidans no ius, maiorum evertitur te vix, cu sit causae vituperata. Id vel nusquam volumus officiis. No vim tota recusabo, sed ei antiopam praesent. Ut utinam noster delectus vim, ex velit mazim eum. Nam ea commune convenire, et nam quodsi ullamcorper. </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-checkout" role="tablist">
                      <div className="panel-heading" role="tab">
                        <h4 className="panel-title"> <a role="button" data-toggle="collapse" href="#collapseFive">PAYMENT INFORMATION</a> </h4>
                        <div className="panel-heading__number">5.</div>
                      </div>
                      <div id="collapseFive" className="panel-collapse collapse" role="tabpanel">
                        <div className="panel-body">
                          <p>Ei eam lorem nulla, mel id dicant gloriatur. Mel te tota senserit, ea regione docendi periculis vix. Ne usu dictas graecis, no est salutandi disputando, vis debitis reprehendunt cu. Quas labitur at eam, ex libris eripuit consulatu vix, sit in scripta sanctus maluisset. Quis dictas aliquip id sit, vix ei alia phaedrum consulatu. </p>
                          <p>Commune insolens te sea. Unum duis vix ad, eu mei inermis expetendis, ut vidit facete vivendo qui. Pro in decore labitur. Ei usu diam iuvaret. Noster scribentur has at, nam id modus oratio electram. Laoreet suavitate ad vis, ei eos quem agam, odio assentior quo te. </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-checkout" role="tablist">
                      <div className="panel-heading" role="tab">
                        <h4 className="panel-title"> <a role="button" data-toggle="collapse" href="#collapseSix">ORDER REVIEW</a> </h4>
                        <div className="panel-heading__number">6.</div>
                      </div>
                      <div id="collapseSix" className="panel-collapse collapse" role="tabpanel">
                        <div className="panel-body">
                          <p>Ius dicant partem habemus ei. Ea prompta dolorum sea, quo oratio expetenda ne. Pri at oblique mandamus, ius ad augue platonem, ad qui quis explicari disputationi. Aliquid dolores per no, veri appetere iracundia id sea. Nibh volumus ponderum et mea, ut eam detracto nominati. Est choro putant an, mel ne tollit graeco definiebas. Sea utinam voluptatibus comprehensam at. </p>
                          <p>Omnes interesset pro eu, at ullum dicit dicunt sed. Vis eirmod noluisse ei, dico gubergren liberavisse in duo, pro cu vide elit ponderum. Essent perfecto voluptaria eu nec, pro ferri facilisi disputando et, ea sed labores accusamus tincidunt. Mei animal suscipit ne, duo et oblique reprehendunt. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <h4 className="font1 text-uppercase">Your Checkout Progress</h4>
                  <ul className="category-list">
                    <li><a href="#">Billing Address</a></li>
                    <li><a href="#"> Shipping Address</a></li>
                    <li><a href="#">Shipping Method</a></li>
                    <li><a href="#">Payment Method</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Checkout;
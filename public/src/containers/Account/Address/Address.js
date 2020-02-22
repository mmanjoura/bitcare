import React, {Component} from 'react';

class Address extends Component {
    render(){
        return(
            <section className="content">
            <div className="container">
              <h2 className="text-uppercase">Account</h2>
              <div className="card card--padding">
                <div className="card__row-line">
                  <h4 className="text-uppercase h-pad-xs">My Account</h4>
                </div>
                <div className="card__row-line">
                  <p><a href="#" className="btn btn--wd text-uppercase">Add new addresses</a></p>
                  <p>&lt;&nbsp; <a href="#">Return to account page</a></p>
                </div>
                <div className="card__row-line">
                  <h4 className="text-uppercase h-pad-xs">2177 Pride AvenueBrooklyn (DEFAULT ADDRESS)</h4>
                  <table className="table-address">
                    <tbody>
                      <tr>
                        <td>Name:</td>
                        <td><strong>Alex Smith</strong></td>
                      </tr>
                      <tr>
                        <td>E-mail:</td>
                        <td><a href="mailto:alexsmith@hotmail.com"><strong>alexsmith@hotmail.com</strong></a></td>
                      </tr>
                      <tr>
                        <td>Address:</td>
                        <td><strong>2177 Pride AvenueBrooklyn, <br />
                            NY 11206</strong></td>
                      </tr>
                      <tr>
                        <td>Phone:</td>
                        <td><strong>718-387-4726</strong></td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#" className="btn btn--wd text-uppercase">Edit</a>&nbsp;&nbsp;&nbsp;<a href="#" className="btn btn--wd btn--light text-uppercase">Delete</a> </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Address
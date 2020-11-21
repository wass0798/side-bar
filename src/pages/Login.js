import React, { Component } from 'react';


export class Login extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange} = this.props;

        return (
            
            <div className="form-container" >
                 
                <h1 className="mb-5">Choix communes</h1>
                <div className="form-group">
                    <label htmlFor="commune">Selectionner 3 communes:</label>
                 
                   <input type="text" className="form-control" name="commune" onChange={inputChange('commune')} value={values.commune} />
                   
                </div>

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                  
                </div>


           
              
    
            </div>
           
        )
    }
}
export default Login
import React, { Component } from 'react'

export class AccountSetup extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    
    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Profil intermédiaire</h1>
                <div className="form-group">
                    <label htmlFor="nom">Nom:</label>
                    <input type="text" className="form-control" name="nom" onChange={inputChange('nom')} value={values.nom} />
                </div>
                <div className="form-group">
                    <label htmlFor=" prenom">Prénom:</label>
                    <input type="text" className="form-control" name="prenom" onChange={inputChange('prenom')} value={values.prenom} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Télephone:</label>
                    <input type="number" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>
                <div className="form-group">
                    <label htmlFor="adresse">Adresse:</label>
                    <input type="text" className="form-control" name="adresse" onChange={inputChange('adresse')} value={values.adresse} />
                </div>
                <div className="form-group">
                    <label htmlFor="log">username:</label>
                    <input type="text" className="form-control" name="log" onChange={inputChange('log')} value={values.log} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" name="password" onChange={inputChange('password')} value={values.password} />
                </div>

                <br />

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

export default AccountSetup
import React, { Component } from 'react'

export class SocialProfiles extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    
  
 

    
    render() {
        const { values, inputChange,fileSelect} = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5"> Profile métier</h1>
                <div className="form-group">
                    <label htmlFor="Nregistre">Numéro Registre de commerce:</label>
                    <input type="text" className="form-control" name="Nregistre" onChange={inputChange('Nregistre')} value={values.Nregistre} />
                </div>
                <div className="form-group">
                    <label htmlFor="villeRC">Ville RC:</label>
                    <input type="text" className="form-control" name="villeRC" onChange={inputChange('villeRC')} value={values.villeRC} />
                </div>
                <div className="form-group">
                    <label htmlFor="Gerant">Gérant:</label>
                    <input type="text" className="form-control" name="Gerant" onChange={inputChange('Gerant')} value={values.Gerant} />
                </div>
                <div className="form-group">
                    <label htmlFor="fichier">Télecharger fichier:  </label><br/>
                    <input type="file"  name="fichier" onChange={fileSelect('fichier')} value={values.fichier}/>
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

export default SocialProfiles

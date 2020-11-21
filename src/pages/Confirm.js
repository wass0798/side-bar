import React, { Component } from 'react'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { nom,prenom,email, phone,adresse, password, Nregistre, villeRC, Gerant,fichier,log }
        } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Confirmation</h1>
                <ul class="list-group">
                    <li class="list-group-item">Username: {log}</li>
                    <li class="list-group-item">Nom: {nom}</li>
                    <li class="list-group-item">Prénom: {prenom}</li>
                    <li class="list-group-item">E-mail: {email}</li>
                    <li class="list-group-item">Télephone: {phone}</li>
                    <li class="list-group-item">Adresse: {adresse}</li>
                    <li class="list-group-item">Numéro Registre de commerce:{Nregistre}</li>
                    <li class="list-group-item">Ville RC: {villeRC}</li>
                    <li class="list-group-item">Gérant: {Gerant}</li>
                    <li class="list-group-item">Fichier: {fichier}</li>
                </ul>

                <br /><br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Envoyer</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confirm
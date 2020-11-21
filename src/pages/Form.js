import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import SocialProfiles from './SocialProfiles';
import Confirm from './Confirm';
import Login from './Login.js';
import Success from './Success';

import '../App.css'
export class Form extends Component {

   




    state = {
        step: 1,
        nom: '',
        prenom: '',
        email: '',
        phone: '',
        adresse:'',
        password: '',
        log:'',
        Nregistre: '',
        villeRC: '',
        Gerant: '',
        fichier:'',
        commune:''
    };
    
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
         this.setState({ step: step - 1 });
    
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };
    fileSelect = input => e =>{
        this.setState({
            [input]: e.target.files[0].value
        });
    };  
    render() {
        const { step } = this.state;
        const { nom,prenom, email, phone,adresse, password,log, Nregistre, villeRC, Gerant,fichier,commune } = this.state;
        const values = { nom,prenom, email, phone,adresse, password,log, Nregistre, villeRC, Gerant,fichier,commune };

        switch (step) {
            case 1:
                return (
      <div className="form-container ">
          
            <AccountSetup
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
       
        </div>
                    
                );
            case 2:
                return (
                    <div className="form-container ">
                  
               <SocialProfiles
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        fileSelect={this.fileSelect}
                        values={values}
                    />
                 </div>
                );
            case 3:
                return (
                   
                    <div className="form-container">
             
                    
                    <Login
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        fileSelect={this.fileSelect}
                        values={values}
                        
                    />
                 
                 </div>

                 
                 
                );
            case 4:
                 return (
                    <div className="form-container">
             
                        <Confirm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                        />
                  </div>
                    );
                   
            case 5:
                return (
                    <Success />
                );
        }
    }
}
const stepsArray = [
    // "Create your account",
    "Profil intermédiaire",
    "Profile métier",
    "Choix communes",
    "Confirmation"
  ];

export default Form
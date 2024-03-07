import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="five columns">
                        <img className="profile-pic" src="images/profile-picture.jpg" alt="bottle"/>
                    </div>
                    <div className="seven columns main-col">
                        <p>
                            Bienvenue chez <span style={{color: '#f79452'}}>Scortea</span>, l'innovation pétillante au service de la planète! Nous sommes fiers de vous présenter une expérience gustative unique issue de notre engagement écologique. Ici nous transformons les peaux d'oranges et d'agrumes, habituellement destinées aux déchets, en de délicieuses boissons gazeuses par un processus de fermentation fait maison.
                            <br />
                            <br />
                            Dans le monde vibrant de <span style={{color: '#f79452'}}>Scortea</span>, le plaisir rencontre la responsabilité environnementale!
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
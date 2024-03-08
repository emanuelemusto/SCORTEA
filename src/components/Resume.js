import React, {Component} from 'react';

export default class Resume extends Component {
    render() {
        return (
            <section id="resume">

                <div className="row education">

                    <div className="three columns header-col">
                        <img src="images/orange.png" alt="orange-styled"/>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3 style={{color: '#f68031', fontFamily: 'Dejavu Sans ', fontWeight: 'bold'}}> Qui
                                    sommes-nous ? </h3>
                                <p className="info">
                                    Chez <span style={{
                                    color: '#f68031',
                                    fontFamily: 'Dejavu Sans ',
                                    fontWeight: 'bold'
                                }}>Scortea</span>,
                                    notre équipe dynamique se compose de quatre jeunes passionnés: <br/>
                                    <span style={{
                                        color: '#f68031',
                                        fontFamily: 'Dejavu Sans ',
                                        fontWeight: 'bold'
                                    }}>Malo </span>le grand patron,
                                    <span style={{
                                        color: '#f68031',
                                        fontFamily: 'Dejavu Sans ',
                                        fontWeight: 'bold'
                                    }}> Line </span>notre scientifique et conseillère dans l’agro-industrie,
                                    <span style={{
                                        color: '#f68031',
                                        fontFamily: 'Dejavu Sans ',
                                        fontWeight: 'bold'
                                    }}> Quentin </span>
                                    notre comptable qui réalise nos études de marché et
                                    <span style={{
                                        color: '#f68031',
                                        fontFamily: 'Dejavu Sans ',
                                        fontWeight: 'bold'
                                    }}> Elisa </span>
                                    notre designeuse marketing qui gère notre communication et publicité.
                                    Tous les quatre engagés corps et âme dans la transition écologique.
                                    Unis par notre vision commune d'un avenir plus durable dans l'industrie des
                                    boissons,
                                    nous avons entrepris l'aventure
                                    <span style={{
                                        color: '#f68031',
                                        fontFamily: 'Dejavu Sans ',
                                        fontWeight: 'bold'
                                    }}> Scortea </span>
                                    avec la conviction que chaque geste compte.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row education">
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3 style={{color: '#f68031', fontFamily: 'Dejavu Sans ', fontWeight: 'bold'}}> Notre
                                    processus de fabrication ? </h3>
                                <p className="info">
                                    Chez
                                    <span style={{
                                        color: '#f68031',
                                        fontFamily: 'Dejavu Sans ',
                                        fontWeight: 'bold'
                                    }}> Scortea</span>, notre processus de fabrication innovant repose sur deux
                                    microorganismes clés:
                                    la <span style={{
                                    color: '#f68031',
                                    fontFamily: 'Dejavu Sans ',
                                    fontWeight: 'bold'
                                }}>Pichia kluyveri</span>,
                                    qui réalise une fermentation sans produire d'alcool, et le <span style={{
                                    color: '#f68031',
                                    fontFamily: 'Dejavu Sans ',
                                    fontWeight: 'bold'
                                }}>Lactobacillus plantarum</span>,
                                    qui ajoute un délicieux goût acidulé et rafraîchissant à notre boisson grâce à la
                                    production d'acide lactique.
                                    Nous nous engageons également à n'utiliser que des déchets issus de la production de
                                    fruits bio,
                                    pour une boisson non seulement délicieuse mais aussi respectueuse de
                                    l'environnement.
                                    Chez <span style={{
                                    color: '#f68031',
                                    fontFamily: 'Dejavu Sans ',
                                    fontWeight: 'bold'
                                }}>Scortea</span>,
                                    chaque gorgée est une invitation à savourer un avenir plus durable.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="three columns header-col">
                        <img src="images/bacterias.png" alt="bacterias"/>
                    </div>
                </div>

                <div className="row education">
                    <div className="three columns header-col">
                        <img src="images/glass.jpeg" alt="glass"/>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3 style={{color: '#f68031', fontFamily: 'Dejavu Sans ', fontWeight: 'bold'}}> Pourquoi
                                    choisir Scortea ? </h3>
                                <p className="info">
                                    <span style={{
                                        color: '#f68031',
                                        fontFamily: 'Dejavu Sans ',
                                        fontWeight: 'bold'
                                    }}>Scortea</span> s'impose comme la boisson par excellence pour ceux qui cherchent à
                                    réduire leur consommation d'alcool
                                    en soirée sans sacrifier le plaisir des saveurs uniques. En optant pour <span
                                    style={{
                                        color: '#f68031',
                                        fontFamily: 'Dejavu Sans ',
                                        fontWeight: 'bold'
                                    }}>Scortea</span>,
                                    vous faites bien plus que savourer une boisson innovante:
                                    vous participez activement à la préservation de notre planète en encourageant le
                                    recyclage des déchets issus de la production de fruits bio.
                                    Joignez-vous à notre mouvement vers un mode de vie plus équilibré, où la délicatesse
                                    de la fermentation rencontre la responsabilité environnementale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
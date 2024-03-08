import React, {Component} from 'react';

export default class Testimonials extends Component {
    render() {
        return (
            <section id="testimonials">
                <div className="text-container">
                    <div className="row">
                        <div className="two columns header-col">
                        </div>
                        <div className="ten columns flex-container">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li>
                                        <blockquote>
                                            <p>
                                                CERTIFIE <span style={{
                                                color: '#f68031',
                                            }}>BIO</span> ET SANS SUCRE AJOUTE
                                            </p>
                                        </blockquote>
                                    </li>
                                    <li>
                                        <blockquote>
                                            <p>
                                                SANS EDULCORANTS, NI CONSERVATEUR
                                            </p>
                                        </blockquote>
                                    </li>
                                </ul>
                            </div>
                            {/* div.flexslider ends */}
                        </div>
                        {/* div.flex-container ends */}
                    </div>
                    {/* row ends */}
                </div>
                {/* text-container ends */}
            </section>
        );
    }
}
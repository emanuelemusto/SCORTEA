import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <section id="footer">
                <footer>
                    <div className="row">
                        <p className="lead">
                            Feel free to contact me for any work or suggestions below
                        </p>
                        <div className="twelve columns">
                            <ul className="social-links">
                                <li>
                                    <a href="mailto:elisa.pregaldiny@etu.umontpellier.fr">
                                        <i className="fa fa-envelope"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/elisa-pregaldiny-239344284/">
                                        <i className="fa fa-linkedin"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/emanuelemusto/scortea/">
                                        <i className="fa fa-github"/>
                                    </a>
                                </li>
                            </ul>

                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i
                            className="icon-up-open"/></a></div>
                    </div>
                </footer>
            </section>
        );
    }
}
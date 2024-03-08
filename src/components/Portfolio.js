import React, {Component} from 'react';

export default class Porfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve">
                        <h1>Notre travail</h1>
                        <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <img src="images/sticker1.png" alt="sticker" width="500" height="500"/>
                                </div>
                            </div>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <img src="images/sticker3.jpg" alt="sticker" width="500" height="500"/>
                                </div>
                            </div>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <img src="images/sticker2.png" alt="sticker" width="50000" height="500"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
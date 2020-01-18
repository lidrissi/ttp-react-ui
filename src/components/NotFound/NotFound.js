import React, { Component } from 'react';
import _ from 'i18n';
import * as animationData from "./lottie-animations/error-404.json"
import lottie from 'lottie-web';
import styles from './NotFound.module.scss';

export class NotFound extends Component {

    componentDidMount() {
        lottie.loadAnimation({
            container: document.getElementById('error-404'),
            loop: true,
            autoplay: true,
            animationData: animationData,
        });
    }

    render() {
        let { children, text, error } = this.props;
        const notFound = [
            <h5>{_("You've moved so fast and got lost")}...</h5>,
            <p>{_('pageNotFound')}</p>,
            <a className="ttp-button secondary" href="/">
                <i className="icon-arrow-left"></i>
                {_('goBackToHome')}
            </a>
        ];
        let renderedTxt = (
            <div className={styles.not_found__main}>
                <div id={"error-404"} style={{ height: "320px" }} />
                <h2>{_("Oops")}</h2>
                {
                    (error) ? notFound : <p>{_(text || "nothing_found")}</p>
                }
            </div>
        );
        return (
            <div className={styles.not_found}>
                {children || renderedTxt}
            </div>
        );
    }
}
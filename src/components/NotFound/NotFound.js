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
        let { children, text, isErrorPage } = this.props;

        let renderedTxt = true ? (
            <div className={styles.not_found__main}>
                <div id={"error-404"} style={{ height: "320px" }} />
                <h2>{_("Oops")}</h2>
                <h5>{_("You've moved so fast and got lost")}...</h5>
                <p>{_('pageNotFound')}</p>
                {/*<button className="btn secondary">
                    <i className="icon-arrow-left"></i> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/">{_('goBackToHome')}</Link>
                </button>*/}
            </div>
        ) : (<div className={styles.not_found__main}>
            <h2>{_("Oops")}</h2>
            <p>{_(text || "nothing_found")}</p>
        </div>);
        return (
            <div className={styles.not_found}>
                {children || renderedTxt}
            </div>
        );
    }
}
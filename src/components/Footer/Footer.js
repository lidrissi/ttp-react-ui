import React from 'react';
import _ from 'i18n';
import styles from './Footer.scss';

export const Footer = () => (
  <footer>
    <div className={styles.footer}>
      <div>
        <img alt="" src="/img/logos/tamtam.svg" />
      </div>
      <div className={styles.footer__contact}>
        <ul>
          <li><i className="icomoon icon-tt-facebook" /></li>
          <li><i className="icomoon icon-tt-linkedin" /></li>
          <li><i className="icomoon icon-tt-instagram" /></li>
          <li><i className="icomoon icon-tt-contact" /></li>
        </ul>
      </div>
      <div className={styles.footer__about}>
        <p>
          <b>Tamtam.pro </b>
          {_('about_us_content')}
        </p>
      </div>
    </div>
    <div className={styles.copyright}>
      <p>
        © Copyright -
        {(new Date()).getFullYear()}
        {' '}
        <strong>Tamtam International</strong>
      </p>
    </div>
  </footer>
);
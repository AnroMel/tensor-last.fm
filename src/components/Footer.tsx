import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__column">
          <h4 className="footer__heading">Company</h4>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">About Last.fm</a></li>
            <li><a href="#" className="footer__link">Contact Us</a></li>
            <li><a href="#" className="footer__link">Jobs</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__heading">Help</h4>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Track My Music</a></li>
            <li><a href="#" className="footer__link">Community Support</a></li>
            <li><a href="#" className="footer__link">Community Guidelines</a></li>
            <li><a href="#" className="footer__link">Help</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__heading">Goodies</h4>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Download Scrobbler</a></li>
            <li><a href="#" className="footer__link">Developer API</a></li>
            <li><a href="#" className="footer__link">Free Music Downloads</a></li>
            <li><a href="#" className="footer__link">Merchandise</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__heading">Account</h4>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Inbox</a></li>
            <li><a href="#" className="footer__link">Settings</a></li>
            <li><a href="#" className="footer__link">Last.fm Pro</a></li>
            <li><a href="#" className="footer__link">Logout</a></li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__heading">Follow Us</h4>
          <ul className="footer__list">
            <li><a href="#" className="footer__link">Facebook</a></li>
            <li><a href="#" className="footer__link">Twitter</a></li>
            <li><a href="#" className="footer__link">Instagram</a></li>
            <li><a href="#" className="footer__link">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__text footer__languages">
          <span className="footer__language footer__language--active">English</span>
          <span className="footer__language">Deutsch</span>
          <span className="footer__language">Español</span>
          <span className="footer__language">Français</span>
          <span className="footer__language">Italiano</span>
          <span className="footer__language">日本語</span>
          <span className="footer__language">Polski</span>
          <span className="footer__language">Português</span>
          <span className="footer__language">Русский</span>
          <span className="footer__language">Svenska</span>
          <span className="footer__language">Türkçe</span>
          <span className="footer__language">简体中文</span>
        </p>

        <p className="footer__text footer__text--small">
          Time zone: <strong>Europe/Moscow</strong><br />
          ©2025 Last.fm Ltd. All rights reserved. Terms of Use · Privacy Policy · Legal Policies · Cookies Policy · Do Not Sell My Personal Information<br />
          Jobs at ViacomCBS · Last.fm Music
        </p>

        <div className="footer__logo">
          <img src="/images/footer_unnamed.jpg" alt="Audioscrobbler" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
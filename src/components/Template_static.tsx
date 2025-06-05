import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Статическая страница с популярными артистами и треками.
 */
const TemplateStatic: React.FC = () => {
  return (
    <main className="main-content">
      <section className="music-section">
        <h1 className="music-section__title">Music</h1>
            <button onClick={() => window.location.href = '/artists'} style={{ background: 'none', border: 'none', color: '#000' }}>
                <h2 className="music-section__subtitle">
                    Hot right now
                </h2>
            </button>
        <div className="artist-grid">
          <article className="artist-card" tabIndex={0}>
            <img src="/images/artists/art-1.jpg" alt="Kanye West" className="artist-card__image" />
            <h3 className="artist-card__name">Kanye West</h3>
            <p className="artist-card__genres">hip-hop · rap · hip hop</p>
          </article>
          <article className="artist-card" tabIndex={0}>
            <img src="/images/artists/art-2.jpg" alt="j-hope" className="artist-card__image" />
            <h3 className="artist-card__name">j-hope</h3>
            <p className="artist-card__genres">k-pop · hip-hop · korean</p>
          </article>
          <article className="artist-card" tabIndex={0}>
            <img src="/images/artists/art-3.jpg" alt="The Weeknd" className="artist-card__image" />
            <h3 className="artist-card__name">The Weeknd</h3>
            <p className="artist-card__genres">rnb · electronic · canadian</p>
          </article>
          <article className="artist-card" tabIndex={0}>
            <img src="/images/artists/art-4.jpg" alt="Tyler, the Creator" className="artist-card__image" />
            <h3 className="artist-card__name">Tyler, the Creator</h3>
            <p className="artist-card__genres">hip-hop · rap · alternative</p>
          </article>
          <article className="artist-card" tabIndex={0}>
            <img src="/images/artists/art-5.jpg" alt="Drake" className="artist-card__image" />
            <h3 className="artist-card__name">Drake</h3>
            <p className="artist-card__genres">hip-hop · rap · rnb</p>
          </article>
          <article className="artist-card" tabIndex={0}>
            <img src="/images/artists/art-6.jpg" alt="Steve Lacy" className="artist-card__image" />
            <h3 className="artist-card__name">Steve Lacy</h3>
            <p className="artist-card__genres">free jazz · jazz · saxophone</p>
          </article>
          <article className="artist-card" tabIndex={0}>
            <img src="/images/artists/art-7.jpg" alt="Playboi Carti" className="artist-card__image" />
            <h3 className="artist-card__name">Playboi Carti</h3>
            <p className="artist-card__genres">trap · hip-hop · cloud rap</p>
          </article>
          <article className="artist-card" tabIndex={0}>
            <img src="/images/artists/art-8.jpg" alt="Kendrick Lamar" className="artist-card__image" />
            <h3 className="artist-card__name">Kendrick Lamar</h3>
            <p className="artist-card__genres">hip-hop · rap · hip-hop</p>
          </article>
          <article className="artist-card" tabIndex={0}>
            <img src="/images/artists/art-9.jpg" alt="Joji" className="artist-card__image" />
            <h3 className="artist-card__name">Joji</h3>
            <p className="artist-card__genres">lo-fi · rnb · hip-hop</p>
          </article>
          <article className="artist-card" tabIndex={0}>
            <img src="/images/artists/art-10.jpg" alt="Lana Del Rey" className="artist-card__image" />
            <h3 className="artist-card__name">Lana Del Rey</h3>
            <p className="artist-card__genres">indie · pop · female vocalists</p>
          </article>
          <article className="artist-card" tabIndex={0}>
            <img src="/images/artists/art-11.jpg" alt="Mitski" className="artist-card__image" />
            <h3 className="artist-card__name">Mitski</h3>
            <p className="artist-card__genres">indie rock · indie · indie pop</p>
          </article>
          <article className="artist-card" tabIndex={0}>
            <img src="/images/artists/art-12.jpg" alt="Frank Ocean" className="artist-card__image" />
            <h3 className="artist-card__name">Frank Ocean</h3>
            <p className="artist-card__genres">rnb · soul · hip-hop</p>
          </article>
        </div>
      </section>

      <section className="popular-tracks">
        <button onClick={() => window.location.href = '/tracks'} style={{ background: 'none', border: 'none', color: '#000' }}>
                <h2 className="music-section__subtitle">
                    Popular tracks
                </h2>
            </button>
        <div className="tracks-grid">
          <div className="track-item">
            <img src="/images/tracks/tr-1.jpg" alt="" className="track-item__icon" />
            <div className="track-item__info">
              <p className="track-item__title">SEXY NUKIM (feat. RM of BTS)</p>
              <p className="track-item__artist">Balming Tiger</p>
              <p className="track-item__genres">trap · hip-hop · alternative</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-2.jpg" alt="MORE" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">MORE</p>
              <p className="track-item__artist">j-hope</p>
              <p className="track-item__genres">rock · hip-hop · rap</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-3.jpg" alt="Yet to Come" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">Yet to Come</p>
              <p className="track-item__artist">BTS</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-4.jpg" alt="Bad Decisions" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">Bad Decisions (with BTS & Snoop Dogg)</p>
              <p className="track-item__artist">Benny Blanco</p>
              <p className="track-item__genres">k-pop · korean · snoop dogg</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-5.jpg" alt="Left and Right" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">Left and Right (feat. Jung Kook of BTS)</p>
              <p className="track-item__artist">Charlie Puth</p>
              <p className="track-item__genres">pop · jungkook · 2022</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-6.jpg" alt="Pink Venom" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">Pink Venom</p>
              <p className="track-item__artist">BLACKPINK</p>
              <p className="track-item__genres">k-pop · hip-hop</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-7.jpg" alt="After LIKE" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">After LIKE</p>
              <p className="track-item__artist">IVE</p>
              <p className="track-item__genres">k-pop · disco · saty</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-8.jpg" alt="Talk that Talk" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">Talk that Talk</p>
              <p className="track-item__artist">TWICE</p>
              <p className="track-item__genres">k-pop · korean · k-pop</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-9.jpg" alt="Hype Boy" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">Hype Boy</p>
              <p className="track-item__artist">NewJeans</p>
              <p className="track-item__genres">k-pop · k-pop · saty</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-10.jpg" alt="Bad Habit" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">Bad Habit</p>
              <p className="track-item__artist">Steve Lacy</p>
              <p className="track-item__genres">indie · musical · bedroom pop</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-11.jpg" alt="Talk" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">Talk</p>
              <p className="track-item__artist">Yeat</p>
              <p className="track-item__genres">trap · wizzzy · rap</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-12.jpg" alt="Stay Alive" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">Stay Alive (Prod. SUGA of BTS)</p>
              <p className="track-item__artist">Jung Kook</p>
              <p className="track-item__genres">jungkook · kta · kst</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-13.jpg" alt="Romantic Homicide" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">Romantic Homicide</p>
              <p className="track-item__artist">d4vd</p>
              <p className="track-item__genres">indie</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-14.jpg" alt="Super Freaky Girl" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">Super Freaky Girl</p>
              <p className="track-item__artist">Nicki Minaj</p>
              <p className="track-item__genres">hip-hop · rap · rap</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-15.jpg" alt="With You" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">With You</p>
              <p className="track-item__artist">Jimin</p>
              <p className="track-item__genres">jimin · ost · 3ls</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-16.jpg" alt="That That" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">That That (prod. & feat. SUGA of BTS)</p>
              <p className="track-item__artist">Psy</p>
              <p className="track-item__genres">suga · prod suga · feat suga</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-17.jpg" alt="Glimpse of Us" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">Glimpse of Us</p>
              <p className="track-item__artist">Joji</p>
              <p className="track-item__genres">ballad · pop · piano</p>
            </div>
          </div>
          <div className="track-item">
            <img src="/images/tracks/tr-18.jpg" alt="YOURS" className="track-item__image" />
            <div className="track-item__info">
              <p className="track-item__title">YOURS</p>
              <p className="track-item__artist">Jin</p>
              <p className="track-item__genres">ost · ballad · k-pop</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TemplateStatic;
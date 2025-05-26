import React, { useState, useEffect } from 'react';
import { search } from '../api';
import Card from '../components/Card';
import Grid from '../components/Grid';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ artists: any[]; tracks: any[] }>({ artists: [], tracks: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Фокус на инпут при открытии
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Обработчик сабмита формы
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setHasSearched(true); // Маркируем, что был сделан поиск

    try {
      const res = await search(query);
    //   console.log(res)
      setResults(res);
    } catch (err) {
      console.error(err);
      setError('Couldn\'t complete the search.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Закрывать панель при клике вне неё
   */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const panel = document.querySelector('.search-panel');
      if (panel && !panel.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <>
      <header className="header">
        {/* Левая часть */}
        <div className="header__controls">
          <button className="header__button" aria-label="Previous">
            <img src="images/arrow_direction_forward_next_right_icon.png" alt="Предыдущий трек" />
          </button>
          <button className="header__button_play" aria-label="Play">
            <img src="images/multimedia_music_play_player_song_icon.png" alt="Воспроизвести" />
          </button>
          <button className="header__button" aria-label="Next">
            <img src="images/arrow_direction_forward_next_right_icon.png" alt="Следующий трек" />
          </button>
          <button className="header__favorite" aria-label="Add to favorites">
            <img src="images/favorite_heart_likes_love_icon.png" alt="Добавить в избранное" />
          </button>
        </div>

        {/* Центр */}
        <div className="header__center">
          <img src="images/logo_static_mob.0798d7258e3d.png" alt="Логотип Last.fm" width="120" height="40" />
        </div>

        {/* Правая часть */}
        <div className="header__right">
          <button
            className="header__search"
            aria-label="Search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <img src="images/magnifier_search_icon.png" alt="Поиск" />
          </button>
          <nav className="nav">
            <ul className="nav__list">
              <li><a href="#" className="nav__link barlow-regular">Home</a></li>
              <li><a href="#" className="nav__link barlow-regular">Live</a></li>
              <li><a href="#" className="nav__link barlow-regular">Music</a></li>
              <li><a href="#" className="nav__link barlow-regular">Charts</a></li>
              <li><a href="#" className="nav__link barlow-regular">Events</a></li>
              <li><a href="#" className="nav__link barlow-regular">Features</a></li>
            </ul>
          </nav>
          <button className="header__profile" aria-label="User Menu">
            <img src="images/user_icon.png" alt="Профиль пользователя" />
          </button>
        </div>
      </header>

      {/* Панель поиска — вне хедера, ниже */}
      <div className={`search-panel ${isSearchOpen ? 'active' : ''}`}>
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter the artist or track"
            aria-label="Search input"
          />
          <button type="submit" >Search</button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {(results.artists.length > 0 || results.tracks.length > 0) && (
          <>
            {results.artists.length > 0 && (
              <>
                <h3 className="music-section__subtitle">Artists</h3>
                <Grid>
                  {results.artists.map((artist) => (
                    <Card
                      key={artist.name}
                      title={artist.name}
                      img={artist.image?.[2]?.['#text']}
                      url={artist.url}
                    />
                  ))}
                </Grid>
              </>
            )}

            {results.tracks.length > 0 && (
              <>
                <h3 className="music-section__subtitle">Tracks</h3>
                <Grid>
                  {results.tracks.map((track) => (
                    <Card
                      key={track.url}
                      title={track.name}
                      subtitle={
                        typeof track.artist === 'string'
                          ? track.artist
                          : track.artist.name
                      }
                      img={track.image?.[2]?.['#text']}
                      url={track.url}
                    />
                  ))}
                </Grid>
              </>
            )}
          </>
        )}

        {!loading &&
         !error &&
         hasSearched &&
         query.trim() !== '' &&
         results.artists.length === 0 &&
         results.tracks.length === 0 && (
           <p>Nothing was found</p>
         )}
      </div>
    </>
  );
};


export default Header;
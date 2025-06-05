import React, { useEffect, useState } from 'react';
import { Artist, fetchTopArtists } from '../api';

/**
 * Страница с отображением топ-исполнителей.
 */
const ArtistsPage: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTopArtists()
      .then((data) => {
        console.log('Полученные артисты:', data); // <<<< Логируем данные
        setArtists(data);
      })
      .catch((error) => {
        console.error('Ошибка загрузки артистов:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="music-section">
      <h1 className="music-section__title">Music</h1>
      <h2 className="music-section__subtitle">Hot right now</h2>

      <div className="artist-grid">
        {loading ? (
          <p>Loading...</p>
        ) : artists.length > 0 ? (
          artists.map((artist) => (
            <article key={artist.name} className="artist-card" tabIndex={0}>
              <img
                src={artist.image?.[2]?.['#text'] || ''}
                alt={artist.name}
                className="artist-card__image"
              />
              <h3 className="artist-card__name">{artist.name}</h3>
              <p className="artist-card__genres">
                {/* Можно сделать динамически */}
                hip-hop · rap · electronic
              </p>
            </article>
          ))
        ) : (
          <p>There is no data on popular artists.</p>
        )}
      </div>
    </section>
  );
};

export default ArtistsPage;
import React, { useEffect, useState } from 'react';
import { Track, fetchTopTracks } from '../api';
import Card from '../components/Card';
import Grid from '../components/Grid';

/**
 * Страница с отображением популярных треков.
 */
const TracksPage: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTopTracks()
      .then((data) => {
        console.log('Полученные треки:', data);
        setTracks(data);
      })
      .catch((error) => {
        console.error('Ошибка загрузки треков:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="popular-tracks">
      <h2 className="music-section__subtitle">Popular tracks</h2>

      <div className="tracks-grid">
        {loading ? (
          <p>Loading...</p>
        ) : tracks.length > 0 ? (
          <Grid>
            {tracks.map((track) => (
              <Card
                key={track.url}
                title={track.name}
                subtitle={
                  typeof track.artist === 'string'
                    ? track.artist
                    : track.artist?.name
                }
                img={track.image?.[2]?.['#text']}
                url={track.url}
              />
            ))}
          </Grid>
        ) : (
          <p>There is no data on popular tracks.</p>
        )}
      </div>
    </section>
  );
};

export default TracksPage;
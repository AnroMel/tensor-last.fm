import React, { useState, FormEvent } from 'react';
import { search } from '../api';
import Card from '../components/Card';
import Grid from '../components/Grid';

/**
 * Страница поиска: форма, индикатор загрузки и результаты.
 */
const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<{ artists: any[]; tracks: any[] }>({ artists: [], tracks: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Обработчик сабмита формы поиска.
   * @param e Событие отправки формы
   */
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await search(query);
      setResults(res);
    } catch (err) {
      console.error(err);
      setError('Не удалось выполнить поиск. Проверьте подключение к интернету.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="search-section">
      <h2>Результаты поиска</h2>

      <form onSubmit={onSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введите исполнителя или трек"
          aria-label="Поле ввода для поиска"
        />
        <button type="submit">Искать</button>
      </form>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {(results.artists.length > 0 || results.tracks.length > 0) && (
        <>
          {results.artists.length > 0 && (
            <>
              <h3>Исполнители</h3>
              <Grid>
                {results.artists.map((artist) => (
                  <Card
                    key={artist.name}
                    title={artist.name}
                    img={artist.image?.[2]?.['#text'] || undefined}
                    url={artist.url}
                  />
                ))}
              </Grid>
            </>
          )}

          {results.tracks.length > 0 && (
            <>
              <h3>Треки</h3>
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
                    img={track.image?.[2]?.['#text'] || undefined}
                    url={track.url}
                  />
                ))}
              </Grid>
            </>
          )}
        </>
      )}

      {!loading && !error && results.artists.length === 0 && results.tracks.length === 0 && query.trim() !== '' && (
        <p>Ничего не найдено.</p>
      )}
    </section>
  );
};

export default SearchPage;
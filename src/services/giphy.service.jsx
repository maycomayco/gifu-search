import { API_KEY, API_URL } from "./settings";

/* Hacer el transform para poder reutilizarlo en ambos endpoints */

export const getGifs = ({ keyword = "monday", limit = 5, page = 0 } = {}) => {
  // for the pagination we need to use the offset property to get the correct "page number"
  const offset = limit * page;

  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en`;
  return fetch(apiURL)
    .then((resp) => resp.json())
    .then((resp) => {
      const { data } = resp;
      const gifs = data.map((elem) => {
        const {
          id,
          title,
          images: {
            downsized_medium: { url },
          },
        } = elem;
        return { id, title, url };
      });
      return gifs;
    });
};

export const getTrendingGifs = async () => {
  const apiURL = `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=10`;

  // revisar doc de fetch
  const resp = await fetch(apiURL);
  const { data } = await resp.json(); // obtengo solo la property que necesito

  // esto deberia ser un transform, de lo que me devuelve la API original y lo que realmente necesita mi App
  const gifs = data.map((elem) => {
    const {
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    } = elem;
    return { id, title, url };
  });

  return gifs;
};

export const getTrendingTerms = () => {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  return fetch(apiURL)
    .then((resp) => resp.json())
    .then((resp) => {
      const { data } = resp;

      return data;
    });
};

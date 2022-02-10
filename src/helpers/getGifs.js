export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=30&api_key=C4X8B7xnreDFDyM5ZJ6Q8JTry5gV0CNP`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(( img ) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized.url,
    };
  });
  
  return gifs;
};

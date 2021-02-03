
export const getHeroData = async (name, type) => {
  const data = await fetch(`http://localhost:5000/superheros/getData/${name}/${type}`);
  const dataJson = await data.json();
  return dataJson;
}

export const getSearches = async () => {
  const data = await fetch(`http://localhost:5000/getSearches`);
  const dataJson = await data.json();
  return dataJson;
}
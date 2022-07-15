const BASE_URL = "https://api.tvmaze.com/search/shows?q=all";

export async function fetchData() {
  try {
    const res = await fetch(BASE_URL);
    if (res) {
      const json = await res.json();
      return json;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

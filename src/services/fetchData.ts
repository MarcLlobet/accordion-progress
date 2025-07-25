export const fetchData = async (endpoint: string) => {
  let response = null;
  try {
    response = await fetch(endpoint);
  } catch {
    throw new Error("Failed fetching data");
  }

  if (!response?.ok) {
    throw new Error("Failed response", { cause: response.statusText });
  }

  try {
    const jsonData = await response?.json();

    return jsonData;
  } catch {
    throw new Error("Failed parsing response");
  }
};

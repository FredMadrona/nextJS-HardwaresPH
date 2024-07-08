export const fetcher = async (url, token = process.env.NEXT_PUBLIC_CLIENT_TOKEN) => {


  try {
      console.log(`Fetching ${url} from ${token}`);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Fetch error:', errorText);
      throw new Error(`Network response was not ok: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }

};


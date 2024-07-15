export const fetcher = async (url, options = {}) => {
  const token = process.env.NEXT_PUBLIC_CLIENT_TOKEN;

  try {
    // Default method is GET if not specified
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: options.method || 'GET', // Use provided method or default to GET
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        ...options.headers, // Merge with any headers provided in options
      },
      body: options.body ? JSON.stringify(options.body) : undefined, // Include body if provided
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Fetch error:', errorText);
      throw new Error(`Network response was not ok: ${errorText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
};

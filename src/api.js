const API_URL = 'http://localhost:5000';

export const getFilms = async () => {
  try {
    const response = await fetch(`${API_URL}/movies`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching films:', error);
    throw error;
  }
};

// Function to add a new film
export const addFilm = async (newFilm) => {
  try {
    const response = await fetch(`${API_URL}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFilm),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding film:', error);
    throw error;
  }
};

// Function to update a film
export const updateFilm = async (filmId, updatedFilm) => {
  try {
    const response = await fetch(`${API_URL}/movies/${filmId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFilm),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating film:', error);
    throw error;
  }
};

// Function to delete a film
export const deleteFilm = async (filmId) => {
  try {
    const response = await fetch(`${API_URL}/movies/${filmId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error deleting film:', error);
    throw error;
  }
};

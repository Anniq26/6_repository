import axios from 'axios';

interface WitcherFact {
  id: string;
  fact: string;
}

const baseURL = 'https://your-api-url.com';

export const fetchFact = async (factId: string): Promise<WitcherFact> => {
  const response = await axios.get<WitcherFact>(`${baseURL}/facts/${factId}`);
  return response.data;
};

export const createFact = async (newFact: WitcherFact): Promise<WitcherFact> => {
  const response = await axios.post<WitcherFact>(`${baseURL}/facts`, newFact);
  return response.data;
};

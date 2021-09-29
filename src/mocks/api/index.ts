import { createServer } from 'miragejs';

export type CharactersResponse = {
  characters: Character[];
};

export type Character = {
  id: number;
  name: string;
};

const startMockApi = (): void => {
  createServer({
    routes() {
      this.namespace = 'api';

      this.get('/characters', () => {
        return {
          characters: [
            { id: 1, name: 'Paladin', year: 2010 },
            { id: 2, name: 'Sorceress', year: 2014 },
            { id: 3, name: 'Amazon', year: 2017 },
          ],
        };
      });
    },
  });
};

export default startMockApi;

import { createServer } from 'miragejs';

export type PostsResponse = {
  posts: Post[];
};

export type Post = {
  id: number;
  title: string;
  content: string;
  year: number;
};

const startMockApi = (): void => {
  createServer({
    routes() {
      this.namespace = 'api';

      this.get('/posts', () => {
        return {
          posts: [
            {
              id: 1,
              title: 'Post 1',
              content: '',
              year: 2010,
              likes: 0 /* comments */,
            },
            {
              id: 2,
              title: 'Post 2',
              content: '',
              year: 2014,
              likes: 0 /* comments */,
            },
            {
              id: 3,
              title: 'Post 3',
              content: '',
              year: 2017,
              likes: 0 /* comments */,
            },
          ],
        };
      });
    },
  });
};

export default startMockApi;

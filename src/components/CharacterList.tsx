import useSWR from 'swr';
import { FC } from 'react';

import { Character } from '../mocks/api/index';

const CharacterList: FC = () => {
  const { data, error } = useSWR('/api/characters');
  return (
    <ul>
      {data.characters.length &&
        data.characters.map((char: Character) => (
          <li key={char.id}>{char.name}</li>
        ))}
    </ul>
  );
};

export default CharacterList;

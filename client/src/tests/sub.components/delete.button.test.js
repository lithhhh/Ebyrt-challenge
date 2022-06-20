import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';

import { DeleteButton } from '../../components/sub.components';
import Provider from '../../context/Provider';

describe('delete.button', () => {
  beforeEach(() => {
    render(
      <Provider>
        <DeleteButton id='1' />
      </Provider>
    );
  });

  afterEach(() => cleanup());
  describe('component correct rendering tests', () => {
    test('if the button is rendered it is a button tag', () => {
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  
    test('if the button contains the name "Deletar"', () => {
      const button = screen.getByRole('button', { name: 'Deletar' });
      expect(button).toBeInTheDocument();
    });
  });
});

import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import Provider from '../../context/Provider';
import { DropdownStatus } from '../../components/sub.components';

describe('dropdown.status', () => {
  beforeEach(() => {
    render(
      <Provider>
        <DropdownStatus id='1' status='Pendente' />
      </Provider>
    );
  });

  afterEach(() => cleanup());
  describe('component correct rendering tests', () => {
    test('if the button is rendered it is a button tag', () => {
      const statusButton = screen.getByRole('button');
      expect(statusButton).toBeInTheDocument();
    });
    test('if the button contains the name "Pendente"', () => {
      const statusButton = screen.getByRole('button', { name: 'Pendente' });
      expect(statusButton).toBeInTheDocument();
    });
  });

  describe('if a "dropdown" of buttons is rendered when clicked', () => {
    test('', () => {
      const statusButton = screen.getByRole('button');
      
      fireEvent.click(statusButton);

      const inProgressButton = screen.getByRole('button', { name: 'Em andamento' });
      const pendingButton = screen.getAllByRole('button', { name: 'Pendente' });
      const finishedButton = screen.getByRole('button', { name: 'Finalizado' });

      expect(inProgressButton).toBeInTheDocument();
      expect(pendingButton[1]).toBeInTheDocument();
      expect(finishedButton).toBeInTheDocument();
    });
  });
});
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Provider from '../../context/Provider';
import { EditModal } from '../../components/sub.components';

describe('edit.modal', () => {
  beforeEach(() => {
    render(
      <Provider>
        <EditModal id='1' color='#ffffff' details='' title='teste' />
      </Provider>
    );
  });

  afterEach(() => cleanup());

  describe('component correct rendering tests', () => {
    test('if the button is rendered it is a button tag', () => {
      const editButton = screen.getByRole('button');
      expect(editButton).toBeInTheDocument();
    });
    test('if the button contains the name "Editar"', () => {
      const editButton = screen.getByRole('button', { name: 'Editar' });
      expect(editButton).toBeInTheDocument();
    });
  });

  describe('modal correct rendering tests', () => {
    test('if a modal containing the "Modo de edição" title is rendered', () => {
      const editButton = screen.getByRole('button', { name: 'Editar' });

      userEvent.click(editButton);

      const titleModal = screen.getByText('Modo de edição');

      expect(titleModal).toBeInTheDocument();
    });

    test('if the rendered modal has a forms containing a title and details inputs', () => {
      const editButton = screen.getByRole('button', { name: 'Editar' });

      userEvent.click(editButton);

      const titleLabel = screen.getByLabelText('Título');
      const titleRole = screen.getByRole('textbox', {
        name: /título/i
      });

      const detailsLabel = screen.getByLabelText('Detalhes');
      const detailsRole = screen.getByRole('textbox', {
        name: /detalhes/i
      });

      expect(titleLabel).toBeInTheDocument();
      expect(titleRole).toBeInTheDocument();

      expect(detailsLabel).toBeInTheDocument();
      expect(detailsRole).toBeInTheDocument();
    });

    test('if the rendered footer modal has color input', () => {
      const editButton = screen.getByRole('button', { name: 'Editar' });

      userEvent.click(editButton);

      const colorInput = screen.getByDisplayValue(/#ffffff/i);

      expect(colorInput).toBeInTheDocument();
    });

    test('if the rendered footer modal has save and close buttons', () => {
      const editButton = screen.getByRole('button', { name: 'Editar' });

      userEvent.click(editButton);

      const closeInput = screen.getByRole('button', {
        name: /fechar/i
      });

      const saveInput = screen.getByRole('button', {
        name: /salvar/i
      });

      expect(closeInput).toBeInTheDocument();
      expect(closeInput).toBeInTheDocument();
    });
  });
})
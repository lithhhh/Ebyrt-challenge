import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { act } from 'react-dom/test-utils';
import { Input } from '../../components';
import api from '../../utils/api';
import Provider from '../../context/Provider';

describe('input.task', () => {
  beforeEach(() => {
    render(
      <Provider>
        <Input />
      </Provider>,
    );
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  describe('component correct rendering tests', () => {
    test('if a textbox and a button are rendered', () => {
      const textbox = screen.getByRole('textbox');
      const textboxPlaceholder = screen.getByPlaceholderText('digite aqui sua task');
      const button = screen.getByRole('button', { name: /adicionar/i });

      expect(textbox).toBeInTheDocument();
      expect(textboxPlaceholder).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe('behavioral tests', () => {
    const created = {
      title: 'arrumar a cama!',
      color: '#ffffff',
      details: '',
      status: 'Pendente',
    };

    describe('ok tests', () => {
      test('if the textbox is empty after publishing a task', async () => {
        api.post = jest.fn(async () => ({
          data: { created },
        }));

        const button = screen.getByRole('button', { name: /adicionar/i });
        const textboxPlaceholder = screen.getByPlaceholderText('digite aqui sua task');

        userEvent.type(textboxPlaceholder, created.title);
        userEvent.click(button);

        const textboxBeforeEvent = await screen.findByDisplayValue('');

        expect(textboxBeforeEvent).toBeInTheDocument();
      });
    });

    describe('fail tests', () => {
      test('if it is possible to add a task with less than 5 characters', async () => {
        api.post = jest.fn(async () => ({
          data: { created },
        }));

        const button = screen.getByRole('button', { name: /adicionar/i });
        const textboxPlaceholder = screen.getByPlaceholderText('digite aqui sua task');

        act(() => {
          userEvent.type(textboxPlaceholder, 'foo');
          userEvent.click(button);
        });

        const textboxBeforeEvent = await screen.findByText('é necessário no mínimo 5 letras!');

        expect(textboxBeforeEvent).toBeVisible();
      });
    });
  });
});

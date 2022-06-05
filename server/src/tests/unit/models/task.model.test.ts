import sinon from 'sinon';
import { expect } from 'chai';
import { test } from 'mocha';
import { Model } from 'mongoose';

import { TaskModel } from '../../../app/models';
import { TasksTypes } from '../../../app/helpers';
import { tasksMock } from '../../mocks';

interface ITaskMock extends TasksTypes {
  id: string,
} 


describe('task.model', () => {
  const tasks = new TaskModel();

  describe('create', () => {

  });

  describe('delete', () => {

  });

  describe('update', () => {

  });
  describe('read', () => {
    test('returns an array of objects containing the required keys', async () => {

    });
  });
});
import sinon from 'sinon';
import { expect } from 'chai';
import { test } from 'mocha';

import { TaskModel } from '../../../app/models';
import { TasksTypes } from '../../../app/helpers';
import { tasksMock } from '../../mocks';

interface ITaskMock extends TasksTypes {
  id: string,
}

describe('task.service', () => {
  const taskModel = new TaskModel();

  describe('create', () => {

  });

  describe('update', () => {
    test('', () => {});
  });

  describe('delete', () => {
    test('', () => {});
  });

  describe('read', () => {
    test('', () => {});
  });
});
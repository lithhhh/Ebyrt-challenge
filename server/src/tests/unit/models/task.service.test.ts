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

  before(() => {
    sinon.stub(taskModel, 'create').resolves(tasksMock.tasks[0] as unknown as ITaskMock)
    sinon.stub(taskModel, 'delete').resolves(tasksMock.tasks[0] as unknown as ITaskMock)
    sinon.stub(taskModel, 'update').resolves(tasksMock.tasks[0] as unknown as ITaskMock)
    sinon.stub(taskModel, 'read').resolves(tasksMock.tasks as unknown as ITaskMock[])
  });

  after(() => sinon.restore());

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
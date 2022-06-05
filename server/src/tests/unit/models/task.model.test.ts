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
  before(() => {
    sinon.stub(Model, 'create').resolves(tasksMock.tasks[0] as unknown as ITaskMock)
    sinon.stub(Model, 'findOneAndDelete').resolves(tasksMock.tasks[0] as unknown as ITaskMock)
    sinon.stub(Model, 'findOneAndUpdate').resolves(tasksMock.tasks[0] as unknown as ITaskMock)
    sinon.stub(Model, 'find').resolves(tasksMock.tasks as unknown as ITaskMock[])
  });
  after(() => sinon.restore());

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
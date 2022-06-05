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
    test('an object is returned containing the required keys', async () => {
      const created = await tasks.create(tasksMock.creatingATask as TasksTypes);

      expect(created).to.be.a('object');
      expect(created).to.contain.all.keys('id', 'status', 'title', 'details', 'color');
    });
  });

  describe('delete', () => {
    test('an object is returned containing the required keys', async () => {
      const deleted = await tasks.delete('1');

      expect(deleted).to.be.a('object');
      expect(deleted).to.contain.all.keys('id', 'status', 'title', 'details', 'color');
    });
  });

  describe('update', () => {
    test('an object is returned containing the required keys', async () => {
      const updated = await tasks.update('1', tasksMock.creatingATask as TasksTypes);

      expect(updated).to.be.a('object');
      expect(updated).to.contain.all.keys('id', 'status', 'title', 'details', 'color');
    });
  });
  describe('read', () => {
    test('returns an array of objects containing the required keys', async () => {

    });
  });
});
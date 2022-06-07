import sinon from 'sinon';
import { expect } from 'chai';
import { test } from 'mocha';
import { ZodError } from 'zod';

import { TaskModel } from '../../../app/models';
import { TaskService } from '../../../app/services';
import { TasksTypes } from '../../../app/helpers';
import { tasksMock } from '../../mocks';

interface ITaskMock extends TasksTypes {
  id: string,
}

describe('task.service', () => {
  const taskModelMocked = new TaskModel();
  const taskService = new TaskService(taskModelMocked);

  before(() => {
    sinon.stub(taskModelMocked, 'create').resolves(tasksMock.tasks[0] as unknown as ITaskMock)
    sinon.stub(taskModelMocked, 'delete').resolves(tasksMock.tasks[0] as unknown as ITaskMock)
    sinon.stub(taskModelMocked, 'update').resolves(tasksMock.tasks[0] as unknown as ITaskMock)
    sinon.stub(taskModelMocked, 'read').resolves(tasksMock.tasks as unknown as ITaskMock[])
  });

  after(() => sinon.restore());

  describe('create', () => {
    describe('error case', () => {
      test('throws an error if there are errors in the request object', async () => {
        try {
          await taskService.create(tasksMock.wrongTask as TasksTypes)
        } catch (e) {          
          expect(e instanceof ZodError).to.be.true;
          expect(e instanceof Error).to.be.true;
        }
      });
    });

    describe('ok case', () => {
      test('if returns an object containing a created task', async () => {
        expect(
          await taskService.create(tasksMock.creatingATask as TasksTypes)
        ).to.be.deep.equal(tasksMock.tasks[0])
      });
    });
  });

  describe('update', () => {
    describe('error case', () => {
      before(() => sinon.stub(taskModelMocked, 'readOne')
        .resolves(null as unknown as ITaskMock));
      test('throws an error if id is not a string', async () => {
        try {
          await taskService.update(1 as unknown as string, tasksMock.wrongTask as TasksTypes)
        } catch (e) {          
          expect(e instanceof ZodError).to.be.true;
          expect(e instanceof Error).to.be.true;
        }
      });
      test('throws an error if there are errors in the request object', async () => {
        try {
          await taskService.update('1', tasksMock.wrongTask as TasksTypes)
        } catch (e) {        
          expect(e instanceof ZodError).to.be.true;
          expect(e instanceof Error).to.be.true;
        }
      });

      test('throws a DomainError if ID not found', async () => {
        try {
          await taskService.update('1', tasksMock.creatingATask as TasksTypes);
        } catch (e) {          
          expect(e instanceof DomainError).to.be.true;
          expect(e instanceof Error).to.be.true;
        }
      });
    });

    describe('ok case', () => {
      test('if returns an object containing a updated task', async () => {
        const updatedTask = await taskService.update('1', tasksMock.creatingATask as TasksTypes);

        expect(updatedTask).to.be.a('object');
        expect(updatedTask).to.contain.all.keys('id', 'status', 'title', 'details', 'color');
      });
    });
  });

  describe('delete', () => {
    describe('error case', () => {
      test('', () => {});
    });

    describe('ok case', () => {
      test('', () => {});
    });
  });

  describe('read', () => {
    describe('error case', () => {
      test('', () => {});
    });

    describe('ok case', () => {
      test('', () => {});
    });
  });
});
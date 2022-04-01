
import { TaskStorageService } from './task-storage.service';

test('Task-storage Revification',()=>{
  expect(1).toBeTruthy()
})



  test('Init test',()=>{

    const storage= new TaskStorageService();
    storage.init();
    expect(storage.initialized).toBe(true),
    expect(storage.tasks).toEqual([{id: '1', title: 'Tache1', description: 'Description1'},{id: '2', title: 'Tache2', description: 'Description2'},{id: '3', title: 'Tache3', description: 'Description3'},{id: '4', title: 'Tache4', description: 'Description4'}])
  })


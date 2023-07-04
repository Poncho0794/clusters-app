import fs from 'fs'
import path from 'path'
import {v4 as uuidv4} from 'uuid';

class DatabaseService {
  storage: any[]
  storagePath: string
  entity: string

  constructor(entity: string) {
    this.entity = entity
    this.storagePath = path.join(process.cwd(), `storage/${this.entity}.json`)
    
    this.storage =  JSON.parse(fs.readFileSync(this.storagePath, 'utf8'));
  }

  refreshStorage() {
    this.storagePath = path.join(process.cwd(), `storage/${this.entity}.json`)
    this.storage =  JSON.parse(fs.readFileSync(this.storagePath, 'utf8'));
  }
  saveItem(item: any) {
    try {
      item.id = uuidv4()
      this.storage.push(item)
      fs.writeFileSync(this.storagePath, JSON.stringify(this.storage))
      this.refreshStorage()
    } catch (err) {
      console.error(err);
      return {}
    }
    return item
  }
  listItems() {
    return this.storage
  }
  findById(id: string) {
    return this.storage.find(item => item.id === id)
  }
}

export default DatabaseService

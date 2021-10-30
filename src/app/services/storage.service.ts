/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public async get(key: string) {
    return await this._storage?.get(key);
  }

  public async delete(key: string) {
    return await this._storage?.remove;
  }

  public async getAll() {
    const list: any[] = [];

    this.storage.forEach((value, key, index) => {
      list.push(value);
    });

    return list;
  }
}

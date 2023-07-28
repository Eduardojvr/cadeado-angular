import { Injectable } from '@angular/core';

export interface StorageChange {
  name: string;
  value: any;
  storageArea: "localStorage" | "sessionStorage";
}

export interface StorageGetItem {
  name: string;
  storageArea: "localStorage" | "sessionStorage";
}
@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage || window.sessionStorage;
  }

  set(item: StorageChange): boolean {
    if (this.storage) {
      window[item.storageArea].setItem(item.name, JSON.stringify(item.value));
      return true;
    }
    return false;
  }

  get(item: StorageGetItem): any {
    if (this.storage) {
      let a = window[item.storageArea].getItem(item.name);
      return JSON.parse(a || "");
    }
    return null;
  }

  remove(item: StorageGetItem): boolean {
    if (this.storage) {
      window[item.storageArea].removeItem(item.name);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      window.localStorage.clear();
      window.sessionStorage.clear();
      return true;
    }
    return false;
  }
}

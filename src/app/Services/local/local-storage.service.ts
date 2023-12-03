import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  saveDataToLocal(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getDataLocal(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  removeDataLocal(key: string): void {
    localStorage.removeItem(key);
  }

}

export class LocalStorage {
    static isHave(key){
        const item = localStorage.getItem(key);
        return item !== null ? JSON.parse(item) : [];
    }
}

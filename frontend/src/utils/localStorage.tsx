interface LocalStorageStaticInterface {
    get(key: string): any 
    set(key: string, value: any): void
    delete(key: string): void
}

const LocalStorage: LocalStorageStaticInterface = class {
    static get(key: string): any {
        return JSON.parse(localStorage.getItem(key) as any)
    }

    static set(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value))
    }

    static delete(key: string): void {
        localStorage.removeItem(key)
    }
}

export default LocalStorage
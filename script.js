// 다형성(polymorphism) : 다른 모양의 코드를 가질 수 있게 해주는 것
// 다형성을 이룰 수 있는 방법은 제네릭을 사용하는 것
// 제네릭은 placeholder 타입을 쓸 수 있도록 해준다
// 때가 되면 타입스크립트가 placeholder타입을 concreate타입으로 바꿔준다

// interface SStorage<Generic> {
//     [key: string]: Generic
// }

// class LocalStorage<Generic> {
//     private storage: SStorage<Generic> = {}
//     set(key: string, value: Generic) {
//         this.storage[key] = value;
//     }
//     remove(key: string) {
//         return this.storage[key]
//     }
//     get(key: string): Generic {
//         return this.storage[key]
//     }
//     clear() {
//         this.storage = {}
//     }
// }

// const stringsStorage = new LocalStorage<string>()

// stringsStorage.get("key")
// stringsStorage.set("hello", "how are you")

// const booleansStorage = new LocalStorage<boolean>()

// booleansStorage.get("xxx")
// booleansStorage.set("hello", true)

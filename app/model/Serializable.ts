export class Serializable {
    valueOf(json:any){
        for (var propName in json) {
            this[propName] = json[propName]
        }
    }
}

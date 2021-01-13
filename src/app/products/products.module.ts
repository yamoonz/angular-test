export class Products{
    public name: string;
    public description: string;
    public imagePath: string;
    public lastUpdated: string;
    public tags:string;

    constructor (name: string, desc:string, imagePath: string, lastUpdated:string, tags:string){
        this.name= name;
        this.lastUpdated= lastUpdated;
        this.description= desc;
        this.imagePath=imagePath;
        this.tags=tags;
    }
}
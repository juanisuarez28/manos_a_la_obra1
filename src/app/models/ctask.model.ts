export class Task{
    private title: string;
    private done: true | false;

    constructor(title: string, done: true | false){
        this.title=title;
        this.done=done;
    }

    getTitle(): string{
        return this.title;
    }

    setTitle(title:string){
        this.title=title;
    }

    getState(): boolean{
        return this.done;
    }
}
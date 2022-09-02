import { Observable } from "rxjs";

export interface Componentcanactivate {
    get:() => boolean | Observable<boolean>
}

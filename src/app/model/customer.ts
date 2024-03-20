
export class customer{
  firstName:string;
  lastName:string;
  city:string;
  constructor(firstName:string,lastName:string,city:string){
this.firstName=firstName;
this.lastName=lastName;
this.city=city;
  }
 public toStringCustomer(){
    return this.firstName+" "+this.lastName+" "+this.city
  }
}

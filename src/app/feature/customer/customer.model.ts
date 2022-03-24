
/** Customer Model */
export class Customer {
    public id: number;
    public name: string;
    public age: string;
    public email:string;
    public gender: string;
    public category: string;
    constructor(
      id: number,
      name: string,
      age: string,
      email:string,
      gender: string,
      category:string
    ) {
      this.id = id;
      this.name = name;
      this.age = age;
      this.email = email;
      this.gender = gender;
      this.category = category;
    }
  }
  
  /** User Form Model */
  export class CustomerForm {
    public name: string;
    public age: string;
    public email:string;
    public gender: string;
    public category: string;
    constructor(
      name: string,
      age: string,
      email:string,
      gender: string,
      category: string
    ) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.gender = gender;
      this.category = category;
    }
  }
  
  export class Category{
    public id:number;
    public name:string;
    constructor(
      id:number,
      name:string
    ){
      this.id = id
      this.name = name
    }
  }

  export interface filterdata{
    searchname:string,
    email:string,
    age:number
  }
  /** User Edit Details Model */
  // export class UserEditDetails {
  //   public userForm: UserForm;
  //   public id: number;
  //   constructor(
  //     userForm: UserForm,
  //     id: number
  //   ) {
  //     this.userForm = userForm;
  //     this.id = id;
  //   }
  // }
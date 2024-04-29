export interface IContact  {
  id ? : string;
  name : string;
  email : string;
  photo : string;
  mobile : string;
  company : string;
  title : string;
  groupId : string;
}

let contacts: IContact = {
  id :'',
  name: '', email: '',
  photo: '',
  mobile: "",
  company: "",
  title: "",
  groupId: ""
};
console.log(contacts.id);
console.log(contacts.name);
console.log(contacts.email);
console.log(contacts.photo);
console.log(contacts.mobile);
console.log(contacts.company);
console.log(contacts.title);
console.log(contacts.groupId);


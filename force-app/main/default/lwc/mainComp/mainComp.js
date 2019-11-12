/* eslint-disable no-alert */
/* eslint-disable no-console */
// helloWorld.js
import { LightningElement, track, api } from 'lwc';


export default class mainComp extends LightningElement {
    @track firstName = '';
    @track lastName = '';
    @track areDetailsVisible = true;
    @track tcontact = [];
    fruits = ['apple', 'banana','grapes'];
    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];

    handleChange(event) {
        const field = event.target.name;
        //const fieldlabel = event.target.label;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }else if (field === 'checkbox') {
            this.areDetailsVisible = event.target.checked;
            console.log('tick checkbox');
        }
    }
    @api
    get uppercasedFullName() {
        const mycase = this.firstName + ' ' + this.lastName;  
        return mycase.toUpperCase();
    }
    
    handleClick(){

        for(let i = 0; i < this.contacts.length; i++){
            let vname3 = this.contacts[i].Name;
            alert(vname3);
        }

        //const fruits1 = this.fruits;
        for(let i = 0; i < this.fruits.length; i++){
            let vname = this.fruits[i];
            alert(vname);
        }

        this.tcontact = this.contacts;
        
        
    }
}
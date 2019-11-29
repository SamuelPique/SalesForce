import { LightningElement,wire,track } from 'lwc';
import getAllParisCustomer from '@salesforce/apex/AccountData.getAllParisCustomer';


export default class AccountListMap extends LightningElement {
    @track columnList = [
        {label: 'Id', fieldName: 'Id'},
        {label: 'Name', fieldName: 'Name'},
        {label: 'BillingCity', fieldName: 'BillingCity'},
        {label: 'BillingCountry', fieldName: 'BillingCountry'},
        {label: 'BillingPostalCode', fieldName: 'BillingPostalCode'},
        {label: 'BillingState', fieldName: 'BillingState'},
        {label: 'BillingStreet', fieldName: 'BillingStreet'}
    ];
    @track error;
    @track accountList;
    @wire(getAllParisCustomer)
    wiredAccounts({error, data}){
        if (data){
            this.accountList = data;
            this.error = undefined;          
        }else if(error){           
            this.accountList = undefined;
            this.error = error;
        }
    }
}
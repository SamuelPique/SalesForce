import { LightningElement,wire,track } from 'lwc';
import getAllParisCustomer from '@salesforce/apex/AccountData.getAllParisCustomer';

export default class AccountListMap extends LightningElement {
    @track accounts;
    @wire(getAllParisCustomer)accounts;
}
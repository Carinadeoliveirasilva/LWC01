import { LightningElement, api, wire } from 'lwc';
import getContactAndContract from '@salesforce/apex/ContactAndContractController.getContactAndContract';

export default class ContactAndContract extends LightningElement {
    @api recordId;
    contact = {};
    contract = {};

    //TESTE

    @wire(getContactAndContract, { recordId: '$recordId' })
    wiredGetContactAndContract({ error, data }) {
        if (data) {
            this.ariaColCount;
            this.contact = data.contact;
            this.contract = data.contract;
        } else if (error) {
            console.error(error);
        }
    }
}

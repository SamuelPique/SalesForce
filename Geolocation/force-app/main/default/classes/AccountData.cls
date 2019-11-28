public with sharing class AccountData {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllParisCustomer() {
        return [select Id, Name, BillingCity, BillingCountry, BillingPostalCode, BillingState, BillingStreet from Account 
        where RecordTypeId ='0122o000000cjkWAAQ' and BillingPostalCode like '75%'];
    }
}
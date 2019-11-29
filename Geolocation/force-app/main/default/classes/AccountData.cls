public with sharing class AccountData {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllParisCustomer() {
        List<Account> lstAccounts =new List<Account>();
        lstAccounts = [select Id, Name, BillingCity, BillingCountry, BillingPostalCode, BillingState, BillingStreet from Account 
        where RecordTypeId ='0122o000000cjkWAAQ' and BillingPostalCode like '75%'];
        system.debug('AccountData / getAllParisCustomer() / Liste des comptes retournés par la requête SQL  = ' + lstAccounts);        
        return lstAccounts;
    }
}
import LocalizedStrings from 'react-localization';

let localeString = new LocalizedStrings({
    en:{
        manage:"Manage Campaign",
        live:"Live Campaign ",
        upcoming:"Upcoming Campaign",
        past: "Past Campaign",
        date: 'Date',
        view: 'View',
        actions: 'Actions',
        campaign: 'Campaign',
        viewPricing: 'View Pricing',
        report: 'Report',
        schedule: 'Schedule Campaign',
        monthlyText:'1 Week-1 Month',
        halfYearlyText:'6 Months',
        yearlyText: '1 Year',
        close:'Close',
        pricing: 'Pricing',
        noData:'No Campaign Exist'
        
    },
    ge: {
        manage:"Kampagne verwalten",
        live:"Live-Kampagne",
        upcoming:"bevorstehende Kampagne",
        past: "vergangene Kampagne",
        date: 'Datum',
        view: 'Aussicht',
        actions: 'Aktionen',
        campaign: 'Kampagne',
        viewPricing: 'Preise anzeigen',
        report: 'Bericht',
        schedule: 'Kampagne planen',
        monthlyText:'1 Woche - 1 Monat',
        halfYearlyText:'6 Monate',
        yearlyText:'1 Jahr',
        close: 'schließen',
        pricing: 'Preisgestaltung',
        noData:'Es existiert keine Kampagne'
    }
});
export { localeString };


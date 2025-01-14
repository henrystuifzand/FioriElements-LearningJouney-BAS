sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'nl/hs/fetravels/managetravels/test/integration/FirstJourney',
		'nl/hs/fetravels/managetravels/test/integration/pages/TravelList',
		'nl/hs/fetravels/managetravels/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('nl/hs/fetravels/managetravels') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage
                }
            },
            opaJourney.run
        );
    }
);
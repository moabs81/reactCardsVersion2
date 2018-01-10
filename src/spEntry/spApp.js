import React from 'react';
import ReactDOM from 'react-dom';
import fetchData from '../components/locationCard/jsModules/fetchData';
import AllCardsContainer from '../components/locationCard/jsModules/AllCardsContainer';

const spRestParams = {
    baseURI: '<internalURL>',
    searchURI: '/_api/web/lists/getbytitle(\'Branch Directory\')/items',
    method: 'GET',
    headers: [{ 'header': 'Accept', 'value': 'application/json' }, { 'header': 'odata', 'value': 'verbose' }]
};

fetchData.call(spRestParams, function (result) {
    const arrBranches = [];
    {
        let tempArr;
        const returnObj = JSON.parse(result.target.responseText);
        Object.keys(returnObj).forEach(el => {
            el == 'value' ? tempArr = returnObj[el] : null;
        });
        tempArr.forEach((el, ind) => {
            const location = {
                id: String(el.BranchNumber),
                district: String(el.District),
                name: el.Title,
                primaryPhone: el.PrimaryNumber,
                manager: 'Derek F',
                region: '#eaac55'
            };
            arrBranches.push(location);
        });
    }
    ReactDOM.render(
        <AllCardsContainer cardData={arrBranches} />, document.getElementById('appContainer')
    );
});
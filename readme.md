# Run node.js
- run the following command in the terminal `node` and press enter

# Run node.js on file 
- run the following command in the terminal `node <FILE_NAME>` enter
- check the output


# Create module
- open folder
- run `npm init`
- answer the questions
- press Enter


# Create API:
- run `npm install express`
- run index.js file



# HomeWork
- declare entry point to the following path: `/users`
- the entry point will return to the client all the user names in the class in Array.


# Nodemon 
- run `npm install -g nodemon`
- config in your script `nodemon FILE.js`
- run the script command


# Api - GET /all-users
- create api that return all the users

# Api - GET /create-user
- create api that create userName, by adding to Array
- example from client `http://localhost:5000/create-user?userName=HAIM`
- create new userName in the Array with the name Haim.









```javascript
{"results":[{"gender":"male","name":{"title":"Mr","first":"Axel","last":"Francois"},"location":{"street":{"number":7523,"name":"Rue Bataille"},"city":"Courbevoie","state":"Hautes-Alpes","country":"France","postcode":23415,"coordinates":{"latitude":"3.5724","longitude":"-106.2328"},"timezone":{"offset":"-7:00","description":"Mountain Time (US & Canada)"}},"email":"axel.francois@example.com","login":{"uuid":"152c6472-64ea-4841-82ff-3b9526ba2fc7","username":"yellowwolf291","password":"brown","salt":"zt5OGqec","md5":"5e0c81ccd8e4fdff6f0dbee42dd1fc4d","sha1":"3c264c0f6d05050daf9e56ccda853e5d80cffb0b","sha256":"30368346a7679370a93282b967c6e946640eb6fc9ac9fd34b05c72954aae2c15"},"dob":{"date":"1982-09-26T14:13:53.597Z","age":39},"registered":{"date":"2012-07-27T16:53:15.857Z","age":9},"phone":"01-47-61-97-47","cell":"06-38-59-86-58","id":{"name":"INSEE","value":"1NNaN68529973 22"},"picture":{"large":"https://randomuser.me/api/portraits/men/33.jpg","medium":"https://randomuser.me/api/portraits/med/men/33.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/33.jpg"},"nat":"FR"},{"gender":"male","name":{"title":"Monsieur","first":"Toni","last":"Dumont"},"location":{"street":{"number":8856,"name":"Rue Abel-Gance"},"city":"Wolhusen","state":"Ticino","country":"Switzerland","postcode":4420,"coordinates":{"latitude":"41.1632","longitude":"-56.7661"},"timezone":{"offset":"-9:00","description":"Alaska"}},"email":"toni.dumont@example.com","login":{"uuid":"e9eda9eb-d84f-4fc6-b533-e31e5fcc87e1","username":"angrygorilla459","password":"poison","salt":"HE3epe39","md5":"07379e0dc73139c12df9efb59eb94a38","sha1":"64ab9126439f709aae734c78d219e7d3f3329df6","sha256":"326178a647bdd6635056274ccf7fe2c403ef2031aae1f02ce7eb9aa9ae65f321"},"dob":{"date":"1949-05-01T21:51:01.356Z","age":72},"registered":{"date":"2005-10-02T22:47:02.424Z","age":16},"phone":"075 361 52 02","cell":"079 824 17 12","id":{"name":"AVS","value":"756.8389.0075.28"},"picture":{"large":"https://randomuser.me/api/portraits/men/4.jpg","medium":"https://randomuser.me/api/portraits/med/men/4.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/4.jpg"},"nat":"CH"},{"gender":"female","name":{"title":"Ms","first":"Kriemhild","last":"Haug"},"location":{"street":{"number":2792,"name":"Rosenweg"},"city":"Eisenach","state":"Sachsen","country":"Germany","postcode":74980,"coordinates":{"latitude":"-45.5605","longitude":"-154.4756"},"timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},"email":"kriemhild.haug@example.com","login":{"uuid":"efb06613-0616-4a29-b13d-c471b23c6df0","username":"lazyrabbit628","password":"windows1","salt":"a0994NPL","md5":"b63b41be13d7abbd1dd7f016844da9b5","sha1":"29226ff7ba931a3a7a27dcfb589c3cdcd625e496","sha256":"eb46d96ece28d7b2866270de5986739f6078d67afd601c885dfb98cf07c588aa"},"dob":{"date":"1983-07-01T18:38:11.236Z","age":38},"registered":{"date":"2002-11-03T05:15:24.793Z","age":19},"phone":"0485-9749215","cell":"0179-8670699","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/82.jpg","medium":"https://randomuser.me/api/portraits/med/women/82.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/82.jpg"},"nat":"DE"},{"gender":"male","name":{"title":"Mr","first":"علی رضا","last":"حیدری"},"location":{"street":{"number":5528,"name":"میدان حر"},"city":"زاهدان","state":"لرستان","country":"Iran","postcode":28926,"coordinates":{"latitude":"-85.8125","longitude":"99.9024"},"timezone":{"offset":"0:00","description":"Western Europe Time, London, Lisbon, Casablanca"}},"email":"aalyrd.hydry@example.com","login":{"uuid":"93c4a94d-44d3-4cb0-bffe-aa9f7c9b0d7d","username":"organicgoose812","password":"carlos","salt":"K3W7zG6M","md5":"61dff2b48678c6cb530d05a649753b65","sha1":"b851d8c9d1918cb483fa72a59d53f57cc4e20a63","sha256":"433f2b9ce0a5e266d1c1bb44beb5d4c4ccbf38a5753dd2b697eb6b98d13f7b94"},"dob":{"date":"1959-12-10T02:01:28.617Z","age":62},"registered":{"date":"2015-04-17T23:31:54.427Z","age":6},"phone":"023-78527808","cell":"0909-037-2177","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/81.jpg","medium":"https://randomuser.me/api/portraits/med/men/81.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/81.jpg"},"nat":"IR"},{"gender":"female","name":{"title":"Ms","first":"Deniz","last":"Keçeci"},"location":{"street":{"number":7841,"name":"Doktorlar Cd"},"city":"Eskişehir","state":"Burdur","country":"Turkey","postcode":21447,"coordinates":{"latitude":"2.0908","longitude":"148.9398"},"timezone":{"offset":"+1:00","description":"Brussels, Copenhagen, Madrid, Paris"}},"email":"deniz.kececi@example.com","login":{"uuid":"b6f428fd-9b1b-4eea-9a17-8b7939ecf68e","username":"organicostrich428","password":"andersen","salt":"ykrxZvyV","md5":"e667d7d3ff3140e0c94d4acbad474e58","sha1":"a6b919915bbbbdff7d73ca5d96b4593990deef81","sha256":"1914d9526175d3f1a745558cfa55a0ac81dc6a1648c92a51e480eb8f7cee2ae9"},"dob":{"date":"1983-01-04T12:37:06.439Z","age":38},"registered":{"date":"2004-10-22T15:07:06.396Z","age":17},"phone":"(118)-266-6909","cell":"(942)-246-7797","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/44.jpg","medium":"https://randomuser.me/api/portraits/med/women/44.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/44.jpg"},"nat":"TR"},{"gender":"male","name":{"title":"Mr","first":"Alex","last":"White"},"location":{"street":{"number":3009,"name":"Maraekakaho Road"},"city":"Wellington","state":"Waikato","country":"New Zealand","postcode":48078,"coordinates":{"latitude":"22.8429","longitude":"-107.7608"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"alex.white@example.com","login":{"uuid":"96c4bd35-ce83-4ce0-a1e0-5b31bbe848f7","username":"smallswan103","password":"budweise","salt":"Q8CyFHJZ","md5":"c530852d33ac93c1eadde66fc342774d","sha1":"36fea35908528a1f55bc5fa0ff595ee33461be68","sha256":"c0e1c0f7edf5ecee99adc35864caad0ad130605c7fee0b5f848db00b3019399b"},"dob":{"date":"1978-01-20T06:56:10.789Z","age":43},"registered":{"date":"2009-04-02T11:55:00.570Z","age":12},"phone":"(836)-535-5596","cell":"(899)-726-3231","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/85.jpg","medium":"https://randomuser.me/api/portraits/med/men/85.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/85.jpg"},"nat":"NZ"},{"gender":"female","name":{"title":"Miss","first":"فاطمه","last":"حیدری"},"location":{"street":{"number":8762,"name":"حقانی"},"city":"اراک","state":"آذربایجان شرقی","country":"Iran","postcode":81885,"coordinates":{"latitude":"51.1477","longitude":"-122.6111"},"timezone":{"offset":"-7:00","description":"Mountain Time (US & Canada)"}},"email":"ftmh.hydry@example.com","login":{"uuid":"5226245d-56c1-49a5-b272-2d4a9af0ee64","username":"greenleopard393","password":"pornporn","salt":"fdXLwt3D","md5":"0a279a7f2b268acbf8f373e3b9520433","sha1":"d2ffc2d4b89f51ea8edc1399e21d00b8d89a9526","sha256":"718631adaf75104bc3a223b5603eb5311698fb9096e28f91d0f41f0849ba96fd"},"dob":{"date":"1995-05-06T18:36:06.711Z","age":26},"registered":{"date":"2015-03-13T05:13:22.658Z","age":6},"phone":"075-33170214","cell":"0925-843-1108","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/48.jpg","medium":"https://randomuser.me/api/portraits/med/women/48.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/48.jpg"},"nat":"IR"},{"gender":"female","name":{"title":"Ms","first":"Jenny","last":"Ellis"},"location":{"street":{"number":756,"name":"Cork Street"},"city":"Ballina","state":"Wexford","country":"Ireland","postcode":13430,"coordinates":{"latitude":"-48.3842","longitude":"-31.0881"},"timezone":{"offset":"-3:00","description":"Brazil, Buenos Aires, Georgetown"}},"email":"jenny.ellis@example.com","login":{"uuid":"abcecd00-dd48-4ed6-af76-889d2dd096dd","username":"purplelion189","password":"isabelle","salt":"3DLOg279","md5":"8aac2ca4f2de0ea677ac315bc7076930","sha1":"163878a59fff0208f2fd27065a457a2f63ffbca9","sha256":"95a6502e659ad00d93227a3b1f451b3ec3814d12edf19cc3b83a0659e413da9e"},"dob":{"date":"1961-10-17T19:21:30.744Z","age":60},"registered":{"date":"2015-11-11T22:20:09.095Z","age":6},"phone":"071-564-2848","cell":"081-760-3715","id":{"name":"PPS","value":"7186584T"},"picture":{"large":"https://randomuser.me/api/portraits/women/63.jpg","medium":"https://randomuser.me/api/portraits/med/women/63.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/63.jpg"},"nat":"IE"},{"gender":"male","name":{"title":"Mr","first":"Anne","last":"Loef"},"location":{"street":{"number":3652,"name":"Eddingtonweg"},"city":"Oudewater","state":"Friesland","country":"Netherlands","postcode":76632,"coordinates":{"latitude":"-31.0426","longitude":"53.2347"},"timezone":{"offset":"+2:00","description":"Kaliningrad, South Africa"}},"email":"anne.loef@example.com","login":{"uuid":"85898ead-fec4-4a54-91be-9253e300c10c","username":"whitegoose259","password":"bacchus","salt":"nnnnHGWa","md5":"fd4a62c719b5de80755ca215f3f388be","sha1":"5a32dcb33d30069543c2165ba77492e150a2de63","sha256":"ae2fa8602e67fef31c1e74984d81bd64a3ce009565735b71b44a0d7d9c8816f1"},"dob":{"date":"1996-04-22T08:18:16.028Z","age":25},"registered":{"date":"2018-04-07T04:28:45.040Z","age":3},"phone":"(193)-284-3623","cell":"(918)-035-4561","id":{"name":"BSN","value":"28044689"},"picture":{"large":"https://randomuser.me/api/portraits/men/22.jpg","medium":"https://randomuser.me/api/portraits/med/men/22.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/22.jpg"},"nat":"NL"},{"gender":"female","name":{"title":"Miss","first":"کیانا","last":"حسینی"},"location":{"street":{"number":7245,"name":"فلسطین"},"city":"آبادان","state":"البرز","country":"Iran","postcode":54247,"coordinates":{"latitude":"20.2431","longitude":"-51.2217"},"timezone":{"offset":"+3:30","description":"Tehran"}},"email":"khyn.hsyny@example.com","login":{"uuid":"5e7b685e-b8b8-4453-8042-739d74220d9e","username":"yellowwolf850","password":"suburban","salt":"JUCrsyGs","md5":"3b961a3a6fdb20f3c43aa0a919a613f1","sha1":"23d9410ae9ba0b92299b1bbfdb4c6f87e9ff7a5d","sha256":"d2fffa35bfd7e316b0b9a2d5dd1a256415c9b4d737277eb28950151cd4d06fd5"},"dob":{"date":"1966-04-05T18:05:00.822Z","age":55},"registered":{"date":"2009-09-12T02:10:53.818Z","age":12},"phone":"019-46584114","cell":"0926-401-9279","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/61.jpg","medium":"https://randomuser.me/api/portraits/med/women/61.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/61.jpg"},"nat":"IR"}],"info":{"seed":"344a53131a986f74","results":10,"page":1,"version":"1.3"}}
```
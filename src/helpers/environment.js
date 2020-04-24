let APIURL = '';

switch (window.location.hostname) {
    //this is the local host name of your react app
    case 'localhost' || '127.0.0.1':
        // this is the loacl host name of your API
        APIURL = 'http://localhost:4000';
        break;
    case 'td-client-zebookreviewapp2020.herokuapp.com':
        APIURL = 'https://td-zebookreviewapp2020.herokuapp.com';
        break;
    default: APIURL = 'http://localhost:4000';
}

export default APIURL;
const KEY_YANDEX_TRANSLATE = 'trnsl.1.1.20200512T191017Z.0476b0a47c5c6c7b.530ace25a4452b39cc378cdf96bf657078e1e84f';

let str_new = 'Hello World!';

fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key='+KEY_YANDEX_TRANSLATE+'&text='+str_new+'&lang=en-be')
.then(
    response =>{
        console.log(response.json());
        response.json()
        .then(
            data =>{
                console.log(data.text[0]);
            }
            );
        }
)
.catch(
    () => {
        console.log('Text error!!!!');
    }
);
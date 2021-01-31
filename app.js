const express = require('express');
const path = require('path');
let WordExtractor = require("word-extractor");
let extractor = new WordExtractor();
const fs = require('fs');
const config = require('./config');
const app = express();
app.use('/public', express.static('public'));
app.use(
    '/javascripts',
    express.static(path.join(__dirname, 'node_modules', 'jquery'))
);
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    let p = req.path;
    let constants_4 = require('./libs/attach/Constant').constants_4;
    try {
        return res.render('index', Object.assign({}, constants_4, {
            path: p
        }));
    }catch(e){
        next(e);
    }
});
app.get('/index', (req, res, next) => {
    let p = req.path;
    let constants_4 = require('./libs/attach/Constant').constants_4;
    try {
        return res.render('index', Object.assign({}, constants_4, {
            path: p
        }));
    }catch(e){
        next(e);
    }
});

app.get('/novels', (req, res, next) => {
    let p = req.path;
    let constants_3 = require('./libs/attach/Constant').constants_3;
    try {
        return res.render('novels', Object.assign({}, constants_3, {
            path: p
        }));
    }catch(e){
        next(e);
    }
});
app.get('/stories', (req, res, next) => {
    let p = req.path;
    let constants_3 = require('./libs/attach/Constant').constants_3;
    try {
        return res.render('stories', Object.assign({}, constants_3, {
            path: p
        }));
    }catch(e){
        next(e);
    }
});
app.get('/poems', (req, res, next) => {
    let p = req.path;
    let constants_2 = require('./libs/attach/Constant').constants_2;
    try {
        return res.render('poems', Object.assign({}, constants_2, {
            path: p
        }));
    }catch(e){
        next(e);
    }
});
app.get('/song_text', (req, res, next) => {
    let p = req.path;
    let constants_2 = require('./libs/attach/Constant').constants_2;
    try {
        return res.render('song_text', Object.assign({}, constants_2, {
            path: p
        }));
    }catch(e){
        next(e);
    }
});
app.get('/song_videos', (req, res, next) => {
    let p = req.path;
    let constants_2 = require('./libs/attach/Constant').constants_2;
    try {
        return res.render('song_videos', Object.assign({}, constants_2, {
            path: p
        }));
    }catch(e){
        next(e);
    }
});

app.get('/stories/:storyId', async (req, res, next) => {
    let arr = {};
    switch(req.params.storyId){
        case 'stories':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/stories/stories',
                docDirName: `docs/stories`,
                bookRender: 'stories/stories',
                title: 'Рассказы и зарисовки'
            };
            break;
    }

    renderBook(req, res, next, arr);
});

app.get('/books/:bookId', async (req, res, next) => {
    let arr = {};
    switch(req.params.bookId){
        case 'lovuska-dlya-tvortsa':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/books/lovuska-dlya-tvortsa',
                docDirName: `docs/book_1`,
                bookRender: 'books/book_1',
                title: 'Ловушка для творца'
            };
            break;
        case 'bluzhdayushie-labirinty-ginnungagapa':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/books/bluzhdayushie-labirinty-ginnungagapa',
                docDirName: `docs/book_2`,
                bookRender: 'books/book_2',
                title: 'Блуждающие лабиринты Гиннунгагапа'
            };
            break;
        case 'zvezda-i-smert-shhlemmh-ainna':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/books/zvezda-i-smert-shhlemmh-ainna',
                docDirName: `docs/book_3`,
                bookRender: 'books/book_3',
                title: 'Звезда и Смерть Шшлемхх Аинна'
            };
            break;
        case 'proklyatie-pervogo-desmoda':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/books/proklyatie-pervogo-desmoda',
                docDirName: `docs/book_4`,
                bookRender: 'books/book_4',
                title: 'Проклятие Первого Десмода'
            };
            break;
        case 'vozvrashenie-materi-drakonov':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/books/vozvrashenie-materi-drakonov',
                docDirName: `docs/book_5`,
                bookRender: 'books/book_5',
                title: 'Возвращение Матери драконов'
            };
            break;
        case 'padenie-desmod-holla':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/books/padenie-desmod-holla',
                docDirName: `docs/book_6`,
                bookRender: 'books/book_6',
                title: 'Падение Десмод Холла'
            };
            break;
        case 'nik-botanik':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/books/nik-botanik',
                docDirName: `docs/book_7`,
                bookRender: 'books/book_7',
                title: 'Ник "Бот@аник"'
            };
            break;

    }

    renderBook(req, res, next, arr);
});
app.get('/songs/:songId', async (req, res, next) => {
    let arr = {};
    switch(req.params.songId){
        case 'about_love':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/songs/about_love',
                docDirName: `docs/songs_love`,
                bookRender: 'songs/about_love',
                title: 'Песни о любви и жизни'
            };
            break;
        case 'about_live':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/songs/about_live',
                docDirName: `docs/songs_life`,
                bookRender: 'songs/about_live',
                title: 'Песни о жизни и любви'
            };
            break;
    }

    renderOther(req, res, next, arr);
});
app.get('/poems/:poemId', async (req, res, next) => {
    let arr = {};
    switch(req.params.poemId){
        case 'about_live':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/poems/about_live',
                docDirName: `docs/poems_live`,
                bookRender: 'poems/about_live',
                title: 'Стихи о любви и жизни'
            };
            break;
        case 'about_fatum':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/poems/about_fatum',
                docDirName: `docs/poems_fatum`,
                bookRender: 'poems/about_fatum',
                title: 'Стихи о судьбе и предопределенности'
            };
            break;
        case 'about_mystic':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/poems/about_mystic',
                docDirName: `docs/poems_mystic`,
                bookRender: 'poems/about_mystic',
                title: 'Стихи о мистике'
            };
            break;
        case 'about_poet':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/poems/about_poet',
                docDirName: `docs/poems_poet`,
                bookRender: 'poems/about_poet',
                title: 'Стихи о предназначении поэта'
            };
            break;
        case 'about_soul':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/poems/about_soul',
                docDirName: `docs/poems_soul`,
                bookRender: 'poems/about_soul',
                title: 'Стихи о душе'
            };
            break;
        case 'about_arrhythmia':
            arr = {
                constant: require('./libs/attach/Constant').constants_1,
                viewPath: '/poems/about_arrhythmia',
                docDirName: `docs/poems_arrhythmia`,
                bookRender: 'poems/about_arrhythmia',
                title: 'Стихи о жизни в стиле "аритмия"'
            };
            break;
    }

    renderOther(req, res, next, arr);
});

async function renderBook(req, res, next, arr){
    let p = req.path;

    let constants = arr.constant;
    let bookPath = path.resolve(__dirname, arr.docDirName);
    let chapters = [];
    let fileNames = fs.readdirSync(bookPath);
    fileNames.sort(function(a, b){
        let x = +(a.split(' ')[1].split('.')[0]);
        let y = +(b.split(' ')[1].split('.')[0]);
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
    });
    for(let i=0; i<fileNames.length; i++){
        let fileName = fileNames[i];
        let chapterPath = bookPath + "/" + fileName;
        let extracted = extractor.extract(chapterPath);
        //read all content from files
        let doc = await extracted;
        let chapter = {
            path: chapterPath,
            fileName: fileName.substr(0, fileName.length - 4),
            id: "item"+(i+1),
            content: doc.getBody(),
        };
        chapters.push(chapter);
    }
    try{
        return res.render(arr.bookRender, Object.assign({}, constants, {
            path: p,
            title: arr.title,
            chapters: chapters,
            pageInit: "<script>Page.init()</script>"
        }));
    }catch(e){
        next(e);
    }
}
async function renderOther(req, res, next, arr){
    let p = req.path;
    let constants = arr.constant;
    let bookPath = path.resolve(__dirname, arr.docDirName);
    let chapters = [];
    let fileNames = fs.readdirSync(bookPath);
    for(let i=0; i<fileNames.length; i++){
        let fileName = fileNames[i];
        let chapterPath = bookPath + "/" + fileName;
        let extracted = extractor.extract(chapterPath);
        //read all content from files
        let doc = await extracted;
        let chapter = {
            path: chapterPath,
            fileName: fileName.substr(0, fileName.length - 4),
            id: "item"+(i+1),
            content: doc.getBody(),
        };
        chapters.push(chapter);
    }
    try{
        return res.render(arr.bookRender, Object.assign({}, constants, {
            path: p,
            title: arr.title,
            chapters: chapters,
            pageInit: "<script>Page.init()</script>"
        }));
    }catch(e){
        next(e);
    }
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: !config.IS_PRODUCTION ? error : {}
    });
});
app.listen(8080, () =>
    console.log(`Example app listening on port ${config.PORT}!`)
);

module.exports = app;

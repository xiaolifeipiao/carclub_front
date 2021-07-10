// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = () => {
    let data = {
        user:[],
        stars: [],
        news: []
    };
    //user
    for (let i = 0; i < 10; i++){
        data.user.push({
            id: Random.id(),
            isLogin: Random.boolean(),
            name: Random.name(),
            password:Random.id()
        })
    }
    const starImages = [1, 2, 3].map(img => Random.image('120x60', Random.color(),Random.word(2,6)));
    for(let i = 0; i < 50; i++) {
        const contents = Random.cparagraph(0,10);
        data.stars.push({
            id: i,
            name: Random.cname(),
            desc: contents.substr(0,50),
            tag: Random.cword(2,8),
            views: Random.integer(100, 5000),
            images: starImages.slice(0, Random.integer(1,3))
        })
    }
    const newsImages = [1, 2, 3].map(img => Random.image('120x60', Random.color(),Random.word(2,6)));
    for(let i = 0; i < 100; i++) {
        const contents = Random.cparagraph(0,10);
        data.news.push({
            id: i,
            title: Random.cword(8,20),
            desc: contents.substr(0,50),
            tag: Random.cword(2,8),
            views: Random.integer(100, 5000),
            images: newsImages.slice(0, Random.integer(1,3))
        })
    }
    return data;
}
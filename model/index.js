const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/readworld');
let db = mongoose.connection;

// 失败的时候
db.on('error', err => {
  console.log('MongoDB数据库连接失败', err);
  console.log('失败');
});

// 连接成功
db.once('open', function() {
  console.log('数据库连接成功！');
});


// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

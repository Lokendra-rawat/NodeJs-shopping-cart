module.exports = function(err, data) {
  if (err) throw err;
  var $ = cheerio.load(data);
  $(".store_b").each(function(i, element) {
    element.children.forEach(function(element) {
      if (element.type === 'tag') {
        let name = element.children[0].data.replace('\n', "").trim();
        var saveStore = new store({
          storeName: name
        });
        saveStore.save(function(err, data) {
          if (err) throw err;
          else console.log(name + ' added');
        });
      }
    });
  });
};
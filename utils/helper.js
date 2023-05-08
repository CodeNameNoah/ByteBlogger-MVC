const formatDate = date => {
    const d = new Date(date);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };
  
  const formatUrl = url => {
    const withoutHttp = url.replace(/^https?:\/\//, '');
    const withoutWww = withoutHttp.replace(/^www\./, '');
    const domain = withoutWww.split('/')[0].split('?')[0];
    return domain;
  };
  
  const formatPlural = (word, amount) => {
    return amount !== 1 ? `${word}s` : word;
  };
  
  module.exports = {
    formatDate,
    formatUrl,
    formatPlural
  };
  
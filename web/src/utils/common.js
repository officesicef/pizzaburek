const getFormattedTime = (seconds) => {
  const date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
};

const getRandomColor = () => {
  const color = [];
  const colorLength = 6;
  const hex = '0123456789ABCDEF';
  const hexLength = hex.length;
  for (let i = 0; i < colorLength; i += 1) {
    color.push(hex.charAt(Math.floor(Math.random() * hexLength)));
  }
  return `#${color.join('')}`;
};

const exportJson = (data) => {
  const filename = 'non-compliant-detections.json';
  const contentType = 'application/json;charset=utf-8;';
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    const blob = new Blob(
      [decodeURIComponent(encodeURI(JSON.stringify(data)))],
      { type: contentType }
    );
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    const a = document.createElement('a');
    a.download = filename;
    a.href = `data:${contentType},${encodeURIComponent(JSON.stringify(data))}`;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

export default { getFormattedTime, getRandomColor, exportJson };

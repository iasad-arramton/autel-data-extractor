
function changeBucketUrl(data) {
    if (typeof data == 'string' && data.includes('https://arramton-s3-bucket.s3.ap-south-1.amazonaws.com/')) {
        return data.replace('https://arramton-s3-bucket.s3.ap-south-1.amazonaws.com/', 'https://cache.arramton.com/');
    } else if (data && Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            data[i] = changeBucketUrl(data[i]);
        }
    } else if (data && typeof data == 'object') {
        for (const [key, value] of Object.entries(data)) {
            data[key] = changeBucketUrl(value);
        }
    }
    return data;
}

function extractPartNumberInfo(text, searchTerm, searchTerm2) {
    const lowerText = text.toLowerCase();
    let index = lowerText.indexOf(searchTerm);
    if(index === -1){
        index = lowerText.indexOf(searchTerm2);
    }
    // Extract everything after "part number" if found
    const partNumberText = index !== -1 ? text.slice(index + searchTerm.length).trim() : text;

    // Regex to extract alphanumeric strings
    const alphanumericMatch = partNumberText.match(/\b(?=\w*\d)(?=\w*[A-Za-z])[A-Za-z0-9]+\b/g);
    return alphanumericMatch ? alphanumericMatch.join(',') : null; // Return alphanumeric part
};
module.exports = {extractPartNumberInfo, changeBucketUrl}

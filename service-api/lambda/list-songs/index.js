const AWS = require('aws-sdk');
const S3 = new AWS.S3({apiVersion: '2006-03-01'});

const promisifyListObjects = (options) => {
    return new Promise((resolve, reject) => {
        S3.listObjectsV2(options, (err, data) => {
            if (err) { reject(err) }
            resolve(data)
        })
    });
}

const isValidSong = (bucketObj) => {
    const isMp3 = bucketObj.Key.endsWith(".mp3");
    //Sanity check the size - 20 second mp3 encoded as alexa sample
    const size = bucketObj.Size > 0 && bucketObj.Size < 200000;
    return isMp3 && size;
}

exports.handler = async (event) => {
    const params = {
        Bucket: 'handwashing-songs',
        Prefix: 'media'
    };
    try {
        const result = await promisifyListObjects(params);
        const filteredSongs = result.Contents.filter(isValidSong);
        const songUrls = filteredSongs.map((bucketObj) => {
            return "https://handwashing-songs.s3.amazonaws.com/" + bucketObj.Key;
        })
        const response = {
            statusCode: 200,
            body: JSON.stringify(songUrls),
        };
        return response;
    } catch (err) {
        return {
            statusCode: 500,
            body: err
        }
    }
};

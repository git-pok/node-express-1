const fs = require('fs');
const axios = require('axios');
const { convert } = require('html-to-text');
const url = require('url');


const argV = process.argv; 
const [ nodePath, scriptPath, readFileName ] = argV;



async function catUrl(url) {
    try {
        resp = await axios.get(url);
    } catch(error) {
        console.log(`Error fetching ${url}! \n${error}`)
        return false;
    }

    const html = resp.data; 
    const text = convert(html);

    return url && resp ? text : false
}



function convertUrlToFileName(url) {
        const fileURL = new URL(url);
        const fileHostName = fileURL.hostname;
        return fileHostName; 
}



function writeFile(filePath, content) {
    fs.writeFile(filePath, content, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error writing to ${filePath}! \n${error}!`);
            process.exit(1);
        } 
        console.log(`File write to: ${filePath}, complete!`);
    });
}



async function readUrlsAndOutputHtmlToFile(arr, writeFile) {
    for (let i = 0; i < arr.length - 1; i++) {
        const url = arr[i];
        const writeTofileName = convertUrlToFileName(url); 
        let respData = await catUrl(url);
        let content;
        content = respData ? respData : 'URL DID NOT RESPOND!!!'
        const filePath = `./${writeTofileName}`;  
        writeFile(filePath, content);
    }
}



async function catFileAndMakeArrayForEachLine(readFileName) {
    try {
        const fileData = fs.readFileSync(readFileName, 'utf8');
        const urls = fileData.split('\n');   
        return urls;
    } catch(e) {
        console.log(`Problem reading file: ${readFileName}!`);
        process.exit(1);
    }
}



async function readFileAndMakeOutputFiles() {
    const urls = await catFileAndMakeArrayForEachLine(readFileName);
    readUrlsAndOutputHtmlToFile(urls, writeFile); 
}



readFileName ? readFileAndMakeOutputFiles() : console.log('Include File to Read From!')
const cheerio = require('cheerio')
const fastcsv = require('fast-csv');
const fs = require("fs");
const path = require("path");
const { extractPartNumberInfo } = require('../utilities/Helper');
module.exports = class ProductService {

    static async saveBulk2(data) {
        const response = { data: {}, status: false };
        try {
            const { data: jsonData } = data;
            const finalList = [];

            // LOOPING OVER DATA TO EXTRACT CSV
            for (const [idx, row] of jsonData.entries()) {
                const obj = {};
                const $ = cheerio.load(row.product_main_description);
                // EXTRACTING PART NUMBER LINE FROM GIVEN HTML CONTENT
                const partNumber = $('p').filter(function () {
                    return $(this).text().toLowerCase().includes('part number') || $(this).text().toLowerCase().includes('part no');
                }).html()

                // CHECKING FOR SUPERSEDED AND NON SUEPRSEDED
                const isNonSuperseded =  $('p').filter(function () {
                    const text = $(this).text().toLowerCase();
                    return text.includes('non superseded');
                }).length > 0;
                const superseded =  $('p').filter(function () {
                    const text = $(this).text().toLowerCase();
                    return text.includes('superseded');
                }).length > 0;

                 // Removing part number <p> tag from html
                 $('p').filter(function () {
                    const text = $(this).text().toLowerCase();
                    return text.includes('part number') || text.includes('part no');
                }).remove();

                // FORMATTING DATA FOR NEW FORMATTED CSV CREATION
                obj['Brand (Manufacturer)'] = row.name;
                obj.row_number = idx + 1;
                obj.product_id = row.product_id;
                obj['Part Number'] = extractPartNumberInfo(`<p>${partNumber}</p>`, 'part number', 'part no');
                // obj.desc = row.product_main_description;
                obj['Extra Info/Notes'] = row.product_main_description !== 'NULL' ?  $.html() : 'NULL'
                obj.superseded = isNonSuperseded ? 'N' : superseded ? 'Y' : 'NULL';
                finalList.push(obj);

            }
            response.data = finalList;

            const csvStream = fastcsv.format({ headers: true });
            const fileName = Date.now() + '' + Math.random() + '.' + 'csv';
            // FILE WILL BE SAVED IN PUBLIC DIR OF THIS FOLDER
            const tempFilePath = path.join(__dirname, '..', '..', 'public', fileName);
            console.log(tempFilePath)
            csvStream.pipe(fs.createWriteStream(tempFilePath));
            // Write data to CSV file
            finalList?.forEach(row => csvStream.write(row));
            csvStream.end();
            response.status = true
            return response;
        } catch (err) {
            console.log(err)
            throw err;
        }
    }


}
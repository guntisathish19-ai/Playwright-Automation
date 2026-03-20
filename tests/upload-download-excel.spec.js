/*const ExcelJs = require('exceljs');
const {test} = require('@playwright/test');

async function writeExcel(searhContent, replaceContent, change, path) {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(path);
    const worksheet = workbook.getWorksheet(1);
    const output = await readExcel(searhContent, worksheet);
    const cell = worksheet.getCell(output.row, output.col+change.changeCol);
    cell.value = replaceContent;
    await workbook.xlsx.writeFile(path);
}

async function readExcel(searhContent, worksheet) {
    let output = { row: -1, col: -1 };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            //console.log(cell.value);
            if (cell.value === searhContent) {
                output.row = rowNumber;
                output.col = colNumber;
            }
        });
    });
    return output;
}
test('upload download excel', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/upload-download-test/");
    const downloadevent = page.waitForEvent('download');
    await page.getByRole('button',{name:'Download'}).click();
    await page.pause();
    await downloadevent;
    await writeExcel("Banana", 1999, {changeRow:0, changeCol:2}, "C:/Users/SATHISH.KUMAR/Downloads/download.xlsx");
    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles("C:/Users/SATHISH.KUMAR/Downloads/download.xlsx");
});
*/
const ExcelJs = require('exceljs');
const { test, expect } = require('@playwright/test');
const { Worker } = require('node:worker_threads');

async function writeExcelTest(searchText, replaceText, change, filePath) {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = readExcel(worksheet, searchText); // not async

    const cell = worksheet.getCell(output.row, output.column + change.colChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);
}

// This does no async work, so don't mark it async.
function readExcel(worksheet, searchText) {
    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                output = { row: rowNumber, column: colNumber };
            }
        });
    });
    return output;
}

//update Mango Price to 350. 
//writeExcelTest("Mango",350,{rowChange:0,colChange:2},"/Users/rahulshetty/downloads/excelTest.xlsx");

test('Upload download excel validation', async ({ page }) => {
    const textSearch = 'Mango';
    const updateValue = '350';

    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');

    const downloadPromise = page.waitForEvent('download');
    await page.click('button[id="downloadButton"]');
    const download = await downloadPromise;
    await download.saveAs(`${'C:/Users/SATHISH.KUMAR/Downloads/'}download.xlsx`); // or await dl.path()
    const filePath = "C:/Users/SATHISH.KUMAR/Downloads/download.xlsx";

    // ✅ Ensure the edit finishes before upload
    writeExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, filePath);

    await page.locator('#fileinput').setInputFiles(filePath);
    await page.waitForLoadState('domcontentloaded');

    const desiredRow = await page.getByRole('row').filter({ has: page.getByText(textSearch) });
    await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue);
 });

 test.only('write cell values', async ()=>
{
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("C:/Users/SATHISH.KUMAR/Downloads/download.xlsx");
    const sheet = workbook.getWorksheet('Sheet1');
    const row = sheet.eachRow((row, rowNumber)=>{
        row.eachCell((cell, colNumber)=>{
            if(cell.value==="Mango")
                console.log(rowNumber+ "," +colNumber);
            //console.log(cell.value)
        });
        
    });
    
});

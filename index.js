const webeditkit = require('webeditkit');
const registerRenderer = require('webeditkit').registerRenderer;
const verticalGroupCell = require('webeditkit').cells.verticalGroupCell;
const horizontalGroupCell = require('webeditkit').cells.horizontalGroupCell;
const editableCell = require('webeditkit').cells.editableCell;
const childCell = require('webeditkit').cells.childCell;
const row = require('webeditkit').cells.row;
const emptyRow = require('webeditkit').cells.emptyRow;
const tabCell = require('webeditkit').cells.tabCell;
const fixedCell = require('webeditkit').cells.fixedCell;
const verticalCollectionCell = require('webeditkit').cells.verticalCollectionCell;

$('document').ready(function(){

    /////////////////////////////////////////////////
    // Specific renderers - start
    /////////////////////////////////////////////////

    registerRenderer("com.strumenta.financialcalc.Input", function(modelNode) {
        if (modelNode == undefined) {
            throw "modelNode should not be undefined in renderer";
        }
        return horizontalGroupCell(
            editableCell(modelNode, "name"),
            fixedCell("of type", ["keyword"], null, function(){
                modelNode.deleteMe();
            }),
            childCell(modelNode, "type"));
    });

    registerRenderer("com.strumenta.financialcalc.StringType", function(modelNode) {
        return fixedCell("string", ["type"], null, function(){
            modelNode.deleteMe();
        });
    });

    registerRenderer("com.strumenta.financialcalc.BooleanType", function(modelNode) {
        return fixedCell("boolean", ["type"], null, function(){
            modelNode.deleteMe();
        });
    });

    registerRenderer("com.strumenta.financialcalc.FinancialCalcSheet", function(modelNode) {
        return verticalGroupCell(
            row(
                fixedCell("Calculations", ["title"]),
                editableCell(modelNode, "name", ["title"])
            ),
            emptyRow(),
            row(
                fixedCell("inputs:", ["strong"])
            ),
            row(
                tabCell(),
                verticalCollectionCell(modelNode, 'inputs'))
        );
    });

    /////////////////////////////////////////////////
    // Specific renderers - end
    /////////////////////////////////////////////////

    webeditkit.setup();
    webeditkit.addModel("localhost:2904", "com.strumenta.financialcalc.sandbox.company", "324292001770075100", "calc");
});
const webeditkit = require('webeditkit');
const Data = require('webeditkit/dist/presentation/cells/data').Data;
const registerRenderer = require('webeditkit').registerRenderer;
const verticalGroupCell = require('webeditkit').verticalGroupCell;
const horizontalGroupCell = require('webeditkit').horizontalGroupCell;
const editableCell = require('webeditkit').editableCell;
const childCell = require('webeditkit').childCell;
const row = require('webeditkit').row;
const emptyRow = require('webeditkit').emptyRow;
const tabCell = require('webeditkit').tabCell;
const fixedCell = require('webeditkit').fixedCell;
const verticalCollectionCell = require('webeditkit').verticalCollectionCell;

$(function(){

    /////////////////////////////////////////////////
    // Specific renderers - start
    /////////////////////////////////////////////////

    registerRenderer("com.strumenta.financialcalc.Input", function(modelNode) {
        if (!modelNode) {
            throw "modelNode should not be undefined in renderer";
        }
        return horizontalGroupCell(
            editableCell(new Data(), modelNode, "name"),
            fixedCell(modelNode, "of type", ["keyword"]),
            childCell(modelNode, "type"));
    });

    registerRenderer("com.strumenta.financialcalc.StringType", function(modelNode) {
        return fixedCell(modelNode, "string", ["type"], null, function(){
            modelNode.deleteMe();
        });
    });

    registerRenderer("com.strumenta.financialcalc.BooleanType", function(modelNode) {
        return fixedCell(modelNode, "boolean", ["type"], null, function(){
            modelNode.deleteMe();
        });
    });

    registerRenderer("com.strumenta.financialcalc.FinancialCalcSheet", function(modelNode) {
        return verticalGroupCell(
            row(
                fixedCell(modelNode, "Calculations", ["title"]),
                editableCell(new Data(), modelNode, "name", ["title"])
            ),
            emptyRow(),
            row(
                fixedCell(modelNode, "inputs:", ["strong"])
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
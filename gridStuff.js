function gridBorders() {
    line(xGraph, 0, xGraph, graphDimy - 20);
    line(xGraph + 810, 0, xGraph + 810, graphDimy - 20);
    line(0, yGraph, graphDimy, yGraph);
    line(0, graphGridThing - 30, graphDimy, graphGridThing - 30);
}

function gridItself() {
    xGraph = 0.6;
    yGraph = 0.6;
    /*while (xGraph <= graphDimx) {
        line(xGraph, 0, xGraph, graphGridThing - 30.5);
        xGraph = xGraph + 30;
    }
    while (yGraph <= graphGridThing - 30) {
        line(0, yGraph, graphDimy, yGraph);
        yGraph = yGraph + 30;
    }*/
}

function gridContentsManage() {
    gridContents[(roundedY * 27) + roundedX] = blockNames[selectionPanelImageOrder];
    console.log(gridContents);
    for (let i = 0; i < gridContents.length; i++) {
        image(imageMap.get(gridContents[i]), ((i+27)%27 *30) + 0.56, (floor(i/27) * 30) + 0.56, 30, 30);
    }
    searchParamsThing.set('bloks', gridContents);
}